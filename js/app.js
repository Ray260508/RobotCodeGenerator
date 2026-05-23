/**
 * FRC Robot Code Generator — Main Application
 */
import appState from './state.js';
import { renderSidebar, applySidebarConfig } from './sidebar.js';
import { initParticles, showToast } from './renderer.js';
import { generateProject } from './codegen.js';
import { GEN_MODE } from './manifest.js';
import { initViewport, zoomToMechanism, resetZoom as resetViewportZoom, updateMechConfigured, setMechVisible, update3DModel } from './viewport3d.js';
import { renderSummary } from './summary.js';

const CONFIG_STORAGE_KEY = 'robotConfig';

document.addEventListener('DOMContentLoaded', () => {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768;
    appState.state.isMobile = isMobile;
    if (isMobile) document.body.classList.add('is-mobile');

    restoreSavedState();
    initParticles();
    bindNavigation();
    bindLandingReveal();
    bindConfigurator();
    bindToggles();
    bindSidebar();
    bindGeneration();
    applyStateToUI(appState.getState());

    appState.subscribe((state) => {
        persistState(state);
        updateProgressBar();
        updateCardStates(state);
        syncViewport(state);
    });
});

function bindLandingReveal() {
    const lp = document.getElementById('landing-page');
    if (lp) {
        lp.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        setTimeout(() => {
            lp.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }, 100);
    }

    document.querySelectorAll('.landing-nav .nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const id = link.getAttribute('href');
            if (!id || id === '#') return;
            const el = document.querySelector(id);
            if (!el || !lp) return;
            e.preventDefault();
            const targetY = Math.max(
                0,
                el.getBoundingClientRect().top - lp.getBoundingClientRect().top + lp.scrollTop - 60
            );
            lp.scrollTo({ top: targetY, left: 0, behavior: 'smooth' });
        });
    });
}

function bindNavigation() {
    document.getElementById('nav-sysid')?.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('sysid');
        loadSysIdPage();
    });
    document.getElementById('sysid-back')?.addEventListener('click', () => showPage('landing'));

    document.getElementById('btn-start')?.addEventListener('click', () => {
        showPage('configurator');
        setTimeout(() => {
            const container = document.getElementById('viewport-3d-container');
            if (container) initViewport(container);
        }, 100);
    });
    document.getElementById('btn-back')?.addEventListener('click', () => showPage('landing'));
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`${page}-page`)?.classList.add('active');
    appState.setPage(page);
    if (page === 'landing') {
        const lp = document.getElementById('landing-page');
        if (lp) lp.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
}

function bindConfigurator() {
    document.querySelectorAll('.mechanism-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.card-toggle')) return;
            const type = card.dataset.type;
            if (!type) return;
            if (type !== 'chassis') {
                const s = appState.getState();
                const isEnabled = type === 'vision' ? s.vision.enabled
                    : type === 'statemachine' ? s.statemachine.enabled
                    : s.mechanisms[type]?.enabled;
                if (!isEnabled) {
                    showToast('Enable this mechanism first', 'info');
                    return;
                }
            }
            selectMechanism(type);
        });
    });
    document.getElementById('btn-reset')?.addEventListener('click', () => {
        appState.resetAll();
        closeSidebar();
        document.querySelectorAll('.mech-toggle').forEach(t => { t.checked = false; });
        document.querySelectorAll('.mechanism-card').forEach(c => c.classList.remove('enabled', 'configured'));
        ['elevator', 'shooter', 'intake', 'roller', 'launcher', 'arm', 'vision'].forEach(m => setMechVisible(m, false));
        showToast('Configuration reset', 'info');
    });
}

function bindToggles() {
    document.querySelectorAll('.mech-toggle').forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            e.stopPropagation();
            const mech = toggle.dataset.mech;
            const enabled = toggle.checked;
            const card = toggle.closest('.mechanism-card');

            if (enabled) {
                card.classList.add('enabled');
                card.querySelector('.card-desc').textContent = 'Click to configure';
            } else {
                card.classList.remove('enabled', 'configured');
                card.querySelector('.card-desc').textContent = 'Disabled';
                if (appState.getState().selectedMechanism === mech) closeSidebar();
            }

            if (mech === 'vision') appState.updateVision({ enabled });
            else if (mech === 'statemachine') appState.updateStateMachine({ enabled });
            else if (appState.getState().mechanisms[mech]) appState.updateMechanism(mech, { enabled });

            setMechVisible(mech, enabled);
        });
    });
}

