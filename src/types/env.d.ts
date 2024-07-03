declare interface ImportMetaEnv {
  /**
   * vite插件生成的类型声明文件目录
   */
  readonly VITE_DIR_GENERATE_TYPES: string
  /**
   * 本地svg图标目录
   */
  readonly VITE_DIR_SVG_ICONS: string
  /**
   * 本地svg图标键名
   */
  readonly VITE_KEY_SVG_ICONS: string
  /**
   * 项目首页路径
   */
  readonly VITE_APP_HOME_PATH: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
