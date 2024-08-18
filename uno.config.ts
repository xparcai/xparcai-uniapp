import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'
import { iconsStyle, localIconCollections } from './vite/utils'

export default defineConfig({
  presets: [
    presetUni({
      uno: true,
      remRpx: true,
      attributify: true,
    }),
    presetIcons({
      scale: 1.2,
      extraProperties: iconsStyle,
      autoInstall: true,
      collections: localIconCollections(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
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
