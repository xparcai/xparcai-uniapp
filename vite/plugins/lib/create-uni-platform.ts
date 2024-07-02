import type { PluginOption } from 'vite'

import uniPlatform from '@uni-helper/vite-plugin-uni-platform'

export default function pluginCreateUniPlatform(): PluginOption {
  return uniPlatform()
}
