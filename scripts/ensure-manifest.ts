import fs from 'node:fs'

const manifestPath = './src/manifest.json'

if (!fs.existsSync(manifestPath)) {
  fs.writeFileSync(manifestPath, '{}\n', {})
}
