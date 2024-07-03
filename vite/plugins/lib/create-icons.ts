import type { PluginOption } from 'vite'

import Icons from 'unplugin-icons/vite'
import { iconsStyleStr, localIconCollections } from '../../utils'

export default function pluginCreateIcons(): PluginOption {
  return Icons({
    scale: 1,
    defaultClass: 'iconify-icon',
    defaultStyle: iconsStyleStr,
    compiler: 'vue3',
    autoInstall: true,
    customCollections: localIconCollections,
  })
}
