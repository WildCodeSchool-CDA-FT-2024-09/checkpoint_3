import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173, // inner port for Vite
    watch: {
      usePolling: true // Enable polling for file changes inside Docker
    },
    // hmr: {
    //   host: 'localhost',
    //   clientPort: 5173 // outer port for HMR
    // }
  },

  plugins: [react()],
})