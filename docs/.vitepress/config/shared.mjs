import { defineConfig } from 'vitepress'

import { search as zhSearch } from './zh.mjs'
import { search as enSearch } from './en.mjs'

// 站点级选项配置
export const sharedConfig = defineConfig({
  // 项目根路由，github部署后的基础路由如:xx.github.io/enlighten/
  base: '/enlighten/',
  // 浏览器标签 title
  title: 'Enlighten',
  // TODO:重写国际化路劲？
  // rewrites: {
  //   'zh/:rest*': ':rest*',
  // },
  // 将 favicon.ico 放在公共目录中，如果设置了 base，则使用 /base/favicon.ico
  /* prettier-ignore */
  head: [
    [ 'link', { rel: 'icon', type: 'image/svg+xml', href: '/enlighten/vitepress-logo-mini.svg' }],
    [ 'link', { rel: 'icon', type: 'image/png', href: '/enlighten/vitepress-logo-mini.png' }],
    // 添加元数据
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }]
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
  sitemap: {},

  themeConfig: {
    // 导航栏上显示的 Logo，位于站点标题前。
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
    // 在导航栏中展示带有图标的社交帐户链接。
    /* prettier-ignore */
    socialLinks: [
      { icon: 'github', link: 'https://github.com/igitinode' },
      // { icon: 'twitter', link: '...' }
    ],
    // 本地搜索
    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: '8J64VVRP8K',
      //   apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
      //   indexName: 'vitepress',
      //   locales: {
      //     ...zhSearch,
      //     // ...enSearch,
      //   },
      // },
    },
    // 内置了对 Carbon Ads 的原生支持
    // carbonAds: { code: "", placement: "" },
  },
})
