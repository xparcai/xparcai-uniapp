import type { PluginOption } from 'vite'

import uniComponents from '@uni-helper/vite-plugin-uni-components'
import { getMetaEnvKeyValueAsStringArray, validateMetaEnvKeyValueAsExpected } from '../../utils'

export default function pluginCreateUniComponents(metaEnv: ImportMetaEnv): PluginOption {
  validateMetaEnvKeyValueAsExpected(metaEnv, 'VITE_DIR_GENERATE_TYPES')
  const dirs: string[] | undefined = getMetaEnvKeyValueAsStringArray(metaEnv, 'VITE_DIR_COMPONENTS')
  return uniComponents({
    dirs,
    dts: `${metaEnv.VITE_DIR_GENERATE_TYPES}/plugin-uni-components.d.ts`,
  })
}
