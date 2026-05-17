/**
 * Configuration Validator — checks for errors before code generation
 */
import { MOTORS } from './constants.js';

export function validateConfig(state) {
    const errors = [];
    const warnings = [];

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
    }

    // CAN ID conflict check
    const canIds = new Map();
    function addCanId(label, id) {
        if (id === undefined || id === null || id === '') return;
        const n = Number(id);
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
        // Multi-motor CAN IDs
        (m.motors || []).forEach((mot, i) => {
            addCanId(`${name} Motor ${i}`, mot.canId);
        });
        if (m.encoderId) addCanId(`${name} Encoder`, m.encoderId);

        if (!m.motors?.length || !m.motors[0]?.type) warnings.push({ section: name, msg: 'No motor selected' });
    });

    // Vision checks
    if (state.vision.enabled && state.vision.configured) {
        if (!state.vision.system) errors.push({ section: 'Vision', msg: 'Select Limelight or PhotonVision' });
        if (state.vision.cameraCount < 1) warnings.push({ section: 'Vision', msg: 'No cameras configured' });
    }

    return { errors, warnings, isValid: errors.length === 0 };
}
