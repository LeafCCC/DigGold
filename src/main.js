import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

// import VMdEditor from '@kangc/v-md-editor';
// import '@kangc/v-md-editor/lib/style/base-editor.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// import '@kangc/v-md-editor/lib/theme/style/github.css';

//v-md-editor preview
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
//快捷复制代码
// import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
// import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});
// VMdPreview.use(createCopyCodePlugin());

//设置路由 导入ElementPlus
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(VMdPreview);

app.mount('#app')