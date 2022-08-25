# 使用vue+vite搭建项目 | 青训营笔记

这是我参与「第四届青训营 」笔记创作活动的第1天。今天我学习了使用vue3+vite搭建项目的方法，在这里分享给大家。

vue是一个易学易用，性能出色，适用场景丰富地Web前端框架；vite是下一代前端开发与构建工具。本次青训营，我们的仿掘金官网项目计划采用vue+vite搭建。这篇文章主要介绍项目的搭建方法。



## 一、安装Node.js

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行JavaScript的速度非常快，性能非常好。

Step1. 登录[Node.js官网](https://nodejs.org/zh-cn/)下载安装适合你操作系统的Node.js

Setp2. 命令行输入`node -v`可以查看当前的node版本。

![image-20220822105722986](note1.assets/image-20220822105722986.png)

## 二、构建项目

项目采用vue3构建。

```bash
npm init vue@latest
```

这一指令将会安装并执行create-vue，vite是vue官方的项目脚手架工具。执行完毕后会跳出许多选项供你选择。

![image-20220822110733607](note1.assets/image-20220822110733607.png)

可以看见，整个构建流程自动化程度与人性化程度很高，构建完毕提示运行

```bash
cd vue-project
npm install	# 安装依赖，时间较久，耐心等待即可
npm run lint
npm run dev
```

来把项目跑起来。

此时项目搭建的默认页面是vue+vite的欢迎界面，这个界面很简单，新手通过摸索这个简单的demo就能很快上手vue+vite。

搭建出的项目是支持热更新的，即，在改动代码后，立即能在浏览器中看到改动。

![image-20220822115214151](note1.assets/image-20220822115214151.png)

打开项目目录，可见文件如下：

![image-20220822115849632](note1.assets/image-20220822115849632.png)

其中比较重要的文件是`index.html`，`main.ts`，`/src/App.vue`。

`App.vue`是项目的主组件，页面入口文件，所有页面都在`App.vue`下进行切换。`views`文件夹存放有不同页面，如主页，详情页等，需要通过router进行路由操作。`components`中包含有各个页面的组件，如导航栏、文章详情页、图标等等。