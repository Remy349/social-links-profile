/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/social-links-profile/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
