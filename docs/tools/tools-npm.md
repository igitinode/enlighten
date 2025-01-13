# npm 常用命令

**[NPM](https://www.npmjs.com/)** 的全称是 Node Package Manager，是一个 NodeJS 包管理和分发工具，已经成为了非官方的发布 Node 模块（包）的标准。

## npm 安装模块

安装 `vitepress` 到当前目录的 `pakcage.josn` 的依赖之中。

```sh [npm]
npm install vitepress
# 等价于
npm install xxx --save
```

```json [./pakcage.josn]
{
  "devDependencies": {
    "vitepress": "^1.5.0"
  }
}
```

全局安装 `vitepress` ：

```sh [npm]
npm install -g vitepress
```

## npm 卸载模块

```sh [npm]
npm uninstall vitepress
```

```sh [npm]
npm uninstall -g vitepress
```

## npm 查看全局安装模块

npm list -g
