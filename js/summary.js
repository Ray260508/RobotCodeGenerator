/**
 * Configuration Summary — review panel + validation + code preview
 */
import { MOTORS, GYROS, CHASSIS_TYPES, LIMELIGHT_VERSIONS } from './constants.js';
import { validateConfig } from './validator.js';
import { GEN_MODE } from './manifest.js';

export function renderSummary(state) {
    const body = document.getElementById('summary-body');
    if (!body) return;

    const { errors, warnings } = validateConfig(state);
    let html = '';

    // Tab bar
    html += `<div class="summary-tabs">
        <button class="summary-tab active" data-tab="review">REVIEW</button>
        <button class="summary-tab" data-tab="preview">CODE PREVIEW</button>
    </div>`;

    // ===== REVIEW TAB =====
    html += `<div class="summary-tab-content active" id="tab-review">`;

    // Validation alerts
    if (errors.length > 0) {
        html += `<div class="summary-alert summary-alert-error">
            <strong>⚠ ${errors.length} Error${errors.length>1?'s':''}</strong>
            ${errors.map(e => `<div class="alert-item">• <strong>${e.section}:</strong> ${e.msg}</div>`).join('')}
        </div>`;
    }
    if (warnings.length > 0) {
        html += `<div class="summary-alert summary-alert-warn">
            <strong>⚡ ${warnings.length} Warning${warnings.length>1?'s':''}</strong>
            ${warnings.map(w => `<div class="alert-item">• <strong>${w.section}:</strong> ${w.msg}</div>`).join('')}
        </div>`;
    }
    if (errors.length === 0 && warnings.length === 0) {
        html += `<div class="summary-alert summary-alert-ok"><strong>✓ All checks passed</strong></div>`;
    }

    const fwLabel = state.framework === 'commandbase' ? 'CommandBase (simple)' : 'AdvantageKit (IO + replay)';
    html += `<div class="summary-section">
        <div class="summary-section-title">CODE FRAMEWORK</div>
        <div class="summary-grid">
            <div class="summary-item"><span class="summary-key">Pattern</span><span class="summary-val">${fwLabel}</span></div>
            <div class="summary-item"><span class="summary-key">StateMachine</span><span class="summary-val">${state.stateMachineIntegration ? 'State-driven commands' : 'Standard commands'}</span></div>
        </div>
    </div>`;

    // Chassis
    if (state.chassis.configured) {
        const ct = CHASSIS_TYPES[state.chassis.type];
        const dm = MOTORS[state.chassis.driveMotor];
        const gy = GYROS[state.chassis.gyro];
        html += `<div class="summary-section">
            <div class="summary-section-title">DRIVETRAIN</div>
            <div class="summary-grid">
                <div class="summary-item"><span class="summary-key">Type</span><span class="summary-val">${ct?.name||state.chassis.type}</span></div>
                <div class="summary-item"><span class="summary-key">Drive Motor</span><span class="summary-val">${dm?.name||'—'}</span></div>
                ${state.chassis.type==='swerve'?`<div class="summary-item"><span class="summary-key">Turn Motor</span><span class="summary-val">${MOTORS[state.chassis.turnMotor]?.name||'—'}</span></div>`:''}
                <div class="summary-item"><span class="summary-key">Gyro</span><span class="summary-val">${gy?.name||'—'} (ID: ${state.chassis.gyroCanId})</span></div>
                <div class="summary-item"><span class="summary-key">Gear Ratio</span><span class="summary-val">${state.chassis.gearRatio||'—'}</span></div>
                <div class="summary-item"><span class="summary-key">Wheel ⌀</span><span class="summary-val">${state.chassis.wheelDiameter?state.chassis.wheelDiameter+'m':'—'}</span></div>
                <div class="summary-item"><span class="summary-key">Max Speed</span><span class="summary-val">${state.chassis.maxSpeed?state.chassis.maxSpeed+' m/s':'—'}</span></div>
                ${state.chassis.type==='swerve'?`<div class="summary-item"><span class="summary-key">Drive Stack</span><span class="summary-val">${state.chassis.usePhoenix6Swerve?'Phoenix 6 SwerveDrivetrain':'WPILib swerve'}</span></div>`:''}
            </div>`;
        if (state.chassis.type==='swerve' && state.chassis.canIds) {
            const ids = state.chassis.canIds;
            html += `<div class="summary-sub-title">CAN IDs</div><div class="summary-can-grid">
                ${['fl','fr','bl','br'].map(m=>`<div class="summary-can-mod"><strong>${m.toUpperCase()}</strong> D:${ids[m+'_drive']} T:${ids[m+'_turn']} E:${ids[m+'_encoder']}</div>`).join('')}
            </div>`;
        }
        html += `</div>`;
    } else {
        html += `<div class="summary-section summary-missing"><div class="summary-section-title">⚠ DRIVETRAIN</div><p>Not configured</p></div>`;
    }

    // Mechanisms
    Object.entries(state.mechanisms).forEach(([type, m]) => {
        if (!m.enabled) return;
        
        let subHtml = '';
        if (type === 'arm') {
            if (m.configured) {
                let jointsHtml = '';
                m.joints.forEach((j, i) => {
                    const motorLines = j.motors.map(mot => {
                        const mo = MOTORS[mot.type];
                        return `${mot.role}: ${mo?.name || '—'} (CAN ${mot.canId})${mot.inverted ? ' inv' : ''}`;
                    }).join('<br>');
                    jointsHtml += `<div style="margin-top: 8px;">
                        <strong>Joint ${i+1}:</strong><br>
                        - Motors: ${motorLines}<br>
                        - Gear Ratio: ${j.gearRatio || '—'}<br>
                        - Encoder: ${j.encoder || 'Integrated'} (ID: ${j.encoderId})<br>
                        - PID: kP=${j.pid.kP}, kI=${j.pid.kI}, kD=${j.pid.kD}
                    </div>`;
                });
                subHtml = `<div class="summary-grid" style="display:block">
                    <div class="summary-item summary-item-wide"><span class="summary-key">DoF</span><span class="summary-val">${m.dof}</span></div>
                    <div style="font-size:0.8rem; line-height: 1.4; color: var(--text-secondary); padding: 8px 12px; background: rgba(255,255,255,0.02); border-radius: 4px; margin-top: 8px;">
                        ${jointsHtml}
                    </div>
                    <div class="summary-item"><span class="summary-key">Sim attach</span><span class="summary-val">${m.attachedTo || 'chassis'}</span></div>
                </div>`;
            } else {
                subHtml = '<p style="color:var(--text-secondary);font-size:0.78rem">Enabled but not yet configured — click card to set up</p>';
            }
        } else {
            const motors = m.motors || [];
            const motorLines = motors.map(mot => {
                const mo = MOTORS[mot.type];
                return `${mot.role}: ${mo?.name || '—'} (CAN ${mot.canId})${mot.inverted ? ' inv' : ''}`;
            }).join('<br>');
            subHtml = m.configured ? `<div class="summary-grid">
                <div class="summary-item summary-item-wide"><span class="summary-key">Motors</span><span class="summary-val">${motorLines}</span></div>
                ${m.gearRatio?`<div class="summary-item"><span class="summary-key">Ratio</span><span class="summary-val">${m.gearRatio}</span></div>`:''}
                ${type==='elevator'?`<div class="summary-item"><span class="summary-key">Height</span><span class="summary-val">${m.minHeight||0}–${m.maxHeight||'?'} m</span></div>`:''}
                ${type==='shooter'&&m.maxRPM?`<div class="summary-item"><span class="summary-key">Max RPM</span><span class="summary-val">${m.maxRPM}</span></div>`:''}
                ${m.hasSensor?`<div class="summary-item"><span class="summary-key">Sensor</span><span class="summary-val">${(m.sensorPortType||'dio').toUpperCase()} port ${m.sensorPort}</span></div>`:''}
                ${state.attachmentRules?.[type]?`<div class="summary-item"><span class="summary-key">Sim attach</span><span class="summary-val">${m.attachedTo || 'chassis'}</span></div>`:''}
            </div>` : '<p style="color:var(--text-secondary);font-size:0.78rem">Enabled but not yet configured — click card to set up</p>';
        }

        html += `<div class="summary-section ${m.configured?'':'summary-missing'}">
            <div class="summary-section-title">${type.toUpperCase()} ${!m.configured?'— Not configured':''}</div>
            ${subHtml}
        </div>`;
    });

    // Vision
    if (state.vision.enabled) {
        if (state.vision.configured) {
            html += `<div class="summary-section">
                <div class="summary-section-title">VISION</div>
                <div class="summary-grid">
                    <div class="summary-item"><span class="summary-key">System</span><span class="summary-val">${state.vision.system==='limelight'?'Limelight '+state.vision.limelightVersion:'PhotonVision'}</span></div>
                    ${state.vision.system==='photonvision'?`<div class="summary-item"><span class="summary-key">Platform</span><span class="summary-val">${state.vision.photonPlatform}</span></div>`:''}
                    <div class="summary-item"><span class="summary-key">Cameras</span><span class="summary-val">${state.vision.cameraCount}</span></div>
                </div>`;
            (state.vision.cameras||[]).forEach((cam, i) => {
                html += `<div class="summary-cam"><strong>${cam.name}</strong> — T(${cam.x}, ${cam.y}, ${cam.z})m  R(${cam.roll}°, ${cam.pitch}°, ${cam.yaw}°)</div>`;
            });
            html += `</div>`;
        } else {
            html += `<div class="summary-section summary-missing"><div class="summary-section-title">⚠ VISION — Not configured</div></div>`;
        }
    }

    // StateMachine
    if (state.statemachine.enabled) {
        html += `<div class="summary-section"><div class="summary-section-title">STATE MACHINE</div><p style="color:var(--text-secondary);font-size:0.8rem">${state.statemachine.configured?'✓ JSON attached':'⚠ Enabled but no JSON — will generate skeleton'}</p></div>`;
    }

    // File count
    let fileCount = 4; // Main, Robot, Constants, RobotContainer
    if (state.chassis.configured) fileCount += 5;
    if (state.chassis.configured && state.chassis.pathplannerEnabled !== false && state.chassis.type === 'swerve') fileCount += 1;
    if (state.stateMachineIntegration && state.statemachine.configured) fileCount += 1;
    Object.values(state.mechanisms).forEach(m => { if (m.configured) fileCount += 4; });
    if (state.vision.configured) fileCount += 4;
    if (state.statemachine.configured) fileCount += 1;
    html += `<div class="summary-section" style="text-align:center;opacity:0.6;font-size:0.75rem">
        <strong>${fileCount} Java files</strong> will be generated
    </div>`;

    // PID & SysId Reminder
    html += `<div class="summary-section" style="background: rgba(0,255,255,0.05); border: 1px solid rgba(0,255,255,0.2);">
        <div class="summary-section-title" style="color: var(--accent-cyan)">ℹ️ PID & FEEDFORWARD TUNING</div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">
            Don't worry if you left the PID/FF values at 0! The generated code includes full <strong>SysId Integration</strong>.
            You can use the SysId tool to characterize your robot and find the optimal values.<br><br>
            <strong>How to update later:</strong> You can directly modify the constants in <code>Constants.java</code> (e.g. <code>ShooterConstants.kP</code>).
            <br><br>
            <a href="javascript:void(0)" onclick="document.getElementById('nav-sysid').click()" style="color: var(--accent-cyan); text-decoration: underline;">Click here to view the SysId Guide</a>.
        </p>
    </div>`;

    // Generation mode selector
    html += `<div class="summary-section" style="background: rgba(213,0,28,0.06); border: 1px solid rgba(213,0,28,0.25);">
        <div class="summary-section-title" style="color: var(--accent-red)">⚙️ GENERATION MODE</div>
        <div style="display:flex;flex-direction:column;gap:10px;padding:4px 0;">
            <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;">
                <input type="radio" name="gen-mode" value="full" checked style="margin-top:3px;accent-color:var(--accent-red);">
                <div>
                    <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary)">Full Project</div>
                    <div style="font-size:0.75rem;color:var(--text-secondary)">Generate the complete project from scratch. Use for first-time generation.</div>
                </div>
            </label>
            <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;">
                <input type="radio" name="gen-mode" value="add" style="margin-top:3px;accent-color:var(--accent-red);">
                <div>
                    <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary)">Add Mechanism</div>
                    <div style="font-size:0.75rem;color:var(--text-secondary)">Generate only new mechanism subsystem files + merge instructions. Use when adding to an existing project.</div>
                </div>
            </label>
            <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;">
                <input type="radio" name="gen-mode" value="libs" style="margin-top:3px;accent-color:var(--accent-red);">
                <div>
                    <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary)">Update Libraries Only</div>
                    <div style="font-size:0.75rem;color:var(--text-secondary)">Generate only build.gradle + vendordeps. Use to update library versions.</div>
                </div>
            </label>
        </div>
    </div>`;

    html += `<details class="summary-code-preview">
        <summary>Generated Code Preview (Constants.java)</summary>
        <pre class="preview-code summary-collapsible-preview"><code id="summary-collapsible-preview-content"></code></pre>
    </details>`;

    html += `</div>`; // close review tab

    // ===== CODE PREVIEW TAB =====
    html += `<div class="summary-tab-content" id="tab-preview">
        <div class="preview-file-list">
            <div class="preview-file active" data-file="Constants">Constants.java</div>
            <div class="preview-file" data-file="RobotContainer">RobotContainer.java</div>
            <div class="preview-file" data-file="Robot">Robot.java</div>
        </div>
        <pre class="preview-code" id="preview-code"><code id="preview-code-content">Click a file to preview</code></pre>
    </div>`;

    body.innerHTML = html;

    // Tab switching
    body.querySelectorAll('.summary-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            body.querySelectorAll('.summary-tab').forEach(t => t.classList.remove('active'));
            body.querySelectorAll('.summary-tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            body.querySelector(`#tab-${tab.dataset.tab}`)?.classList.add('active');
        });
    });

    // File preview switching
    body.querySelectorAll('.preview-file').forEach(f => {
        f.addEventListener('click', () => {
            body.querySelectorAll('.preview-file').forEach(x => x.classList.remove('active'));
            f.classList.add('active');
            const code = body.querySelector('#preview-code-content');
            code.textContent = generatePreview(state, f.dataset.file);
        });
    });

    // Show Constants by default
    const codeEl = body.querySelector('#preview-code-content');
    if (codeEl) codeEl.textContent = generatePreview(state, 'Constants');
    const collapsibleCodeEl = body.querySelector('#summary-collapsible-preview-content');
    if (collapsibleCodeEl) collapsibleCodeEl.textContent = generatePreview(state, 'Constants');

    // Disable confirm if errors
    const confirmBtn = document.getElementById('summary-confirm');
    if (confirmBtn && errors.length > 0) {
        confirmBtn.disabled = true;
        confirmBtn.title = 'Fix errors before generating';
    } else if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.title = '';
    }
}

