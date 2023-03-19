

## 项目说明
本项目为字节跳动前端青训营项目，使用Vue3 + Vite进行搭建，具体的文档说明为：[https://qturfdqv9y.feishu.cn/docx/doxcnmKAZivJM2y1U3GEnnXgRdf](https://qturfdqv9y.feishu.cn/docx/doxcnmKAZivJM2y1U3GEnnXgRdf)

展示视频为:[https://qturfdqv9y.feishu.cn/docx/doxcnmKAZivJM2y1U3GEnnXgRdf](https://qturfdqv9y.feishu.cn/docx/doxcnmKAZivJM2y1U3GEnnXgRdf)

## 效果展示

#### 首页：

![首页](https://pic.imgdb.cn/item/63099f6716f2c2beb166be54.png)

#### 文章详细页：

![文章详细页](https://pic.imgdb.cn/item/63099f9016f2c2beb166e002.png)
## 项目目录结构

```
DigGold
│  .eslintcache
│  .eslintrc.cjs
│  .gitignore
│  .prettierrc.cjs
│  .stylelintrc.cjs
│  index.html
│  package-lock.json
│  package.json
│  pnpm-lock.yaml
│  README.md
│  vite.config.js
└─src
    │  App.vue    // 入口文件
    │  main.js    // 配置文件
    ├─assets    // 资源目录
    ├─components    //组件目录
    │  │  ArticleContent.vue    // 文章主体
    │  │  ArticleLeftBar.vue    // 文章左侧按钮
    │  │  HomeItem.vue    // 主页文章列表
    │  │  Lists.vue    // 主页
    │  │  navigation.vue    // 导航栏
    │  └─ad
    │          index.vue    // 广告页
    ├─configs
    │      host.js
    ├─layouts
    │  └─default
    │          index.vue
    ├─router
    │      index.js    // 路由信息
    ├─store
    │      index.js
    ├─utils
    │      request.js
    └─views
            Article.vue    // 文章详情页
            Home.vue    // 主页
```


## 相关依赖

首先要安装最新版的 Node.js，安装成功后输入`node -v`与`npm -v`检查安装是否成功，相关具体版本如下：

`node --version 16.17.0`

`npm --version 8.15.0`

本项目基础是Vue3 + Vite，此外还使用了[element-plus](https://element-plus.gitee.io/zh-CN/)组件库，相关版本如下：

`Vue --version 3.2.37`

`Vite --version 3.0.9`

`element-plus --version 2.2.13`


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



## 相关资料

Vue3 相关资料汇总：[https://vue3js.cn/](https://vue3js.cn/)

Vue3 互动教程，一两个小时内了解最基础的操作：[https://staging-cn.vuejs.org/tutorial/#step-1](https://staging-cn.vuejs.org/tutorial/#step-1)

组件库为[ElementPlus](https://element-plus.gitee.io/zh-CN/)




## 文章详细页相关

安装v-md-editor组件：
```bash
# 使用 npm
npm i @kangc/v-md-editor@next -S
```
其官网为：[https://code-farmer-i.github.io/vue-markdown-editor/zh/](https://code-farmer-i.github.io/vue-markdown-editor/zh/)
