/**
 * Motor, Encoder, Gyro, and Hardware Constants
 * Updated: Kraken X44, Minion added; Limelight as versions 1-4
 */
export const MOTORS = {
    talonfx_falcon: { name: 'Falcon 500 (TalonFX)', vendor: 'ctre', class: 'TalonFX', freeSpeed: 6380, stallTorque: 4.69, canBus: true },
    talonfx_kraken60: { name: 'Kraken X60 (TalonFX)', vendor: 'ctre', class: 'TalonFX', freeSpeed: 6000, stallTorque: 7.09, canBus: true },
    talonfx_kraken44: { name: 'Kraken X44 (TalonFX)', vendor: 'ctre', class: 'TalonFX', freeSpeed: 5800, stallTorque: 4.69, canBus: true },
    talonfxs_minion: { name: 'Minion (TalonFXS)', vendor: 'ctre', class: 'TalonFXS', freeSpeed: 6000, stallTorque: 1.22, canBus: true },
    talonfxs: { name: 'TalonFXS', vendor: 'ctre', class: 'TalonFXS', freeSpeed: 6000, stallTorque: 7.09, canBus: true },
    sparkmax_neo: { name: 'SparkMax + NEO', vendor: 'rev', class: 'CANSparkMax', freeSpeed: 5676, stallTorque: 2.6, canBus: true },
    sparkmax_neo550: { name: 'SparkMax + NEO 550', vendor: 'rev', class: 'CANSparkMax', freeSpeed: 11000, stallTorque: 0.97, canBus: true },
    sparkflex_vortex: { name: 'SparkFlex + Vortex', vendor: 'rev', class: 'CANSparkFlex', freeSpeed: 6784, stallTorque: 3.6, canBus: true },
};

export const ENCODERS = {
    integrated: { name: 'Integrated Encoder', vendor: 'none', needsId: false },
    cancoder: { name: 'CANCoder', vendor: 'ctre', needsId: true },
    throughbore: { name: 'Through Bore Encoder', vendor: 'rev', needsId: false, port: 'DIO' },
    dutycycle: { name: 'DutyCycle Encoder', vendor: 'wpilib', needsId: false, port: 'DIO' },
};

export const GYROS = {
    pigeon2: { name: 'Pigeon 2.0', vendor: 'ctre', class: 'Pigeon2', needsCanId: true },
    navx: { name: 'NavX2', vendor: 'kauai', class: 'AHRS', needsCanId: false },
    adis16470: { name: 'ADIS16470', vendor: 'wpilib', class: 'ADIS16470_IMU', needsCanId: false },
    adis16448: { name: 'ADIS16448', vendor: 'wpilib', class: 'ADIS16448_IMU', needsCanId: false },
};

export const CHASSIS_TYPES = {
    swerve: { name: 'Swerve Drive', modules: 4, desc: 'Holonomic drive with independent steer+drive per module' },
    tank: { name: 'Tank Drive', modules: 2, desc: 'Differential drive with left/right side motors' },
    mecanum: { name: 'Mecanum Drive', modules: 4, desc: 'Holonomic drive with mecanum wheels' },
};

export const LIMELIGHT_VERSIONS = {
    ll3: { name: 'Limelight 3', desc: 'Upgraded sensor, wider FOV' },
    ll3a: { name: 'Limelight 3A', desc: 'High resolution' },
    ll3g: { name: 'Limelight 3G', desc: 'Google Coral AI accelerator' },
    ll4: { name: 'Limelight 4', desc: 'Latest gen, highest performance' },
};

export const PHOTON_PLATFORMS = {
    raspberrypi: { name: 'Raspberry Pi', desc: 'Raspberry Pi 4/5 running PhotonVision' },
    orangepi: { name: 'Orange Pi', desc: 'Orange Pi 5 running PhotonVision' },
};

export const SWERVE_PRESETS = {
    mk4i_l2: { name: 'MK4i L2', driveRatio: 6.75, turnRatio: 150.0/7.0, wheelDiam: 0.1016 },
    mk4i_l3: { name: 'MK4i L3', driveRatio: 6.12, turnRatio: 150.0/7.0, wheelDiam: 0.1016 },
    mk4_l2: { name: 'MK4 L2', driveRatio: 6.75, turnRatio: 12.8, wheelDiam: 0.1016 },
    mk4n_l2: { name: 'MK4n L2', driveRatio: 5.9, turnRatio: 18.75, wheelDiam: 0.1016 },
    custom: { name: 'Custom', driveRatio: null, turnRatio: null, wheelDiam: null },
};

export const SENSOR_PORT_TYPES = {
    dio: { name: 'RoboRIO DIO', desc: 'Digital Input/Output port (0-9)' },
    can: { name: 'CAN Bus Sensor', desc: 'CAN-connected sensor (e.g. CANifier)' },
    analog: { name: 'RoboRIO Analog', desc: 'Analog Input port (0-3)' },
};

// Default CAN IDs — non-conflicting assignment scheme
export const DEFAULT_CAN_IDS = {
    // Swerve: FL=1x, FR=2x, BL=3x, BR=4x (x1=drive, x2=turn, x3=encoder)
    swerve: {
        fl_drive: 11, fl_turn: 12, fl_encoder: 13,
        fr_drive: 21, fr_turn: 22, fr_encoder: 23,
        bl_drive: 31, bl_turn: 32, bl_encoder: 33,
        br_drive: 41, br_turn: 42, br_encoder: 43,
    },
    // Tank/Mecanum
    tank: {
        left_leader: 11, left_follower: 12,
        right_leader: 21, right_follower: 22,
    },
    // Gyro
    gyro: 50,
    // Mechanisms: 5x=elevator, 6x=shooter, 7x=intake, 8x=roller, 9x=launcher
    elevator: { motor: 51, follower: 52, encoder: 53 },
    shooter: { motor: 61, follower: 62 },
    intake: { motor: 71, follower: 72, sensor: 0 }, // sensor DIO port 0
    roller: { motor: 81, follower: 82 },
    launcher: { motor: 91, sensor: 1 }, // sensor DIO port 1
};
