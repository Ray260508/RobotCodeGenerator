import { DEFAULT_CAN_IDS } from '../constants.js';

export const launcherMechanism = {
    id: 'launcher',
    name: 'Launcher',
    description: 'Game piece launcher',
    defaultState: {
        configured: false, enabled: false,
        motors: [{ type: null, canId: DEFAULT_CAN_IDS.launcher.motor, role: 'leader', inverted: false }],
        hasSensor: false, sensorPortType: 'dio', sensorPort: DEFAULT_CAN_IDS.launcher.sensor,
        motorConfig: { currentLimit: 20, brakeMode: true, inverted: false, rampRate: 20 },
        pid: { kP: 0, kI: 0, kD: 0, kS: 0, kV: 0, kA: 0 },
        rampRate: 20,
        softLimitFwd: null, softLimitRev: null,
        attachedTo: 'arm',
    },
    validAttachments: ['elevator', 'arm', 'intake'],
};
