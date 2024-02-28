import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    component: async () => await import('@/views/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: async () => await import('@/views/home/index.vue')
      },
      {
        path: '/imgZip',
        name: 'imgZip',
        component: async () => await import('@/views/imageZip/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
