import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/home',
    component: () => import('../views/Main.vue'),
    // Home组件，当做 Main的一个子路由。嵌套在 Main组件中
    children: [
      { path: '/home', name: 'home', component: () => import('../views/Home.vue') },
      { path: '/members', name: 'Members', component: () => import('../views/Members.vue') },
      { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue') },
      { path: '/search', name: 'Search', component: () => import('../views/Search.vue') },
      { path: '/imageshare', name: 'ImageShare', component: () => import('../views/ImageShare.vue') },
      { path: '/news', name: 'News', component: () => import('../views/News.vue') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
