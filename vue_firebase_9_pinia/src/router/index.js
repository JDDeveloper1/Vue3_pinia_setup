import { registerRuntimeCompiler } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { useUserStore } from '../stores/user'

const requireAuth = async(to, from, next) => {
  const userStore = useUserStore();
  useUserStore.loadingSession = false
  const user =  await userStore.currentUser();
  if(user){
    next()
  } else {
    next('/login')
  }
  userStore.loadingSession = true
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})

export default router
