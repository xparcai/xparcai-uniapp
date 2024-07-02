const uniapp = require('@uni-helper/eslint-config')

module.exports = uniapp(
  {
    unocss: true,
    formatters: true,
    overrides: {
      vue: {
        'vue/block-order': ['error', {
          order: ['route', 'script', 'template', 'style'],
        }],
      },
    },
    rules: {
      'no-console': 'off'
    }
  },
)
