// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// import './pinia-styles/index.css'
import './vitepress-styles/index.css'

import PiniaLogo from './components/PiniaLogo.vue'
import Video from './components/Video.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h('div', { class: 'image-src' }, h(PiniaLogo)),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // app 是 Vue 的全局实例对象，可以注册组件、指令等
    // app.use() 注册第三方组件
    // ...
    app.component('Video', Video)
  },
}
