declare interface ImportMetaEnv {
  // ================ 项目配置 开始 ================
  /** 项目标题 */
  readonly VITE_APP_TITLE: string
  /**
   * 项目首页路径
   * @uni-helper/vite-plugin-uni-pages
   */
  readonly VITE_APP_HOME_PATH?: string
  /** uni appid */
  readonly VITE_UNI_APPID: string
  // ================ 项目配置 结束 ================

  // ================ 插件配置 开始 ================
  /**
   * vite插件生成的类型声明文件目录
   * unplugin-auto-import、@uni-helper/vite-plugin-uni-components、@uni-helper/vite-plugin-uni-pages
   */
  readonly VITE_DIR_GENERATE_TYPES: string
  /**
   * vite插件使用的本地布局组件目录
   * @uni-helper/vite-plugin-uni-layouts
   */
  readonly VITE_DIR_LAYOUT?: string
  /**
   * vite插件使用的本地默认布局组件名称
   * @uni-helper/vite-plugin-uni-layouts
   */
  readonly VITE_NAME_LAYOUT?: string
  /**
   * vite插件使用的本地导入api的文件目录
   * unplugin-auto-import/vite
   */
  readonly VITE_DIR_AUTO_IMPORTS?: string
  /**
   * vite插件使用的本地全局组件目录
   * @uni-helper/vite-plugin-uni-components
   */
  readonly VITE_DIR_COMPONENTS?: string
  /**
   * vite插件使用的本地svg图标目录
   * @uni-helper/unocss-preset-uni、unplugin-icons
   */
  readonly VITE_DIR_SVG_ICONS?: string
  /**
   * vite插件使用的本地svg图标键名
   * @uni-helper/unocss-preset-uni、unplugin-icons
   */
  readonly VITE_KEY_SVG_ICONS?: string
  /**
   * vite插件使用的本地排除生成page路径的文件
   * @uni-helper/vite-plugin-uni-pages
   */
  readonly VITE_FILE_PAGES_EXCLUDE?: string
  /**
   * vite插件使用的vuesfc文件中定义路由信息的块儿语言
   * @uni-helper/vite-plugin-uni-pages
   * https://github.com/uni-helper/vite-plugin-uni-pages/blob/main/packages/core/src/types.ts#L71
   */
  readonly VITE_LANG_ROUTER_BLOCK?: 'json5' | 'json' | 'yaml' | 'yml'
  /**
   * vite插件使用的分包子包的文件目录
   * @uni-helper/vite-plugin-uni-pages
   */
  readonly VITE_DIR_PAGES_SUBPACKAGE?: string
  // ================ 插件配置 结束 ================
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
