import type { PluginOption } from 'vite'

import autoImport from 'unplugin-auto-import/vite'
import { getMetaEnvKeyValueAsStringArray, validateMetaEnvKeyValueAsExpected } from '../../utils'

export default function pluginCreateAutoImport(metaEnv: ImportMetaEnv): PluginOption {
  validateMetaEnvKeyValueAsExpected(metaEnv, 'VITE_DIR_GENERATE_TYPES')
  const dirs: string[] | undefined = getMetaEnvKeyValueAsStringArray(metaEnv, 'VITE_DIR_AUTO_IMPORTS')
  return autoImport({
    // TODO 这里不知道能不能想办法抽离出去
    imports: [
      'vue',
      'uni-app',
      'pinia',
    ],
    dirs,
    dts: `${metaEnv.VITE_DIR_GENERATE_TYPES}/plugin-auto-import.d.ts`,
    vueTemplate: true,
  })
}
