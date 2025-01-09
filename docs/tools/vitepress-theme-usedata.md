---
outline: deep
description: 这个是当前文档的头文件
---
# Vitepress userData() API 数据预览{#vitepress-pre}

vitepress 内置 `useData()` API 接口数据展示。

## useData API 接口数据

下面代码包含在 **三个反斜杠 md** 中，被`<pre>` 标签包裹的数据是带输出格式的，为了输出美观。

```md
<script setup>
import { useData } from 'vitepress'
const { site, theme, page, frontmatter } = useData()
</script>

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'
const { site, theme, page, frontmatter } = useData()
</script>

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
