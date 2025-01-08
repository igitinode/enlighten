import { defineConfig } from 'vitepress'
import { sharedConfig } from './shared.mjs'

import { zh } from './zh.mjs'
import { en } from './en.mjs'

export default defineConfig({
  // 站点级选项
  ...sharedConfig,

  // 国际化问题存在切换异常
  locales: {
    root: { label: '简体中文', ...zh },
    // zh: { label: 'English', zh },
  },
})
