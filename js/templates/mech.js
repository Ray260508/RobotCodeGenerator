/**
 * Mechanism subsystem IO templates
 */
import { MOTORS } from '../constants.js';
import {
    motorImports, genMotorInit, genSetVoltage, genReadPosition, isCTRE, isREV,
} from './motors.js';

export function genMechIOReal(type, m, N) {
    if (type === 'arm') {
        let imports = 'import frc.robot.Constants.ArmConstants;\n';
        let fields = '';
        let initBlocks = '        // Initialize each joint\n';
        let updates = '';
        let voltMethods = '';

        m.joints.forEach((j, i) => {
            const lead = j.motors[0];
            const hasFollower = j.motors.length > 1;

            if (lead && lead.type) {
                if (isCTRE(lead.type)) {
                    imports += 'import com.ctre.phoenix6.hardware.TalonFX;\nimport com.ctre.phoenix6.controls.VoltageOut;\n';
                    fields += `    private final TalonFX joint${i}Motor = new TalonFX(ArmConstants.JOINT_${i+1}_MOTOR_ID);\n`;
                    initBlocks += `        var joint${i}Cfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();\n`;
                    initBlocks += `        joint${i}Cfg.MotorOutput.Inverted = ArmConstants.JOINT_${i+1}_MOTOR_0_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;\n`;
                    initBlocks += `        joint${i}Motor.getConfigurator().apply(joint${i}Cfg);\n`;
                    if (hasFollower) {
                        fields += `    private final TalonFX joint${i}Follower = new TalonFX(ArmConstants.JOINT_${i+1}_FOLLOWER_1_ID);\n`;
                        initBlocks += `        joint${i}Follower.setControl(new com.ctre.phoenix6.controls.Follower(joint${i}Motor.getDeviceID()));\n`;
                    }
                    updates += `        inputs.positionRad[${i}] = joint${i}Motor.getPosition().getValueAsDouble() * 2 * Math.PI;\n`;
                    updates += `        inputs.velocityRadPerSec[${i}] = joint${i}Motor.getVelocity().getValueAsDouble() * 2 * Math.PI;\n`;
                    updates += `        inputs.appliedVolts[${i}] = joint${i}Motor.getMotorVoltage().getValueAsDouble();\n`;
                    updates += `        inputs.currentAmps[${i}] = joint${i}Motor.getStatorCurrent().getValueAsDouble();\n`;
                } else if (isREV(lead.type)) {
                    imports += 'import com.revrobotics.spark.SparkMax;\nimport com.revrobotics.spark.SparkLowLevel.MotorType;\n';
                    fields += `    private final SparkMax joint${i}Motor = new SparkMax(ArmConstants.JOINT_${i+1}_MOTOR_ID, MotorType.kBrushless);\n`;
                    initBlocks += `        var joint${i}Cfg = new com.revrobotics.spark.config.SparkMaxConfig();\n`;
                    initBlocks += `        joint${i}Cfg.inverted(ArmConstants.JOINT_${i+1}_MOTOR_0_INVERTED);\n`;
                    initBlocks += `        joint${i}Motor.configure(joint${i}Cfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);\n`;
                    if (hasFollower) {
                        fields += `    private final SparkMax joint${i}Follower = new SparkMax(ArmConstants.JOINT_${i+1}_FOLLOWER_1_ID, MotorType.kBrushless);\n`;
                        initBlocks += `        var joint${i}FollowerCfg = new com.revrobotics.spark.config.SparkMaxConfig();\n`;
                        initBlocks += `        joint${i}FollowerCfg.follow(joint${i}Motor);\n`;
                        initBlocks += `        joint${i}Follower.configure(joint${i}FollowerCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);\n`;
                    }
                    updates += `        inputs.positionRad[${i}] = joint${i}Motor.getEncoder().getPosition();\n`;
                    updates += `        inputs.velocityRadPerSec[${i}] = joint${i}Motor.getEncoder().getVelocity();\n`;
                    updates += `        inputs.appliedVolts[${i}] = joint${i}Motor.getAppliedOutput() * joint${i}Motor.getBusVoltage();\n`;
                    updates += `        inputs.currentAmps[${i}] = joint${i}Motor.getOutputCurrent();\n`;
                }
                voltMethods += `
    @Override
    public void setJointVolts(int jointIndex, double volts) {
        if (jointIndex == ${i}) {
            ${isCTRE(lead.type) ? `joint${i}Motor.setControl(new VoltageOut(volts));` : `joint${i}Motor.setVoltage(volts);`}
        }
    }\n`;
            }
        });

        const uniqueImports = [...new Set(imports.split('\n').filter(Boolean))].join('\n');

        return `package frc.robot.subsystems.arm;
${uniqueImports}

public class ArmIOReal implements ArmIO {
${fields}
    public ArmIOReal() {
${initBlocks}    }

    @Override
    public void updateInputs(ArmIOInputs inputs) {
${updates}    }

${voltMethods}
    @Override
    public void stop() {
        for (int i = 0; i < ArmConstants.DOF; i++) {
            setJointVolts(i, 0.0);
        }
    }
}
`;
    }

    const motors = m.motors || [];
    const lead = motors[0];
    if (!lead?.type) return null;
    const constPrefix = `${N}Constants`;

    let fields = '';
    let initBlocks = '';
    let followerSetup = '';
    const followerNames = [];

    motors.forEach((mot, i) => {
        const name = i === 0 ? 'leader' : `follower${i}`;
        const canConst = i === 0 ? 'MOTOR_ID' : `FOLLOWER_${i}_ID`;
        if (isCTRE(mot.type)) {
            fields += `    private final TalonFX ${name} = new TalonFX(${constPrefix}.${canConst});\n`;
            if (i === 0) fields += `    private final VoltageOut voltageReq = new VoltageOut(0);\n`;
        } else if (isREV(mot.type)) {
            fields += `    private final SparkMax ${name} = new SparkMax(${constPrefix}.${canConst}, MotorType.kBrushless);\n`;
            if (i === 0) fields += `    private final RelativeEncoder encoder = leader.getEncoder();\n`;
        }
        if (i > 0) {
            followerNames.push(name);
            if (isCTRE(mot.type)) {
                followerSetup += `        ${name}.setControl(new com.ctre.phoenix6.controls.Follower(leader.getDeviceID()));\n`;
            } else if (isREV(mot.type)) {
                followerSetup += `        ${name}.follow(leader);\n`;
            }
        }
    });

    initBlocks = genMotorInit(motors, constPrefix);

    const setVoltageBody = isCTRE(lead.type)
        ? '        leader.setControl(voltageReq.withOutput(volts));'
        : '        leader.setVoltage(volts);';

    let extraUpdate = '';
    let extraMethods = '';
    
    if (type === 'shooter' && (m.shooterType === 'adjustable' || m.shooterType === 'adjustable_turret')) {
        const pm = m.pivotMotor;
        if (pm && pm.type) {
            if (isCTRE(pm.type)) {
                fields += `    private final TalonFX pivot = new TalonFX(${constPrefix}.PIVOT_MOTOR_ID);\n`;
                initBlocks += `\n        // Pivot init\n        var pivotCfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();\n        pivotCfg.MotorOutput.Inverted = ${constPrefix}.PIVOT_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;\n        pivot.getConfigurator().apply(pivotCfg);\n`;
                extraUpdate += `        inputs.pivotPositionRad = pivot.getPosition().getValueAsDouble();\n`;
                extraMethods += `\n    @Override\n    public void setPivotVoltage(double volts) {\n        pivot.setControl(voltageReq.withOutput(volts));\n    }\n`;
            } else if (isREV(pm.type)) {
                fields += `    private final SparkMax pivot = new SparkMax(${constPrefix}.PIVOT_MOTOR_ID, MotorType.kBrushless);\n`;
                initBlocks += `\n        // Pivot init\n        var pivotCfg = new com.revrobotics.spark.config.SparkMaxConfig();\n        pivotCfg.inverted(${constPrefix}.PIVOT_INVERTED);\n        pivot.configure(pivotCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);\n`;
                extraUpdate += `        inputs.pivotPositionRad = pivot.getEncoder().getPosition();\n`;
                extraMethods += `\n    @Override\n    public void setPivotVoltage(double volts) {\n        pivot.setVoltage(volts);\n    }\n`;
            }
        }
    }

    if (type === 'shooter' && m.shooterType === 'adjustable_turret') {
        const tm = m.turretMotor;
        if (tm && tm.type) {
            if (isCTRE(tm.type)) {
                fields += `    private final TalonFX turret = new TalonFX(${constPrefix}.TURRET_MOTOR_ID);\n`;
                initBlocks += `\n        // Turret init\n        var turretCfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();\n        turretCfg.MotorOutput.Inverted = ${constPrefix}.TURRET_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;\n        turret.getConfigurator().apply(turretCfg);\n`;
                extraUpdate += `        inputs.turretPositionRad = turret.getPosition().getValueAsDouble();\n`;
                extraMethods += `\n    @Override\n    public void setTurretVoltage(double volts) {\n        turret.setControl(voltageReq.withOutput(volts));\n    }\n`;
            } else if (isREV(tm.type)) {
                fields += `    private final SparkMax turret = new SparkMax(${constPrefix}.TURRET_MOTOR_ID, MotorType.kBrushless);\n`;
                initBlocks += `\n        // Turret init\n        var turretCfg = new com.revrobotics.spark.config.SparkMaxConfig();\n        turretCfg.inverted(${constPrefix}.TURRET_INVERTED);\n        turret.configure(turretCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);\n`;
                extraUpdate += `        inputs.turretPositionRad = turret.getEncoder().getPosition();\n`;
                extraMethods += `\n    @Override\n    public void setTurretVoltage(double volts) {\n        turret.setVoltage(volts);\n    }\n`;
            }
        }
    }
    if (type === 'launcher' && m.launcherType === 'arm_claw') {
        const cm = m.clawMotor;
        if (cm && cm.type) {
            if (isCTRE(cm.type)) {
                fields += `    private final TalonFX claw = new TalonFX(${constPrefix}.CLAW_MOTOR_ID);\n`;
                initBlocks += `\n        // Claw init\n        var clawCfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();\n        clawCfg.MotorOutput.Inverted = ${constPrefix}.CLAW_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;\n        claw.getConfigurator().apply(clawCfg);\n`;
                extraUpdate += `        inputs.clawPositionRad = claw.getPosition().getValueAsDouble();\n`;
                extraMethods += `\n    @Override\n    public void setClawVoltage(double volts) {\n        claw.setControl(voltageReq.withOutput(volts));\n    }\n`;
            } else if (isREV(cm.type)) {
                fields += `    private final SparkMax claw = new SparkMax(${constPrefix}.CLAW_MOTOR_ID, MotorType.kBrushless);\n`;
                initBlocks += `\n        // Claw init\n        var clawCfg = new com.revrobotics.spark.config.SparkMaxConfig();\n        clawCfg.inverted(${constPrefix}.CLAW_INVERTED);\n        claw.configure(clawCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);\n`;
                extraUpdate += `        inputs.clawPositionRad = claw.getEncoder().getPosition();\n`;
                extraMethods += `\n    @Override\n    public void setClawVoltage(double volts) {\n        claw.setVoltage(volts);\n    }\n`;
            }
        }
    }

    return `package frc.robot.subsystems.${type};

${motorImports(lead.type)}
import frc.robot.Constants.${N}Constants;

public class ${N}IOReal implements ${N}IO {
${fields}
    public ${N}IOReal() {${initBlocks}
${followerSetup}    }

    @Override
    public void updateInputs(${N}IOInputs inputs) {
        inputs.positionRad = ${genReadPosition(motors)};
        inputs.velocityRadPerSec = 0.0;
        inputs.appliedVolts = 0.0;
${type === 'elevator' ? '        inputs.heightMeters = inputs.positionRad / (2 * Math.PI) * ElevatorConstants.GEAR_RATIO;\n' : ''}${m.hasSensor ? '        inputs.hasPiece = false; // TODO: sensor on Constants\n' : ''}${extraUpdate}    }

    @Override
    public void setVoltage(double volts) {
${setVoltageBody}    }${extraMethods}

    @Override
    public void stop() { setVoltage(0); }

    @Override
    public void configurePID(double kP, double kI, double kD) {
        // TODO: Slot0 gains on motor controllers
    }
}
`;
}

