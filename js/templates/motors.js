/**
 * Java motor hardware templates — CTRE TalonFX / REV SparkMax
 */
import { MOTORS } from '../constants.js';
import { VERSION_PROFILE } from '../versions.js';

export function isCTRE(motorKey) {
    return motorKey && MOTORS[motorKey]?.vendor === 'ctre';
}

export function isREV(motorKey) {
    return motorKey && MOTORS[motorKey]?.vendor === 'rev';
}

export function motorImports(motorKey) {
    if (isCTRE(motorKey)) {
        return VERSION_PROFILE.motorApi.ctre.imports.map(i => `import ${i};`).join('\n') + '\n';
    }
    if (isREV(motorKey)) {
        return VERSION_PROFILE.motorApi.rev.imports.map(i => `import ${i};`).join('\n') + '\n';
    }
    return '';
}

export function genMotorFields(motors, constPrefix) {
    let s = '';
    motors.forEach((mot, i) => {
        const id = i === 0 ? 'leader' : `follower${i}`;
        const canConst = i === 0 ? 'MOTOR_ID' : `FOLLOWER_${i}_ID`;
        if (isCTRE(mot.type)) {
            s += `    private final TalonFX ${id} = new TalonFX(${constPrefix}.${canConst});\n`;
            if (i === 0) s += `    private final VoltageOut voltageReq = new VoltageOut(0);\n`;
        } else if (isREV(mot.type)) {
            s += `    private final SparkMax ${id} = new SparkMax(${constPrefix}.${canConst}, MotorType.kBrushless);\n`;
            if (i === 0) s += `    private final RelativeEncoder encoder = leader.getEncoder();\n`;
        }
    });
    return s;
}

export function genMotorInit(motors, constPrefix) {
    let blocks = '';
    motors.forEach((mot, i) => {
        const id = i === 0 ? 'leader' : `follower${i}`;
        const inv = mot.inverted ? 'InvertedValue.Clockwise_Positive' : 'InvertedValue.CounterClockwise_Positive';
        if (isCTRE(mot.type)) {
            blocks += `
        {
            var cfg = new TalonFXConfiguration();
            cfg.CurrentLimits.StatorCurrentLimit = ${constPrefix}.CURRENT_LIMIT;
            cfg.CurrentLimits.StatorCurrentLimitEnable = true;
            cfg.MotorOutput.NeutralMode = ${constPrefix}.BRAKE_MODE ? NeutralModeValue.Brake : NeutralModeValue.Coast;
            cfg.MotorOutput.Inverted = ${inv};
            ${id}.getConfigurator().apply(cfg);
            ${id}.setPosition(0);
        }`;
        } else if (isREV(mot.type)) {
            blocks += `
        {
            var cfg = new SparkMaxConfig();
            cfg.idleMode(${constPrefix}.BRAKE_MODE ? IdleMode.kBrake : IdleMode.kCoast);
            cfg.smartCurrentLimit(${constPrefix}.CURRENT_LIMIT);
            ${id}.configure(cfg, null, null);
            ${id}.getEncoder().setPosition(0);
        }`;
        }
    });
    return blocks;
}

export function genSetVoltage(motors) {
    const lead = motors[0];
    if (isCTRE(lead?.type)) {
        return `        leader.setControl(voltageReq.withOutput(volts));
        for (int i = 1; i < followerCount; i++) followers[i - 1].setControl(voltageReq.withOutput(volts));`;
    }
    if (isREV(lead?.type)) {
        return `        leader.set(volts / 12.0);
        for (int i = 1; i < followerCount; i++) followers[i - 1].set(volts / 12.0);`;
    }
    return `        // Configure motor type in Constants`;
}

export function genReadPosition(motors) {
    const lead = motors[0];
    if (isCTRE(lead?.type)) return 'leader.getPosition().getValueAsDouble()';
    if (isREV(lead?.type)) return 'encoder.getPosition()';
    return '0.0';
}
