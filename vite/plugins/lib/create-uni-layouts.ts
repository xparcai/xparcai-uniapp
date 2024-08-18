import type { PluginOption } from 'vite'

import uniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import { validateMetaEnvKeyValueAsExpected } from '../../utils'

export default function pluginCreateUniLayouts(metaEnv: ImportMetaEnv): PluginOption {
  validateMetaEnvKeyValueAsExpected(metaEnv, 'VITE_NAME_LAYOUT', 'VITE_DIR_LAYOUT')
  return uniLayouts({
    layout: metaEnv?.VITE_NAME_LAYOUT,
    layoutDir: metaEnv?.VITE_DIR_LAYOUT,
  })
}
