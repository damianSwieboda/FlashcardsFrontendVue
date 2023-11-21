<template>          
  <div 
    v-show="isNavigationMenuOpen"
    :class="[reactiveStyles.dropableMenuTopSpacing, 'text-gray-500', 'w-screen', 'absolute','left-0','lg:static', 'lg:ml-6', 'lg:flex', 'lg:items-center', 'bg-white', 'lg:bg-transparent', 'w-screen', 'lg:w-fit']"
  >
  
    <nav-links :class="[reactiveStyles.navLinksTextColor]"/>
    <div class="pt-5 w-screen h-fit flex justify-center lg:pt-0 lg:w-fit  ">
      <navigation-button text="Try for free" destination="/pricing" type="navButton" :class="[reactiveStyles.navButtonStyles]"/>
    </div>
    <div class="py-5 w-screen h-fit flex justify-center lg:pt-0 lg:w-fit  ">
      <user-dropable-menu v-if="isLoggedIn" />
    <div v-else class="px-4 lg:flex lg:space-x-12 w-fit">      
    <navigation-button text="Login" destination="/login" type="plainTextButton" :class="reactiveStyles.navLinksTextColor"/>
    </div>


    </div>

  </div>
</template>





<script lang="ts" setup>
  import { computed, onMounted, onUnmounted } from "vue"

  import UserDropableMenu from "@/Components/Navigation/desktopNavigationElements/UserDropableMenu.vue";
  import NavLinks from "@/Components/Navigation/desktopNavigationElements/NavLinks.vue";
  import NavigationButton from "@/components/Shared/NavigationButton.vue"

  import debounce from '@/utils/debounce'
 
  import { useUIStore } from "@/stores/ui";
  import { useUserStore } from "@/stores/user";

  const userStore = useUserStore()
  const uiStore = useUIStore()
  
  const isLoggedIn = computed(()=> userStore.isLoggedIn)
  const isPageScrolled = computed(()=> uiStore.isPageScrolled)
  const isNavigationMenuOpen = computed(()=> uiStore.isNavigationMenuOpen)

  // const checkNavButtonReactiveStyles = computed(()=> {
  //   if(getScreenWidth() > 1024 && isPageScrolled.value) {
  //     return true
  //   }
  //   if(getScreenWidth() > 1024 && !isPageScrolled.value){
  //     return false
  //   }
  //   if(getScreenWidth() < 1024 && isNavigationMenuOpen.value ){
  //     return true
  //   }

  //   return false
  // })


  const getScreenWidth = () => window.innerWidth
  const checkIfNavShouldBeVisible = () =>  getScreenWidth() > 1024 ? uiStore.OPEN_NAVIGATION_MENU() : uiStore.CLOSE_NAVIGATION_MENU()
  

  onMounted(() => {
    checkIfNavShouldBeVisible()
    window.addEventListener("resize", debounce( checkIfNavShouldBeVisible, 200));
  });

  onUnmounted(() => {
    window.removeEventListener("resize", debounce( checkIfNavShouldBeVisible, 200));
  });

  const reactiveStyles = computed(()=>{
    return {
      navLinksTextColor:{
        'lg:text-white': !isPageScrolled.value,
        'lg:text-gray-500': isPageScrolled.value
      },
      navButtonStyles:{
            'py-2.5': true,
            'lg:py-3.5': !isPageScrolled.value,
            'text-white': true,
            'lg:text-pink-500': !isPageScrolled.value,
            'bg-pink-500': true,
            'lg:bg-white': !isPageScrolled.value             
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


