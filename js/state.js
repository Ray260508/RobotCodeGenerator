/**
 * Global State Management — Phase 6
 * Framework selection, multi-motor, detailed motor configs, simulation attach rules
 */
import { DEFAULT_CAN_IDS } from './constants.js';
import { initializeRegistry } from './mechanisms/index.js';
import { buildDefaultMechanismsState, getAllMechanisms } from './registry.js';

initializeRegistry();

function defaultMotorConfig() {
    return {
        currentLimit: 40,
        brakeMode: true,
        inverted: false,
        rampRate: 20,
    };
}

function defaultPIDConfig() {
    return { kP: 0, kI: 0, kD: 0, kS: 0, kV: 0, kA: 0 };
}

function defaultMotorEntry(type, canId, role = 'leader') {
    return { type, canId, role, inverted: false };
}

function makeDefaultCamera(index) {
    return { name: `cam${index}`, x: 0, y: 0, z: 0, roll: 0, pitch: 0, yaw: 0 };
}

const DEFAULT_STATE = {
    currentPage: 'landing',
    selectedMechanism: null,
    sidebarOpen: false,
    isMobile: false,

    // Framework: 'advantagekit' | 'commandbase'
    framework: 'advantagekit',
    stateMachineIntegration: false,

    chassis: {
        configured: false,
        type: null,
        driveMotor: null,
        turnMotor: null,
        gyro: null,
        gyroCanId: DEFAULT_CAN_IDS.gyro,
        gearRatio: null,
        turnGearRatio: null,
        wheelDiameter: null,
        trackWidth: null,
        maxSpeed: null,
        swervePreset: null,
        canIds: { ...DEFAULT_CAN_IDS.swerve },
        tankCanIds: { ...DEFAULT_CAN_IDS.tank },
        // Phoenix 6 swerve auto-detect
        usePhoenix6Swerve: false,
        swerveEncoderType: 'cancoder',
        // PathPlanner
        pathplannerEnabled: true,
        motorConfig: defaultMotorConfig(),
    },

    mechanisms: buildDefaultMechanismsState(),

    // Valid simulation parent targets per mechanism (sidebar only)
    attachmentRules: (() => {
        const rules = {};
        getAllMechanisms().forEach(m => {
            rules[m.id] = m.validAttachments;
        });
        return rules;
    })(),

    vision: {
        configured: false, enabled: false,
        system: null,
        limelightVersion: null,
        photonPlatform: null,
        cameraCount: 1,
        cameras: [makeDefaultCamera(0)],
    },

    statemachine: {
        configured: false, enabled: false,
        states: [], transitions: [], jsonData: '',
    },
};

class StateManager {
    constructor() {
        this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        this.listeners = [];
    }

    getState() { return this.state; }

    subscribe(listener) {
        this.listeners.push(listener);
        return () => { this.listeners = this.listeners.filter(l => l !== listener); };
    }

    notify(path) { this.listeners.forEach(fn => fn(this.state, path)); }

    loadState(savedState) {
        if (!savedState || typeof savedState !== 'object') return false;
        this.state = {
            ...JSON.parse(JSON.stringify(DEFAULT_STATE)),
            ...savedState,
            chassis: { ...JSON.parse(JSON.stringify(DEFAULT_STATE.chassis)), ...(savedState.chassis || {}) },
            mechanisms: { ...JSON.parse(JSON.stringify(DEFAULT_STATE.mechanisms)), ...(savedState.mechanisms || {}) },
            vision: { ...JSON.parse(JSON.stringify(DEFAULT_STATE.vision)), ...(savedState.vision || {}) },
            statemachine: { ...JSON.parse(JSON.stringify(DEFAULT_STATE.statemachine)), ...(savedState.statemachine || {}) },
        };
        this.state.currentPage = 'landing';
        this.state.selectedMechanism = null;
        this.state.sidebarOpen = false;
        this.notify('load');
        return true;
    }

    setPage(page) { this.state.currentPage = page; this.notify('currentPage'); }
    setFramework(fw) { this.state.framework = fw; this.notify('framework'); }
    setStateMachineIntegration(enabled) {
        this.state.stateMachineIntegration = !!enabled;
        this.notify('stateMachineIntegration');
    }

    selectMechanism(type) {
        this.state.selectedMechanism = type;
        this.state.sidebarOpen = !!type;
        this.notify('selectedMechanism');
    }

    closeSidebar() {
        this.state.sidebarOpen = false;
        this.state.selectedMechanism = null;
        this.notify('sidebarOpen');
    }

    updateChassis(updates) {
        Object.assign(this.state.chassis, updates);
        this.state.chassis.configured = this._isChassisValid();
        // Auto-detect Phoenix 6 swerve
        this._detectPhoenix6Swerve();
        this.notify('chassis');
    }

