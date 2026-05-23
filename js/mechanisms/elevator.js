import { DEFAULT_CAN_IDS } from '../constants.js';

export const elevatorMechanism = {
    id: 'elevator',
    name: 'Elevator',
    description: 'Linear lifting mechanism',
    defaultState: {
        configured: false,
        enabled: false,
        motors: [{ type: null, canId: DEFAULT_CAN_IDS.elevator.motor, role: 'leader', inverted: false }],
        encoder: null,
        gearRatio: null,
        maxHeight: null,
        minHeight: 0,
        encoderId: DEFAULT_CAN_IDS.elevator.encoder,
        motorConfig: { currentLimit: 40, brakeMode: true, inverted: false, rampRate: 20 },
        pid: { kP: 0, kI: 0, kD: 0, kS: 0, kV: 0, kA: 0 },
        rampRate: 20,
        softLimitFwd: null,
        softLimitRev: null,
        motionMaxVel: null,
        motionMaxAccel: null,
        attachedTo: 'chassis',
    },
    validAttachments: ['chassis'],
    
    // Future: sidebar render hooks, codegen hooks, viewport 3D hooks
};
