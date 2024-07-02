import type { PluginOption } from 'vite'

import uniComponents from '@uni-helper/vite-plugin-uni-components'

export default function pluginCreateUniComponents(metaEnv: ImportMetaEnv): PluginOption {
  return uniComponents({
    dirs: ['src/components'],
    dts: `${metaEnv.VITE_PLUGIN_GENERATE_TYPES_DIR}/plugin-uni-components.d.ts`,
  })
}
