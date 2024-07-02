import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [],
  transformers: [],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
    },
  },
  rules: [
    // 安全区
    ['p-safe', {
      padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
    }],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pr-safe', { 'padding-right': 'env(safe-area-inset-right)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
    ['pl-safe', { 'padding-left': 'env(safe-area-inset-left)' }],
  ],
})
