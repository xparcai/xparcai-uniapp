import type { PluginOption } from 'vite'

import uniapp from '@dcloudio/vite-plugin-uni'

export default function pluginCreateUniApp(): PluginOption {
  return uniapp()
}
