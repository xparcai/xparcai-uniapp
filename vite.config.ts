import process from 'node:process'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import { createVitePlugins } from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const metaEnv = loadEnv(mode, root, 'VITE_')
  return {
    root,
    plugins: createVitePlugins(metaEnv as any),
    resolve: {
      alias: {
        '@': path.join(process.cwd(), './src'),
      },
    },
  }
})
