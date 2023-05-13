import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//1、创建组件
import Home from '@/pages/myHome.vue';
import Homes from '@/pages/myHomes.vue';
import Card from '@/pages/myCard.vue';
// import User from '../views/User';
//2、将路由与组件进行映射
const routes = [
    { path: '/', redirect: "/home" },
    {
        path: '/home', name: 'home', component: Home, meta: { title: '菜单' },
        children: [{ path: 'homes', name: "homes", component: Homes, meta: { title: '菜单1' } },
        { path: 'card', name: "card", component: Card, meta: { title: "菜单二" } }]
    },
    // { path: '/user', component: User }
]
//3、创建router实例
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router

