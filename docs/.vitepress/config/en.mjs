import { defineConfig } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('../../../package.json')

import { sidebarGuide } from './sidebar/sidebarGuide.mjs'
import { sidebarReference } from './sidebar/sidebarReference.mjs'
import { sidebarWebsite } from './sidebar/sidebarWebsite.mjs'

export const en = defineConfig({
  // 网站的语言
  lang: 'en-US',
  // 浏览器检索关键字
  description: 'Enlighten, Vite & Vue powered static site generator.',
  themeConfig: {
    // 导航菜单项的配置
    nav: nav(),
    // 侧边栏是文档的主要导航块
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() },
      '/website/': { base: '/website/', items: sidebarWebsite() },
    },
    // 编辑链接让你可以显示一个链接，以在 GitHub 或 GitLab 等 Git 管理服务上编辑页面。要启用它
    editLink: {
      pattern: 'https://github.com/igitinode/istudy/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    // 页脚配置。可以添加 message 和 copyright。由于设计原因，仅当页面不包含侧边栏时才会显示页脚。
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright ©  2024-${new Date().getFullYear()} iStudy`,
    },
    // 文章右侧目录显示方式，deep为完整显示
    // 将此值设置为 outline:false 可禁止渲染大纲容器。
    outline: {
      level: 'deep',
      // 显示在 outline 上的标题。
      label: 'Page Navigation',
    },
    // 自定义出现在上一页和下一页链接上方的文本。也可用于全局/局部禁用上一页/下一页链接。
    docFooter: {
      prev: 'Prev',
      next: 'Next',
    },
    // 自定义 lastUpdated
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
})

// 顶部导航栏菜单
function nav() {
  /* prettier-ignore */
  return [
    { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    {
      text: 'Reference',
      link: '/reference/site-config',
      activeMatch: '/reference/',
    },
    {
      text: 'Website',
      link: '/website/official-website',
      activeMatch: '/website/',
    },
    {
      text: pkg.version, // 首页导航有下拉菜单
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
        },
      ],
    },
  ]
}

export const search = {
  en: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
}
