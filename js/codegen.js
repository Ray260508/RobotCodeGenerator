/**
 * Code Generator — Phase 6: Framework selection, multi-motor, PathPlanner, Phoenix 6
 */
import { MOTORS, ENCODERS, GYROS } from './constants.js';
import JSZip from 'jszip';
import { genTankIOReal, genDriveIOSim, genSwerveDriveIOReal, genSwerveDriveIOSim } from './templates/drive.js';
import { genMechIOReal, genMechIOSim } from './templates/mech.js';
import { genSysIdBindings, genSysIdChooserField, genSysIdImports } from './templates/sysid.js';
import { VERSION_PROFILE } from './versions.js';
import { buildManifest, addManifestToZip, genMergeSnippets, GEN_MODE } from './manifest.js';

export async function generateProject(state, projectName = 'FRCRobotProject', mode = GEN_MODE.FULL) {
    const zip = new JSZip();
    const base = projectName;
    const fw = state.framework || 'advantagekit';
    const generatedFiles = [];

    function addFile(path, content) {
        zip.file(path, content);
        generatedFiles.push(path.replace(`${base}/`, ''));
    }

    // Libraries-only mode: just build.gradle + vendordeps
    if (mode === GEN_MODE.LIBRARIES_ONLY) {
        addFile(`${base}/build.gradle`, genBuildGradle(state));
        addVendordeps(zip, base, state);
        const manifest = buildManifest(state, projectName, mode);
        addManifestToZip(zip, base, manifest, generatedFiles);
        const blob = await zip.generateAsync({ type: 'blob' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${projectName}-libraries.zip`;
        a.click();
        return;
    }

    // Add-mechanism mode: generate new mechanism files + merge instructions
    if (mode === GEN_MODE.ADD_MECHANISM) {
        const newMechs = Object.entries(state.mechanisms).filter(([, m]) => m.configured);
        const pkg = `${base}/src/main/java/frc/robot`;
        let mergeDoc = `# Merge Instructions\n\nGenerated: ${new Date().toISOString()}\n\n`;
        newMechs.forEach(([type, m]) => {
            genMechSubsystem(zip, pkg, type, m, state, fw);
            mergeDoc += genMergeSnippets(type, state, fw);
        });
        addFile(`${base}/MERGE_INSTRUCTIONS.md`, mergeDoc);
        addFile(`${base}/Constants-additions.java`, genConstantsAdditions(state));
        const manifest = buildManifest(state, projectName, mode);
        addManifestToZip(zip, base, manifest, generatedFiles);
        const blob = await zip.generateAsync({ type: 'blob' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${projectName}-add-mechanism.zip`;
        a.click();
        return;
    }

    // Full project generation (default)
    addFile(`${base}/build.gradle`, genBuildGradle(state));
    addFile(`${base}/README.md`, genReadme(state, projectName));
    addFile(`${base}/settings.gradle`, `pluginManagement {\n  repositories {\n    mavenLocal()\n    gradlePluginPortal()\n    maven { url "https://frcmaven.wpi.edu/artifactory/release" }\n  }\n}\n`);
    addVendordeps(zip, base, state);
    const pkg = `${base}/src/main/java/frc/robot`;
    addFile(`${pkg}/Main.java`, genMain());
    addFile(`${pkg}/Robot.java`, genRobot(fw));
    addFile(`${pkg}/Constants.java`, genConstants(state));
    addFile(`${pkg}/RobotContainer.java`, genRobotContainer(state));
    if (state.chassis.configured) genDriveSubsystem(zip, pkg, state, fw);
    Object.entries(state.mechanisms).forEach(([type, m]) => { if (m.configured) genMechSubsystem(zip, pkg, type, m, state, fw); });
    if (state.vision.configured) genVisionSubsystem(zip, pkg, state, fw);
    if (state.statemachine.configured) genStateMachine(zip, pkg, state);
    if (state.stateMachineIntegration && state.statemachine.configured) {
        genStateMachineCommands(zip, pkg, state, fw);
    }
    if (state.chassis.configured && state.chassis.pathplannerEnabled !== false) {
        genPathPlannerAssets(zip, base, state);
        if (state.chassis.type === 'swerve') genAutos(zip, pkg, state);
    }
    zip.file(`${base}/src/main/deploy/.gitkeep`, '');

    // Add manifest
    const manifest = buildManifest(state, projectName, GEN_MODE.FULL);
    addManifestToZip(zip, base, manifest, generatedFiles);

    const blob = await zip.generateAsync({ type: 'blob' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${projectName}.zip`;
    a.click();
}

/** Generate only the Constants additions for new mechanisms (used in add-mechanism mode) */
function genConstantsAdditions(state) {
    let o = `// === ADD THESE TO YOUR EXISTING Constants.java ===\n\n`;
    Object.entries(state.mechanisms).forEach(([type, m]) => {
        if (!m.configured) return;
        const N = type.charAt(0).toUpperCase() + type.slice(1);
        o += `    // @generated:${type}\n`;
        o += `    public static final class ${N}Constants {\n`;
        (m.motors || []).forEach((mot, i) => {
            const label = i === 0 ? 'MOTOR_ID' : `FOLLOWER_${i}_ID`;
            o += `        public static final int ${label} = ${mot.canId};\n`;
        });
        if (m.motorConfig) {
            o += `        public static final int CURRENT_LIMIT = ${m.motorConfig.currentLimit || 40};\n`;
            o += `        public static final boolean BRAKE_MODE = ${m.motorConfig.brakeMode !== false};\n`;
        }
        if (m.pid) {
            o += `        public static final double kP = ${m.pid.kP || 0};\n`;
            o += `        public static final double kI = ${m.pid.kI || 0};\n`;
            o += `        public static final double kD = ${m.pid.kD || 0};\n`;
            o += `        public static final double kS = ${m.pid.kS || 0};\n`;
            o += `        public static final double kV = ${m.pid.kV || 0};\n`;
            o += `        public static final double kA = ${m.pid.kA || 0};\n`;
        }
        o += `    }\n    // @end-generated:${type}\n\n`;
    });
    return o;
}

function genBuildGradle(s) {
    return `plugins {
    id "java"
    id "edu.wpi.first.GradleRIO" version "${VERSION_PROFILE.gradleRIO}"
}
sourceCompatibility = JavaVersion.${VERSION_PROFILE.javaVersion}
targetCompatibility = JavaVersion.${VERSION_PROFILE.javaVersion}
def ROBOT_MAIN_CLASS = "frc.robot.Main"
deploy { targets { roborio(getTargetTypeClass('RoboRIO')) { team = project.frc.getTeamNumber(); directory = '/home/lvuser/deploy'; artifacts { frcJava(getArtifactTypeClass('FRCJavaArtifact')) { } } } } }
wpi.java.debugJni = false
wpi.java.configureExecutableTasks(jar)
repositories { mavenLocal(); maven { url "https://frcmaven.wpi.edu/artifactory/release" }; maven { url "https://maven.photonvision.org/repository/internal" }; maven { url "https://maven.ctr-electronics.com/release/" }; maven { url "https://maven.revrobotics.com/release/" }; }
dependencies {
    implementation wpi.java.deps.wpilib()
    implementation wpi.java.vendor.java()
    roborioDebug wpi.java.deps.wpilibJniDebug(wpi.platforms.roborio)
    roborioDebug wpi.java.vendor.jniDebug(wpi.platforms.roborio)
    nativeDesktop wpi.java.deps.wpilibJniRelease(wpi.platforms.desktop)
    nativeDesktop wpi.java.vendor.jniRelease(wpi.platforms.desktop)
    simulationDebug wpi.sim.enableDebug()
    simulationRelease wpi.sim.enableRelease()
}
`;
}

function addVendordeps(zip, base, state) {
    const vd = `${base}/vendordeps`;
    const VP = VERSION_PROFILE;
    
    // AdvantageKit (always for advantagekit framework)
    if (state.framework === 'advantagekit' || !state.framework) {
        const ak = VP.vendordeps.advantagekit;
        zip.file(`${vd}/${ak.fileName}`, JSON.stringify({
            fileName: ak.fileName, name: ak.name, version: ak.version,
            uuid: ak.uuid, frcYear: VP.frcYear,
            mavenUrls: ak.mavenUrls, jsonUrl: '',
            javaDependencies: ak.javaDependencies,
            jniDependencies: [], cppDependencies: []
        }, null, 2));
    }

    // Detect which vendors we need
    const vendors = new Set();
    if (state.chassis.configured) {
        const dm = MOTORS[state.chassis.driveMotor]; if (dm) vendors.add(dm.vendor);
        if (state.chassis.turnMotor) { const tm = MOTORS[state.chassis.turnMotor]; if (tm) vendors.add(tm.vendor); }
        if (state.chassis.gyro) { const g = GYROS[state.chassis.gyro]; if (g) vendors.add(g.vendor); }
    }
    Object.values(state.mechanisms).forEach(m => {
        if (!m.configured) return;
        (m.motors || []).forEach(mot => {
            const mo = MOTORS[mot.type];
            if (mo) vendors.add(mo.vendor);
        });
    });
    if (state.vision.configured && state.vision.system === 'photonvision') vendors.add('photonvision');

    // Map vendor keys to vendordep entries
    const vendorMap = {
        ctre: VP.vendordeps.phoenix6,
        rev: VP.vendordeps.revlib,
        kauai: VP.vendordeps.navx,
        photonvision: VP.vendordeps.photonlib,
    };
    
    vendors.forEach(v => {
        const dep = vendorMap[v];
        if (dep) {
            zip.file(`${vd}/${dep.fileName}`, JSON.stringify({
                fileName: dep.fileName, name: dep.name, version: dep.version,
                frcYear: VP.frcYear, mavenUrls: dep.mavenUrls,
                jsonUrl: dep.jsonUrl || '',
                javaDependencies: dep.javaDependencies,
                jniDependencies: [], cppDependencies: []
            }, null, 2));
        }
    });

    // PathPlannerLib
    if (state.chassis.configured && state.chassis.pathplannerEnabled !== false) {
        const pp = VP.vendordeps.pathplanner;
        zip.file(`${vd}/${pp.fileName}`, JSON.stringify({
            fileName: pp.fileName, name: pp.name, version: pp.version,
            frcYear: VP.frcYear, mavenUrls: pp.mavenUrls,
            jsonUrl: pp.jsonUrl || '',
            javaDependencies: pp.javaDependencies,
            jniDependencies: [], cppDependencies: []
        }, null, 2));
    }
}

function genMain() {
    return `package frc.robot;\nimport edu.wpi.first.wpilibj.RobotBase;\npublic final class Main {\n    private Main() {}\n    public static void main(String... args) { RobotBase.startRobot(Robot::new); }\n}\n`;
}

function genRobot(fw) {
    if (fw === 'commandbase') {
        return `package frc.robot;\nimport edu.wpi.first.wpilibj.TimedRobot;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.CommandScheduler;\n\npublic class Robot extends TimedRobot {\n    private Command autonomousCommand;\n    private RobotContainer robotContainer;\n    @Override public void robotInit() { robotContainer = new RobotContainer(); }\n    @Override public void robotPeriodic() { CommandScheduler.getInstance().run(); }\n    @Override public void autonomousInit() { autonomousCommand = robotContainer.getAutonomousCommand(); if (autonomousCommand != null) autonomousCommand.schedule(); }\n    @Override public void teleopInit() { if (autonomousCommand != null) autonomousCommand.cancel(); }\n    @Override public void testInit() { CommandScheduler.getInstance().cancelAll(); }\n}\n`;
    }
    const ak = VERSION_PROFILE.advantagekitApi;
    return `package frc.robot;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.CommandScheduler;\nimport ${ak.robotBaseImport};\nimport ${ak.loggerImport};\n\npublic class Robot extends ${ak.robotBaseClass} {\n    private Command autonomousCommand;\n    private RobotContainer robotContainer;\n    @Override public void robotInit() { ${ak.logStart}; robotContainer = new RobotContainer(); }\n    @Override public void robotPeriodic() { CommandScheduler.getInstance().run(); }\n    @Override public void autonomousInit() { autonomousCommand = robotContainer.getAutonomousCommand(); if (autonomousCommand != null) autonomousCommand.schedule(); }\n    @Override public void teleopInit() { if (autonomousCommand != null) autonomousCommand.cancel(); }\n    @Override public void testInit() { CommandScheduler.getInstance().cancelAll(); }\n}\n`;
}

function genConstants(s) {
    const limelightNameMap = {
        ll3: 'Limelight 3',
        ll3a: 'Limelight 3A',
        ll3g: 'Limelight 3G',
        ll4: 'Limelight 4',
    };
    let o = `package frc.robot;\n\npublic final class Constants {\n    private Constants() {}\n\n`;
    if (s.chassis.configured) {
        o += `    public static final class DriveConstants {\n`;
        o += `        public static final String DRIVE_TYPE = "${s.chassis.type}";\n`;
        o += `        public static final double MAX_SPEED_MPS = ${s.chassis.maxSpeed || 4.5};\n`;
        o += `        public static final double DRIVE_GEAR_RATIO = ${s.chassis.gearRatio || 8.45};\n`;
        if (s.chassis.turnGearRatio) o += `        public static final double TURN_GEAR_RATIO = ${s.chassis.turnGearRatio};\n`;
        o += `        public static final double WHEEL_DIAMETER_M = ${s.chassis.wheelDiameter || 0.1524};\n`;
        if (s.chassis.type === 'swerve') {
            const ids = s.chassis.canIds;
            ['fl','fr','bl','br'].forEach(m => {
                const M = m.toUpperCase();
                o += `        public static final int ${M}_DRIVE_ID = ${ids[m+'_drive']};\n`;
                o += `        public static final int ${M}_TURN_ID = ${ids[m+'_turn']};\n`;
                o += `        public static final int ${M}_ENCODER_ID = ${ids[m+'_encoder']};\n`;
            });
        } else {
            const ids = s.chassis.tankCanIds;
            o += `        public static final int LEFT_LEADER_ID = ${ids.left_leader};\n`;
            o += `        public static final int LEFT_FOLLOWER_ID = ${ids.left_follower};\n`;
            o += `        public static final int RIGHT_LEADER_ID = ${ids.right_leader};\n`;
            o += `        public static final int RIGHT_FOLLOWER_ID = ${ids.right_follower};\n`;
        }
        o += `        public static final int GYRO_ID = ${s.chassis.gyroCanId};\n`;
        o += `        public static final double TRACK_WIDTH_M = ${s.chassis.trackWidth || 0.546};\n`;
        if (s.chassis.type === 'swerve') {
            o += `        public static final boolean USE_PHOENIX6_SWERVE = ${!!s.chassis.usePhoenix6Swerve};\n`;
            o += `        public static final String SWERVE_ENCODER_TYPE = "${s.chassis.swerveEncoderType || 'cancoder'}";\n`;
            const tw = s.chassis.trackWidth || 0.546;
            const half = tw / 2;
            o += `        public static final edu.wpi.first.math.geometry.Translation2d[] MODULE_TRANSLATIONS = new edu.wpi.first.math.geometry.Translation2d[] {\n`;
            o += `            new edu.wpi.first.math.geometry.Translation2d(${half}, ${half}),\n`;
            o += `            new edu.wpi.first.math.geometry.Translation2d(${half}, -${half}),\n`;
            o += `            new edu.wpi.first.math.geometry.Translation2d(-${half}, ${half}),\n`;
            o += `            new edu.wpi.first.math.geometry.Translation2d(-${half}, -${half}),\n`;
            o += `        };\n`;
        }
        o += `    }\n\n`;
    }
    Object.entries(s.mechanisms).forEach(([type, m]) => {
        if (!m.configured) return;
        const N = type.charAt(0).toUpperCase() + type.slice(1);
        o += `    public static final class ${N}Constants {\n`;
        if (type === 'arm') {
            o += `        public static final int DOF = ${m.dof};\n`;
            m.joints.forEach((j, i) => {
                o += `        // Joint ${i + 1}\n`;
                (j.motors || []).forEach((mot, motIdx) => {
                    const label = motIdx === 0 ? `JOINT_${i + 1}_MOTOR_ID` : `JOINT_${i + 1}_FOLLOWER_${motIdx}_ID`;
                    o += `        public static final int ${label} = ${mot.canId};\n`;
                    o += `        public static final boolean JOINT_${i + 1}_MOTOR_${motIdx}_INVERTED = ${mot.inverted};\n`;
                });
                if (j.encoder) o += `        public static final String JOINT_${i + 1}_ENCODER_TYPE = "${j.encoder}";\n`;
                o += `        public static final int JOINT_${i + 1}_ENCODER_ID = ${j.encoderId};\n`;
                if (j.gearRatio) o += `        public static final double JOINT_${i + 1}_GEAR_RATIO = ${j.gearRatio};\n`;
                o += `        public static final int JOINT_${i + 1}_CURRENT_LIMIT = ${j.motorConfig.currentLimit || 40};\n`;
                if (j.softLimitFwd) o += `        public static final double JOINT_${i + 1}_SOFT_LIMIT_FWD = ${j.softLimitFwd};\n`;
                if (j.softLimitRev) o += `        public static final double JOINT_${i + 1}_SOFT_LIMIT_REV = ${j.softLimitRev};\n`;
                o += `        public static final double JOINT_${i + 1}_kP = ${j.pid.kP || 0};\n`;
                o += `        public static final double JOINT_${i + 1}_kI = ${j.pid.kI || 0};\n`;
                o += `        public static final double JOINT_${i + 1}_kD = ${j.pid.kD || 0};\n`;
            });
        } else {
            // Motor CAN IDs
            (m.motors||[]).forEach((mot, i) => {
                const label = i === 0 ? 'MOTOR_ID' : `FOLLOWER_${i}_ID`;
                o += `        public static final int ${label} = ${mot.canId};\n`;
            });
            if (m.encoderId) o += `        public static final int ENCODER_ID = ${m.encoderId};\n`;
            if (m.gearRatio) o += `        public static final double GEAR_RATIO = ${m.gearRatio};\n`;
            // Motor config
            const mc = m.motorConfig || {};
            o += `        public static final int CURRENT_LIMIT = ${mc.currentLimit || 40};\n`;
            o += `        public static final boolean BRAKE_MODE = ${mc.brakeMode !== false};\n`;
            if ('rampRate' in m && m.rampRate != null) o += `        public static final double RAMP_RATE_SECS = ${m.rampRate / 1000.0};\n`;
            // Mechanism-specific
            if (type === 'elevator') {
                o += `        public static final double MIN_HEIGHT_M = ${m.minHeight || 0};\n`;
                if (m.maxHeight) o += `        public static final double MAX_HEIGHT_M = ${m.maxHeight};\n`;
                if (m.softLimitFwd) o += `        public static final double SOFT_LIMIT_FWD = ${m.softLimitFwd};\n`;
                if (m.softLimitRev) o += `        public static final double SOFT_LIMIT_REV = ${m.softLimitRev};\n`;
                if (m.motionMaxVel) o += `        public static final double MOTION_MAX_VEL = ${m.motionMaxVel};\n`;
                if (m.motionMaxAccel) o += `        public static final double MOTION_MAX_ACCEL = ${m.motionMaxAccel};\n`;
            }
            if (type === 'shooter') {
                o += `        public static final String SHOOTER_TYPE = "${m.shooterType || 'flywheel_only'}";\n`;
                if (m.maxRPM) o += `        public static final double MAX_RPM = ${m.maxRPM};\n`;
                if ((m.shooterType === 'adjustable' || m.shooterType === 'adjustable_turret') && m.pivotMotor) {
                    o += `        public static final int PIVOT_MOTOR_ID = ${m.pivotMotor.canId};\n`;
                    o += `        public static final boolean PIVOT_INVERTED = ${m.pivotMotor.inverted};\n`;
                }
                if (m.shooterType === 'adjustable_turret' && m.turretMotor) {
                    o += `        public static final int TURRET_MOTOR_ID = ${m.turretMotor.canId};\n`;
                    o += `        public static final boolean TURRET_INVERTED = ${m.turretMotor.inverted};\n`;
                }
            }
            if (type === 'launcher') {
                o += `        public static final String LAUNCHER_TYPE = "simple";\n`;
                if (m.softLimitFwd) o += `        public static final double SOFT_LIMIT_FWD = ${m.softLimitFwd};\n`;
                if (m.softLimitRev) o += `        public static final double SOFT_LIMIT_REV = ${m.softLimitRev};\n`;
            }
            if (m.hasSensor) {
                o += `        public static final String SENSOR_PORT_TYPE = "${m.sensorPortType}";\n`;
                o += `        public static final int SENSOR_PORT = ${m.sensorPort};\n`;
            }
            if (m.pid) {
                const pid = m.pid;
                o += `        public static final double kP = ${pid.kP || 0};\n`;
                o += `        public static final double kI = ${pid.kI || 0};\n`;
                o += `        public static final double kD = ${pid.kD || 0};\n`;
                if (pid.kS) o += `        public static final double kS = ${pid.kS};\n`;
                if (pid.kV) o += `        public static final double kV = ${pid.kV};\n`;
                if (pid.kA) o += `        public static final double kA = ${pid.kA};\n`;
            }
            // Physics simulation constants (optional)
            if (m.physics?.massKg) o += `        /** Mass used in simulation physics model */\n        public static final double SIM_MASS_KG = ${m.physics.massKg};\n`;
            if (m.physics?.moiKgM2) o += `        /** Moment of inertia used in simulation physics model */\n        public static final double SIM_MOI_KG_M2 = ${m.physics.moiKgM2};\n`;
        }
        o += `    }\n\n`;
    });
    if (s.vision.configured) {
        o += `    public static final class VisionConstants {\n`;
        o += `        public static final String SYSTEM = "${s.vision.system}";\n`;
        if (s.vision.system === 'limelight') o += `        public static final String LIMELIGHT_VERSION = "${limelightNameMap[s.vision.limelightVersion] || 'Limelight'}";\n`;
        o += `        public static final int CAMERA_COUNT = ${s.vision.cameraCount};\n`;
        s.vision.cameras.forEach((cam, i) => {
            o += `        // Camera ${i}: ${cam.name}\n`;
            o += `        public static final double CAM${i}_X = ${cam.x}; // forward\n`;
            o += `        public static final double CAM${i}_Y = ${cam.y}; // left\n`;
            o += `        public static final double CAM${i}_Z = ${cam.z}; // up\n`;
            o += `        public static final double CAM${i}_ROLL = Math.toRadians(${cam.roll});\n`;
            o += `        public static final double CAM${i}_PITCH = Math.toRadians(${cam.pitch});\n`;
            o += `        public static final double CAM${i}_YAW = Math.toRadians(${cam.yaw});\n`;
        });
        o += `    }\n\n`;
    }
    o += `}\n`;
    return o;
}

function genRobotContainer(s) {
    const fw = s.framework || 'advantagekit';
    let imp = `package frc.robot;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.Commands;\nimport edu.wpi.first.wpilibj2.command.button.CommandXboxController;\n`;
    let fields = '', init = '', bindings = '';
    const pp = s.chassis.configured && s.chassis.pathplannerEnabled !== false && s.chassis.type === 'swerve';
    if (s.chassis.configured) {
        imp += `import frc.robot.subsystems.drive.*;\nimport frc.robot.commands.DriveCommands;\n`;
        if (pp) imp += `import frc.robot.Autos;\n`;
        fields += `    private final Drive drive;\n`;
        if (fw === 'advantagekit') {
            init += `        drive = new Drive(Robot.isReal() ? new DriveIOReal() : new DriveIOSim());\n`;
        } else {
            init += `        drive = new Drive();\n`;
        }
        bindings += `        // Default drive: left stick = translate, right stick X = rotate\n`;
        bindings += `        drive.setDefaultCommand(DriveCommands.joystickDrive(drive,\n`;
        bindings += `            () -> -controller.getLeftY(),\n`;
        bindings += `            () -> -controller.getLeftX(),\n`;
        bindings += `            () -> -controller.getRightX()));\n\n`;
    }
    Object.entries(s.mechanisms).forEach(([t, m]) => {
        if (!m.configured) return;
        const N = t.charAt(0).toUpperCase() + t.slice(1);
        imp += `import frc.robot.subsystems.${t}.*;\n`;
        fields += `    private final ${N} ${t};\n`;
        if (fw === 'advantagekit') {
            init += `        ${t} = new ${N}(Robot.isReal() ? new ${N}IOReal() : new ${N}IOSim());\n`;
        } else {
            init += `        ${t} = new ${N}();\n`;
        }
        if (t === 'intake') bindings += `        controller.rightBumper().whileTrue(Commands.runEnd(() -> ${t}.runVoltage(8), ${t}::stop, ${t}));\n`;
        if (t === 'shooter') bindings += `        controller.rightTrigger().whileTrue(Commands.runEnd(() -> ${t}.runVoltage(12), ${t}::stop, ${t}));\n`;
        if (t === 'elevator') bindings += `        controller.y().whileTrue(Commands.runEnd(() -> ${t}.runVoltage(6), ${t}::stop, ${t}));\n`;
        if (t === 'arm') bindings += `        controller.a().whileTrue(Commands.runEnd(() -> ${t}.runJointVoltage(0, 4), ${t}::stop, ${t}));\n`;
        if (t === 'launcher') bindings += `        controller.leftBumper().whileTrue(Commands.runEnd(() -> ${t}.runVoltage(10), ${t}::stop, ${t}));\n`;
    });
    if (s.vision.configured) {
        imp += `import frc.robot.subsystems.vision.*;\n`;
        fields += `    private final Vision vision;\n`;
        if (fw === 'advantagekit') {
            const vi = s.vision.system === 'limelight' ? 'VisionIOLimelight' : 'VisionIOPhotonVision';
            init += `        vision = new Vision(new ${vi}());\n`;
        } else {
            init += `        vision = new Vision();\n`;
        }
    }
    // Collect SysId-capable mechanisms (arm excluded — uses joint-based control)
    const configuredMechs = Object.entries(s.mechanisms)
        .filter(([t, m]) => m.configured && t !== 'arm')
        .map(([t]) => ({ name: t, varName: t, displayName: t.charAt(0).toUpperCase() + t.slice(1) }));
    const sysIdTotal = (s.chassis.configured ? 1 : 0) + configuredMechs.length;
    bindings += genSysIdBindings(configuredMechs, s.chassis.configured);
    if (sysIdTotal > 0) {
        imp += genSysIdImports(sysIdTotal);
    }
    fields += genSysIdChooserField(sysIdTotal);
    const autoReturn = pp
        ? '        return Autos.getAuto(drive);\n'
        : '        return Commands.print("No autonomous configured");\n';
    const smField = (s.stateMachineIntegration && s.statemachine.configured)
        ? '    private final StateMachineCoordinator stateMachineCoordinator;\n' : '';
    const smInit = (s.stateMachineIntegration && s.statemachine.configured)
        ? '        stateMachineCoordinator = new StateMachineCoordinator(this);\n' : '';
    if (s.stateMachineIntegration && s.statemachine.configured) {
        imp += `import frc.robot.commands.StateMachineCoordinator;\nimport frc.robot.statemachine.StateMachine;\n`;
    }
    return `${imp}\npublic class RobotContainer {\n    private final CommandXboxController controller = new CommandXboxController(0);\n${fields}${smField}\n    public RobotContainer() {\n${init}${smInit}        configureBindings();\n    }\n\n    private void configureBindings() {\n${bindings}    }\n\n    public Command getAutonomousCommand() {\n${autoReturn}    }\n}\n`;
}

function genDriveSubsystem(zip, pkg, s, fw) {
    const dir = `${pkg}/subsystems/drive`;
    const mi = MOTORS[s.chassis.driveMotor];
    const isSwerve = s.chassis.type === 'swerve';
    const phoenix6 = isSwerve && s.chassis.usePhoenix6Swerve;
    const pp = s.chassis.pathplannerEnabled !== false && isSwerve;

    if (fw === 'advantagekit') {
        if (isSwerve) {
            zip.file(`${dir}/DriveIO.java`, `package frc.robot.subsystems.drive;\nimport edu.wpi.first.math.geometry.Pose2d;\nimport edu.wpi.first.math.geometry.Rotation2d;\nimport edu.wpi.first.math.kinematics.ChassisSpeeds;\nimport org.littletonrobotics.junction.AutoLog;\n\npublic interface DriveIO {\n    @AutoLog class DriveIOInputs {\n        public Pose2d pose = new Pose2d();\n        public ChassisSpeeds speeds = new ChassisSpeeds();\n        public double gyroYawRad = 0.0;\n    }\n    default void updateInputs(DriveIOInputs inputs) {}\n    default void drive(ChassisSpeeds speeds) {}\n    default void stop() {}\n    default Pose2d getPose() { return new Pose2d(); }\n    default Rotation2d getHeading() { return new Rotation2d(); }\n}\n`);
            const realImpl = phoenix6
                ? `// Phoenix 6 SwerveDrivetrain with TalonFX + CANCoder\n// TODO: Configure SwerveDrivetrain with DriveConstants module IDs\nimport com.ctre.phoenix6.swerve.SwerveDrivetrain;\n`
                : `// WPILib swerve modules\n`;
            zip.file(`${dir}/DriveIOReal.java`, genSwerveDriveIOReal(s.chassis));
            zip.file(`${dir}/DriveIOSim.java`, genSwerveDriveIOSim());
            const autoBuilder = pp ? `
        // PathPlanner AutoBuilder — holonomic swerve (${phoenix6 ? 'Phoenix 6' : 'WPILib'} underneath)
        com.pathplanner.lib.auto.AutoBuilder.configure(
            this::getPose, this::resetPose, this::getChassisSpeeds, this::drive,
            new com.pathplanner.lib.controllers.PPHolonomicDriveController(
                new edu.wpi.first.math.controller.PIDConstants(5.0, 0.0, 0.0),
                new edu.wpi.first.math.controller.PIDConstants(5.0, 0.0, 0.0)),
            com.pathplanner.lib.util.HolonomicPathFollowerConfig.fromRobotConfig(
                new edu.wpi.first.wpilibj2.command.Subsystem[] { this }),
            () -> io.getHeading().getDegrees() < 0,
            this);
` : '';
            zip.file(`${dir}/Drive.java`, `package frc.robot.subsystems.drive;\nimport edu.wpi.first.math.geometry.Pose2d;\nimport edu.wpi.first.math.geometry.Rotation2d;\nimport edu.wpi.first.math.kinematics.ChassisSpeeds;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;\nimport edu.wpi.first.wpilibj2.command.SubsystemBase;\nimport org.littletonrobotics.junction.Logger;\nimport frc.robot.Constants.DriveConstants;\nimport static edu.wpi.first.units.Units.*;\n\npublic class Drive extends SubsystemBase {\n    private final DriveIO io;\n    private final DriveIOInputsAutoLogged inputs = new DriveIOInputsAutoLogged();\n    private final SysIdRoutine sysIdRoutine;\n\n    public Drive(DriveIO io) {\n        this.io = io;${autoBuilder}\n        sysIdRoutine = new SysIdRoutine(\n            new SysIdRoutine.Config(),\n            new SysIdRoutine.Mechanism(\n                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> io.drive(new ChassisSpeeds(volts.in(Volts), 0, 0)),\n                null,\n                this));\n    }\n    @Override public void periodic() { io.updateInputs(inputs); Logger.processInputs("Drive", inputs); }\n    public void drive(ChassisSpeeds speeds) { io.drive(speeds); }\n    public void driveFieldRelative(double vx, double vy, double omega) {\n        drive(ChassisSpeeds.fromFieldRelativeSpeeds(vx, vy, omega, io.getHeading()));\n    }\n    public void stop() { io.stop(); }\n    public Pose2d getPose() { return io.getPose(); }\n    public void resetPose(Pose2d pose) { /* TODO */ }\n    public ChassisSpeeds getChassisSpeeds() { return inputs.speeds; }\n    public Rotation2d getHeading() { return io.getHeading(); }\n\n    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }\n    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }\n}\n`);
            zip.file(`${pkg}/commands/DriveCommands.java`, `package frc.robot.commands;\nimport edu.wpi.first.math.MathUtil;\nimport edu.wpi.first.math.kinematics.ChassisSpeeds;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.Commands;\nimport frc.robot.Constants.DriveConstants;\nimport frc.robot.subsystems.drive.Drive;\nimport java.util.function.DoubleSupplier;\n\npublic class DriveCommands {\n    private static final double DEADBAND = 0.1;\n    public static Command joystickDrive(Drive drive, DoubleSupplier xSupplier, DoubleSupplier ySupplier, DoubleSupplier omegaSupplier) {\n        return Commands.run(() -> {\n            double x = MathUtil.applyDeadband(xSupplier.getAsDouble(), DEADBAND);\n            double y = MathUtil.applyDeadband(ySupplier.getAsDouble(), DEADBAND);\n            double omega = MathUtil.applyDeadband(omegaSupplier.getAsDouble(), DEADBAND);\n            double max = DriveConstants.MAX_SPEED_MPS;\n            drive.driveFieldRelative(x * max, y * max, omega * Math.PI);\n        }, drive).withName("JoystickDrive");\n    }\n}\n`);
        } else {
            zip.file(`${dir}/DriveIO.java`, `package frc.robot.subsystems.drive;\nimport edu.wpi.first.math.geometry.Rotation2d;\nimport edu.wpi.first.math.kinematics.ChassisSpeeds;\nimport org.littletonrobotics.junction.AutoLog;\npublic interface DriveIO {\n    @AutoLog class DriveIOInputs {\n        public double gyroYawRad = 0.0;\n        public ChassisSpeeds speeds = new ChassisSpeeds();\n    }\n    default void updateInputs(DriveIOInputs inputs) {}\n    default void drive(ChassisSpeeds speeds) {}\n    default void stop() {}\n    default Rotation2d getHeading() { return Rotation2d.kZero; }\n}\n`);
            const tankReal = genTankIOReal(s.chassis);
            if (tankReal) zip.file(`${dir}/DriveIOReal.java`, tankReal);
            zip.file(`${dir}/DriveIOSim.java`, genDriveIOSim());
            zip.file(`${dir}/Drive.java`, `package frc.robot.subsystems.drive;\nimport edu.wpi.first.math.geometry.Rotation2d;\nimport edu.wpi.first.math.kinematics.ChassisSpeeds;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;\nimport edu.wpi.first.wpilibj2.command.SubsystemBase;\nimport org.littletonrobotics.junction.Logger;\nimport frc.robot.Constants.DriveConstants;\nimport static edu.wpi.first.units.Units.*;\n\npublic class Drive extends SubsystemBase {\n    private final DriveIO io;\n    private final DriveIOInputsAutoLogged inputs = new DriveIOInputsAutoLogged();\n    private final SysIdRoutine sysIdRoutine;\n\n    public Drive(DriveIO io) {\n        this.io = io;\n        sysIdRoutine = new SysIdRoutine(\n            new SysIdRoutine.Config(),\n            new SysIdRoutine.Mechanism(\n                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> io.drive(new ChassisSpeeds(volts.in(Volts), 0, 0)),\n                null,\n                this));\n    }\n    @Override public void periodic() { io.updateInputs(inputs); Logger.processInputs("Drive", inputs); }\n    public void drive(ChassisSpeeds speeds) { io.drive(speeds); }\n    public void driveArcade(double fwd, double rot) {\n        drive(new ChassisSpeeds(fwd * DriveConstants.MAX_SPEED_MPS, 0, rot * Math.PI));\n    }\n    public void stop() { io.stop(); }\n    public Rotation2d getHeading() { return io.getHeading(); }\n\n    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }\n    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }\n}\n`);
            zip.file(`${pkg}/commands/DriveCommands.java`, `package frc.robot.commands;\nimport edu.wpi.first.math.MathUtil;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.Commands;\nimport frc.robot.Constants.DriveConstants;\nimport frc.robot.subsystems.drive.Drive;\nimport java.util.function.DoubleSupplier;\n\npublic class DriveCommands {\n    private static final double DEADBAND = 0.1;\n    public static Command joystickDrive(Drive drive, DoubleSupplier x, DoubleSupplier y, DoubleSupplier omega) {\n        return Commands.run(() -> {\n            double fwd = MathUtil.applyDeadband(-x.getAsDouble(), DEADBAND);\n            double rot = MathUtil.applyDeadband(-omega.getAsDouble(), DEADBAND);\n            drive.driveArcade(fwd, rot);\n        }, drive).withName("JoystickDrive");\n    }\n}\n`);
        }
    } else {
        if (isSwerve) {
            zip.file(`${dir}/Drive.java`, `package frc.robot.subsystems.drive;\nimport edu.wpi.first.math.geometry.Pose2d;\nimport edu.wpi.first.math.kinematics.ChassisSpeeds;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;\nimport edu.wpi.first.wpilibj2.command.SubsystemBase;\nimport frc.robot.Constants.DriveConstants;\nimport static edu.wpi.first.units.Units.*;\n\npublic class Drive extends SubsystemBase {\n    private final SysIdRoutine sysIdRoutine;\n\n    public Drive() {\n        sysIdRoutine = new SysIdRoutine(\n            new SysIdRoutine.Config(),\n            new SysIdRoutine.Mechanism(\n                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> { /* Apply voltage */ },\n                null,\n                this));\n    }\n    public void driveFieldRelative(double vx, double vy, double omega) { /* TODO */ }\n    public void stop() {}\n    public Pose2d getPose() { return new Pose2d(); }\n    public ChassisSpeeds getChassisSpeeds() { return new ChassisSpeeds(); }\n\n    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }\n    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }\n}\n`);
        } else {
            zip.file(`${dir}/Drive.java`, `package frc.robot.subsystems.drive;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;\nimport edu.wpi.first.wpilibj2.command.SubsystemBase;\nimport static edu.wpi.first.units.Units.*;\n\npublic class Drive extends SubsystemBase {\n    private final SysIdRoutine sysIdRoutine;\n\n    public Drive() {\n        sysIdRoutine = new SysIdRoutine(\n            new SysIdRoutine.Config(),\n            new SysIdRoutine.Mechanism(\n                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> { /* Apply voltage */ },\n                null,\n                this));\n    }\n    public void drive(double fwd, double rot) { /* TODO */ }\n    public void stop() {}\n\n    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }\n    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }\n}\n`);
        }
        zip.file(`${pkg}/commands/DriveCommands.java`, isSwerve
            ? `package frc.robot.commands;\nimport edu.wpi.first.math.MathUtil;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.Commands;\nimport frc.robot.Constants.DriveConstants;\nimport frc.robot.subsystems.drive.Drive;\nimport java.util.function.DoubleSupplier;\npublic class DriveCommands {\n    private static final double DEADBAND = 0.1;\n    public static Command joystickDrive(Drive drive, DoubleSupplier x, DoubleSupplier y, DoubleSupplier omega) {\n        return Commands.run(() -> {\n            double vx = MathUtil.applyDeadband(x.getAsDouble(), DEADBAND) * DriveConstants.MAX_SPEED_MPS;\n            double vy = MathUtil.applyDeadband(y.getAsDouble(), DEADBAND) * DriveConstants.MAX_SPEED_MPS;\n            double w = MathUtil.applyDeadband(omega.getAsDouble(), DEADBAND) * Math.PI;\n            drive.driveFieldRelative(vx, vy, w);\n        }, drive);\n    }\n}\n`
            : `package frc.robot.commands;\nimport edu.wpi.first.math.MathUtil;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.Commands;\nimport frc.robot.subsystems.drive.Drive;\nimport java.util.function.DoubleSupplier;\npublic class DriveCommands {\n    public static Command joystickDrive(Drive drive, DoubleSupplier x, DoubleSupplier y, DoubleSupplier omega) {\n        return Commands.run(() -> drive.drive(x.getAsDouble(), omega.getAsDouble()), drive);\n    }\n}\n`);
    }
}

function genMechSubsystem(zip, pkg, type, m, state, fw) {
    const N = type.charAt(0).toUpperCase() + type.slice(1);
    const dir = `${pkg}/subsystems/${type}`;

    if (type === 'arm') {
        if (fw === 'advantagekit') {
            // ArmIO
            zip.file(`${dir}/ArmIO.java`, `package frc.robot.subsystems.arm;
import org.littletonrobotics.junction.AutoLog;
public interface ArmIO {
    @AutoLog class ArmIOInputs {
        public double[] positionRad = new double[3];
        public double[] velocityRadPerSec = new double[3];
        public double[] appliedVolts = new double[3];
        public double[] currentAmps = new double[3];
    }
    default void updateInputs(ArmIOInputs inputs) {}
    default void setJointVolts(int jointIndex, double volts) {}
    default void stop() {}
}
`);
            // ArmIOReal
            const ioReal = genMechIOReal('arm', m, 'Arm');
            if (ioReal) zip.file(`${dir}/ArmIOReal.java`, ioReal);
            // ArmIOSim
            zip.file(`${dir}/ArmIOSim.java`, genMechIOSim('arm', m, 'Arm', m.attachedTo || 'chassis'));
            // Arm subsystem
            zip.file(`${dir}/Arm.java`, `package frc.robot.subsystems.arm;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import org.littletonrobotics.junction.Logger;
import frc.robot.Constants.ArmConstants;

public class Arm extends SubsystemBase {
    private final ArmIO io;
    private final ArmIOInputsAutoLogged inputs = new ArmIOInputsAutoLogged();

    public Arm(ArmIO io) {
        this.io = io;
    }

    @Override public void periodic() {
        io.updateInputs(inputs);
        Logger.processInputs("Arm", inputs);
    }

    public void runJointVoltage(int jointIdx, double volts) { io.setJointVolts(jointIdx, volts); }
    public double getJointPositionRad(int jointIdx) { return inputs.positionRad[jointIdx]; }
    public void stop() { io.stop(); }
}
`);
        } else {
            // CommandBase Arm
            let comments = '';
            m.joints.forEach((j, i) => {
                comments += `    // Joint ${i+1}: leader CAN ID ${j.motors[0].canId} | gear ratio ${j.gearRatio || '—'}\n`;
            });
            zip.file(`${dir}/Arm.java`, `package frc.robot.subsystems.arm;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.Constants.ArmConstants;

public class Arm extends SubsystemBase {
${comments}
    public Arm() {
        // TODO: Initialize motors
    }

    public void runJointVoltage(int jointIndex, double volts) {
        // TODO
    }

    public double getJointPositionRad(int jointIndex) {
        return 0.0;
    }

    public void stop() {
        // TODO
    }
}
`);
        }
        return;
    }

    const motors = m.motors || [];
    const leaderMotor = motors[0];
    const mc = m.motorConfig || {};

    // Motor init comments
    let motorComments = motors.map((mot, i) => {
        const info = MOTORS[mot.type];
        return `    // Motor ${i} (${mot.role}): ${info?.name||'?'} CAN:${mot.canId} inv:${mot.inverted}`;
    }).join('\n');

    if (fw === 'advantagekit') {
        let extraIOInputs = '';
        let extraIOMethods = '';
        let extraSubsystemMethods = '';
        
        if (type === 'shooter') {
            if (m.shooterType === 'adjustable' || m.shooterType === 'adjustable_turret') {
                extraIOInputs += `        public double pivotPositionRad = 0.0;\n        public double pivotVelocityRadPerSec = 0.0;\n        public double pivotAppliedVolts = 0.0;\n        public double[] pivotCurrentAmps = new double[]{0.0};\n`;
                extraIOMethods += `    default void setPivotVoltage(double volts) {}\n    default void setPivotPosition(double positionRad) {}\n`;
                extraSubsystemMethods += `    public void runPivotVoltage(double v) { io.setPivotVoltage(v); }\n    public double getPivotPosition() { return inputs.pivotPositionRad; }\n`;
            }
            if (m.shooterType === 'adjustable_turret') {
                extraIOInputs += `        public double turretPositionRad = 0.0;\n        public double turretVelocityRadPerSec = 0.0;\n        public double turretAppliedVolts = 0.0;\n        public double[] turretCurrentAmps = new double[]{0.0};\n`;
                extraIOMethods += `    default void setTurretVoltage(double volts) {}\n    default void setTurretPosition(double positionRad) {}\n`;
                extraSubsystemMethods += `    public void runTurretVoltage(double v) { io.setTurretVoltage(v); }\n    public double getTurretPosition() { return inputs.turretPositionRad; }\n`;
            }
        }

        // IO Interface
        zip.file(`${dir}/${N}IO.java`, `package frc.robot.subsystems.${type};\nimport org.littletonrobotics.junction.AutoLog;\npublic interface ${N}IO {\n    @AutoLog class ${N}IOInputs {\n        public double positionRad = 0.0;\n        public double velocityRadPerSec = 0.0;\n        public double appliedVolts = 0.0;\n        public double[] currentAmps = new double[]{0.0};\n${type==='elevator'?'        public double heightMeters = 0.0;\n':''}${m.hasSensor?'        public boolean hasPiece = false;\n':''}${extraIOInputs}    }\n    default void updateInputs(${N}IOInputs inputs) {}\n    default void setVoltage(double volts) {}\n    default void setPosition(double positionRad) {}\n    default void stop() {}\n    default void configurePID(double kP, double kI, double kD) {}\n${extraIOMethods}}\n`);
        const ioReal = genMechIOReal(type, m, N);
        if (ioReal) zip.file(`${dir}/${N}IOReal.java`, ioReal);
        zip.file(`${dir}/${N}IOSim.java`, genMechIOSim(type, m, N, m.attachedTo || 'chassis'));
        // Subsystem
        zip.file(`${dir}/${N}.java`, `package frc.robot.subsystems.${type};\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;\nimport edu.wpi.first.wpilibj2.command.SubsystemBase;\nimport org.littletonrobotics.junction.Logger;\nimport frc.robot.Constants.${N}Constants;\nimport static edu.wpi.first.units.Units.*;\n\npublic class ${N} extends SubsystemBase {\n    private final ${N}IO io;\n    private final ${N}IOInputsAutoLogged inputs = new ${N}IOInputsAutoLogged();\n    private final SysIdRoutine sysIdRoutine;\n\n    public ${N}(${N}IO io) {\n        this.io = io;${m.pid ? `\n        io.configurePID(${N}Constants.kP, ${N}Constants.kI, ${N}Constants.kD);` : ''}\n        sysIdRoutine = new SysIdRoutine(\n            new SysIdRoutine.Config(),\n            new SysIdRoutine.Mechanism(\n                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> io.setVoltage(volts.in(Volts)),\n                null,\n                this));\n    }\n\n    @Override public void periodic() {\n        io.updateInputs(inputs);\n        Logger.processInputs("${N}", inputs);\n    }\n\n    public void runVoltage(double v) { io.setVoltage(v); }\n    public void stop() { io.stop(); }\n${type==='elevator'?'    public double getHeight() { return inputs.heightMeters; }\n':''}${m.hasSensor?'    public boolean hasPiece() { return inputs.hasPiece; }\n':''}${extraSubsystemMethods}    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }\n    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }\n}\n`);
    } else {
        let extraSubsystemMethods = '';
        if (type === 'shooter') {
            if (m.shooterType === 'adjustable' || m.shooterType === 'adjustable_turret') {
                extraSubsystemMethods += `    public void runPivotVoltage(double v) { /* TODO */ }\n    public double getPivotPosition() { return 0.0; /* TODO */ }\n`;
            }
            if (m.shooterType === 'adjustable_turret') {
                extraSubsystemMethods += `    public void runTurretVoltage(double v) { /* TODO */ }\n    public double getTurretPosition() { return 0.0; /* TODO */ }\n`;
            }
        }
        // CommandBase — simple subsystem, no IO layer
        zip.file(`${dir}/${N}.java`, `package frc.robot.subsystems.${type};\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;\nimport edu.wpi.first.wpilibj2.command.SubsystemBase;\nimport frc.robot.Constants.${N}Constants;\nimport static edu.wpi.first.units.Units.*;\n\npublic class ${N} extends SubsystemBase {\n${motorComments}\n    // Current Limit: ${mc.currentLimit}A | Brake: ${mc.brakeMode}\n    private final SysIdRoutine sysIdRoutine;\n\n    public ${N}() {\n        // TODO: Init motor controllers\n        sysIdRoutine = new SysIdRoutine(\n            new SysIdRoutine.Config(),\n            new SysIdRoutine.Mechanism(\n                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> runVoltage(volts.in(Volts)),\n                null,\n                this));\n    }\n\n    @Override public void periodic() {\n        // TODO: Update telemetry\n    }\n\n    public void runVoltage(double v) { /* TODO */ }\n    public void stop() { runVoltage(0); }\n${type==='elevator'?'    public double getHeight() { return 0; /* TODO */ }\n':''}${m.hasSensor?'    public boolean hasPiece() { return false; /* TODO */ }\n':''}${extraSubsystemMethods}    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }\n    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }\n}\n`);
    }
}

function genVisionSubsystem(zip, pkg, s, fw) {
    const dir = `${pkg}/subsystems/vision`;
    const isLL = s.vision.system === 'limelight';
    const limelightNameMap = {
        ll3: 'Limelight 3',
        ll3a: 'Limelight 3A',
        ll3g: 'Limelight 3G',
        ll4: 'Limelight 4',
    };
    zip.file(`${dir}/VisionIO.java`, `package frc.robot.subsystems.vision;\nimport edu.wpi.first.math.geometry.Pose2d;\nimport org.littletonrobotics.junction.AutoLog;\npublic interface VisionIO {\n    @AutoLog class VisionIOInputs {\n        public boolean hasTarget = false;\n        public Pose2d estimatedPose = new Pose2d();\n        public double timestampSeconds = 0.0;\n        public int tagCount = 0;\n    }\n    default void updateInputs(VisionIOInputs inputs) {}\n}\n`);
    if (isLL) {
        let camInit = '';
        s.vision.cameras.forEach((c,i) => { camInit += `        // ${c.name}: Translation(${c.x}, ${c.y}, ${c.z}) Rotation(${c.roll}°, ${c.pitch}°, ${c.yaw}°)\n`; });
        zip.file(`${dir}/VisionIOLimelight.java`, `package frc.robot.subsystems.vision;\nimport frc.robot.Constants.VisionConstants;\npublic class VisionIOLimelight implements VisionIO {\n    // Limelight version: ${limelightNameMap[s.vision.limelightVersion] || 'Limelight'}\n${camInit}    public VisionIOLimelight() { /* Init cameras */ }\n    @Override public void updateInputs(VisionIOInputs inputs) { /* LimelightHelpers */ }\n}\n`);
    } else {
        let camInit = '';
        s.vision.cameras.forEach((c,i) => {
            camInit += `        // ${c.name}: new Transform3d(${c.x},${c.y},${c.z}, new Rotation3d(${c.roll}°,${c.pitch}°,${c.yaw}°))\n`;
        });
        zip.file(`${dir}/VisionIOPhotonVision.java`, `package frc.robot.subsystems.vision;\nimport org.photonvision.PhotonCamera;\nimport frc.robot.Constants.VisionConstants;\npublic class VisionIOPhotonVision implements VisionIO {\n    // Platform: ${s.vision.photonPlatform}\n${camInit}    private final PhotonCamera[] cameras;\n    public VisionIOPhotonVision() {\n        cameras = new PhotonCamera[VisionConstants.CAMERA_COUNT];\n        for (int i = 0; i < cameras.length; i++) cameras[i] = new PhotonCamera("camera_" + i);\n    }\n    @Override public void updateInputs(VisionIOInputs inputs) { /* PhotonPoseEstimator */ }\n}\n`);
    }
    zip.file(`${dir}/Vision.java`, `package frc.robot.subsystems.vision;\nimport edu.wpi.first.wpilibj2.command.SubsystemBase;\nimport org.littletonrobotics.junction.Logger;\npublic class Vision extends SubsystemBase {\n    private final VisionIO io;\n    private final VisionIOInputsAutoLogged inputs = new VisionIOInputsAutoLogged();\n    public Vision(VisionIO io) { this.io = io; }\n    @Override public void periodic() { io.updateInputs(inputs); Logger.processInputs("Vision", inputs); }\n    public boolean hasTarget() { return inputs.hasTarget; }\n}\n`);
}

function genStateMachine(zip, pkg, s) {
    zip.file(`${pkg}/statemachine/StateMachine.java`, `package frc.robot.statemachine;\nimport java.util.*;\npublic class StateMachine {\n    private String currentState;\n    private final Map<String, List<Transition>> transitions = new HashMap<>();\n    private final Map<String, Runnable> stateActions = new HashMap<>();\n    public StateMachine(String init) { this.currentState = init; }\n    public void addTransition(String from, String to, String trigger) { transitions.computeIfAbsent(from, k -> new ArrayList<>()).add(new Transition(to, trigger)); }\n    public void setStateAction(String state, Runnable action) { stateActions.put(state, action); }\n    public void trigger(String event) { for (var t : transitions.getOrDefault(currentState, List.of())) { if (t.trigger.equals(event)) { currentState = t.target; var a = stateActions.get(currentState); if (a != null) a.run(); return; } } }\n    public String getCurrentState() { return currentState; }\n    private record Transition(String target, String trigger) {}\n}\n`);
}

function genStateMachineCommands(zip, pkg, state, fw) {
    zip.file(`${pkg}/commands/StateMachineCoordinator.java`, `package frc.robot.commands;\nimport frc.robot.RobotContainer;\nimport frc.robot.statemachine.StateMachine;\n\n/** Wires state-machine triggers to subsystem command factories. */\npublic class StateMachineCoordinator {\n    private final StateMachine stateMachine;\n\n    public StateMachineCoordinator(RobotContainer container) {\n        stateMachine = new StateMachine("idle");\n        // TODO: Parse statemachine JSON and register transitions + command bindings\n    }\n\n    public void onTrigger(String event) { stateMachine.trigger(event); }\n    public String getState() { return stateMachine.getCurrentState(); }\n}\n`);
}

function genPathPlannerAssets(zip, base, state) {
    const deploy = `${base}/src/main/deploy/pathplanner`;
    zip.file(`${deploy}/paths/.gitkeep`, '');
    zip.file(`${deploy}/autos/.gitkeep`, '');
    zip.file(`${deploy}/paths/Example Path.path`, JSON.stringify({
        version: VERSION_PROFILE.pathplannerFormat,
        waypoints: [
            { anchor: { x: 1.5, y: 5.5 }, prevWaypoint: null, nextWaypoint: { x: 2.0, y: 5.5 } },
            { anchor: { x: 3.0, y: 5.5 }, prevWaypoint: { x: 2.5, y: 5.5 }, nextWaypoint: null },
        ],
        constraints: [],
        goalEndState: { velocity: 0, rotation: 0 },
    }, null, 2));
    zip.file(`${deploy}/autos/Example Auto.auto`, JSON.stringify({
        version: VERSION_PROFILE.pathplannerFormat,
        name: 'Example Auto',
        folder: 'autos',
        choreoAuto: false,
        pathplannerAuto: true,
        commands: [
            { type: 'path', pathName: 'Example Path' },
        ],
    }, null, 2));
    zip.file(`${deploy}/settings.json`, JSON.stringify({
        robotWidth: 0.9,
        robotLength: 0.9,
        holonomicMode: true,
    }, null, 2));
}

function genAutos(zip, pkg, state) {
    zip.file(`${pkg}/Autos.java`, `package frc.robot;\nimport com.pathplanner.lib.auto.AutoBuilder;\nimport com.pathplanner.lib.auto.NamedCommands;\nimport edu.wpi.first.wpilibj2.command.Command;\nimport edu.wpi.first.wpilibj.smartdashboard.SendableChooser;\nimport edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;\nimport frc.robot.subsystems.drive.Drive;\n\n/** PathPlanner auto factory — requires AutoBuilder.configure() in Drive subsystem. */\npublic final class Autos {\n    private static SendableChooser<Command> autoChooser;\n\n    private Autos() {}\n\n    public static void registerNamedCommands() {\n        // NamedCommands.registerCommand("Example", Commands.print("Named command"));\n    }\n\n    public static Command getAuto(Drive drive) {\n        registerNamedCommands();\n        if (autoChooser == null) {\n            autoChooser = AutoBuilder.buildAutoChooser();\n            SmartDashboard.putData("Auto Chooser", autoChooser);\n        }\n        Command auto = autoChooser.getSelected();\n        return auto != null ? auto : edu.wpi.first.wpilibj2.command.Commands.print("No auto selected");\n    }\n}\n`);
}

function genReadme(s, name) {
    const limelightNameMap = {
        ll3: 'Limelight 3',
        ll3a: 'Limelight 3A',
        ll3g: 'Limelight 3G',
        ll4: 'Limelight 4',
    };
    const visionDetail = s.vision.system === 'limelight'
        ? (limelightNameMap[s.vision.limelightVersion] || 'Limelight')
        : (s.vision.photonPlatform || 'PhotonVision');

    return `# FRC Robot Project: ${name}

This deployable FRC codebase was automatically generated using the FRC Robot Code Generator.

## 🛠️ Architecture Overview
- **Code Architecture**: ${s.framework === 'advantagekit' ? 'AdvantageKit-based (Telemetry-focused multi-IO layer)' : 'WPILib command-based template'}
- **Chassis**: ${s.chassis.configured ? `${s.chassis.type.toUpperCase()} drive (${s.chassis.tankCanIds ? 'Tank' : 'Swerve'})` : 'None'}
- **Vision**: ${s.vision.configured ? `${s.vision.system} supporting ${visionDetail}` : 'None'}

---

## 📈 SysId Characterization & PID/FF Tuning Tutorial

During the configuration stage, you might have left PID and feedforward constants at their default/empty values. **This is completely normal!** You should adjust these values after constructing and characterizing your physical robot.

### 1. What is SysId?
SysId is the official WPILib system identification tool used to calculate optimal feedforward (kS, kV, kA) and feedback (kP, kI, kD) gains for your robot's mechanisms.

### 2. How to Run SysId on this Codebase
Every mechanism subsystem comes pre-equipped with SysId routines, and **all button bindings are automatically generated** in \`RobotContainer.java\`.

You do NOT need to manually wire any buttons. The generated bindings are:
- **Drive**: A/B/X/Y buttons for quasistatic/dynamic forward/reverse
- **Additional mechanisms**: D-Pad, Bumpers/Triggers, or dashboard chooser

To run characterization:
1. Deploy the generated project to your RoboRIO or run in simulation.
2. The SysId bindings are already wired — just press the corresponding buttons.
3. Open the **SysId desktop application** from WPILib.
4. Record telemetry data, then analyze logs for feedforward/feedback constants.

### 3. Where to Update PID/FF Values in Code
Once you have obtained the values, open the following file:
📍 **\`src/main/java/frc/robot/Constants.java\`**

Locate the corresponding Constants class for your mechanism:
- For Drive: \`DriveConstants\`
- For Elevator: \`ElevatorConstants\`
- For Shooter: \`ShooterConstants\`
- For Arm: \`ArmConstants\`
- For Launcher: \`LauncherConstants\`

Update the constants like \`kP\`, \`kI\`, \`kD\`, \`kS\`, \`kV\`, and \`kA\` directly inside those classes.

For complete step-by-step guides, refer to the official **WPILib SysId documentation**:
🔗 https://docs.wpilib.org/en/stable/docs/software/advanced-controls/system-identification/index.html
`;
}
