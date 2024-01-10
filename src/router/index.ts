import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/public/HomeView.vue"
import PricingView from "@/views/public/PricingView.vue"
import SignInView from "@/views/public/SignInView.vue"
import AboutView from "@/views/public/AboutView.vue"
import SignUpView from "@/views/public/SignUpView.vue"
import { useUIStore } from "@/stores/ui"
import DashboardView from '@/views/app/DashboardView.vue'
import PublicLayout from '@/views/PublicLayout.vue'
import AppLayout from '@/views/AppLayout.vue'

const router = createRouter({
  scrollBehavior() {
    return { left: 0, top: 0 };
  },

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: PublicLayout,
      name:'PublicLayout',
      redirect:"/",
      children: [
        { path: '/', name: 'Home', component: HomeView },
        { path:'/about', name:'About', component: AboutView },
        { path: '/pricing', name: 'Pricing', component: PricingView },
        { path: '/signin', name: 'SignIn', component: SignInView },
        { path:'/signup', name:'SignUp', component: SignUpView },
      ]
    },
    {
      path:'/app',
      component: AppLayout,
      name:'AppLayout',
      children: [
        { path:'/app/dashboard', name:"Dashboard", component: DashboardView },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
    useUIStore().CLOSE_MOBILE_NAVIGATION_MENU();
    next();
});

export default router
