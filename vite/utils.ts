import process from 'node:process'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { loadEnv } from 'vite'

// icons的默认样式
export const iconsStyle: Record<string, string> = {
  'display': 'inline-block',
  'vertical-align': 'middle',
}
export const iconsStyleStr = Object.entries(iconsStyle).map(([key, value]) => `${key}: ${value}`).join('; ')

/**
 * 加载环境变量
 * @param mode 模式
 * @param envDir 目录
 * @param prefixes 前缀
 */
export function loadMetaEnv(
  mode: string = process.env.NODE_ENV!,
  envDir: string = process.cwd(),
  prefixes: string | string[] = ['VITE_'],
): ImportMetaEnv {
  return loadEnv(mode, envDir, prefixes) as ImportMetaEnv
}

/**
 * 本地图标自动化收集
 */
export function localIconCollections() {
  const metaEnv = loadMetaEnv()
  if (metaEnv?.VITE_KEY_SVG_ICONS || metaEnv?.VITE_DIR_SVG_ICONS) {
    validateMetaEnvKeyValueAsExpected(metaEnv, 'VITE_KEY_SVG_ICONS', 'VITE_DIR_SVG_ICONS')
  }
  return {
    [metaEnv.VITE_KEY_SVG_ICONS!]: FileSystemIconLoader(
      metaEnv.VITE_DIR_SVG_ICONS!,
      svg => svg
        .replace(/width=".*?"/g, '')
        .replace(/height=".*?"/g, ''),
    ),
  }
}

/**
 * 校验环境变量是否存在并符合预期
 * @param metaEnv 环境变量
 * @param keys 校验的key
 */
export function validateMetaEnvKeyValueAsExpected(metaEnv: ImportMetaEnv, ...keys: string[]) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    if (!metaEnv[key]) {
      throw new Error(`环境变量${key}的值不能为空`)
    }
  }
}

/**
 * 将环境变量的值当做数组取出
 * @param metaEnv 环境变量
 * @param key 变量键名
 */
export function getMetaEnvKeyValueAsStringArray(metaEnv: ImportMetaEnv, key: string): string[] | undefined {
  if (Object.prototype.hasOwnProperty.call(metaEnv, key)) {
    return undefined
  }
  return metaEnv[key].split(',').filter(Boolean)
}
