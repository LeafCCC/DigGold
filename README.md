## 依赖相关

首先要安装最新版的 Node.js，安装成功后输入`node -v`与`npm -v`检查安装是否成功，成功后在本项目目录下执行`npm install`即可，至于组件的依赖项等后续确定再进行补充

node --version 16.17.0

npm --version 8.15.0

---

## 安装与使用

- 获取项目代码

```bash
git clone https://github.com/LeafCCC/DigGold.git
```

- 安装依赖

```bash
cd DigGold

pnpm install

```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

## 说明

目前根据的是 Vue3+Vite 搭建，说明一些可以看看的文件

Vue3 相关资料汇总：[https://vue3js.cn/](https://vue3js.cn/)

Vue3 互动教程，一两个小时内了解最基础的操作：[https://staging-cn.vuejs.org/tutorial/#step-1](https://staging-cn.vuejs.org/tutorial/#step-1)

组件库定为[ElementPlus](https://element-plus.gitee.io/zh-CN/)

---

## 文件说明

views 目录下保存所有页面，如主页`Home.vue`；文章详情页`ArticleDemo.vue`等。components 目录下保存所有组件，如`Navigation.vue`等。

---

## 文章相关

~~文章展示拟采用[vite-plugin-md](https://github.com/antfu/vite-plugin-md)实现；但是似乎不支持图片等较为特殊的格式。~~

~~文章编写拟采用[markdown-it](https://markdown-it.docschina.org/api/Core.html#core-new)实现；简易教程参见[Vue中Markdown转HTML](https://www.bilibili.com/video/BV1kf4y1B7Mp)。~~

安装v-md-editor组件：
```bash
# 使用 npm
npm i @kangc/v-md-editor@next -S
```
[官网](https://code-farmer-i.github.io/vue-markdown-editor/zh/)
