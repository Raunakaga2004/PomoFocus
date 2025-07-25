import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(),],
  server: {
    host: '0.0.0.0', // Allow access from any IP on the network
    port: 3000, // You can change this if needed
  },
});
