/**
 * Centralized Version Profile — All library versions and API patterns
 * Edit THIS FILE to update library versions across the entire generator.
 */

export const VERSION_PROFILE = {
  frcYear: '2026',
  gradleRIO: '2026.2.1',
  javaVersion: 'VERSION_17',
  
  vendordeps: {
    advantagekit: {
      fileName: 'AdvantageKit.json',
      name: 'AdvantageKit',
      version: '2026.1.0',
      uuid: 'd94427e6-503d-4de9-b18b-474d5fd2a645',
      mavenUrls: ['https://github.com/Mechanical-Advantage/AdvantageKit/releases/download/v2026.1.0/'],
      javaDependencies: [{ groupId: 'org.littletonrobotics.akit', artifactId: 'akit-java', version: '2026.1.0' }],
    },
    phoenix6: {
      fileName: 'Phoenix6.json',
      name: 'CTRE-Phoenix (v6)',
      version: '26.0.0',
      vendorKey: 'ctre',
      mavenUrls: ['https://maven.ctr-electronics.com/release/'],
      jsonUrl: 'https://maven.ctr-electronics.com/release/com/ctre/phoenix6/latest/Phoenix6-frc2026-latest.json',
      javaDependencies: [{ groupId: 'com.ctre.phoenix6', artifactId: 'wpiapi-java', version: '26.0.0' }],
    },
    revlib: {
      fileName: 'REVLib.json',
      name: 'REVLib',
      version: '2026.1.1',
      vendorKey: 'rev',
      mavenUrls: ['https://maven.revrobotics.com/release/'],
      jsonUrl: 'https://software-metadata.revrobotics.com/REVLib-2026.json',
      javaDependencies: [{ groupId: 'com.revrobotics.frc', artifactId: 'REVLib-java', version: '2026.1.1' }],
    },
    navx: {
      fileName: 'NavX.json',
      name: 'NavX',
      version: '2026.2.0',
      vendorKey: 'kauai',
      mavenUrls: ['https://dev.studica.com/maven/release/2026/'],
      jsonUrl: 'https://dev.studica.com/releases/2026/NavX.json',
      javaDependencies: [{ groupId: 'com.kauailabs.navx.frc', artifactId: 'navx-frc-java', version: '2026.2.0' }],
    },
    photonlib: {
      fileName: 'photonlib.json',
      name: 'photonlib',
      version: '2026.2.1',
      vendorKey: 'photonvision',
      mavenUrls: ['https://maven.photonvision.org/repository/internal', 'https://maven.photonvision.org/repository/snapshots'],
      jsonUrl: 'https://maven.photonvision.org/repository/internal/org/photonvision/photonlib-json/1.0/photonlib-json-1.0.json',
      javaDependencies: [{ groupId: 'org.photonvision', artifactId: 'photonlib-java', version: '2026.2.1' }],
    },
    pathplanner: {
      fileName: 'PathplannerLib.json',
      name: 'PathplannerLib',
      version: '2026.3.0',
      mavenUrls: ['https://3015rangerrobotics.github.io/pathplannerlib/repo'],
      jsonUrl: 'https://3015rangerrobotics.github.io/pathplannerlib/PathplannerLib.json',
      javaDependencies: [{ groupId: 'com.pathplanner.lib', artifactId: 'PathplannerLib-java', version: '2026.3.0' }],
    },
  },

  pathplannerFormat: '2026.0',

  // Motor vendor API patterns
  motorApi: {
    ctre: {
      imports: [
        'com.ctre.phoenix6.hardware.TalonFX',
        'com.ctre.phoenix6.controls.VoltageOut',
        'com.ctre.phoenix6.controls.PositionVoltage',
        'com.ctre.phoenix6.configs.TalonFXConfiguration',
        'com.ctre.phoenix6.signals.NeutralModeValue',
        'com.ctre.phoenix6.signals.InvertedValue',
      ],
      motorClass: 'TalonFX',
      configClass: 'TalonFXConfiguration',
    },
    rev: {
      imports: [
        'com.revrobotics.spark.SparkMax',
        'com.revrobotics.spark.SparkLowLevel.MotorType',
        'com.revrobotics.spark.config.SparkMaxConfig',
        'com.revrobotics.spark.config.SparkBaseConfig.IdleMode',
        'com.revrobotics.RelativeEncoder',
        'com.revrobotics.spark.SparkBase.ControlType',
      ],
      motorClass: 'SparkMax',
      configClass: 'SparkMaxConfig',
    },
  },

  // AdvantageKit API patterns
  advantagekitApi: {
    robotBaseClass: 'LoggedRobot',
    robotBaseImport: 'org.littletonrobotics.junction.LoggedRobot',
    loggerImport: 'org.littletonrobotics.junction.Logger',
    logStart: 'Logger.start()',
    processInputs: (name, inputsVar) => `Logger.processInputs("${name}", ${inputsVar})`,
    autoLogImport: 'org.littletonrobotics.junction.AutoLog',
  },

  // SysId API
  sysidApi: {
    voltageType: 'edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage>',
  },

  // Simulation
  simApi: {
    getMotorSim: (motorKey, count) => {
      const motorMap = {
        'falcon500': `DCMotor.getFalcon500(${count})`,
        'krakenx60': `DCMotor.getKrakenX60(${count})`,
        'krakenx44': `DCMotor.getKrakenX60(${count})`,
        'minion': `DCMotor.getFalcon500(${count})`,
        'talonfxs': `DCMotor.getFalcon500(${count})`,
        'neo': `DCMotor.getNEO(${count})`,
        'neo550': `DCMotor.getNeo550(${count})`,
        'vortex': `DCMotor.getNeoVortex(${count})`,
      };
      return motorMap[motorKey] || `DCMotor.getNEO(${count})`;
    },
  },
};
