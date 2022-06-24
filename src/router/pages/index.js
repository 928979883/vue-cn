import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default [
    {
        path: '/page1',
        name: 'page1',
        meta:{title: '公司简介_郧西县丰源供水有限公司'},
        component: () => import('../../views/pages/page1.vue')
    },
    {
        path: '/page2',
        name: 'page2',
        meta:{title: '信息中心_郧西县丰源供水有限公司'},
        component: () => import('../../views/pages/page2.vue')
    },
    {
        path: '/page3',
        name: 'page3',
        meta:{title: '网上营业厅_郧西县丰源供水有限公司'},
        component: () => import('../../views/pages/page3.vue')
    },
    {
        path: '/page4',
        name: 'page4',
        meta:{title: '疫情防控_郧西县丰源供水有限公司'},
        component: () => import('../../views/pages/page4.vue')
    },
    {
        path: '/page5',
        name: 'page5',
        meta:{title: '营商环境_郧西县丰源供水有限公司'},
        component: () => import('../../views/pages/page5.vue')
    },
    {
        path: '/contact_us',
        name: 'contact_us',
        meta:{title: '联系我们_郧西县丰源供水有限公司'},
        component: () => import('../../views/pages/contact_us.vue')
    },
    {
        path: '/news_detail',
        name: 'news_detail',
        meta:{title: '资讯详情_郧西县丰源供水有限公司'},
        component: () => import('../../views/pages/news_detail.vue')
    },
    {
        path: '/news_detail1',
        name: 'news_detail1',
        meta:{title: '资讯详情_郧西县丰源供水有限公司'},
        component: () => import('../../views/pages/news_detail1.vue')
    },
    {
        path: '/news_detail2',
        name: 'news_detail2',
        meta:{title: '资讯详情_郧西县丰源供水有限公司'},
        component: () => import('../../views/pages/news_detail2.vue')
    },
]