import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'
import { loadMetaEnv } from './vite/utils'
import { description } from './package.json'

const metaEnv = loadMetaEnv()

export default defineManifestConfig({
  'name': metaEnv.VITE_APP_TITLE,
  'appid': metaEnv.VITE_UNI_APPID,
  'description': description,
  'locale': '',
  'versionName': '1.0.0',
  'versionCode': '100',
  'transformPx': false,
  'networkTimeout': {
    request: 60000,
    connectSocket: 60000,
    uploadFile: 60000,
    downloadFile: 60000,
  },
  'debug': false,
  'uniStatistics': {
    enable: false,
  },
  'app-plus': {},
  'h5': {},
  'quickapp': {},
  'mp-weixin': {},
  'mp-alipay': {},
  'mp-baidu': {},
  'mp-toutiao': {},
  'mp-lark': {},
  'mp-qq': {},
  'mp-kuaishou': {},
  'vueVersion': '3',
})
