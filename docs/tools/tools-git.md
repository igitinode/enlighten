# git 常用命令 {#git-cmd}

收集 git 常用的命令和说明。

## 远程 remote {#git-remote}

### 查看当前分支远程地址 {#git-remote-look}

```sh [bash]
git remote -v
```

### 修改远程地址 {#git-remote-fix}

```sh [bash]
git remote set-url origin https://github.com/igitinode/enlighten.git
# 修改完成后验证，确认是否修改成功
git remote -v
```

### 添加远程地址 {#git-remote-add}

需要保留旧地址并添加新的远程仓库

```sh [bash]
git remote add upstream https://github.com/igitinode/new-repo.git
# 查看多个远程
git remote -v
```

### 删除远程地址 {#git-remote-del}

```sh [bash]
git remote remove <name>
```

## 重置 reset {#git-reset}

### 丢弃已暂存修改 {#git-reset-remove}

如果你已经执行 `git add` 命令，将文件更改暂存到索引区，希望丢弃修改。

丢弃单个暂存文件:

```sh [bash]
git reset HEAD <单个文件名>
```

丢弃所有暂存文件:

```sh [bash]
git reset HEAD
```

::: tip
丢弃的文件只是`从暂存区移回工作区`，修改的内容仍然保留在工作区中，只是`已暂存`标记被取消了而已。
:::

### 丢弃工作区修改{#git-reset-work}

将文件恢复到上一次提交时的状态，丢弃工作区中的修改

丢弃单个文件修改:

```sh [bash]
git checkout -- <单个文件名>
```

丢弃所有文件修改:

```sh [bash]
git checkout -- .
```

### 同时丢下暂存和修改 {#git-reset-remove-work}

同时丢弃暂存区和工作区的所有修改:

```sh [bash]
git reset --hard HEAD
```

::: danger
该命令会将`暂存区`和`工作区`重置到最后一次提交的状态，不可恢复。
:::

## 分支 branch {#git-branch}

操作分支常用命令。

### 查看分支 {#git-branch-look}

```sh [bash]
# 查看本地分支
git branch
# 查看远程分支
git branch -r
# 查看本地和远程分支
git branch -a
```

### 创建分支 {#git-branch-new}

```sh [bash]
# 创建分支
git branch <branch_name>
# 创建新分支并且切换到该分支
git checkout -b <branch_name>
```

### 切换分支 {#git-branch-change}

```sh [bash]
# 切换到指定分支
git checkout <branch_name>
# 指定提交切换分支
git checkout <branch_name> <commit_hash>
```

### 删除分支 {#git-branch-del}

```sh [bash]
git branch
# 删除本地分支（只适用于已合并的分支）
git branch -d <branch_name>
# 强制删除本地分支 （未合并的也会被删除）
git branch -D <branch_name>
# 删除远程分支
git push origin --delete <branch_name>
```

### 合并冲突处理 {#git-branch-deal}

- git 提示冲突文件
- 编辑冲突文件，解决冲突
- 将修改后的文件标记为解决

  ```sh [bash]
  git add <file>
  ```

- 完成合并

  ```sh [bash]
  git commit -m <describe>
  ```

### 推送分支 {#git-branch-push}

```sh [bash]
git push origin <branch_name>
```

### 重命名分支 {#git-branch-rename}

```sh [bash]
# 重命名当前分支
git branch -m <new_branch_name>
# 重命名指定分支
git branch -m <old_branch_name> <new_branch_name>
```

### 分支比较 {#git-branch-diff}

```sh [bash]
git diff <branch_1> <branch_2>
```

### 分支管理流程 {#git-branch-mang}

#### 开发新功能

- **创建新分支**

```sh [bash]
git switch -c feature/new-feature
```

- **开发功能并提交代码**

```sh [bash]
git add .
git commit -m "Add new feature"
```

- **推送分支代码到远程**

```sh [bash]
git push origin feature/new-feature
```

#### 合并分支到主分支

- **切换到主分支**

```sh [bash]
git switch main
```

- **拉取最新代码**

```sh [bash]
git pull origin main
```

- **合并功能分支**

```sh [bash]
git merge feature/new-feature
```

- **删除功能分支（可选）**

```sh [bash]
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

## 合并 merge {#git-merge}

`git merge` 是将多个分支的内容合并到一个分支中，是团队协作开发中处理分之合并的核心命令。

- **合并前提**: 在某个分支运行 `git merge` 命令，目标是将另外一个分支的更改合并到当前分支。

### 合并基本步骤 {#git-merge-base}

例如：将 `v2` 分支 的功能合并到 `main`

- 切换到 main 分支

```sh [bash]
  git checkout main
  # 或者更常用的方式：
  git switch main
  # 合并前先拉去最新代码
  git pull origin main
