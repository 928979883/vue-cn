import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default [
    {
        path: '/page1',
        name: 'page1',
        component: () => import('../../views/page1/page1.vue')
    },
    {
        path: '/page2',
        name: 'page2',
        component: () => import('../../views/page2/page2.vue')
    },
    {
        path: '/page3',
        name: 'page3',
        component: () => import('../../views/page3/page3.vue')
    },
    {
        path: '/page4',
        name: 'page4',
        component: () => import('../../views/page4/page4.vue')
    },
]