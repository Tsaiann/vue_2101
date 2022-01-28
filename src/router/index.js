import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/restful_api',
    name: 'restful_api',
    component: () => import('../views/RestfulApi.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/Vuex.vue')
  },
  {
    path: '/i18nChange',
    name: 'i18nChange',
    component:() => import('../views/I18nChange.vue')
  },
  {
    path: '/i18n',
    name: 'i18n',
    component: () => import('../views/I18n.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