function generatePreview(state, file) {
    if (file === 'Constants') return previewConstants(state);
    if (file === 'RobotContainer') return previewRobotContainer(state);
    if (file === 'Robot') return previewRobot();
    return '';
}

function previewConstants(s) {
    let o = `package frc.robot;\n\npublic final class Constants {\n    private Constants() {}\n\n`;
    if (s.chassis.configured) {
        o += `    public static final class DriveConstants {\n`;
        o += `        public static final String DRIVE_TYPE = "${s.chassis.type}";\n`;
        if (s.chassis.maxSpeed) o += `        public static final double MAX_SPEED_MPS = ${s.chassis.maxSpeed};\n`;
        if (s.chassis.gearRatio) o += `        public static final double DRIVE_GEAR_RATIO = ${s.chassis.gearRatio};\n`;
        if (s.chassis.type === 'swerve' && s.chassis.canIds) {
            ['fl','fr','bl','br'].forEach(m => {
                const M = m.toUpperCase();
                o += `        public static final int ${M}_DRIVE_ID = ${s.chassis.canIds[m+'_drive']};\n`;
                o += `        public static final int ${M}_TURN_ID = ${s.chassis.canIds[m+'_turn']};\n`;
                o += `        public static final int ${M}_ENCODER_ID = ${s.chassis.canIds[m+'_encoder']};\n`;
            });
        }
        o += `        public static final int GYRO_ID = ${s.chassis.gyroCanId};\n`;
        o += `    }\n\n`;
    }
    Object.entries(s.mechanisms).forEach(([type, m]) => {
        if (!m.configured) return;
        const N = type.charAt(0).toUpperCase() + type.slice(1);
        o += `    public static final class ${N}Constants {\n`;
        (m.motors || []).forEach((mot, i) => {
            const label = i === 0 ? 'MOTOR_ID' : `FOLLOWER_${i}_ID`;
            o += `        public static final int ${label} = ${mot.canId};\n`;
        });
        if (m.pid) o += `        public static final double kP = ${m.pid.kP || 0};\n        public static final double kI = ${m.pid.kI || 0};\n        public static final double kD = ${m.pid.kD || 0};\n`;
        o += `    }\n\n`;
    });
    o += `}\n`;
    return o;
}

