import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from '../pages/top-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TopPage
  },
  {
    path: '/user', //あとで'/'に変える
    name: 'user-list',
    component: () => import(/* webpackChunkName: "about" */ '../pages/user-list.vue')
  },
  {
    path: '/user/id',
    name: 'user-detail',
    component: () => import(/* webpackChunkName: "about" */ '../pages/user-detail.vue')
  },
  {
    path: '/user/id/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "about" */ '../pages/chat-screen.vue')
  },
  {
    path: '/message-list',
    name: 'message-list',
    component: () => import(/* webpackChunkName: "about" */ '../pages/message-list.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
