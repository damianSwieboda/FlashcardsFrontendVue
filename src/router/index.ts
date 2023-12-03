import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import PricingView from "@/views/PricingView.vue"
import SignInView from "@/views/SignInView.vue"
import AboutView from "@/views/AboutView.vue"
import SignUpView from "@/views/SignUpView.vue"
import { useUIStore } from "@/stores/ui"

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
      path:'/about',
      name:'About',
      component: AboutView
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: PricingView
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignInView
    },
    {
      path:'/signup',
      name:'SignUp',
      component: SignUpView
    }
  ]
})

router.beforeEach((to, from, next) => {
    useUIStore().CLOSE_MOBILE_NAVIGATION_MENU();
    next();
});


export default router
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
