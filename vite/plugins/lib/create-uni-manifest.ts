import type { PluginOption } from 'vite'

import uniManifest from '@uni-helper/vite-plugin-uni-manifest'

export default function pluginCreateUniManifest(): PluginOption {
  return uniManifest()
}
