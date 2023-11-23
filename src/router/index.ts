import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import PricingView from "@/views/PricingView.vue"
import LoginView from "@/views/LoginView.vue"

const router = createRouter({
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: PricingView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})

export default router
