/**
 * Mechanism Registry
 * Central registry for all mechanism definitions, eliminating hardcoded switch statements.
 */

const registry = new Map();

/**
 * Register a mechanism type.
 * @param {string} id - Mechanism ID (e.g., 'elevator')
 * @param {Object} definition - The mechanism definition object
 */
export function registerMechanism(id, definition) {
    registry.set(id, { id, ...definition });
}

/**
 * Get a mechanism definition by ID.
 */
export function getMechanism(id) {
    return registry.get(id);
}

/**
 * Get all registered mechanisms.
 */
export function getAllMechanisms() {
    return Array.from(registry.values());
}

/**
 * Build the default state for all registered mechanisms.
 */
export function buildDefaultMechanismsState() {
    const state = {};
    for (const [id, def] of registry) {
        state[id] = def.defaultState ? JSON.parse(JSON.stringify(def.defaultState)) : { configured: false };
    }
    return state;
}

export default registry;
