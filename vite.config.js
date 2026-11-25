import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Makes built asset URLs work whether this repository is deployed at
  // username.github.io/ or username.github.io/repository-name/.
  base: './',
})
