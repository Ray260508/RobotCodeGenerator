import registry, { registerMechanism } from '../registry.js';
import { elevatorMechanism } from './elevator.js';
import { shooterMechanism } from './shooter.js';
import { intakeMechanism } from './intake.js';
import { rollerMechanism } from './roller.js';
import { launcherMechanism } from './launcher.js';
import { armMechanism } from './arm.js';
import { customMechanism } from './custom.js';

export function initializeRegistry() {
    registerMechanism(elevatorMechanism.id, elevatorMechanism);
    registerMechanism(shooterMechanism.id, shooterMechanism);
    registerMechanism(intakeMechanism.id, intakeMechanism);
    registerMechanism(rollerMechanism.id, rollerMechanism);
    registerMechanism(launcherMechanism.id, launcherMechanism);
    registerMechanism(armMechanism.id, armMechanism);
    registerMechanism(customMechanism.id, customMechanism);
}

export { registry };
