/**
 * Configuration Validator — checks for errors before code generation
 */
import { MOTORS } from './constants.js';

export function validateConfig(state) {
    const errors = [];
    const warnings = [];
    const isFiniteNumber = (n) => Number.isFinite(Number(n));
    const isNonNegativeFinite = (n) => isFiniteNumber(n) && Number(n) >= 0;

    // Chassis required
    if (!state.chassis.configured) {
        errors.push({ section: 'Chassis', msg: 'Drivetrain must be configured' });
    } else {
        if (!state.chassis.driveMotor) errors.push({ section: 'Chassis', msg: 'Select a drive motor' });
        if (!state.chassis.gyro) errors.push({ section: 'Chassis', msg: 'Select a gyro' });
        if (state.chassis.type === 'swerve' && !state.chassis.turnMotor) {
            errors.push({ section: 'Chassis', msg: 'Select a turn motor for swerve' });
        }
        if (!state.chassis.gearRatio) warnings.push({ section: 'Chassis', msg: 'Gear ratio not set — defaults to 1.0' });
        if (state.chassis.gearRatio !== null && state.chassis.gearRatio !== undefined && Number(state.chassis.gearRatio) <= 0) {
            errors.push({ section: 'Chassis', msg: 'Drive gear ratio must be greater than 0' });
        }
    }

    // CAN ID conflict check
    const canIds = new Map();
    function addCanId(label, id) {
        if (id === undefined || id === null || id === '') return;
        const n = Number(id);
        if (!Number.isInteger(n) || n < 0 || n > 62) {
            errors.push({ section: 'CAN IDs', msg: `${label}: CAN ID must be an integer from 0 to 62` });
            return;
        }
        if (canIds.has(n)) {
            errors.push({ section: 'CAN IDs', msg: `Conflict: ID ${n} used by "${canIds.get(n)}" and "${label}"` });
        } else {
            canIds.set(n, label);
        }
    }

    if (state.chassis.configured) {
        if (state.chassis.type === 'swerve' && state.chassis.canIds) {
            const ids = state.chassis.canIds;
            ['fl','fr','bl','br'].forEach(m => {
                const M = m.toUpperCase();
                addCanId(`${M} Drive`, ids[m+'_drive']);
                addCanId(`${M} Turn`, ids[m+'_turn']);
                addCanId(`${M} Encoder`, ids[m+'_encoder']);
            });
        }
        addCanId('Gyro', state.chassis.gyroCanId);
    }

    Object.entries(state.mechanisms).forEach(([type, m]) => {
        if (!m.enabled || !m.configured) return;
        const name = type.charAt(0).toUpperCase() + type.slice(1);
        if (type === 'arm') {
            m.joints.forEach((j, idx) => {
                j.motors.forEach((mot, i) => {
                    addCanId(`Arm Joint ${idx+1} Motor ${i}`, mot.canId);
                });
                if (j.encoderId) addCanId(`Arm Joint ${idx+1} Encoder`, j.encoderId);
                if (!j.motors?.length || !j.motors[0]?.type) warnings.push({ section: `Arm Joint ${idx+1}`, msg: 'No motor selected' });
            });
            return;
        }
        // Multi-motor CAN IDs
        (m.motors || []).forEach((mot, i) => {
            addCanId(`${name} Motor ${i}`, mot.canId);
        });
        if (m.encoderId) addCanId(`${name} Encoder`, m.encoderId);

        if (!m.motors?.length || !m.motors[0]?.type) warnings.push({ section: name, msg: 'No motor selected' });
        if (m.gearRatio !== null && m.gearRatio !== undefined && Number(m.gearRatio) <= 0) {
            errors.push({ section: name, msg: 'Gear ratio must be greater than 0' });
        }
        if (m.pid) {
            const checks = [
                ['kP', m.pid.kP], ['kI', m.pid.kI], ['kD', m.pid.kD],
                ['kS', m.pid.kS], ['kV', m.pid.kV], ['kA', m.pid.kA],
            ];
            checks.forEach(([k, val]) => {
                if (val !== undefined && val !== null && val !== '' && !isNonNegativeFinite(val)) {
                    errors.push({ section: name, msg: `${k} must be a finite non-negative number` });
                }
            });
        }
    });

    // Vision checks
    if (state.vision.enabled && state.vision.configured) {
        if (!state.vision.system) errors.push({ section: 'Vision', msg: 'Select Limelight or PhotonVision' });
        if (state.vision.cameraCount < 1) warnings.push({ section: 'Vision', msg: 'No cameras configured' });
    }

    return { errors, warnings, isValid: errors.length === 0 };
}
