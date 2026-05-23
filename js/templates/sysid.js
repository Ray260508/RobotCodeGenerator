/**
 * SysId Characterization Binding Generator
 * Auto-generates test-mode controller bindings for every configured mechanism.
 */

// Button allocation for SysId routines:
// Each mechanism needs 4 buttons: quasistatic fwd/rev, dynamic fwd/rev
// We allocate from this pool:
const BUTTON_POOLS = [
  // Pool 0 (primary): face buttons
  { fwd_quasi: 'a()', rev_quasi: 'b()', fwd_dyn: 'x()', rev_dyn: 'y()' },
  // Pool 1: POV/D-pad
  { fwd_quasi: 'povUp()', rev_quasi: 'povDown()', fwd_dyn: 'povRight()', rev_dyn: 'povLeft()' },
  // Pool 2: triggers + bumpers
  { fwd_quasi: 'leftBumper()', rev_quasi: 'rightBumper()', fwd_dyn: 'leftTrigger()', rev_dyn: 'rightTrigger()' },
  // Pool 3: back/start
  { fwd_quasi: 'back()', rev_quasi: 'start()', fwd_dyn: 'back().and(controller.a())', rev_dyn: 'start().and(controller.a())' },
];

export function genSysIdBindings(configuredMechanisms, hasDrive) {
  // configuredMechanisms: array of { name: 'elevator', varName: 'elevator', displayName: 'Elevator' }
  // hasDrive: boolean
  
  const allSubsystems = [];
  if (hasDrive) {
    allSubsystems.push({ name: 'drive', varName: 'drive', displayName: 'Drive' });
  }
  allSubsystems.push(...configuredMechanisms);
  
  if (allSubsystems.length === 0) return '';
  
  let bindings = '\n        // ═══════════════════════════════════════════════════════════════\n';
  bindings += '        // AUTO-GENERATED SYSID CHARACTERIZATION BINDINGS\n';
  bindings += '        // Active in ALL modes. Hold the assigned buttons to run routines.\n';
  bindings += '        // After collecting data, use WPILib SysId tool to analyze logs.\n';
  bindings += '        // ═══════════════════════════════════════════════════════════════\n';
  
  if (allSubsystems.length <= BUTTON_POOLS.length) {
    // Direct button assignment
    allSubsystems.forEach((sub, i) => {
      const pool = BUTTON_POOLS[i];
      bindings += `\n        // --- ${sub.displayName} SysId (${poolDescription(i)}) ---\n`;
      bindings += `        controller.${pool.fwd_quasi}.whileTrue(${sub.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kForward));\n`;
      bindings += `        controller.${pool.rev_quasi}.whileTrue(${sub.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kReverse));\n`;
      bindings += `        controller.${pool.fwd_dyn}.whileTrue(${sub.varName}.sysIdDynamic(SysIdRoutine.Direction.kForward));\n`;
      bindings += `        controller.${pool.rev_dyn}.whileTrue(${sub.varName}.sysIdDynamic(SysIdRoutine.Direction.kReverse));\n`;
    });
  } else {
    // Too many mechanisms — use SendableChooser approach
    bindings += '        // NOTE: More than 4 SysId-capable subsystems. Using dashboard chooser.\n';
    bindings += '        // Select mechanism on SmartDashboard "SysId Mechanism" chooser,\n';
    bindings += '        // then use A/B/X/Y to run quasistatic/dynamic routines.\n';
    bindings += generateChooserBindings(allSubsystems);
  }
  
  return bindings;
}

function poolDescription(i) {
  const descs = ['A/B/X/Y buttons', 'D-Pad', 'Bumpers/Triggers', 'Back/Start'];
  return descs[i] || `Pool ${i}`;
}

function generateChooserBindings(subs) {
  let s = '';
  // The chooser approach: generate a SendableChooser<Command[]> 
  // that maps each mechanism to its 4 SysId commands
  s += `\n        // SysId mechanism selector\n`;
  s += `        sysIdChooser = new edu.wpi.first.wpilibj.smartdashboard.SendableChooser<>();\n`;
  subs.forEach((sub, i) => {
    const def = i === 0 ? 'setDefaultOption' : 'addOption';
    s += `        sysIdChooser.${def}("${sub.displayName}", "${sub.varName}");\n`;
  });
  s += `        edu.wpi.first.wpilibj.smartdashboard.SmartDashboard.putData("SysId Mechanism", sysIdChooser);\n`;
  
  // Generate conditional bindings based on chooser
  s += '\n';
  subs.forEach(sub => {
    s += `        controller.a().and(() -> "${sub.varName}".equals(sysIdChooser.getSelected())).whileTrue(${sub.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kForward));\n`;
    s += `        controller.b().and(() -> "${sub.varName}".equals(sysIdChooser.getSelected())).whileTrue(${sub.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kReverse));\n`;
    s += `        controller.x().and(() -> "${sub.varName}".equals(sysIdChooser.getSelected())).whileTrue(${sub.varName}.sysIdDynamic(SysIdRoutine.Direction.kForward));\n`;
    s += `        controller.y().and(() -> "${sub.varName}".equals(sysIdChooser.getSelected())).whileTrue(${sub.varName}.sysIdDynamic(SysIdRoutine.Direction.kReverse));\n`;
  });
  
  return s;
}

export function genSysIdChooserField(mechCount) {
  if (mechCount > BUTTON_POOLS.length) {
    return '    private final edu.wpi.first.wpilibj.smartdashboard.SendableChooser<String> sysIdChooser;\n';
  }
  return '';
}

export function genSysIdImports(mechCount) {
  let imp = 'import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;\n';
  if (mechCount > BUTTON_POOLS.length) {
    // We already use fully qualified name for SendableChooser above, but it's fine
  }
  return imp;
}
