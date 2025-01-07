# Markdown 扩展 {#markdown-extensions}

VitePress 带有内置的 Markdown 扩展。

## 标题锚点 {#header-anchors}

标题会自动应用锚点。可以使用 `markdown.anchor` 选项配置锚点的渲染。

### 自定义锚点 {#custom-anchors}

要为标题指定自定义锚点而不是使用自动生成的锚点，请向标题添加后缀：

```
# 使用自定义锚点 {#my-anchor}
```

这允许将标题链接为 `#my-anchor`，而不是默认的 `#使用自定义锚点`。
