import type { PluginOption } from 'vite'

import autoImport from 'unplugin-auto-import/vite'

export default function pluginCreateAutoImport(metaEnv: ImportMetaEnv): PluginOption {
  return autoImport({
    imports: [
      'vue',
      'uni-app',
      'pinia',
    ],
    dirs: ['src/utils', 'src/hooks'],
    dts: `${metaEnv.VITE_DIR_GENERATE_TYPES}/plugin-auto-import.d.ts`,
    resolvers: [],
  })
}
