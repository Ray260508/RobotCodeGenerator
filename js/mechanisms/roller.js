import { DEFAULT_CAN_IDS } from '../constants.js';

export const rollerMechanism = {
    id: 'roller',
    name: 'Roller',
    description: 'Simple roller mechanism',
    defaultState: {
        configured: false, enabled: false,
        motors: [{ type: null, canId: DEFAULT_CAN_IDS.roller.motor, role: 'leader', inverted: false }],
        gearRatio: null,
        motorConfig: { currentLimit: 30, brakeMode: true, inverted: false, rampRate: 20 },
        rampRate: 20,
        pid: null,
        attachedTo: 'chassis',
    },
    validAttachments: ['chassis', 'elevator', 'arm'],
};
