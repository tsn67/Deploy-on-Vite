import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Default to root. Adjust if deploying to a subdirectory.
  plugins: [react()],
});