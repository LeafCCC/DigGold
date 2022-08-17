import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../components/about.vue'

//路由数组
const routes = [

    {path:'/about', component: About}

]

//路由对象
const router = createRouter({

    history: createWebHashHistory(),

    routes //上面的路由数组

})

//导出路由对象，在main.js中引用
export default router