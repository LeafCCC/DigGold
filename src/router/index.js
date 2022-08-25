import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/home.vue'

//路由数组
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../views/Article.vue')
  }
]

//路由对象
const router = createRouter({
  history: createWebHashHistory(),

  routes //上面的路由数组
})

//导出路由对象，在main.js中引用
export default router
