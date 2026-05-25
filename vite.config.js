import { defineConfig } from 'vite';

export default defineConfig({
  base: '/RobotCodeGenerator/',
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 400,
    rollupOptions: {
      treeshake: { moduleSideEffects: false },
      output: {
        manualChunks: {
          three: ['three'],
          jszip: ['jszip'],
        },
      },
    },
  },
});
