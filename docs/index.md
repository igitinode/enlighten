---
# https://vitepress.dev/reference/default-theme-home-page
# 声明当前页面的模块结构为首页，默认为 page。其他子页面就可以引用
layout: home

# 网页浏览器 titile 部分
title: enlighten
titleTemplate: 学习永远在路上

hero: # banner 部分
  name: 学习永远在路上 # 主标题
  text: 积跬步、积小流 # 副标题
  tagline: 纸上得来终觉浅，绝知此事要躬行 # 内容区
  image: # 图片区
    src: /logo.svg # 图片加载位置
    alt: 加载失败 # 图片加载失败提示语
  actions: # 按钮区域
    - theme: brand #  按钮的颜色主题，brand(默认) | alt
      text: Markdown 案例 # 按钮文案
      link: /markdown-examples # 跳转连接，以 docs 为根路径
    - theme: alt
      text: API 接口 # 按钮文案
      link: /api-examples # 跳转连接，以 docs 为根路径

features:
  - icon: 📝
    title: 好记性，不如烂笔头
    details: 记录不仅是对知识的尊重，更是对时间的抗衡，它让思想的火花得以永恒。
  - icon: 🤔
    title: 不思则罔，不学则殆
    details: 思考与学习并重，通达人生之理，免于虚无之苦，远离沉沦之险。
  - icon: 📈
    title: 水滴石穿，绳锯木断
    details: 恒久之功，微而不弱，微小行动，铸就非凡成就，时间见证坚持的力量。
  - icon: 🚀
    title: 实践是检验真理的唯一标准
    details: 真理藏于实践中，行动方显理念真。 纸上谈兵终觉浅，绝知此事要躬行。
  - icon:
      src: /home/vuejs.svg
    title: Vue.js
    details: 易学易用，性能出色，适用场景丰富的 Web 前端框架。
  - icon:
      src: /home/vite.svg
    title: Vite
    details: 一个超快速的前端构建工具，推动着下一代网络应用的发展。
  - icon:
      src: /home/pinia3.png
    title: Pinia
    details: 符合直觉的 Vue.js 状态管理库。类型安全、可扩展性以及模块化设计。
  - icon:
      src: vitepress-logo-mini.svg
    title: Vitepress
    details: Vite 和 Vue 驱动的静态站点生成器。将Markdown变成优雅的文档。
---
