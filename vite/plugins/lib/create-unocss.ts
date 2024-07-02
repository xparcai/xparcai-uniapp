import type { PluginOption } from 'vite'

import unocss from 'unocss/vite'

export default function pluginCreateUnoCSS(): PluginOption {
  return unocss()
}
