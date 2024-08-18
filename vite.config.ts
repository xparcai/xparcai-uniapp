import process from 'node:process'
import path from 'node:path'
import { defineConfig } from 'vite'
import { createVitePlugins } from './vite/plugins'
import { loadMetaEnv } from './vite/utils'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const metaEnv = loadMetaEnv(mode, root, 'VITE_')
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
