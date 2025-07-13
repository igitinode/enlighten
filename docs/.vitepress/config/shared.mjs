import { defineConfig } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('../../../package.json')

import { sidebarGuide } from './sidebar/sidebarGuide.mjs'
import { sidebarReference } from './sidebar/sidebarReference.mjs'
import { sidebarWebsite } from './sidebar/sidebarWebsite.mjs'
import { sidebarFrontEnd } from './sidebar/sidebarFrontEnd.mjs'
import algolia from './algolia.mjs'

// 站点级选项配置
export const sharedConfig = defineConfig({
  // 项目根路由，github部署后的基础路由如:xx.github.io/enlighten/
  base: '/enlighten/',
  // 浏览器标签 title
  title: 'Enlighten',
  // TODO:重写国际化路劲？

  // 将 favicon.ico 放在公共目录中，如果设置了 base，则使用 /base/favicon.ico
  /* prettier-ignore */
  head: [
    [ 'link', { rel: 'icon', type: 'image/svg+xml', href: '/enlighten/compass.svg' }],
    [ 'link', { rel: 'icon', type: 'image/png', href: '/enlighten/compass.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    // algolia 相关配置
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Enlighten | 学无止境' }],
    ['meta', { property: 'og:site_name', content: 'Enlighten' }],
    ['meta', { property: 'og:image', content: 'https://igitinode.github.io/enlighten/compass.png' }],
    ['meta', { property: 'og:url', content: 'https://igitinode.github.io/enlighten/' }],
    ['meta', { name: 'algolia-site-verification', content: '7798BD8759B1E3AB' }],
  ],
  // 是否使用 Git 获取每个页面的最后更新时间戳。时间戳将包含在每个页面的页面数据中，可通过 useData 访问
  lastUpdated: true,
  // 当设置为 true 时，VitePress 将从 URL 中删除 .html 后缀。
  // 要启用此功能，可能需要在托管平台上进行额外配置。要使其正常工作，服务器必须能够在不重定向的情况下访问 /foo 时提供 /foo.html。
  cleanUrls: true,
  // 实验性功能
  // 当设置为 true 时，将页面元数据提取到单独的 JavaScript 块中，而不是内联在初始 HTML 中。
  // 这使每个页面的 HTML 负载更小，并使页面元数据可缓存，从而当站点中有很多页面时可以减少服务器带宽。
  metaChunk: true,
  // 当设置为 true 时，VitePress 不会因为死链而导致构建失败。
  // ignoreDeadLinks: true,

  markdown: {},
  sitemap: {
    hostname: 'https://igitinode.github.io/enlighten',
    transformItems(items) {
      return items.filter(item => !item.url.includes('migration'))
    },
  },

  themeConfig: {
    // 网站的语言
    lang: 'zh-CN',
    // 导航栏上显示的 Logo，位于站点标题前。
    logo: { src: '/compass.svg', width: 24, height: 24 },
    // 浏览器检索关键字
    description: '学习永无止尽, Vite & Vue 搭建静态网站',
    // 导航菜单项的配置
    nav: nav(),
    // 侧边栏是文档的主要导航块
    sidebar: {
      '/front-end/': { base: '/front-end/', items: sidebarFrontEnd() },
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() },
      '/website/': { base: '/website/', items: sidebarWebsite() },
    },
    // 编辑链接让你可以显示一个链接，以在 GitHub 或 GitLab 等 Git 管理服务上编辑页面。要启用它
    editLink: {
      pattern: 'https://github.com/igitinode/istudy/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    // 页脚配置。可以添加 message 和 copyright。由于设计原因，仅当页面不包含侧边栏时才会显示页脚。
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 听雨君`,
    },
    // 文章右侧目录显示方式，deep为完整显示
    // 将此值设置为 outline:false 可禁止渲染大纲容器。
    outline: {
      level: 'deep',
      // 显示在 outline 上的标题。
      label: '内容导航',
    },
    // 自定义出现在上一页和下一页链接上方的文本。也可用于全局/局部禁用上一页/下一页链接。
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    // 自定义 lastUpdated
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    // 是否在 markdown 中的外部链接旁显示外部链接图标。
    externalLinkIcon: true,
    // 在导航栏中展示带有图标的社交帐户链接。
    /* prettier-ignore */
    socialLinks: [
      { icon: 'github', link: 'https://github.com/igitinode' },
      // { icon: 'twitter', link: '...' }
    ],
    // 本地搜索
    search: {
      provider: 'algolia',
      options: algolia,
    },

    // 内置了对 Carbon Ads 的原生支持
    // carbonAds: { code: "", placement: "" },
  },
})

// 顶部导航栏菜单
function nav() {
  /* prettier-ignore */
  return [
    {
      text: '前端',
      items: [
        {
          text: '前端目录',
          link: '/front-end/index',
          activeMatch: '/front-end/',
        },
        {
          text: 'Vue',
          link: '/front-end/vue/index',
          activeMatch: '/front-end/vue/',
        },
        {
          text: 'Pinia',
          link: '/front-end/pinia/index',
          activeMatch: '/front-end/pinia/',
        },
      ],
    },
    { text: '后端', link: '/back-end/index', activeMatch: '/back-end/' },
    { text: '工具库', link: '/tools/index', activeMatch: '/tools/' },
    {
      text: '人文主义',
      items: [
        {
          text: '心理学',
          link: '/psychology/index',
          activeMatch: '/psychology/',
        },
        {
          text: '三观论',
          link: '/three-views/index',
          activeMatch: '/three-views',
        },
        { text: '名人录', link: '/who-who/index', activeMatch: '/who-who' },
      ],
    },
    {
      text: '网站收藏',
      link: '/website/official-website',
      activeMatch: '/website/',
    },
    {
      text: '个人',
      items: [
        { text: '2025', link: '/improveme/index', activeMatch: '/improveme/' },
        { text: '教员', link: '/mao/index', activeMatch: '/mao/' },
        {
          text: '点滴瞬间',
          link: '/dripping/index',
          activeMatch: '/dripping/',
        },
      ],
    },
    { text: '指南', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    {
      text: '参考',
      link: '/reference/site-config',
      activeMatch: '/reference/',
    },
    // {
    //   text: pkg.version, // 首页导航有下拉菜单
    //   items: [
    //     {
    //       text: '更新日志',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
    //     },
    //     {
    //       text: '参与贡献',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
    //     },
    //   ],
    // },
  ]
}
