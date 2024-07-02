import type { PluginOption } from 'vite'

import uniPlatformModifier from '@uni-helper/vite-plugin-uni-platform-modifier'

export default function pluginCreateUniPlatformModifier(): PluginOption {
  return uniPlatformModifier()
}
