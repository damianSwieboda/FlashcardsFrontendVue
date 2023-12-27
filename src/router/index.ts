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


    // {
    //   path: '/',
    //   name: 'Home',
    //   component: HomeView
    // },
    // {
    //   path:'/about',
    //   name:'About',
    //   component: AboutView
    // },
    // {
    //   path: '/pricing',
    //   name: 'Pricing',
    //   component: PricingView
    // },
    // {
    //   path: '/signin',
    //   name: 'SignIn',
    //   component: SignInView
    // },
    // {
    //   path:'/signup',
    //   name:'SignUp',
    //   component: SignUpView
    // },
// routes: [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomeView
//   },
//   {
//     path:'/about',
//     name:'About',
//     component: AboutView
//   },
//   {
//     path: '/pricing',
//     name: 'Pricing',
//     component: PricingView
//   },
//   {
//     path: '/signin',
//     name: 'SignIn',
//     component: SignInView
//   },
//   {
//     path:'/signup',
//     name:'SignUp',
//     component: SignUpView
//   },
//   {
//     path:'/dashboard',
//     name:"Dashboard",
//     component: DashboardView
//   }
// ]

// import { createRouter, createWebHashHistory } from "vue-router"

// import HomeView from "@/views/HomeView.vue"
// import JobResultsView from "@/views/JobResultsView.vue"
// import JobView from "@/views/JobView.vue"
// import TeamsView from "@/views/TeamsView.vue"

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: HomeView
//   },
//   {
//     path: "/jobs/results",
//     name: "JobResults",
//     component: JobResultsView
//   },
//   {
//     path: "/jobs/results/:id",
//     name: "JobListing",
//     component: JobView
//   },
//   {
//     path: "/teams",
//     name: "teams",
//     component: TeamsView
//   }
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
//   scrollBehavior() {
//     return { top: 0, left: 0, behavior: "smooth" }
//   }
// })

// export default router