    updateMechanism(type, updates) {
        if (this.state.mechanisms[type]) {
            if (updates.attachedTo !== undefined) {
                const allowed = this.state.attachmentRules[type];
                if (allowed && !allowed.includes(updates.attachedTo)) {
                    updates.attachedTo = this.state.mechanisms[type].attachedTo;
                }
            }
            Object.assign(this.state.mechanisms[type], updates);
            this.state.mechanisms[type].configured = this._isMechValid(type);
            this.notify(`mechanisms.${type}`);
        }
    }

    addMotor(type, motorEntry) {
        if (this.state.mechanisms[type]) {
            this.state.mechanisms[type].motors.push(motorEntry);
            this.notify(`mechanisms.${type}`);
        }
    }

    removeMotor(type, index) {
        if (this.state.mechanisms[type] && index > 0) {
            this.state.mechanisms[type].motors.splice(index, 1);
            this.notify(`mechanisms.${type}`);
        }
    }

    updateMotor(type, index, updates) {
        if (this.state.mechanisms[type]?.motors[index]) {
            Object.assign(this.state.mechanisms[type].motors[index], updates);
            this.notify(`mechanisms.${type}`);
        }
    }

    updateVision(updates) {
        Object.assign(this.state.vision, updates);
        if (updates.cameraCount !== undefined) {
            const count = updates.cameraCount;
            while (this.state.vision.cameras.length < count) {
                this.state.vision.cameras.push(makeDefaultCamera(this.state.vision.cameras.length));
            }
            this.state.vision.cameras.length = count;
        }
        this.state.vision.configured = this._isVisionValid();
        this.notify('vision');
    }

    updateCamera(index, updates) {
        if (this.state.vision.cameras[index]) {
            Object.assign(this.state.vision.cameras[index], updates);
            this.notify('vision.cameras');
        }
    }

    updateStateMachine(updates) {
        Object.assign(this.state.statemachine, updates);
        
        let isValidJson = false;
        if (this.state.statemachine.jsonData) {
            try {
                const parsed = JSON.parse(this.state.statemachine.jsonData);
                if (typeof parsed === 'object' && !Array.isArray(parsed) && Object.keys(parsed).length > 0) {
                    isValidJson = true;
                    for (const [k, v] of Object.entries(parsed)) {
                        if (!Array.isArray(v)) isValidJson = false;
                        else {
                            for (const item of v) {
                                if (typeof item !== 'string') isValidJson = false;
                            }
                        }
                    }
                }
            } catch (e) {
                isValidJson = false;
            }
        }
        
        this.state.statemachine.configured = this.state.statemachine.enabled && isValidJson;
        this.notify('statemachine');
    }

    resetAll() {
        this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        this.state.isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
        this.notify('reset');
    }

    getConfiguredCount() {
        let count = 0;
        if (this.state.chassis.configured) count++;
        Object.values(this.state.mechanisms).forEach(m => { if (m.configured && m.enabled) count++; });
        if (this.state.vision.configured && this.state.vision.enabled) count++;
        if (this.state.statemachine.configured && this.state.statemachine.enabled) count++;
        return count;
    }

    getExpectedCount() {
        let count = 1; // Chassis is always expected
        Object.values(this.state.mechanisms).forEach(m => { if (m.enabled) count++; });
        if (this.state.vision.enabled) count++;
        if (this.state.statemachine.enabled) count++;
        return count;
    }

    _isChassisValid() {
        const c = this.state.chassis;
        return !!(c.type && c.driveMotor);
    }

    _isMechValid(type) {
        const m = this.state.mechanisms[type];
        if (type === 'arm') {
            if (!m?.enabled) return false;
            if (!Array.isArray(m.joints) || m.joints.length < 1) return false;
            return m.joints.every(j => Array.isArray(j.motors) && j.motors.length > 0 && !!j.motors[0]?.type);
        }
        return !!(m.enabled && m.motors.length > 0 && m.motors[0].type);
    }

    _isVisionValid() {
        const v = this.state.vision;
        if (!v.enabled) return false;
        if (v.system === 'limelight') return !!v.limelightVersion;
        if (v.system === 'photonvision') return !!v.photonPlatform;
        return false;
    }

    _detectPhoenix6Swerve() {
        const c = this.state.chassis;
        if (c.type !== 'swerve') { c.usePhoenix6Swerve = false; return; }
        const isCTRE = (motorKey) => motorKey && motorKey.startsWith('talonfx');
        const encoderIsCANCoder = c.swerveEncoderType === 'cancoder';
        c.usePhoenix6Swerve = isCTRE(c.driveMotor) && isCTRE(c.turnMotor) && encoderIsCANCoder;
    }
}

const appState = new StateManager();
export default appState;
