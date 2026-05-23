import { DEFAULT_CAN_IDS } from '../constants.js';

export const armMechanism = {
    id: 'arm',
    name: 'Arm',
    description: 'Multi-jointed arm mechanism',
    defaultState: {
        configured: false, enabled: false,
        dof: 1,
        joints: [
            {
                motors: [{ type: null, canId: 30, role: 'leader', inverted: false }],
                encoder: null, encoderId: 31,
                gearRatio: null,
                motorConfig: { currentLimit: 40, brakeMode: true, inverted: false, rampRate: 20 },
                pid: { kP: 0, kI: 0, kD: 0, kS: 0, kV: 0, kA: 0 },
                softLimitFwd: null, softLimitRev: null,
            }
        ],
        attachedTo: 'chassis',
    },
    validAttachments: ['chassis', 'elevator'],
};
