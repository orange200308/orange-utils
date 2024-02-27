import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'',
        component: null,
        redirect:'/home',
        children:[
            {
                path:'/home',
                name:'home',
                component: () => import('@/components/layout/index.vue')
            }
        ]
    }
]

const route = createRouter({
    history: createWebHistory(),
    routes,

})

export default route