```

- 合并 V2 到 main

```sh [bash]
git merge v2
```

- 解决合并冲突（有的话）
  git 会提示哪些文件有冲突，手动编辑冲突的文件，解决冲突后执行。

```sh [bash]
git status
git add <conflicted-file>
git commit
git push origin main
```

## 删除 delete {#git-delete}

`git rm` 是移除文件命令，将文件从`工作区`和`暂存区`一并删除，同时记录删除操作以便在下次提交时生效，会被记录在 git 历史中。

### 从暂存区移除并删除 {#git-delete-1}

从 暂存区 和 工作区 一并移除文件，下次提交后，删除会被记录在 Git 历史中

```sh [bash]
git rm file.txt
git commit -m "Remove file.txt"
```

### 从暂存区移除并保留 {#git-delete-2}

文件从`暂存区`移除，仍保留在本地`工作区`中。通常用于将文件从版本控制中忽略（例如文件已错误地加入版本控制）

```sh [bash]
git rm --cached config.json
git commit -m "Stop tracking config.json"
```

强制删除文件，适用于已修改且未提交的文件，

- `-f` 可以跳过此保护。
- `-r` 递归删除目录及其内容

```sh [bash]
git rm -f file.txt
```

### 删除文件恢复 {#git-delete-3}

误删文件，可以通过 `git checkout` 或 `git restore` 恢复：

- 文件在版本控制中

```sh [bash]
git restore file.txt
```

- 文件被提交删除

```sh [bash]
git checkout <commit-hash> -- file.txt
```

## 标签 tag {#git-tag}

给特定提交打上一个易于识别的标记，如: `v1.0.0`

```sh [bash]
# 查看现有标签
git tag
# 创建附注标签
git tag -a v1.0.0 -m "Release version 1.0.0"
```

### 给特定的提交打标签 {#git-tag-name}

默认情况下，标签会打在当前的提交上。给特定已提交版本打标签，先查询到版本的哈希值。

```sh [bash]
git tag v1.0.0 9fceb02
# 或
git tag -a v1.0.0 9fceb02 -m "Release version 1.0.0"
```

### 推送标签到远程仓库 {#git-tag-push}

创建的标签默认只存在于本地，需要手动推送到远程仓库。

- **推送单个标签**

```sh [bash]
git push origin v1.0.0
```

- **推送所有标签**

```sh [bash]
git push origin --tags
```

### 删除标签 {#git-tag-dele}

- **删除本地标签**

```sh [bash]
git tag -d v1.0.0
```

- **删除远程标签**

```sh [bash]
git push origin --delete
```

### 查看标签详情 {#git-tag-detail}

默认情况下，执行 `git fetch` 命令时，git 不会自动拉取标签。需要显式指定拉取标签。

```sh [bash]
git show v1.0.0
```

### 拉取标签 {#git-pull-tag}

拉取所有标签：

```sh [bash]
git fetch --tags
```

拉取标签和代码的区别:

只拉取标签，不同步代码

```sh [bash]
git fetch origin --tags
```

拉取所有代码和标签

```sh [bash]
git pull --tags
```

### 拉取标签对应代码 {#git-pull-tag-code}

```sh [bash]
git checkout v1.0.0
```

::: tip
检出标签后，git 会进入 `分离头指针状态（detached HEAD）`，你无法直接提交新代码。如果需要修改代码，可以创建一个新分支。
:::

## 日志 log {#git-log}

### 常用命令 {#git-log-cmd}

```sh [bash]
git log --oneline

# 查看从2025年1月1日到2024年1月31日的提交记录。
git log --since="2024-01-01" --until="2024-01-31"

# 查看某个分支的提交记录
git log feature-branch

# 格式化日志
git log --pretty=format:"%h - %an, %ar : %s"

# 结合 grep 搜索
git log --grep="fix"

# 查看进10跳详细改动
git log -p -n 10
```

## 子仓库 submodule {#git-submodule}

没有使用到，暂不记录。

## 配置 config {#git-config}

查看电脑的所有配置：

```sh [bash]
git config --list
```

设置 HTTP/1.1

```sh [bash]
git config --global http.version HTTP/1.1
```

设置 HTTP/2

```sh [bash]
git config --global http.version HTTP/2
```

缓存大小限制

```sh [bash]
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999
```

全局修改、查看用户名和邮箱

```sh [bash]
git config --global user.name "全局用户名"
git config --global user.email "全局邮箱"
# 查看
git config --global user.name
git config --global user.email
```

临时修改用户名和邮箱

```sh [bash]
git config  user.name "临时用户名"
git config  user.email "临时邮箱"
# 查看
git config  user.name
git config  user.email
```
