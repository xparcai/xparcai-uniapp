// 大概可能需要一个合并配置项的方法

// icons的默认样式
export const iconsStyle: Record<string, string> = {
  'display': 'inline-block',
  'vertical-align': 'middle',
}
export const iconsStyleStr = Object.entries(iconsStyle).map(([key, value]) => `${key}: ${value}`).join('; ')
