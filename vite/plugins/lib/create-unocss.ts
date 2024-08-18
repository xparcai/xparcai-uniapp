import type { PluginOption } from 'vite'

export default async function pluginCreateUnoCSS(): Promise<PluginOption[]> {
  const unocss = (await import('unocss/vite')).default
  return unocss()
}
