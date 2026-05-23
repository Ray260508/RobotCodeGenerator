export const customMechanism = {
    id: 'custom',
    name: 'Custom',
    description: 'User-defined mechanism',
    defaultState: {
        configured: false, enabled: false,
        // Will be populated dynamically
    },
    validAttachments: ['chassis', 'elevator', 'arm'],
};
