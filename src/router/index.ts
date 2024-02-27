import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    component: null,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: async () => await import('@/views/layout/index.vue')
      }
    ]
  }
]

const route = createRouter({
  history: createWebHistory(),
  routes
})

export default route