function previewRobotContainer(s) {
    let imp = `package frc.robot;\nimport edu.wpi.first.wpilibj2.command.*;\nimport edu.wpi.first.wpilibj2.command.button.CommandXboxController;\n`;
    let fields = '', init = '';
    if (s.chassis.configured) {
        imp += `import frc.robot.subsystems.drive.*;\nimport frc.robot.commands.DriveCommands;\n`;
        fields += `    private final Drive drive;\n`;
        init += `        drive = new Drive(Robot.isReal() ? new DriveIOReal() : new DriveIOSim());\n`;
    }
    Object.entries(s.mechanisms).forEach(([t, m]) => {
        if (!m.configured) return;
        const N = t.charAt(0).toUpperCase() + t.slice(1);
        imp += `import frc.robot.subsystems.${t}.*;\n`;
        fields += `    private final ${N} ${t};\n`;
        init += `        ${t} = new ${N}(Robot.isReal() ? new ${N}IOReal() : new ${N}IOSim());\n`;
    });
    return `${imp}\npublic class RobotContainer {\n    private final CommandXboxController controller = new CommandXboxController(0);\n${fields}\n    public RobotContainer() {\n${init}        configureBindings();\n    }\n\n    private void configureBindings() {\n        // TODO: Add button bindings\n    }\n\n    public Command getAutonomousCommand() {\n        return Commands.print("No autonomous configured");\n    }\n}\n`;
}

function previewRobot() {
    return `package frc.robot;\n\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.CommandScheduler;\nimport org.littletonrobotics.junction.LoggedRobot;\nimport org.littletonrobotics.junction.Logger;\n\npublic class Robot extends LoggedRobot {\n    private Command autonomousCommand;\n    private RobotContainer robotContainer;\n\n    @Override\n    public void robotInit() {\n        Logger.start();\n        robotContainer = new RobotContainer();\n    }\n\n    @Override\n    public void robotPeriodic() {\n        CommandScheduler.getInstance().run();\n    }\n\n    @Override\n    public void autonomousInit() {\n        autonomousCommand = robotContainer.getAutonomousCommand();\n        if (autonomousCommand != null) autonomousCommand.schedule();\n    }\n\n    @Override\n    public void teleopInit() {\n        if (autonomousCommand != null) autonomousCommand.cancel();\n    }\n\n    @Override\n    public void testInit() {\n        CommandScheduler.getInstance().cancelAll();\n    }\n}\n`;
}
