import { defineConfig } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('../../../package.json')

import { sidebarGuide } from './sidebarGuide.mjs'
import { sidebarReference } from './sidebarReference.mjs'
import { sidebarWebsite } from './sidebarWebsite.mjs'

export const theme = defineConfig({
  themeConfig: {
    // 导航栏上显示的 Logo，位于站点标题前。
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

    // 在导航栏中展示带有图标的社交帐户链接。
    /* prettier-ignore */
    socialLinks: [
      { icon: 'github', link: 'https://github.com/igitinode' },
      // { icon: 'twitter', link: '...' }
    ],

    // 文章右侧目录显示方式，deep为完整显示
    // 将此值设置为 outline:false 可禁止渲染大纲容器。
    outline: {
      level: 'deep',
      // 显示在 outline 上的标题。
      label: '页面导航'

    },

    // 导航菜单项的配置
    nav: nav(),

    // 侧边栏是文档的主要导航块
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() },
      '/website/': { base: '/website/', items: sidebarWebsite() },
    },

    // 本地搜索
    search: {
      provider: 'local',
    },

    // 自定义 lastUpdated
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 编辑链接让你可以显示一个链接，以在 GitHub 或 GitLab 等 Git 管理服务上编辑页面。要启用它
    editLink: {
      pattern: 'https://github.com/igitinode/istudy/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 页脚配置。可以添加 message 和 copyright。由于设计原因，仅当页面不包含侧边栏时才会显示页脚。
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 听雨君`,
    },

    // 自定义出现在上一页和下一页链接上方的文本。也可用于全局/局部禁用上一页/下一页链接。
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'

    // 内置了对 Carbon Ads 的原生支持
    // carbonAds: { code: "", placement: "" },
  },
})

// 顶部导航栏菜单
function nav() {
  /* prettier-ignore */
  return [
    { text: '指南', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: '参考', link: '/reference/site-config', activeMatch: '/reference/' },
    { text: '网站收藏', link: '/website/official-website', activeMatch: '/website/' },
    {
      text: pkg.version, // 首页导航有下拉菜单
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
        },
        {
          text: '参与贡献',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
        },
      ],
    },
  ]
}
