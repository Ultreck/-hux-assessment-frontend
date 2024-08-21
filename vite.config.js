// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite configurations
  optimizeDeps: {
    include: ['axios'], // Ensure Axios is correctly included
  },
});
