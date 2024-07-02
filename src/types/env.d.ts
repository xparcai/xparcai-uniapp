declare interface ImportMetaEnv {
  /**
   * vite插件生成的类型声明文件目录
   */
  readonly VITE_PLUGIN_GENERATE_TYPES_DIR: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
