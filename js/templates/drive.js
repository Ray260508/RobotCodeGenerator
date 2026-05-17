/**
 * Drive subsystem Java templates — tank & swerve (WPILib + vendor motors)
 */
import { MOTORS } from '../constants.js';
import { isCTRE, isREV } from './motors.js';

export function genTankIOReal(chassis) {
    const dm = MOTORS[chassis.driveMotor];
    const ids = chassis.tankCanIds;
    if (isCTRE(chassis.driveMotor)) {
        return `package frc.robot.subsystems.drive;

import com.ctre.phoenix6.hardware.TalonFX;
import com.ctre.phoenix6.controls.VoltageOut;
import com.ctre.phoenix6.configs.TalonFXConfiguration;
import com.ctre.phoenix6.signals.NeutralModeValue;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.DifferentialDriveKinematics;
import edu.wpi.first.math.kinematics.DifferentialDriveWheelSpeeds;
import frc.robot.Constants.DriveConstants;

public class DriveIOReal implements DriveIO {
    private final TalonFX leftLeader = new TalonFX(DriveConstants.LEFT_LEADER_ID);
    private final TalonFX leftFollower = new TalonFX(DriveConstants.LEFT_FOLLOWER_ID);
    private final TalonFX rightLeader = new TalonFX(DriveConstants.RIGHT_LEADER_ID);
    private final TalonFX rightFollower = new TalonFX(DriveConstants.RIGHT_FOLLOWER_ID);
    private final VoltageOut voltageOut = new VoltageOut(0);
    private final DifferentialDriveKinematics kinematics =
        new DifferentialDriveKinematics(DriveConstants.TRACK_WIDTH_M);

    public DriveIOReal() {
        configureMotor(leftLeader);
        configureMotor(leftFollower);
        configureMotor(rightLeader);
        configureMotor(rightFollower);
        leftFollower.setControl(new com.ctre.phoenix6.controls.Follower(leftLeader.getDeviceID()));
        rightFollower.setControl(new com.ctre.phoenix6.controls.Follower(rightLeader.getDeviceID()));
    }

    private void configureMotor(TalonFX motor) {
        var cfg = new TalonFXConfiguration();
        cfg.CurrentLimits.StatorCurrentLimit = 40;
        cfg.CurrentLimits.StatorCurrentLimitEnable = true;
        cfg.MotorOutput.NeutralMode = NeutralModeValue.Brake;
        motor.getConfigurator().apply(cfg);
    }

    @Override
    public void updateInputs(DriveIOInputs inputs) {
        inputs.gyroYawRad = 0; // TODO: Pigeon2 / NavX on DriveConstants.GYRO_ID
    }

    @Override
    public void drive(ChassisSpeeds speeds) {
        var wheelSpeeds = kinematics.toWheelSpeeds(speeds);
        leftLeader.setControl(voltageOut.withOutput(wheelSpeeds.leftMetersPerSecond * 12.0 / DriveConstants.MAX_SPEED_MPS));
        rightLeader.setControl(voltageOut.withOutput(wheelSpeeds.rightMetersPerSecond * 12.0 / DriveConstants.MAX_SPEED_MPS));
    }

    @Override
    public void stop() { drive(new ChassisSpeeds()); }

    @Override
    public Rotation2d getHeading() { return Rotation2d.fromRadians(0); }
}
`;
    }
    if (isREV(chassis.driveMotor)) {
        return `package frc.robot.subsystems.drive;

import com.revrobotics.spark.SparkMax;
import com.revrobotics.spark.SparkLowLevel.MotorType;
import com.revrobotics.spark.config.SparkMaxConfig;
import com.revrobotics.spark.config.SparkBaseConfig.IdleMode;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.DifferentialDriveKinematics;
import frc.robot.Constants.DriveConstants;

public class DriveIOReal implements DriveIO {
    private final SparkMax leftLeader = new SparkMax(DriveConstants.LEFT_LEADER_ID, MotorType.kBrushless);
    private final SparkMax leftFollower = new SparkMax(DriveConstants.LEFT_FOLLOWER_ID, MotorType.kBrushless);
    private final SparkMax rightLeader = new SparkMax(DriveConstants.RIGHT_LEADER_ID, MotorType.kBrushless);
    private final SparkMax rightFollower = new SparkMax(DriveConstants.RIGHT_FOLLOWER_ID, MotorType.kBrushless);
    private final DifferentialDriveKinematics kinematics =
        new DifferentialDriveKinematics(DriveConstants.TRACK_WIDTH_M);

    public DriveIOReal() {
        for (SparkMax m : new SparkMax[] { leftLeader, leftFollower, rightLeader, rightFollower }) {
            m.configure(new SparkMaxConfig().idleMode(IdleMode.kBrake).smartCurrentLimit(40), null, null);
        }
        leftFollower.follow(leftLeader);
        rightFollower.follow(rightLeader);
    }

    @Override public void updateInputs(DriveIOInputs inputs) { inputs.gyroYawRad = 0; }

    @Override
    public void drive(ChassisSpeeds speeds) {
        var ws = kinematics.toWheelSpeeds(speeds);
        leftLeader.set(ws.leftMetersPerSecond / DriveConstants.MAX_SPEED_MPS);
        rightLeader.set(ws.rightMetersPerSecond / DriveConstants.MAX_SPEED_MPS);
    }

    @Override public void stop() { drive(new ChassisSpeeds()); }
    @Override public Rotation2d getHeading() { return Rotation2d.kZero; }
}
`;
    }
    return null;
}

