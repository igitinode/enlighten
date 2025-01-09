# Windows 安装基础开发环境{#win-env}

## 安装 VScode 编辑器{#win-vscode}

进入 **[Visual Studio Code 官网](https://code.visualstudio.com/Download)** （简称: VSCode），选择 Windows 下面
`User Install` 或 `System Installer（推荐）` 安装包下载并安装。

- **User Install**: 该版本安装在当前计算机帐户目录，如果使用另外一个账户登录计算机，将无法使用别人安装的 VSCode。对系统权限要求较低，在多用户环境中可能会遇到权限问题。
- **System Installer**: 别该版本安装在非用户目录，任何帐户都可以使用。对系统权限要求较高，多用户环境可以畅通无阻使用 VSCode。

## 安装 Node.js{#win-node}

### 下载 Node.js{#win-nodejs}

进入 **[Node.js 官网](https://nodejs.org/zh-cn/download)** 下载页面，选择下载 `Windows Installer(.msi)` 安装包，下载并安装.

长期支持版本有：v22.13.0(LTS)、v22.13.0(LTS)、v18.20.5(LTS) 三个版本，由于目前前端技术迭代太快，有些开源框架正在计划舍弃 node 的 v18 版本。建议选择安装 `v22.13.0(LTS)`。

由于 Node.js 安装包自带 npm，就不需要单独安装 npm 包管理工具。

### 验证安装情况{#win-success}

在键盘上按下【`Win + R`】，输入 `cmd` 然后回车，打开命令行界面。在命令提示符窗口分别输入如下命令，显示对应版本号，则安装成功。

```sh [bash]
C:\Users\user>node -v
v22.13.0
C:\Users\user>npm -v
10.9.0
```

### 修改 npm 全局路径{#win-npm}

在 `D:\tools\npmconfig` 文件夹（可以换其他位置）下面创建两个文件夹：`node_global` 和 `node_cache`

创建完两个空文件夹之后，打开 windows 的命令行界面，输入如下命令：

```sh [bash]
设置模块全局安装路径
C:\Users\user> npm config set prefix "D:\tools\npmconfig\node_global"
设置模块全局缓存路径
C:\Users\user> npm config set cache "D:\tools\npmconfig\node_cache"
```

- **全局安装**: 就是在任何文件夹都可运行包命令，其原理也就是写进环境变量，每次在命令行中输入命令时，根据环境变量的设置寻找对应的可执行程序运行。执行以下命令将会安装到全局安装路径下面。

```sh [bash]
C:\Users\user> npm install -g xxx
```

- **局部安装**: 就是在当前项目中安装需要的模块，仅在当前项目中起作用。执行以下命令，将会在当前目录文件夹下面产生一个 `package.json` 文件和一个`node_modules` 文件夹。

```sh [bash]
C:\Users\user> npm install xxx
```

### 将路径配置到系统变量中{#win-path}

全局安装路径：D:\tools\npmconfig\node_global
全局安装路径：D:\tools\npmconfig\node_global\node_modules
右击我的电脑 -> 管理 -> 高级系统设置 -> 环境变量 -> 系统变量 ->找到 path -> 编辑 -》新增 -粘贴 -> 保存

### 查看当前 npm 配置信息{#win-config}

```sh [bash]
npm config ls
```

```sh [bash]
npm root -g
```

## 国内镜像网站淘宝配置{#win-cnpm}

### npm 与 cnpm{#win-npmvscnpm}

**[npm（Node Package Manager)](https://www.npmjs.com/)**: npdejs 的包管理工具。用于 node 插件管理（包括安装、卸载、管理依赖）
npm 的插件资源是从国外服务器下载，受网络影响很大，甚至会出现异常，所以淘宝就使用开发功能一样的 cnpm 代替官方包管理工具
同步频率为 10 分钟

### 淘宝新的镜像源{#win-taobao}

```sh [bash]
npm config set registry https://registry.npmmirror.com
```

### npm 默认镜像{#win-npmdef}

```sh [bash]
npm config set registry https://registry.npmjs.org
npm config ls
```

### cnpm 代替 npm{#win-npmts}

使用淘宝定制的 `cnpm` (gzip 压缩支持) 命令行工具代替默认的 npm:

```sh [bash]
npm install -g cnpm --registry=https://registry.npmmirror.com
```

### win10 权限不足问题{#win-power}

```sh [bash]
cnpm install -g glup
```

::: warning
win10 运行 `cnpm` 和 `gulp` 报错，权限问题 “cnpm : 无法加载文件 D:\tools\npmconfig\node_global\cnpm.ps1，因为在此系统上禁止运行脚本”
:::

- 1、打开 PowerShell(管理员)
- 2、执行：get-ExecutionPolicy

```sh [bash]
get-ExecutionPolicy
```

输入上面命令，会得到如下返回信息：

::: tip Restricted
表示没有脚本可以执行，需要更改策略以允许脚本运行。可以选择以下策略之一：

-- RemoteSigned：运行本地脚本和已签名的远程脚本。

-- Unrestricted：运行所有脚本。
:::

可以运行以下命令设置二选一：

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser （建议选这个）

Set-ExecutionPolicy Unrestricted -Scope CurrentUser

```sh [bash]
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

根据返回信息，然后选择: `Y`

::: warning
CurrentUser 范围仅影响当前用户，而不是整个系统
:::

此时，重新打开命令行运行 `cnpm -v` 不报错
