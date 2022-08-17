import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//设置路由 导入ElementPlus
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')