import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const plugin = (await import('@vitejs/plugin-react-swc')).default
  return {
    plugins: [plugin()],
  }
})