export function genMechIOSim(type, m, N, attachedTo) {
    if (type === 'arm') {
        let fields = '';
        let simUpdates = '';
        let setVolts = '';

        m.joints.forEach((j, i) => {
            fields += `    private final DCMotorSim joint${i}Sim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(DCMotor.getNEO(1), 0.002, 10.0),
        DCMotor.getNEO(1), 0.002, 0.01);
    private final EncoderSim joint${i}EncoderSim = new EncoderSim(joint${i}Sim);
    private double joint${i}AppliedVolts = 0.0;\n`;

            simUpdates += `
        joint${i}Sim.setInputVoltage(RoboRioSim.getVInVoltage() * joint${i}AppliedVolts / 12.0);
        joint${i}Sim.update(0.02);
        inputs.positionRad[${i}] = joint${i}EncoderSim.getDistance();
        inputs.velocityRadPerSec[${i}] = joint${i}EncoderSim.getRate();
        inputs.appliedVolts[${i}] = joint${i}AppliedVolts;
        inputs.currentAmps[${i}] = joint${i}Sim.getCurrentDrawAmps();\n`;

            setVolts += `        if (jointIndex == ${i}) joint${i}AppliedVolts = volts;\n`;
        });

        return `package frc.robot.subsystems.arm;

import edu.wpi.first.math.system.plant.DCMotor;
import edu.wpi.first.math.system.plant.LinearSystemId;
import edu.wpi.first.wpilibj.simulation.DCMotorSim;
import edu.wpi.first.wpilibj.simulation.EncoderSim;
import edu.wpi.first.wpilibj.simulation.RoboRioSim;
import frc.robot.Constants.ArmConstants;

public class ArmIOSim implements ArmIO {
    /** Simulation parent: ${attachedTo || 'chassis'} */
${fields}
    public ArmIOSim() {}

    @Override
    public void updateInputs(ArmIOInputs inputs) {
${simUpdates}    }

    @Override
    public void setJointVolts(int jointIndex, double volts) {
${setVolts}    }

    @Override
    public void stop() {
        for (int i = 0; i < ArmConstants.DOF; i++) {
            setJointVolts(i, 0.0);
        }
    }
}
`;
    }

    let extraFields = '';
    let extraUpdate = '';
    let extraMethods = '';
    
    if (type === 'shooter' && (m.shooterType === 'adjustable' || m.shooterType === 'adjustable_turret')) {
        extraFields += `
    private final DCMotorSim pivotSim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(DCMotor.getNEO(1), 0.002, 10.0),
        DCMotor.getNEO(1), 0.002, 0.01);
    private final EncoderSim pivotEncoderSim = new EncoderSim(pivotSim);
    private double pivotAppliedVolts = 0.0;
`;
        extraUpdate += `
        pivotSim.setInputVoltage(RoboRioSim.getVInVoltage() * pivotAppliedVolts / 12.0);
        pivotSim.update(0.02);
        inputs.pivotPositionRad = pivotEncoderSim.getDistance();
        inputs.pivotVelocityRadPerSec = pivotEncoderSim.getRate();
        inputs.pivotAppliedVolts = pivotAppliedVolts;
`;
        extraMethods += `
    @Override
    public void setPivotVoltage(double volts) { pivotAppliedVolts = volts; }
`;
    }

    if (type === 'shooter' && m.shooterType === 'adjustable_turret') {
        extraFields += `
    private final DCMotorSim turretSim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(DCMotor.getNEO(1), 0.002, 10.0),
        DCMotor.getNEO(1), 0.002, 0.01);
    private final EncoderSim turretEncoderSim = new EncoderSim(turretSim);
    private double turretAppliedVolts = 0.0;
`;
        extraUpdate += `
        turretSim.setInputVoltage(RoboRioSim.getVInVoltage() * turretAppliedVolts / 12.0);
        turretSim.update(0.02);
        inputs.turretPositionRad = turretEncoderSim.getDistance();
        inputs.turretVelocityRadPerSec = turretEncoderSim.getRate();
        inputs.turretAppliedVolts = turretAppliedVolts;
`;
        extraMethods += `
    @Override
    public void setTurretVoltage(double volts) { turretAppliedVolts = volts; }
`;
    }

    return `package frc.robot.subsystems.${type};

import edu.wpi.first.math.system.plant.DCMotor;
import edu.wpi.first.math.system.plant.LinearSystemId;
import edu.wpi.first.wpilibj.simulation.DCMotorSim;
import edu.wpi.first.wpilibj.simulation.EncoderSim;
import edu.wpi.first.wpilibj.simulation.RoboRioSim;
import frc.robot.Constants.${N}Constants;

public class ${N}IOSim implements ${N}IO {
    /** Simulation parent: ${attachedTo || 'chassis'} */
    private final DCMotorSim motorSim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(DCMotor.getNEO(1), 0.002, 10.0),
        DCMotor.getNEO(1), 0.002, 0.01);
    private final EncoderSim encoderSim = new EncoderSim(motorSim);
    private double appliedVolts = 0.0;${extraFields}

    public ${N}IOSim() {}

    @Override
    public void updateInputs(${N}IOInputs inputs) {
        motorSim.setInputVoltage(RoboRioSim.getVInVoltage() * appliedVolts / 12.0);
        motorSim.update(0.02);
        inputs.positionRad = encoderSim.getDistance();
        inputs.velocityRadPerSec = encoderSim.getRate();
        inputs.appliedVolts = appliedVolts;
${type === 'elevator' ? '        inputs.heightMeters = inputs.positionRad / (2 * Math.PI) * ElevatorConstants.GEAR_RATIO;\n' : ''}${m.hasSensor ? '        inputs.hasPiece = false;\n' : ''}${extraUpdate}    }

    @Override
    public void setVoltage(double volts) { appliedVolts = volts; }${extraMethods}

    @Override
    public void stop() { appliedVolts = 0; }

    @Override
    public void configurePID(double kP, double kI, double kD) {}
}
`;
}
