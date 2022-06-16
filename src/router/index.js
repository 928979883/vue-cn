import Vue from 'vue'
import VueRouter  from 'vue-router'
import pages from './pages/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/Home.vue')
    },
    ...pages
]
const router = new VueRouter({
    mode:'history',
    routes,
})

export default router