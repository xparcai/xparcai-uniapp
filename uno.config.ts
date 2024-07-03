import process from 'node:process'
import type { Preset } from 'unocss'
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

import { presetApplet, presetRemRpx, transformerAttributify } from 'unocss-applet'
import { iconsStyle, localIconCollections } from './vite/utils'

const isMp = process.env?.UNI_PLATFORM?.startsWith('mp') ?? false

const presets: Preset[] = []

if (isMp) {
  presets.push(
    presetApplet(),
    presetRemRpx(),
  )
}
else {
  presets.push(
    presetUno(),
    presetAttributify(),
  )
}

presets.push(
  presetIcons({
    scale: 1.2,
    extraProperties: iconsStyle,
    autoInstall: true,
    collections: localIconCollections,
  }),
)

export default defineConfig({
  presets,
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify(),
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