function selectMechanism(type) {
    document.querySelectorAll('.mechanism-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.mechanism-card[data-type="${type}"]`)?.classList.add('selected');
    appState.selectMechanism(type);
    renderSidebar(type);
    document.getElementById('detail-sidebar')?.classList.add('open');
    zoomToMechanism(type);
}

function closeSidebar() {
    document.getElementById('detail-sidebar')?.classList.remove('open');
    document.querySelectorAll('.mechanism-card').forEach(c => c.classList.remove('selected'));
    appState.closeSidebar();
    resetViewportZoom();
}

function bindSidebar() {
    document.getElementById('sidebar-close')?.addEventListener('click', closeSidebar);
    document.getElementById('btn-apply')?.addEventListener('click', () => {
        const type = appState.getState().selectedMechanism;
        if (!type) return;
        applySidebarConfig(type);
        const state = appState.getState();
        update3DModel(type, state);
        let ok = false;
        if (type === 'chassis') ok = state.chassis.configured;
        else if (type === 'vision') ok = state.vision.configured;
        else if (type === 'statemachine') ok = state.statemachine.configured;
        else ok = state.mechanisms[type]?.configured;

        const card = document.querySelector(`[data-type="${type}"]`);
        if (card) {
            if (ok) { card.classList.add('configured'); showToast(`${type} configured!`, 'success'); }
            else { card.classList.remove('configured'); showToast('Fill required fields', 'error'); }
        }
        updateDescriptions(state);
    });
}

function bindGeneration() {
    const summaryOverlay = document.getElementById('summary-overlay');
    const genOverlay = document.getElementById('modal-overlay');

    document.getElementById('btn-generate')?.addEventListener('click', () => {
        const state = appState.getState();
        if (!state.chassis.configured) { showToast('Configure chassis first', 'error'); return; }
        renderSummary(state);
        summaryOverlay.style.display = 'flex';

        const smCheck = document.getElementById('sm-integration-check');
        if (smCheck) {
            smCheck.checked = state.stateMachineIntegration;
            smCheck.onchange = () => {
                appState.setStateMachineIntegration(smCheck.checked);
                renderSummary(appState.getState());
            };
        }

        document.querySelectorAll('.fw-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.fw === state.framework);
            b.onclick = () => {
                document.querySelectorAll('.fw-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                appState.setFramework(b.dataset.fw);
                renderSummary(appState.getState());
            };
        });
    });

    document.getElementById('summary-close')?.addEventListener('click', () => summaryOverlay.style.display = 'none');
    document.getElementById('summary-back')?.addEventListener('click', () => summaryOverlay.style.display = 'none');

    document.getElementById('summary-confirm')?.addEventListener('click', async () => {
        const state = appState.getState();
        if (state.stateMachineIntegration) {
            if (!state.statemachine.configured) {
                showToast('StateMachine must be configured for integration.', 'error');
                return;
            }
            try {
                const parsed = JSON.parse(state.statemachine.jsonData);
                if (typeof parsed !== 'object' || Array.isArray(parsed) || Object.keys(parsed).length === 0) throw new Error();
                // Basic validation: values should be arrays of strings
                for (const [k, v] of Object.entries(parsed)) {
                    if (!Array.isArray(v)) throw new Error();
                    for (const item of v) {
                        if (typeof item !== 'string') throw new Error();
                    }
                }
            } catch (err) {
                showToast('Invalid StateMachine JSON format.', 'error');
                return;
            }
        }
        
        summaryOverlay.style.display = 'none';
        genOverlay.style.display = 'flex';
        const status = document.getElementById('gen-status-text');
        const fw = appState.getState().framework;
        const steps = fw === 'advantagekit'
            ? ['Initializing...', 'build.gradle...', 'IO Interfaces...', 'Drive subsystem...', 'Mechanisms...', 'Vision...', 'PathPlanner...', 'Packaging ZIP...']
            : ['Initializing...', 'build.gradle...', 'Drive subsystem...', 'Mechanisms...', 'Vision...', 'Packaging ZIP...'];
        for (const s of steps) {
            status.textContent = s;
            await new Promise(r => setTimeout(r, 350));
        }
        try {
            const projName = document.getElementById('project-name-input')?.value || 'FRC2026_Robot';
            const modeEl = document.querySelector('input[name="gen-mode"]:checked');
            const mode = modeEl ? modeEl.value : GEN_MODE.FULL;
            await generateProject(appState.getState(), projName, mode);
            status.textContent = '✓ Download started!';
            setTimeout(() => genOverlay.style.display = 'none', 1500);
            showToast('Code generated!', 'success');
        } catch (err) {
            status.textContent = '✕ ' + err.message;
            setTimeout(() => genOverlay.style.display = 'none', 3000);
        }
    });
}

function applyStateToUI(state) {
    const projectInput = document.getElementById('project-name-input');
    if (projectInput && state.projectName) projectInput.value = state.projectName;

    document.querySelectorAll('.mech-toggle').forEach(toggle => {
        const mech = toggle.dataset.mech;
        let enabled = false;
        if (mech === 'vision') enabled = state.vision.enabled;
        else if (mech === 'statemachine') enabled = state.statemachine.enabled;
        else enabled = !!state.mechanisms[mech]?.enabled;
        toggle.checked = enabled;
        const card = toggle.closest('.mechanism-card');
        if (!card) return;
        card.classList.toggle('enabled', enabled);
        if (!enabled) card.querySelector('.card-desc').textContent = 'Disabled';
        setMechVisible(mech, enabled);
    });

    updateDescriptions(state);
    updateProgressBar();
    updateCardStates(state);
}

function persistState(state) {
    const projectName = document.getElementById('project-name-input')?.value || 'FRC2026_Robot';
    const payload = { ...state, projectName };
    try {
        localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(payload));
        const indicator = document.getElementById('config-saved-indicator');
        if (indicator) {
            indicator.classList.add('show');
            clearTimeout(indicator._hideTimer);
            indicator._hideTimer = setTimeout(() => indicator.classList.remove('show'), 1200);
        }
    } catch (err) {
        // Ignore localStorage quota and privacy mode errors.
    }
}

