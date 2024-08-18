import type { PluginOption } from 'vite'

import uniPages from '@uni-helper/vite-plugin-uni-pages'
import { getMetaEnvKeyValueAsStringArray, validateMetaEnvKeyValueAsExpected } from '../../utils'

export default function pluginCreateUniPages(metaEnv: ImportMetaEnv): PluginOption {
  validateMetaEnvKeyValueAsExpected(metaEnv, 'VITE_DIR_GENERATE_TYPES')
  const exclude: string[] | undefined = getMetaEnvKeyValueAsStringArray(metaEnv, 'VITE_FILE_PAGES_EXCLUDE')
  return uniPages({
    dts: `${metaEnv.VITE_DIR_GENERATE_TYPES}/plugin-uni-pages.d.ts`,
    exclude,
    routeBlockLang: metaEnv?.VITE_LANG_ROUTER_BLOCK,
    homePage: metaEnv?.VITE_APP_HOME_PATH,
    subPackages: [],
  })
}
