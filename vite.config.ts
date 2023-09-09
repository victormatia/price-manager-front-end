import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
  plugins: [
    react(), 
    tsconfigPaths(), // esse plugin resolve o problema do paths mapping do vite
  ],
});