function restoreSavedState() {
    try {
        const raw = localStorage.getItem(CONFIG_STORAGE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        appState.loadState(parsed);
    } catch (err) {
        // Ignore malformed storage entries and continue with defaults.
    }
}

async function loadSysIdPage() {
    const container = document.getElementById('sysid-content-container');
    if (!container || container.dataset.loaded === 'true') return;
    container.innerHTML = '<p class="sysid-loading">Loading SysId guide...</p>';

    const primaryPath = `${import.meta.env.BASE_URL}pages/sysid.html`;
    const candidates = [primaryPath, './pages/sysid.html'];

    for (const path of candidates) {
        try {
            const res = await fetch(path, { cache: 'no-cache' });
            if (!res.ok) continue;
            container.innerHTML = await res.text();
            container.dataset.loaded = 'true';
            return;
        } catch (err) {
            // Try next candidate path.
        }
    }

    container.innerHTML = '<p class="sysid-error">Unable to load SysId guide. Please refresh and try again.</p>';
}

function updateProgressBar() {
    const count = appState.getConfiguredCount();
    const expected = appState.getExpectedCount();
    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = expected === 0 ? '0%' : Math.round((count / expected) * 100) + '%';
    const s = document.getElementById('config-status');
    if (s) s.textContent = `${count} / ${expected} configured`;
}

function updateCardStates(state) {
    const check = (id, conf) => {
        const c = document.getElementById(id);
        if (c) { if (conf) c.classList.add('configured'); else c.classList.remove('configured'); }
    };
    check('card-chassis', state.chassis.configured);
    Object.entries(state.mechanisms).forEach(([t, m]) => check(`card-${t}`, m.configured));
    check('card-vision', state.vision.configured);
    check('card-statemachine', state.statemachine.configured);
}

function syncViewport(state) {
    updateMechConfigured('chassis', state.chassis.configured);
    Object.entries(state.mechanisms).forEach(([t, m]) => updateMechConfigured(t, m.configured));
    updateMechConfigured('vision', state.vision.configured);
}

const MNAMES = {
    talonfx_falcon: 'Falcon 500', talonfx_kraken60: 'Kraken X60', talonfx_kraken44: 'Kraken X44',
    talonfxs_minion: 'Minion', talonfxs: 'TalonFXS', sparkmax_neo: 'NEO', sparkmax_neo550: 'NEO 550', sparkflex_vortex: 'Vortex',
};
const LIMELIGHT_NAMES = {
    ll3: 'Limelight 3',
    ll3a: 'Limelight 3A',
    ll3g: 'Limelight 3G',
    ll4: 'Limelight 4',
};

function updateDescriptions(state) {
    const set = (sel, txt) => { const d = document.querySelector(sel); if (d) d.textContent = txt; };
    if (state.chassis.configured) set('#card-chassis .card-desc', `${state.chassis.type} · ${MNAMES[state.chassis.driveMotor] || ''}`);
    Object.entries(state.mechanisms).forEach(([t, m]) => {
        if (!m.configured) return;
        if (t === 'arm') {
            set(`#card-arm .card-desc`, `${m.dof} DoF Arm`);
            return;
        }
        const motors = m.motors || [];
        const lead = motors[0];
        const name = lead?.type ? (MNAMES[lead.type] || lead.type) : 'Motor';
        const extra = motors.length > 1 ? ` +${motors.length - 1}` : '';
        set(`#card-${t} .card-desc`, `${name}${extra}`);
    });
    if (state.vision.configured) {
        const llName = LIMELIGHT_NAMES[state.vision.limelightVersion] || 'Limelight';
        set('#card-vision .card-desc', state.vision.system === 'limelight' ? llName : 'PhotonVision');
    }
    if (state.statemachine.configured) set('#card-statemachine .card-desc', 'Enabled');
}
