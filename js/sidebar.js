/**
 * Sidebar — CAN IDs, sensor ports, camera transforms, Limelight versions
 */
import appState from './state.js';
import { MOTORS, ENCODERS, GYROS, CHASSIS_TYPES, SWERVE_PRESETS, LIMELIGHT_VERSIONS, PHOTON_PLATFORMS, SENSOR_PORT_TYPES, DEFAULT_CAN_IDS } from './constants.js';
import { getAllMechanisms } from './registry.js';

function opts(obj, sel) {
    return `<option value="">— Select —</option>` + Object.entries(obj).map(([k,v]) => `<option value="${k}" ${k===sel?'selected':''}>${v.name}</option>`).join('');
}
function numInput(id, label, val, ph, step='1') {
    return `<div class="config-group"><label class="config-label">${label}</label><input type="number" class="config-input" id="${id}" placeholder="${ph}" step="${step}" value="${val||''}"></div>`;
}
function canIdInput(id, label, val) {
    return `<div class="config-group config-group-sm"><label class="config-label">${label}</label><input type="number" class="config-input" id="${id}" min="0" max="62" value="${val}" style="width:70px"></div>`;
}
function radioCards(items, sel, name) {
    return `<div class="radio-cards">${items.map(([k,v]) => `<div class="radio-card ${k===sel?'active':''}" data-name="${name}" data-value="${k}"><div class="radio-dot"></div><div class="radio-card-info"><div class="radio-card-name">${v.name}</div>${v.desc?`<div class="radio-card-desc">${v.desc}</div>`:''}</div></div>`).join('')}</div>`;
}
function motorSelect(id, sel) { return `<select class="config-select" id="${id}">${opts(MOTORS, sel)}</select>`; }

const ATTACH_LABELS = { chassis: 'Chassis', elevator: 'Elevator', intake: 'Intake' };

function simulationAttachSelect(type, m, rules, state) {
    const rawTargets = rules[type] || ['chassis'];
    const targets = rawTargets.filter(t => {
        if (t === 'chassis') return true;
        if (t === 'elevator') return !!state.mechanisms?.elevator?.enabled;
        if (t === 'intake') return !!state.mechanisms?.intake?.enabled;
        if (state.mechanisms?.[t]) return !!state.mechanisms[t].enabled;
        return true;
    });
    const optsHtml = targets.map(t =>
        `<option value="${t}" ${m.attachedTo === t ? 'selected' : ''}>${ATTACH_LABELS[t] || t}</option>`
    ).join('');
    return `<div class="config-divider"></div>
        <div class="config-section-title">SIMULATION</div>
        <div class="config-group">
            <label class="config-label">Attached To</label>
            <select class="config-select" id="cfg-${type}-attached">${optsHtml}</select>
            <p class="config-hint">Parent mechanism for physics sim (not shown in 3D view)</p>
        </div>`;
}

export function renderSidebar(type) {
    const s = appState.getState();
    const title = document.getElementById('sidebar-title');
    const content = document.getElementById('sidebar-content');
    // Built-in non-mechanism types
    if (type === 'chassis') return renderChassis(s, title, content);
    if (type === 'vision') return renderVision(s, title, content);
    if (type === 'statemachine') return renderStateMachine(s, title, content);
    // Registry-driven mechanism render
    const mechRenderers = {
        elevator: renderElevator,
        shooter: renderShooter,
        intake: renderIntake,
        roller: renderRoller,
        launcher: renderLauncher,
        arm: renderArm,
    };
    const renderer = mechRenderers[type];
    if (renderer) return renderer(s, title, content);
    // Unknown type (custom mechanism) — use generic renderer
    const mech = getAllMechanisms().find(m => m.id === type);
    if (mech) return renderGenericMech(s, title, content, type, mech.name);
}

