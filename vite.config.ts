import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
    host: true,
    cors: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
});
