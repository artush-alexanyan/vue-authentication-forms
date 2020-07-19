import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "login" */ '../views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../auth/Register.vue')
  },
  {
    path: '/secret',
    name: 'Secret',
    component: () => import(/* webpackChunkNane: 'secret' */ '../components/Secret.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: () => import(/* webpackChunkName: "error" */ '../components/ErrorPage.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../components/testingBaseInput.vue')
  }  
]
  
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth =  to.matched.some(route => route.meta.requiresAuth)
  const user = firebase.auth().currentUser
    if(!user && requiresAuth) {
      next({ path: '/' })
    }else{
      next()
    }
})

export default router
