import {createRouter, createWebHistory} from "vue-router";

const routes = [
    // 组件库 - 主页
    {
        title: 'Home',
        name: 'Home',
        path: '/',
        component: () => import(`../pages/Home.vue`)
    },
    // 组件库 - 快速开始
    {
        title: 'Quick Start',
        name: 'QuickStart',
        path: '/quick-start',
        component: () => import(`../pages/QuickStart.vue`)
    },
    // 组件库 - 颜色系统
    {
        title: 'Color System',
        name: 'ColorSystem',
        path: '/color',
        component: () => import(`../pages/Color.vue`)
    },
    // 组件库 - 组件列表
    {
        title: 'Components',
        name: 'Components',
        path: '/components',
        component: () => import(`../pages/Component.vue`),
        children: [
            // 按钮组件
            {
                title: 'ButtonExample',
                Name: 'ButtonExample',
                path: 'Button',
                component: () => import(`../../packages/button/docs/README.md`),
            },
            // 文本输入框组件
            {
                title: 'TextInput',
                Name: 'TextInput',
                path: 'TextInput',
                component: () => import(`../../packages/input/text-input/docs/README.md`),
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from) {
        if (to.path !== from.path) {
            return { top: 0 };
        }
    },
})

export default router