import type { PluginOption } from 'vite'

import uniLayouts from '@uni-helper/vite-plugin-uni-layouts'

export default function pluginCreateUniLayouts(): PluginOption {
  return uniLayouts()
}
