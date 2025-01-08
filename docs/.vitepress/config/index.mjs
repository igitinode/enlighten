import { defineConfig } from 'vitepress'
import { common as connomConfig } from './common.mjs'
import { theme as themeConfig } from './defaultTheme.mjs'

export default defineConfig({
  // 站点级选项
  ...connomConfig,

  // 主题选项
  ...themeConfig,
})
