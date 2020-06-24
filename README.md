

<h2 align="center">音乐助手桌面版</h2>

### 说明

一个基于 Electron + Vue 开发的音乐软件。

所用技术栈：

- Electron 8
- Vue 2

已支持的平台：

- Windows 7 及以上
- Mac OS
- Linux



### 源码使用方法

环境要求：Node.js 12.x+

```bash
# 开发模式
npm run dev

# 构建免安装版
npm run pack:dir

# 构建安装包（Windows版）
npm run pack

# 构建安装包（Mac版）
npm run pack:mac

# 构建安装包（Linux版）
npm run pack:linux

```





### 启动参数

目前软件已支持的启动参数如下：

- `-search`  启动软件时自动在搜索框搜索指定的内容，例如：`-search="突然的自我 - 伍佰"`
- `-nt`  以非透明模式启动，对于未开启AERO效果的win7系统可加此参数启动以确保界面正常显示


