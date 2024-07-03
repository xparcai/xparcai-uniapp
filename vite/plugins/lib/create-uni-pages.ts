import type { PluginOption } from 'vite'

import uniPages from '@uni-helper/vite-plugin-uni-pages'

export default function pluginCreateUniPages(metaEnv: ImportMetaEnv): PluginOption {
  return uniPages({
    dts: `${metaEnv.VITE_DIR_GENERATE_TYPES}/plugin-uni-pages.d.ts`,
    exclude: ['**/components/**/**.*'],
    routeBlockLang: 'json5',
    homePage: metaEnv.VITE_APP_HOME_PATH,
    subPackages: [],
  })
}
