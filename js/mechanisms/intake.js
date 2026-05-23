import { DEFAULT_CAN_IDS } from '../constants.js';

export const intakeMechanism = {
    id: 'intake',
    name: 'Intake',
    description: 'Floor intake mechanism',
    defaultState: {
        configured: false, enabled: false,
        motors: [{ type: null, canId: DEFAULT_CAN_IDS.intake.motor, role: 'leader', inverted: false }],
        gearRatio: null,
        hasSensor: false, sensorPortType: 'dio', sensorPort: DEFAULT_CAN_IDS.intake.sensor,
        motorConfig: { currentLimit: 30, brakeMode: true, inverted: false, rampRate: 20 },
        rampRate: 20,
        pid: null,
        attachedTo: 'chassis',
    },
    validAttachments: ['chassis'],
};
