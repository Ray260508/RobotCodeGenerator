import { DEFAULT_CAN_IDS } from '../constants.js';

export const shooterMechanism = {
    id: 'shooter',
    name: 'Shooter',
    description: 'Flywheel shooter mechanism',
    defaultState: {
        configured: false, enabled: false,
        motors: [{ type: null, canId: DEFAULT_CAN_IDS.shooter.motor, role: 'leader', inverted: false }],
        shooterType: 'adjustable',
        turretMotor: { type: null, canId: 25, role: 'turret', inverted: false },
        encoder: null, gearRatio: null, maxRPM: null,
        motorConfig: { currentLimit: 60, brakeMode: true, inverted: false, rampRate: 20 },
        pid: { kP: 0, kI: 0, kD: 0, kS: 0, kV: 0, kA: 0 },
        rampRate: 20,
        attachedTo: 'chassis',
    },
    validAttachments: ['chassis', 'elevator', 'arm'],
};
