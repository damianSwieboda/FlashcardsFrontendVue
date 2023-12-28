<template>          
  <div 
    v-show="isNavigationMenuOpen"
    :class="[reactiveStyles.dropableMenuTopSpacing, 'text-gray-500', 'w-screen', 'absolute','left-0','lg:static', 'lg:ml-6', 'lg:flex', 'lg:items-center', 'bg-white', 'lg:bg-transparent', 'w-screen', 'lg:w-fit']"
  >
    <navigation-links :class="[reactiveStyles.navLinksTextColor]"/>
    
    <RouterLink to="/signup">
      <div class="pt-5 w-screen h-fit flex justify-center lg:pt-0 lg:w-fit  ">

        <navigation-button 
          text="Try for free" 
          type="navButton" 
          :class="[reactiveStyles.navButtonStyles]"
        />     

      </div>
    </RouterLink>

    
    <div class="py-5 w-screen h-fit flex justify-center lg:pt-0 lg:w-fit  ">
      <user-dropable-menu v-if="isSignIn" />
    
      <div v-else class="px-8 lg:pt-5 lg:flex lg:space-x-12 w-fit">

        <RouterLink to="/signin">
          <span :class="reactiveStyles.navLinksTextColor"
          >
            Sign in
          </span>
        </RouterLink>
        
      </div>

    </div>

  </div>
</template>





<script lang="ts" setup>
  import { computed, onMounted, onUnmounted} from "vue"

  import UserDropableMenu from "@/Components/Navigation/UserNavigation/UserDropableMenu.vue";
  import NavigationLinks from "@/Components/Navigation/NavigationLinks.vue";
  import NavigationButton from "@/components/Shared/NavigationButton.vue"
  import debounce from '@/utils/debounce'
 
  import { useUIStore } from "@/stores/ui";
  import { useUserStore } from "@/stores/user";

  const userStore = useUserStore()
  const uiStore = useUIStore()
  import { useRoute } from "vue-router"
  const route = useRoute()

  const isSignIn = computed(()=> userStore.isSignIn)
  const isPageScrolled = computed(()=> uiStore.isPageScrolled)
  const isNavigationMenuOpen = computed(()=> uiStore.isNavigationMenuOpen)
  


  const getScreenWidth = () => window.innerWidth 
  const checkIfNavShouldBeVisible = () =>  getScreenWidth() >= 1024 ? uiStore.OPEN_NAVIGATION_MENU() : uiStore.CLOSE_NAVIGATION_MENU()
  const checkIfUserNavShouldBeVisible = () => (getScreenWidth() >= 1024 && isSignIn) ? uiStore.CLOSE_USER_MENU() : false 
  

  onMounted(() => {
    checkIfNavShouldBeVisible()
    window.addEventListener("resize", debounce( checkIfNavShouldBeVisible, 100));
    window.addEventListener("resize", debounce( checkIfUserNavShouldBeVisible, 100));

  });

  onUnmounted(() => {
    window.removeEventListener("resize", debounce( checkIfNavShouldBeVisible, 100));
    window.removeEventListener("resize", debounce( checkIfUserNavShouldBeVisible, 100));

  });



  const isBrightBackground = computed(() => {
    if(route.name === "Home" || route.name === "Pricing"){
      return false
    }
    return true
  } )

  // logic which by we display bright elements on dark background, and dark elements od bright background in NavBar
  const textStyleLogic = computed(()=>{
    if(isBrightBackground.value && !isPageScrolled.value ) return false
    if(isBrightBackground.value && isPageScrolled.value ) return false
    if(!isBrightBackground.value && !isPageScrolled.value )return true
    if(!isBrightBackground.value && isPageScrolled.value ) return false
    return true
  })

  const reactiveStyles = computed(()=>{
    return {
      navLinksTextColor:{
        'lg:text-white': textStyleLogic.value,
        'lg:text-gray-500': textStyleLogic.value
      },
      navButtonStyles:{
        'py-2.5': true,
        'lg:py-3.5': textStyleLogic.value,
        'text-white': true,
        'lg:text-pink-500': textStyleLogic.value,
        'bg-pink-500': true,
        'lg:bg-white': textStyleLogic.value,   
      },
      dropableMenuTopSpacing: {
        'top-12': isPageScrolled.value,
        'top-24	': !isPageScrolled.value,
        'transition-h duration-300': true,
      },
    }
    }
  )
</script>


