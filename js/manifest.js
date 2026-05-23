/**
 * Manifest System — Phase 3
 * Enables incremental code generation by tracking what was generated and when.
 * 
 * The manifest is included in every generated ZIP as .robot-generator-manifest.json.
 * On subsequent generations, users can select "Add Mechanism" or "Update Libraries" mode.
 */

import { VERSION_PROFILE } from './versions.js';
import { getAllMechanisms } from './registry.js';

/** Generation mode constants */
export const GEN_MODE = {
    FULL: 'full',           // Full project regeneration (default)
    ADD_MECHANISM: 'add',  // Only generate new mechanism files + snippets
    LIBRARIES_ONLY: 'libs', // Only update build.gradle + vendordeps
};

/**
 * Generate a manifest object from the current state.
 */
export function buildManifest(state, projectName, mode = GEN_MODE.FULL) {
    const configuredMechs = Object.entries(state.mechanisms)
        .filter(([, m]) => m.configured)
        .map(([id]) => id);

    return {
        schemaVersion: '1.0',
        generatedAt: new Date().toISOString(),
        generatorVersion: '2.0',
        mode,
        projectName,
        framework: state.framework || 'advantagekit',
        libraries: {
            gradleRIO: VERSION_PROFILE.gradleRIO,
            advantagekit: VERSION_PROFILE.vendordeps.advantagekit.version,
            phoenix6: VERSION_PROFILE.vendordeps.phoenix6.version,
            revlib: VERSION_PROFILE.vendordeps.revlib.version,
            pathplanner: VERSION_PROFILE.vendordeps.pathplanner.version,
            photonlib: VERSION_PROFILE.vendordeps.photonlib.version,
        },
        chassis: state.chassis.configured ? {
            type: state.chassis.type,
            driveMotor: state.chassis.driveMotor,
            gyro: state.chassis.gyro,
        } : null,
        mechanisms: configuredMechs,
        vision: state.vision.configured ? state.vision.system : null,
        generatedFiles: [],  // Populated after generation
    };
}

/**
 * Parse a manifest JSON string. Returns null if invalid.
 */
export function parseManifest(jsonStr) {
    try {
        const manifest = JSON.parse(jsonStr);
        if (!manifest.schemaVersion || !manifest.generatorVersion) return null;
        return manifest;
    } catch {
        return null;
    }
}

/**
 * Compare two manifests and return a diff.
 * Used to determine what changed between generations.
 */
export function diffManifests(oldManifest, newManifest) {
    if (!oldManifest) return { isFirstGen: true, addedMechs: newManifest.mechanisms, removedMechs: [], libsChanged: true };

    const addedMechs = newManifest.mechanisms.filter(m => !oldManifest.mechanisms.includes(m));
    const removedMechs = oldManifest.mechanisms.filter(m => !newManifest.mechanisms.includes(m));
    
    const libsChanged = Object.entries(newManifest.libraries).some(
        ([k, v]) => oldManifest.libraries[k] !== v
    );

    return { isFirstGen: false, addedMechs, removedMechs, libsChanged };
}

/**
 * Generate merge snippet instructions for a newly added mechanism.
 * Returns a README-style string telling the developer exactly what to add.
 */
export function genMergeSnippets(mechId, state, fw) {
    const m = state.mechanisms[mechId];
    if (!m) return '';
    
    const N = mechId.charAt(0).toUpperCase() + mechId.slice(1);
    
    let snippet = `## ➕ Merge Instructions: Add ${N}\n\n`;
    snippet += `The following code was generated for the **${N}** mechanism.\n`;
    snippet += `Since you already have an existing project, manually copy the relevant sections.\n\n`;
    
    snippet += `### 1. Files to Copy\n`;
    snippet += `Copy the entire \`src/main/java/frc/robot/subsystems/${mechId}/\` folder to your project.\n\n`;
    
    snippet += `### 2. RobotContainer.java\n`;
    snippet += '```java\n';
    snippet += `// Add to imports:\nimport frc.robot.subsystems.${mechId}.*;\n\n`;
    snippet += `// Add field:\nprivate final ${N} ${mechId};\n\n`;
    snippet += `// Add to constructor:\n`;
    if (fw === 'advantagekit') {
        snippet += `${mechId} = new ${N}(Robot.isReal() ? new ${N}IOReal() : new ${N}IOSim());\n`;
    } else {
        snippet += `${mechId} = new ${N}();\n`;
    }
    snippet += '```\n\n';
    
    snippet += `### 3. Constants.java\n`;
    snippet += '```java\n';
    snippet += `// Add inside Constants class:\npublic static final class ${N}Constants {\n`;
    if (m.motors) {
        m.motors.forEach((mot, i) => {
            const label = i === 0 ? 'MOTOR_ID' : `FOLLOWER_${i}_ID`;
            snippet += `    public static final int ${label} = ${mot.canId};\n`;
        });
    }
    if (m.pid) {
        snippet += `    public static final double kP = ${m.pid.kP || 0};\n`;
        snippet += `    public static final double kI = ${m.pid.kI || 0};\n`;
        snippet += `    public static final double kD = ${m.pid.kD || 0};\n`;
        snippet += `    public static final double kS = ${m.pid.kS || 0};\n`;
        snippet += `    public static final double kV = ${m.pid.kV || 0};\n`;
    }
    snippet += `}\n`;
    snippet += '```\n\n';
    
    snippet += `> **@generated marker**: Add \`// @generated:${mechId}\` comments around any generated blocks\n`;
    snippet += `> so future regenerations can identify and update them automatically.\n\n`;
    
    return snippet;
}

/**
 * Add manifest to a JSZip object.
 */
export function addManifestToZip(zip, base, manifest, generatedFiles) {
    manifest.generatedFiles = generatedFiles;
    zip.file(`${base}/.robot-generator-manifest.json`, JSON.stringify(manifest, null, 2));
    return manifest;
}