// ===== CHASSIS =====
function renderChassis(s, title, content) {
    title.textContent = 'DRIVETRAIN';
    const c = s.chassis;
    const isSwerve = c.type === 'swerve';
    const isTank = c.type === 'tank' || c.type === 'mecanum';

    content.innerHTML = `
        <div class="config-group"><label class="config-label">Drivetrain Type</label>
        ${radioCards(Object.entries(CHASSIS_TYPES), c.type, 'chassisType')}</div>
        <div id="chassis-details" style="${c.type?'':'display:none'}">
        <div class="config-divider"></div>
        <div class="config-group"><label class="config-label">Drive Motor</label>${motorSelect('cfg-drive-motor', c.driveMotor)}</div>
        ${isSwerve ? `
        <div class="config-group"><label class="config-label">Turn Motor</label>${motorSelect('cfg-turn-motor', c.turnMotor)}</div>
        <div class="config-group"><label class="config-label">Swerve Preset</label><select class="config-select" id="cfg-swerve-preset">${opts(SWERVE_PRESETS, c.swervePreset)}</select></div>
        <div class="config-group"><label class="config-label">Module Encoder</label><select class="config-select" id="cfg-swerve-encoder">${opts(ENCODERS, c.swerveEncoderType)}</select></div>
        ${c.usePhoenix6Swerve ? '<div class="config-hint phoenix-badge">✓ Phoenix 6 SwerveDrivetrain (TalonFX + CANCoder)</div>' : ''}
        ` : ''}
        <div class="config-group"><label class="config-label">Gyro</label><select class="config-select" id="cfg-gyro">${opts(GYROS, c.gyro)}</select></div>
        <div class="config-row">
            ${numInput('cfg-gear-ratio','Drive Gear Ratio',c.gearRatio,'6.75','0.01')}
            ${numInput('cfg-wheel-diam','Wheel Diameter (m)',c.wheelDiameter,'0.1016','0.001')}
        </div>
        ${isSwerve ? numInput('cfg-turn-ratio','Turn Gear Ratio',c.turnGearRatio,'21.43','0.01') : ''}
        ${numInput('cfg-max-speed','Max Speed (m/s)',c.maxSpeed,'4.5','0.1')}

        <div class="config-divider"></div>
        <div class="config-section-title">CAN IDs</div>
        ${isSwerve ? `
        <div class="can-id-grid">
            <div class="can-id-module"><div class="can-id-module-title">FL Module</div><div class="config-row">
                ${canIdInput('can-fl-drive','Drive',c.canIds.fl_drive)}
                ${canIdInput('can-fl-turn','Turn',c.canIds.fl_turn)}
                ${canIdInput('can-fl-enc','Encoder',c.canIds.fl_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">FR Module</div><div class="config-row">
                ${canIdInput('can-fr-drive','Drive',c.canIds.fr_drive)}
                ${canIdInput('can-fr-turn','Turn',c.canIds.fr_turn)}
                ${canIdInput('can-fr-enc','Encoder',c.canIds.fr_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">BL Module</div><div class="config-row">
                ${canIdInput('can-bl-drive','Drive',c.canIds.bl_drive)}
                ${canIdInput('can-bl-turn','Turn',c.canIds.bl_turn)}
                ${canIdInput('can-bl-enc','Encoder',c.canIds.bl_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">BR Module</div><div class="config-row">
                ${canIdInput('can-br-drive','Drive',c.canIds.br_drive)}
                ${canIdInput('can-br-turn','Turn',c.canIds.br_turn)}
                ${canIdInput('can-br-enc','Encoder',c.canIds.br_encoder)}
            </div></div>
        </div>
        ` : isTank ? `
        <div class="config-row">${canIdInput('can-ll','Left Leader',c.tankCanIds.left_leader)}${canIdInput('can-lf','Left Follower',c.tankCanIds.left_follower)}</div>
        <div class="config-row">${canIdInput('can-rl','Right Leader',c.tankCanIds.right_leader)}${canIdInput('can-rf','Right Follower',c.tankCanIds.right_follower)}</div>
        ` : ''}
        ${canIdInput('can-gyro','Gyro CAN ID',c.gyroCanId)}
        </div>
    `;
    bindRadio('chassisType', t => { appState.updateChassis({type: t, configured: false}); renderSidebar('chassis'); });

    // Auto-fill inputs when preset is selected
    const presetSelect = document.getElementById('cfg-swerve-preset');
    if (presetSelect) {
        presetSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            if (val && SWERVE_PRESETS[val] && val !== 'custom') {
                const p = SWERVE_PRESETS[val];
                const gr = document.getElementById('cfg-gear-ratio');
                const wd = document.getElementById('cfg-wheel-diam');
                const tr = document.getElementById('cfg-turn-ratio');
                if (gr) gr.value = p.driveRatio;
                if (wd) wd.value = p.wheelDiam;
                if (tr) tr.value = p.turnRatio;
            }
        });
    }

    document.getElementById('cfg-swerve-encoder')?.addEventListener('change', e => {
        appState.updateChassis({ swerveEncoderType: e.target.value });
        renderSidebar('chassis');
    });
}

// ===== GENERIC MECHANISM =====
function renderMech(s, title, content, type, name, extra='', extraTop='') {
    const m = s.mechanisms[type];
    title.textContent = name.toUpperCase();

    // Multi-motor list
    let motorsHtml = `<div class="config-section-title">MOTORS</div><div id="${type}-motors-list">`;
    m.motors.forEach((mot, i) => {
        motorsHtml += `<div class="motor-entry" data-idx="${i}">
            <div class="motor-entry-header">
                <div class="config-group config-group-sm" style="flex:1">
                    <label class="config-label">Role</label>
                    <select class="config-select motor-role-select" id="cfg-${type}-role-${i}">
                        <option value="leader" ${mot.role==='leader'?'selected':''}>Leader</option>
                        <option value="follower" ${mot.role==='follower'?'selected':''}>Follower</option>
                    </select>
                </div>
                ${i > 0 ? `<button class="motor-remove-btn" data-type="${type}" data-idx="${i}" title="Remove">✕</button>` : ''}
            </div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor</label>${motorSelect(`cfg-${type}-motor-${i}`, mot.type)}</div>
                ${canIdInput(`cfg-${type}-canid-${i}`, 'CAN ID', mot.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-${type}-inv-${i}" ${mot.inverted?'checked':''}>
                    Inverted</label></div>
            </div>
        </div>`;
    });
    motorsHtml += `</div><button class="btn-add-motor" id="btn-add-motor-${type}">+ Add Motor</button>`;

    // Motor config
    const mc = m.motorConfig || {};
    let configHtml = `<div class="config-divider"></div>
        <div class="config-section-title">MOTOR CONFIG</div>
        <div class="config-row">
            ${numInput(`cfg-${type}-curlimit`, 'Current Limit (A)', mc.currentLimit, '40', '1')}
        </div>
        <div class="config-group"><label class="config-label">Idle Mode</label>
            <div class="config-row config-row-inline">
                <label class="config-radio"><input type="radio" name="cfg-${type}-brakemode" value="brake" ${mc.brakeMode!==false?'checked':''}> Brake</label>
                <label class="config-radio"><input type="radio" name="cfg-${type}-brakemode" value="coast" ${mc.brakeMode===false?'checked':''}> Coast</label>
            </div>
        </div>`;

    if ('rampRate' in m) {
        configHtml += numInput(`cfg-${type}-ramp`, 'Ramp Rate (ms)', m.rampRate, '0', '1');
    }

    // PID (if mechanism has it)
    if (m.pid) {
        const p = m.pid;
        configHtml += `<div class="config-divider"></div>
            <div class="config-section-title">PID / FEEDFORWARD</div>
            <div class="config-row">
                ${numInput(`cfg-${type}-kp`, 'kP', p.kP, '0', '0.001')}
                ${numInput(`cfg-${type}-ki`, 'kI', p.kI, '0', '0.001')}
                ${numInput(`cfg-${type}-kd`, 'kD', p.kD, '0', '0.001')}
            </div>
            <div class="config-row">
                ${numInput(`cfg-${type}-ks`, 'kS', p.kS, '0', '0.001')}
                ${numInput(`cfg-${type}-kv`, 'kV', p.kV, '0', '0.001')}
                ${numInput(`cfg-${type}-ka`, 'kA', p.kA, '0', '0.001')}
            </div>`;
    }

    // Gear ratio
    let gearHtml = `<div class="config-divider"></div>
        <div class="config-row">${numInput(`cfg-${type}-ratio`,'Gear Ratio',m.gearRatio,'1.0','0.01')}</div>`;

    // Physics section (collapsed by default, for sim fidelity)
    const phys = m.physics || {};
    const physHtml = `<div class="config-divider"></div>
        <details class="config-details">
            <summary class="config-section-title" style="cursor:pointer;user-select:none;">
                ⚙ PHYSICS (Simulation) <span style="font-size:0.7rem;color:var(--text-secondary);font-weight:400;">— optional, improves sim accuracy</span>
            </summary>
            <div class="config-row" style="margin-top:8px;">
                ${numInput(`cfg-${type}-mass`, 'Mass (kg)', phys.massKg, 'e.g. 5.0', '0.1')}
                ${numInput(`cfg-${type}-moi`, 'MOI (kg·m²)', phys.moiKgM2, 'e.g. 0.1', '0.001')}
            </div>
            <p class="config-hint" style="margin-top:4px;">Used in simulation physics model. Leave blank to use defaults.</p>
        </details>`;

    const simHtml = s.attachmentRules[type] ? simulationAttachSelect(type, m, s.attachmentRules, s) : '';
    content.innerHTML = extraTop + motorsHtml + configHtml + simHtml + gearHtml + physHtml + extra;

    // Add motor button
    document.getElementById(`btn-add-motor-${type}`)?.addEventListener('click', () => {
        const nextId = (m.motors[m.motors.length-1]?.canId || 50) + 1;
        appState.addMotor(type, { type: null, canId: nextId, role: 'follower', inverted: false });
        renderSidebar(type);
    });

    // Remove motor buttons
    content.querySelectorAll('.motor-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            appState.removeMotor(type, parseInt(btn.dataset.idx));
            renderSidebar(type);
        });
    });
}

// Generic renderer for custom/unknown mechanism types
function renderGenericMech(s, title, content, type, displayName) {
    renderMech(s, title, content, type, displayName.toUpperCase());
}

function renderElevator(s, title, content) {
    const e = s.mechanisms.elevator;
    renderMech(s, title, content, 'elevator', 'Elevator', `
        <div class="config-group"><label class="config-label">Encoder</label><select class="config-select" id="cfg-elevator-encoder">${opts(ENCODERS, e.encoder)}</select></div>
        ${canIdInput('cfg-elevator-enc-id','Encoder CAN ID',e.encoderId)}
        <div class="config-row">
            ${numInput('cfg-elevator-min','Min Height (m)',e.minHeight,'0','0.01')}
            ${numInput('cfg-elevator-max','Max Height (m)',e.maxHeight,'1.5','0.01')}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">SOFT LIMITS</div>
        <div class="config-row">
            ${numInput('cfg-elevator-softfwd','Forward Limit',e.softLimitFwd,'','0.01')}
            ${numInput('cfg-elevator-softrev','Reverse Limit',e.softLimitRev,'','0.01')}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">MOTION PROFILE</div>
        <div class="config-row">
            ${numInput('cfg-elevator-mmvel','Max Velocity (m/s)',e.motionMaxVel,'','0.01')}
            ${numInput('cfg-elevator-mmacc','Max Accel (m/s²)',e.motionMaxAccel,'','0.01')}
        </div>
    `);
}

function renderShooter(s, title, content) {
    const m = s.mechanisms.shooter;
    const extraTop = `
        <div class="config-section-title" style="margin-top:0">SHOOTER TYPE</div>
        <div class="config-group">
            ${radioCards([
                ['flywheel_only', {name: 'Flywheel Only', desc: 'Static Angle Flywheels'}],
                ['adjustable', {name: 'Adjustable Hood', desc: 'Pivot + Flywheels'}],
                ['adjustable_turret', {name: 'Adjustable + Turret', desc: 'Pivot + Flywheels + Turret'}]
            ], m.shooterType, 'shooterType')}
        </div>
        <div class="config-divider"></div>
        <div class="config-row">${numInput('cfg-shooter-rpm','Max Flywheel RPM',m.maxRPM,'5000','100')}</div>
        <div class="config-divider"></div>
        <div class="config-section-title" style="margin-bottom:-10px">FLYWHEEL MOTORS</div>
    `;

    let pivotHtml = '';
    if (m.shooterType === 'adjustable' || m.shooterType === 'adjustable_turret') {
        const pm = m.pivotMotor || { type: null, canId: 24, inverted: false };
        pivotHtml = `
            <div class="config-divider"></div>
            <div class="config-section-title">PIVOT MOTOR</div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor Type</label>${motorSelect('cfg-shooter-pivot-motor', pm.type)}</div>
                ${canIdInput('cfg-shooter-pivot-canid', 'CAN ID', pm.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-shooter-pivot-inv" ${pm.inverted?'checked':''}>
                    Inverted</label></div>
            </div>
        `;
    }

    let turretHtml = '';
    if (m.shooterType === 'adjustable_turret') {
        const tm = m.turretMotor || { type: null, canId: 25, inverted: false };
        turretHtml = `
            <div class="config-divider"></div>
            <div class="config-section-title">TURRET MOTOR</div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor Type</label>${motorSelect('cfg-shooter-turret-motor', tm.type)}</div>
                ${canIdInput('cfg-shooter-turret-canid', 'CAN ID', tm.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-shooter-turret-inv" ${tm.inverted?'checked':''}>
                    Inverted</label></div>
            </div>
        `;
    }

    renderMech(s, title, content, 'shooter', 'Shooter', pivotHtml + turretHtml, extraTop);

    
    bindRadio('shooterType', t => {
        appState.updateMechanism('shooter', { shooterType: t });
        document.dispatchEvent(new CustomEvent('rcg:update-shooter-model', { detail: { type: t } }));
        renderSidebar('shooter');
    });
}

function renderIntake(s, title, content) {
    const m = s.mechanisms.intake;
    renderMech(s, title, content, 'intake', 'Intake', `
        <div class="config-divider"></div>
        <div class="config-section-title">Game Piece Sensor</div>
        <div class="config-group"><div class="config-toggle-wrap"><span class="config-toggle-label">Has Sensor</span>
        <label class="toggle-switch"><input type="checkbox" id="cfg-intake-sensor" ${m.hasSensor?'checked':''}><span class="toggle-slider"></span></label></div></div>
        <div id="intake-sensor-cfg" style="${m.hasSensor?'':'display:none'}">
            <div class="config-group"><label class="config-label">Port Type</label>
            <select class="config-select" id="cfg-intake-sensor-type">${opts(SENSOR_PORT_TYPES,m.sensorPortType)}</select></div>
            ${numInput('cfg-intake-sensor-port','Port Number',m.sensorPort,'0')}
        </div>
    `);
    document.getElementById('cfg-intake-sensor')?.addEventListener('change', e => {
        document.getElementById('intake-sensor-cfg').style.display = e.target.checked?'':'none';
    });
}

function renderRoller(s, title, content) {
    renderMech(s, title, content, 'roller', 'Roller');
}

function renderLauncher(s, title, content) {
    const m = s.mechanisms.launcher;
    renderMech(s, title, content, 'launcher', 'Launcher', `
        <div class="config-divider"></div>
        <div class="config-section-title">SOFT LIMITS</div>
        <div class="config-row">
            ${numInput('cfg-launcher-softfwd','Forward Limit',m.softLimitFwd,'','0.01')}
            ${numInput('cfg-launcher-softrev','Reverse Limit',m.softLimitRev,'','0.01')}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">Game Piece Sensor</div>
        <div class="config-group"><div class="config-toggle-wrap"><span class="config-toggle-label">Has Sensor</span>
        <label class="toggle-switch"><input type="checkbox" id="cfg-launcher-sensor" ${m.hasSensor?'checked':''}><span class="toggle-slider"></span></label></div></div>
        <div id="launcher-sensor-cfg" style="${m.hasSensor?'':'display:none'}">
            <div class="config-group"><label class="config-label">Port Type</label>
            <select class="config-select" id="cfg-launcher-sensor-type">${opts(SENSOR_PORT_TYPES,m.sensorPortType)}</select></div>
            ${numInput('cfg-launcher-sensor-port','Port Number',m.sensorPort,'1')}
        </div>
    `);
    
    document.getElementById('cfg-launcher-sensor')?.addEventListener('change', e => {
        document.getElementById('launcher-sensor-cfg').style.display = e.target.checked?'':'none';
    });
}

function renderArm(s, title, content) {
    const m = s.mechanisms.arm;
    title.textContent = 'ARM';

    let html = `
        <div class="config-section-title" style="margin-top:0">DEGREES OF FREEDOM</div>
        <div class="config-group">
            <select class="config-select" id="cfg-arm-dof">
                <option value="1" ${m.dof === 1 ? 'selected' : ''}>1 DoF (Single Joint)</option>
                <option value="2" ${m.dof === 2 ? 'selected' : ''}>2 DoF (Double Jointed)</option>
                <option value="3" ${m.dof === 3 ? 'selected' : ''}>3 DoF (Triple Jointed)</option>
            </select>
        </div>
    `;

    for (let i = 0; i < m.dof; i++) {
        const j = m.joints[i] || {
            motors: [{ type: null, canId: 30 + i * 2, inverted: false, role: 'leader' }],
            encoder: null, encoderId: 31 + i * 2,
            gearRatio: null,
            motorConfig: { currentLimit: 40, brakeMode: true },
            pid: { kP: 0, kI: 0, kD: 0, kS: 0, kV: 0, kA: 0 },
            softLimitFwd: null, softLimitRev: null
        };
        const lead = j.motors[0] || { type: null, canId: 30 + i * 2, inverted: false };
        const hasFollower = j.motors.length > 1;
        const follow = j.motors[1] || { type: null, canId: 31 + i * 2, inverted: false };

        html += `
            <div class="config-divider"></div>
            <div class="config-section-title" style="color: var(--accent-red); font-size: 0.95rem;">JOINT ${i + 1}</div>
            
            <div class="config-group"><label class="config-label">Leader Motor Type</label>${motorSelect(`cfg-arm-joint-${i}-leader-motor`, lead.type)}</div>
            <div class="config-row">
                ${canIdInput(`cfg-arm-joint-${i}-leader-canid`, 'Leader CAN ID', lead.canId)}
                <div class="config-group config-group-sm" style="align-items: center; justify-content: center; height: 38px;">
                    <label class="config-label"><input type="checkbox" id="cfg-arm-joint-${i}-leader-inv" ${lead.inverted ? 'checked' : ''}> Inverted</label>
                </div>
            </div>

            <div class="config-group">
                <div class="config-toggle-wrap">
                    <span class="config-toggle-label">Has Follower Motor</span>
                    <label class="toggle-switch">
                        <input type="checkbox" id="cfg-arm-joint-${i}-hasfollower" ${hasFollower ? 'checked' : ''}>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>

            <div id="cfg-arm-joint-${i}-follower-cfg" style="${hasFollower ? '' : 'display:none'}">
                <div class="config-group"><label class="config-label">Follower Motor Type</label>${motorSelect(`cfg-arm-joint-${i}-follower-motor`, follow.type)}</div>
                <div class="config-row">
                    ${canIdInput(`cfg-arm-joint-${i}-follower-canid`, 'Follower CAN ID', follow.canId)}
                    <div class="config-group config-group-sm" style="align-items: center; justify-content: center; height: 38px;">
                        <label class="config-label"><input type="checkbox" id="cfg-arm-joint-${i}-follower-inv" ${follow.inverted ? 'checked' : ''}> Inverted</label>
                    </div>
                </div>
            </div>

            <div class="config-row">
                ${numInput(`cfg-arm-joint-${i}-ratio`, 'Gear Ratio', j.gearRatio, 'e.g. 80')}
                ${numInput(`cfg-arm-joint-${i}-curlimit`, 'Current Limit (A)', j.motorConfig.currentLimit, '40')}
            </div>

            <!-- Encoder -->
            <div class="config-row">
                <div class="config-group">
                    <label class="config-label">Encoder Type</label>
                    <select class="config-select" id="cfg-arm-joint-${i}-encoder">
                        <option value="">Integrated</option>
                        <option value="cancoder" ${j.encoder === 'cancoder' ? 'selected' : ''}>CANCoder</option>
                        <option value="throughbore" ${j.encoder === 'throughbore' ? 'selected' : ''}>ThroughBore</option>
                    </select>
                </div>
                ${canIdInput(`cfg-arm-joint-${i}-encoder-id`, 'Encoder ID/Port', j.encoderId)}
            </div>

            <!-- Soft Limits -->
            <div class="config-row">
                ${numInput(`cfg-arm-joint-${i}-softfwd`, 'Soft Limit Fwd (rad)', j.softLimitFwd, 'None', '0.01')}
                ${numInput(`cfg-arm-joint-${i}-softrev`, 'Soft Limit Rev (rad)', j.softLimitRev, 'None', '0.01')}
            </div>

            <!-- PID -->
            <div class="config-row">
                ${numInput(`cfg-arm-joint-${i}-kp`, 'kP', j.pid.kP, '0')}
                ${numInput(`cfg-arm-joint-${i}-ki`, 'kI', j.pid.kI, '0')}
                ${numInput(`cfg-arm-joint-${i}-kd`, 'kD', j.pid.kD, '0')}
            </div>
        `;
    }

    html += simulationAttachSelect('arm', m, s.attachmentRules, s);

    content.innerHTML = html;

    // DOF Event Listener
    document.getElementById('cfg-arm-dof')?.addEventListener('change', e => {
        const val = parseInt(e.target.value);
        const newJoints = [];
        for (let i = 0; i < val; i++) {
            newJoints.push(m.joints[i] || {
                motors: [{ type: null, canId: 30 + i * 2, inverted: false, role: 'leader' }],
                encoder: null, encoderId: 31 + i * 2,
                gearRatio: null,
                motorConfig: { currentLimit: 40, brakeMode: true },
                pid: { kP: 0, kI: 0, kD: 0, kS: 0, kV: 0, kA: 0 },
                softLimitFwd: null, softLimitRev: null
            });
        }
        appState.updateMechanism('arm', { dof: val, joints: newJoints });
        renderSidebar('arm');
    });

    // Follower toggles
    for (let i = 0; i < m.dof; i++) {
        document.getElementById(`cfg-arm-joint-${i}-hasfollower`)?.addEventListener('change', e => {
            document.getElementById(`cfg-arm-joint-${i}-follower-cfg`).style.display = e.target.checked ? '' : 'none';
        });
    }
}

// ===== VISION =====
function renderVision(s, title, content) {
    const v = s.vision;
    title.textContent = 'VISION SYSTEM';
    content.innerHTML = `
        <div class="config-group"><label class="config-label">Vision System</label>
        ${radioCards([['limelight',{name:'Limelight',desc:'Smart camera using NetworkTables'}],['photonvision',{name:'PhotonVision',desc:'Open-source with PhotonLib'}]], v.system, 'visionSystem')}</div>
        <div id="vision-sub"></div>
    `;
    bindRadio('visionSystem', sys => { appState.updateVision({system:sys}); renderVisionSub(sys); });
    if (v.system) renderVisionSub(v.system);
}

function renderVisionSub(system) {
    const sub = document.getElementById('vision-sub');
    if (!sub) return;
    const v = appState.getState().vision;

    if (system === 'limelight') {
        sub.innerHTML = `
            <div class="config-divider"></div>
            <div class="config-section-title">LIMELIGHT</div>
            <div class="config-group"><label class="config-label">Limelight Version</label>
            ${radioCards(Object.entries(LIMELIGHT_VERSIONS), v.limelightVersion, 'llVersion')}</div>
            ${cameraCountAndTransforms(v)}
        `;
        bindRadio('llVersion', ver => appState.updateVision({limelightVersion:ver}));
    } else if (system === 'photonvision') {
        sub.innerHTML = `
            <div class="config-divider"></div>
            <div class="config-section-title">PHOTONVISION</div>
            <div class="config-group"><label class="config-label">Coprocessor</label>
            ${radioCards(Object.entries(PHOTON_PLATFORMS), v.photonPlatform, 'photonPlat')}</div>
            ${cameraCountAndTransforms(v)}
        `;
        bindRadio('photonPlat', p => appState.updateVision({photonPlatform:p}));
    }
    bindCameraCount();
}

function cameraCountAndTransforms(v) {
    let html = `<div class="config-group"><label class="config-label">Number of Cameras</label>
        <select class="config-select" id="cfg-cam-count">${[1,2,3,4].map(n=>`<option value="${n}" ${v.cameraCount===n?'selected':''}>${n}</option>`).join('')}</select></div>
        <div id="camera-transforms">`;
    for (let i = 0; i < v.cameraCount; i++) {
        const cam = v.cameras[i] || {name:`cam${i}`,x:0,y:0,z:0,roll:0,pitch:0,yaw:0};
        html += `
        <div class="config-divider"></div>
        <div class="config-section-title">Camera ${i+1}</div>
        <div class="config-group"><label class="config-label">Name</label>
        <input class="config-input" id="cam-${i}-name" value="${cam.name}" placeholder="camera_${i}"></div>
        <div class="config-section-title" style="font-size:0.6rem;margin-top:8px">Translation (meters from robot center)</div>
        <div class="config-row">
            ${numInput(`cam-${i}-x`,'X (forward)',cam.x,'0','0.001')}
            ${numInput(`cam-${i}-y`,'Y (left)',cam.y,'0','0.001')}
            ${numInput(`cam-${i}-z`,'Z (up)',cam.z,'0','0.001')}
        </div>
        <div class="config-section-title" style="font-size:0.6rem;margin-top:8px">Rotation (degrees)</div>
        <div class="config-row">
            ${numInput(`cam-${i}-roll`,'Roll',cam.roll,'0','0.1')}
            ${numInput(`cam-${i}-pitch`,'Pitch',cam.pitch,'0','0.1')}
            ${numInput(`cam-${i}-yaw`,'Yaw',cam.yaw,'0','0.1')}
        </div>`;
    }
    html += `</div>`;
    return html;
}

function bindCameraCount() {
    document.getElementById('cfg-cam-count')?.addEventListener('change', e => {
        appState.updateVision({cameraCount:parseInt(e.target.value)});
        renderVisionSub(appState.getState().vision.system);
    });
}

// ===== STATEMACHINE =====
function renderStateMachine(s, title, content) {
    const sm = s.statemachine;
    title.textContent = 'STATE MACHINE';
    content.innerHTML = `
        <a href="https://ray260508.github.io/StateMachineGraph/" target="_blank" class="btn-primary" style="display:inline-flex;text-decoration:none;justify-content:center;">OPEN STATE GRAPH GENERATOR</a>
        <div class="config-hint">Design your state graph externally, then paste JSON below.</div>
        <div class="config-group"><label class="config-label">State Graph JSON</label>
        <textarea class="config-input" id="cfg-sm-json" rows="8" placeholder='{"nodes":[],"edges":[]}' style="resize:vertical;font-family:var(--font-mono);font-size:0.75rem;">${sm.jsonData||''}</textarea></div>
    `;
}

// ===== APPLY =====
export function applySidebarConfig(type) {
    const s = appState.getState();
    if (type === 'chassis') {
        const c = {
            driveMotor: document.getElementById('cfg-drive-motor')?.value||null,
            turnMotor: document.getElementById('cfg-turn-motor')?.value||null,
            gyro: document.getElementById('cfg-gyro')?.value||null,
            gyroCanId: parseInt(document.getElementById('can-gyro')?.value)||50,
            gearRatio: parseFloat(document.getElementById('cfg-gear-ratio')?.value)||null,
            turnGearRatio: parseFloat(document.getElementById('cfg-turn-ratio')?.value)||null,
            wheelDiameter: parseFloat(document.getElementById('cfg-wheel-diam')?.value)||null,
            maxSpeed: parseFloat(document.getElementById('cfg-max-speed')?.value)||null,
            trackWidth: parseFloat(document.getElementById('cfg-track-width')?.value)||null,
        };
        const preset = document.getElementById('cfg-swerve-preset')?.value;
        if (preset && SWERVE_PRESETS[preset] && preset!=='custom') {
            const p = SWERVE_PRESETS[preset];
            c.gearRatio = c.gearRatio||p.driveRatio;
            c.turnGearRatio = c.turnGearRatio||p.turnRatio;
            c.wheelDiameter = c.wheelDiameter||p.wheelDiam;
            c.swervePreset = preset;
        }
        const encType = document.getElementById('cfg-swerve-encoder')?.value;
        if (encType) c.swerveEncoderType = encType;
        if (s.chassis.type === 'swerve') {
            c.canIds = {
                fl_drive:parseInt(document.getElementById('can-fl-drive')?.value)||11,
                fl_turn:parseInt(document.getElementById('can-fl-turn')?.value)||12,
                fl_encoder:parseInt(document.getElementById('can-fl-enc')?.value)||13,
                fr_drive:parseInt(document.getElementById('can-fr-drive')?.value)||21,
                fr_turn:parseInt(document.getElementById('can-fr-turn')?.value)||22,
                fr_encoder:parseInt(document.getElementById('can-fr-enc')?.value)||23,
                bl_drive:parseInt(document.getElementById('can-bl-drive')?.value)||31,
                bl_turn:parseInt(document.getElementById('can-bl-turn')?.value)||32,
                bl_encoder:parseInt(document.getElementById('can-bl-enc')?.value)||33,
                br_drive:parseInt(document.getElementById('can-br-drive')?.value)||41,
                br_turn:parseInt(document.getElementById('can-br-turn')?.value)||42,
                br_encoder:parseInt(document.getElementById('can-br-enc')?.value)||43,
            };
        } else {
            c.tankCanIds = {
                left_leader:parseInt(document.getElementById('can-ll')?.value)||11,
                left_follower:parseInt(document.getElementById('can-lf')?.value)||12,
                right_leader:parseInt(document.getElementById('can-rl')?.value)||21,
                right_follower:parseInt(document.getElementById('can-rf')?.value)||22,
            };
        }
        appState.updateChassis(c);
    } else if (s.mechanisms.hasOwnProperty(type)) {
        _applyMechanism(type, s);
    } else if (type==='vision') {
        const v = appState.getState().vision;
        for (let i = 0; i < v.cameraCount; i++) {
            appState.updateCamera(i, {
                name: document.getElementById(`cam-${i}-name`)?.value||`cam${i}`,
                x: parseFloat(document.getElementById(`cam-${i}-x`)?.value)||0,
                y: parseFloat(document.getElementById(`cam-${i}-y`)?.value)||0,
                z: parseFloat(document.getElementById(`cam-${i}-z`)?.value)||0,
                roll: parseFloat(document.getElementById(`cam-${i}-roll`)?.value)||0,
                pitch: parseFloat(document.getElementById(`cam-${i}-pitch`)?.value)||0,
                yaw: parseFloat(document.getElementById(`cam-${i}-yaw`)?.value)||0,
            });
        }
        appState.updateVision({configured: v.enabled && v.system});
    } else if (type==='statemachine') {
        appState.updateStateMachine({jsonData: document.getElementById('cfg-sm-json')?.value||''});
    }
}

/**
 * Registry-driven mechanism config reader.
 * Reads common fields from DOM, then dispatches to type-specific readers.
 */
function _applyMechanism(type, s) {
    const m = s.mechanisms[type];
    if (!m) return;

    // Handle arm separately (joint-based, not motor-array)
    if (type === 'arm') {
        const dof = parseInt(document.getElementById('cfg-arm-dof')?.value) || m.dof;
        const joints = [];
        for (let i = 0; i < dof; i++) {
            const hasFollower = document.getElementById(`cfg-arm-joint-${i}-hasfollower`)?.checked || false;
            const motors = [
                {
                    type: document.getElementById(`cfg-arm-joint-${i}-leader-motor`)?.value || null,
                    canId: parseInt(document.getElementById(`cfg-arm-joint-${i}-leader-canid`)?.value) || (30 + i * 2),
                    inverted: document.getElementById(`cfg-arm-joint-${i}-leader-inv`)?.checked || false,
                    role: 'leader'
                }
            ];
            if (hasFollower) {
                motors.push({
                    type: document.getElementById(`cfg-arm-joint-${i}-follower-motor`)?.value || null,
                    canId: parseInt(document.getElementById(`cfg-arm-joint-${i}-follower-canid`)?.value) || (31 + i * 2),
                    inverted: document.getElementById(`cfg-arm-joint-${i}-follower-inv`)?.checked || false,
                    role: 'follower'
                });
            }
            joints.push({
                motors,
                gearRatio: parseFloat(document.getElementById(`cfg-arm-joint-${i}-ratio`)?.value) || null,
                encoder: document.getElementById(`cfg-arm-joint-${i}-encoder`)?.value || null,
                encoderId: parseInt(document.getElementById(`cfg-arm-joint-${i}-encoder-id`)?.value) || (31 + i * 2),
                motorConfig: {
                    currentLimit: parseInt(document.getElementById(`cfg-arm-joint-${i}-curlimit`)?.value) || 40,
                    brakeMode: true
                },
                softLimitFwd: parseFloat(document.getElementById(`cfg-arm-joint-${i}-softfwd`)?.value) || null,
                softLimitRev: parseFloat(document.getElementById(`cfg-arm-joint-${i}-softrev`)?.value) || null,
                pid: {
                    kP: parseFloat(document.getElementById(`cfg-arm-joint-${i}-kp`)?.value) || 0,
                    kI: parseFloat(document.getElementById(`cfg-arm-joint-${i}-ki`)?.value) || 0,
                    kD: parseFloat(document.getElementById(`cfg-arm-joint-${i}-kd`)?.value) || 0,
                    kS: 0, kV: 0, kA: 0
                }
            });
        }
        const attachedTo = document.getElementById(`cfg-${type}-attached`)?.value;
        appState.updateMechanism('arm', { dof, joints, attachedTo: attachedTo || m.attachedTo });
        return;
    }

    // Standard multi-motor mechanism
    m.motors.forEach((mot, i) => {
        appState.updateMotor(type, i, {
            type: document.getElementById(`cfg-${type}-motor-${i}`)?.value || null,
            canId: parseInt(document.getElementById(`cfg-${type}-canid-${i}`)?.value) || mot.canId,
            inverted: document.getElementById(`cfg-${type}-inv-${i}`)?.checked || false,
            role: document.getElementById(`cfg-${type}-role-${i}`)?.value || mot.role,
        });
    });

    const brakeVal = document.querySelector(`input[name="cfg-${type}-brakemode"]:checked`)?.value;
    const mc = {
        currentLimit: parseInt(document.getElementById(`cfg-${type}-curlimit`)?.value) || 40,
        brakeMode: brakeVal !== 'coast',
    };
    const pid = m.pid ? {
        kP: parseFloat(document.getElementById(`cfg-${type}-kp`)?.value) || 0,
        kI: parseFloat(document.getElementById(`cfg-${type}-ki`)?.value) || 0,
        kD: parseFloat(document.getElementById(`cfg-${type}-kd`)?.value) || 0,
        kS: parseFloat(document.getElementById(`cfg-${type}-ks`)?.value) || 0,
        kV: parseFloat(document.getElementById(`cfg-${type}-kv`)?.value) || 0,
        kA: parseFloat(document.getElementById(`cfg-${type}-ka`)?.value) || 0,
    } : undefined;
    const attachedTo = document.getElementById(`cfg-${type}-attached`)?.value;
    const u = {
        gearRatio: parseFloat(document.getElementById(`cfg-${type}-ratio`)?.value) || null,
        motorConfig: mc,
        attachedTo: attachedTo || m.attachedTo,
    };
    if (pid) u.pid = pid;
    if ('rampRate' in m) u.rampRate = parseFloat(document.getElementById(`cfg-${type}-ramp`)?.value) || 0;

    // Type-specific extras
    if (type === 'elevator') {
        u.encoder = document.getElementById('cfg-elevator-encoder')?.value || null;
        u.encoderId = parseInt(document.getElementById('cfg-elevator-enc-id')?.value) || 53;
        u.minHeight = parseFloat(document.getElementById('cfg-elevator-min')?.value) || 0;
        u.maxHeight = parseFloat(document.getElementById('cfg-elevator-max')?.value) || null;
        u.softLimitFwd = parseFloat(document.getElementById('cfg-elevator-softfwd')?.value) || null;
        u.softLimitRev = parseFloat(document.getElementById('cfg-elevator-softrev')?.value) || null;
        u.motionMaxVel = parseFloat(document.getElementById('cfg-elevator-mmvel')?.value) || null;
        u.motionMaxAccel = parseFloat(document.getElementById('cfg-elevator-mmacc')?.value) || null;
    }
    if (type === 'shooter') {
        u.maxRPM = parseInt(document.getElementById('cfg-shooter-rpm')?.value) || null;
        if (m.shooterType === 'adjustable' || m.shooterType === 'adjustable_turret') {
            u.pivotMotor = {
                type: document.getElementById('cfg-shooter-pivot-motor')?.value || null,
                canId: parseInt(document.getElementById('cfg-shooter-pivot-canid')?.value) || 24,
                inverted: document.getElementById('cfg-shooter-pivot-inv')?.checked || false,
            };
        }
        if (m.shooterType === 'adjustable_turret') {
            u.turretMotor = {
                type: document.getElementById('cfg-shooter-turret-motor')?.value || null,
                canId: parseInt(document.getElementById('cfg-shooter-turret-canid')?.value) || 25,
                inverted: document.getElementById('cfg-shooter-turret-inv')?.checked || false,
            };
        }
    }
    if (type === 'intake') {
        u.hasSensor = document.getElementById('cfg-intake-sensor')?.checked || false;
        u.sensorPortType = document.getElementById('cfg-intake-sensor-type')?.value || 'dio';
        u.sensorPort = parseInt(document.getElementById('cfg-intake-sensor-port')?.value) || 0;
    }
    if (type === 'launcher') {
        u.softLimitFwd = parseFloat(document.getElementById('cfg-launcher-softfwd')?.value) || null;
        u.softLimitRev = parseFloat(document.getElementById('cfg-launcher-softrev')?.value) || null;
        u.hasSensor = document.getElementById('cfg-launcher-sensor')?.checked || false;
        u.sensorPortType = document.getElementById('cfg-launcher-sensor-type')?.value || 'dio';
        u.sensorPort = parseInt(document.getElementById('cfg-launcher-sensor-port')?.value) || 1;
    }

    // Capture physics parameters (optional, for simulation fidelity)
    const massVal = parseFloat(document.getElementById(`cfg-${type}-mass`)?.value);
    const moiVal = parseFloat(document.getElementById(`cfg-${type}-moi`)?.value);
    if (!isNaN(massVal) || !isNaN(moiVal)) {
        u.physics = {
            massKg: isNaN(massVal) ? (m.physics?.massKg || null) : massVal,
            moiKgM2: isNaN(moiVal) ? (m.physics?.moiKgM2 || null) : moiVal,
        };
    }

    appState.updateMechanism(type, u);
}




function bindRadio(name, cb) {
    document.querySelectorAll(`[data-name="${name}"]`).forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll(`[data-name="${name}"]`).forEach(c=>c.classList.remove('active'));
            card.classList.add('active');
            cb(card.dataset.value);
        });
    });
}
