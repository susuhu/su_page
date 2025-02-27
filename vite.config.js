import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // Add this import

// https://vite.dev/config/
export default defineConfig({
  base: 'su_page', // Replace with your repository name
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
