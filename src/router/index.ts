import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useUserStore from "@/stores/user.store.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    }
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.path !== '/login' && !userStore.user) {
    router.push('/login')
  }

  if (to.path === '/login' && userStore.user) {
    router.push('/')
  }

  next()
})

export default router
