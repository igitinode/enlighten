import { defineConfig } from 'vitepress'

// 站点级选项配置
export const common = defineConfig({
  // 项目根路由，github部署后的基础路由如:xx.github.io/enlighten/
  base: '/enlighten/',

  // 浏览器标签 title
  title: 'enlighten',

  // 浏览器标签 logo
  // 将 favicon.ico 放在公共目录中，如果设置了 base，则使用 /base/favicon.ico
  // 不用检查格式
  /* prettier-ignore */
  head: [
    [ 'link', { rel: 'icon', type: 'image/svg+xml', href: '/enlighten/vitepress-logo-mini.svg' }],
    [ 'link', { rel: 'icon', type: 'image/png', href: '/enlighten/vitepress-logo-mini.png' }],
    // 添加元数据
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }]
  ],

  // 浏览器检索关键字
  description: 'vitepress + vue3 personal bolg',

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
  ignoreDeadLinks: true
})
