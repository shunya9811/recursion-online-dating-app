import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from '../pages/top-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top-page',
    component: TopPage
  },
  {
    path: '/user',
    name: 'user-list',
    component: () => import('../pages/user-list.vue')
  },
  {
    path: '/user/:id',
    name: 'user-detail',
    component: () => import('../pages/user-detail.vue')
  },
  {
    path: '/user/:id/chat',
    name: 'chat',
    component: () => import('../pages/chat-screen.vue')
  },
  {
    path: '/message-list',
    name: 'message-list',
    component: () => import('../pages/message-list.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
