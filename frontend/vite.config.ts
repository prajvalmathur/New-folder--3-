import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Expose to all network interfaces
    port: 5173,
    strictPort: true, // Fail if port is already in use
    open: true, // Automatically open browser
  },
});