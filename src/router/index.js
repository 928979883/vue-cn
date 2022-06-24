import Vue from 'vue'
import VueRouter  from 'vue-router'
import pages from './pages/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        meta:{title: '首页_郧西县丰源供水有限公司'},
        component: () => import('../views/home/home.vue')
    },
    ...pages
]
const router = new VueRouter({
    mode:'history',
    routes,
    scrollBehahvior(to, from, savedPosition) {
        return {
          x: 0,
          y: 0
        }
    },
})

export default router

// 重写路由的push方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}