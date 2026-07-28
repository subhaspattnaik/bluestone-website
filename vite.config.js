import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    // Render sets PORT; bind to 0.0.0.0 so the service is reachable
    host: true,
    port: Number(process.env.PORT) || 4173,
    // Allow the Render-assigned hostname (and any *.onrender.com host)
    // plus the production custom domain and its subdomains (www, etc.)
    allowedHosts: ['.onrender.com', 'bluestoneagro.com', '.bluestoneagro.com'],
  },
})
