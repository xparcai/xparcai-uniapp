import type { PluginOption } from 'vite'

import pluginCreateUniManifest from './lib/create-uni-manifest'
import pluginCreateUniPlatform from './lib/create-uni-platform'
import pluginCreateUniPlatformModifier from './lib/create-uni-platform-modifier'
import pluginCreateUniLayouts from './lib/create-uni-layouts'
import pluginCreateUniPages from './lib/create-uni-pages'
import pluginCreateUniComponents from './lib/create-uni-components'
import pluginCreateAutoImport from './lib/create-auto-import'
import pluginCreateIcons from './lib/create-icons'
import pluginCreateUnoCSS from './lib/create-unocss'
import pluginCreateUniApp from './lib/create-uni-app'

export function createVitePlugins(metaEnv: ImportMetaEnv): PluginOption[] {
  const plugins: PluginOption[] = []

  plugins.push(pluginCreateUniManifest())
  plugins.push(pluginCreateUniPlatform())
  plugins.push(pluginCreateUniPlatformModifier())
  plugins.push(pluginCreateUniLayouts(metaEnv))
  plugins.push(pluginCreateUniPages(metaEnv))
  plugins.push(pluginCreateUniComponents(metaEnv))
  plugins.push(pluginCreateAutoImport(metaEnv))
  plugins.push(pluginCreateIcons())
  plugins.push(pluginCreateUnoCSS())
  plugins.push(pluginCreateUniApp())

  return plugins
}