export function genDriveIOSim() {
    return `package frc.robot.subsystems.drive;

import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.DifferentialDriveKinematics;
import edu.wpi.first.wpilibj.simulation.DifferentialDrivetrainSim;
import edu.wpi.first.wpilibj.simulation.RoboRioSim;
import frc.robot.Constants.DriveConstants;

public class DriveIOSim implements DriveIO {
    private final DifferentialDriveKinematics kinematics =
        new DifferentialDriveKinematics(DriveConstants.TRACK_WIDTH_M);
    private final DifferentialDrivetrainSim sim = new DifferentialDrivetrainSim(
        kinematics,
        DifferentialDrivetrainSim.createKitbotChassis(DriveConstants.TRACK_WIDTH_M),
        edu.wpi.first.math.system.plant.DCMotor.getNEO(2),
        edu.wpi.first.math.system.plant.DCMotor.getNEO(2),
        edu.wpi.first.math.system.plant.LinearSystemId.createDCMotorSystem(
            edu.wpi.first.math.system.plant.DCMotor.getNEO(2), 2.0, 8.45),
        edu.wpi.first.math.system.plant.LinearSystemId.createDCMotorSystem(
            edu.wpi.first.math.system.plant.DCMotor.getNEO(2), 2.0, 8.45),
        edu.wpi.first.math.system.plant.DCMotor.getNEO(2),
        DriveConstants.WHEEL_DIAMETER_M / 2.0,
        DriveConstants.DRIVE_GEAR_RATIO,
        null);
    private Pose2d pose = new Pose2d();
    private Rotation2d heading = Rotation2d.kZero;

    @Override
    public void updateInputs(DriveIOInputs inputs) {
        sim.update(0.02);
        pose = sim.getPose();
        heading = sim.getHeading();
        inputs.pose = pose;
        inputs.gyroYawRad = heading.getRadians();
        inputs.speeds = kinematics.toChassisSpeeds(sim.getLeftVelocityMetersPerSecond(), sim.getRightVelocityMetersPerSecond());
    }

    @Override
    public void drive(ChassisSpeeds speeds) {
        var ws = kinematics.toWheelSpeeds(speeds);
        sim.setInputs(ws.leftMetersPerSecond, ws.rightMetersPerSecond);
    }

    @Override public void stop() { drive(new ChassisSpeeds()); }
    @Override public Pose2d getPose() { return pose; }
    @Override public Rotation2d getHeading() { return heading; }
}
`;
}

export function genSwerveDriveIOReal(chassis) {
    return `package frc.robot.subsystems.drive;

import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.SwerveDriveKinematics;
import edu.wpi.first.math.kinematics.SwerveModulePosition;
import edu.wpi.first.math.kinematics.SwerveModuleState;
import edu.wpi.first.math.util.Units;
import edu.wpi.first.wpilibj2.command.Subsystem;
import frc.robot.Constants.DriveConstants;

/**
 * Swerve IO — wire modules to your vendor (CTRE Phoenix 6 SwerveDrivetrain or WPILib SwerveModule).
 * CAN IDs are in DriveConstants (FL/FR/BL/BR drive, turn, encoder).
 */
public class DriveIOReal implements DriveIO {
    private final SwerveDriveKinematics kinematics = new SwerveDriveKinematics(
        DriveConstants.MODULE_TRANSLATIONS);
    private Rotation2d heading = Rotation2d.kZero;

    public DriveIOReal() {
        // TODO: Initialize ${chassis.usePhoenix6Swerve ? 'Phoenix 6 SwerveDrivetrain' : 'four SwerveModule instances'}
    }

    @Override public void updateInputs(DriveIOInputs inputs) {
        inputs.gyroYawRad = heading.getRadians();
        inputs.speeds = new ChassisSpeeds();
        inputs.pose = new Pose2d(0, 0, heading);
    }

    @Override
    public void drive(ChassisSpeeds speeds) {
        SwerveModuleState[] states = kinematics.toSwerveModuleStates(speeds);
        SwerveDriveKinematics.desaturateWheelSpeeds(states, DriveConstants.MAX_SPEED_MPS);
        // TODO: apply states to modules
    }

    @Override public void stop() { drive(new ChassisSpeeds()); }
    @Override public Pose2d getPose() { return new Pose2d(0, 0, heading); }
    @Override public Rotation2d getHeading() { return heading; }
}
`;
}

export function genSwerveDriveIOSim() {
    return `package frc.robot.subsystems.drive;

import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.SwerveDriveKinematics;
import edu.wpi.first.math.kinematics.SwerveModuleState;
import frc.robot.Constants.DriveConstants;

public class DriveIOSim implements DriveIO {
    private final SwerveDriveKinematics kinematics = new SwerveDriveKinematics(
        DriveConstants.MODULE_TRANSLATIONS);
    private Pose2d pose = new Pose2d();
    private Rotation2d heading = Rotation2d.kZero;
    private ChassisSpeeds lastSpeeds = new ChassisSpeeds();

    @Override
    public void updateInputs(DriveIOInputs inputs) {
        pose = pose.exp(lastSpeeds);
        heading = pose.getRotation();
        inputs.pose = pose;
        inputs.gyroYawRad = heading.getRadians();
        inputs.speeds = lastSpeeds;
    }

    @Override
    public void drive(ChassisSpeeds speeds) {
        lastSpeeds = speeds;
        SwerveModuleState[] states = kinematics.toSwerveModuleStates(speeds);
        SwerveDriveKinematics.desaturateWheelSpeeds(states, DriveConstants.MAX_SPEED_MPS);
    }

    @Override public void stop() { drive(new ChassisSpeeds()); }
    @Override public Pose2d getPose() { return pose; }
    @Override public Rotation2d getHeading() { return heading; }
}
`;
}
