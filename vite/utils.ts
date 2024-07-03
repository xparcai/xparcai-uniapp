import process from 'node:process'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { loadEnv } from 'vite'

// icons的默认样式
export const iconsStyle: Record<string, string> = {
  'display': 'inline-block',
  'vertical-align': 'middle',
}
export const iconsStyleStr = Object.entries(iconsStyle).map(([key, value]) => `${key}: ${value}`).join('; ')

// 本地图标自动化收集
const metaEnv = loadEnv(process.env?.NODE_ENV ?? 'production', process.cwd(), 'VITE_')
export const localIconCollections = {
  [metaEnv.VITE_KEY_SVG_ICONS]: FileSystemIconLoader(
    metaEnv.VITE_DIR_SVG_ICONS,
    svg => svg
      .replace(/width=".*?"/g, '')
      .replace(/height=".*?"/g, ''),
  ),
}
