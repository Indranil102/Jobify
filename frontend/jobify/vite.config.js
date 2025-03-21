import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the backend server
      '/api': {
        target: 'http://localhost:5000', // Backend server URL
        changeOrigin: true, // Changes the origin of the request to the target
        rewrite: (path) => path.replace(/^\/api/, '') // Remove '/api' prefix when forwarding
      }
    }
  }
});