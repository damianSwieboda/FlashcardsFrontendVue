<template>          
    <div 
      v-show="open"
      :class="[reactiveStyles.dropableMenuTopSpacing, 'text-gray-500', 'absolute','left-0','lg:static', 'lg:ml-6', 'lg:flex', 'lg:items-center', 'bg-white', 'lg:bg-transparent', 'w-screen', 'lg:w-fit']"
    >
        
      <nav-links :class="[reactiveStyles.navLinksTextColor]"/>

        <div>
          <a :class="[reactiveStyles.buttonStyles, 'inline-block',  'px-6', 'rounded-3xl', 'mr-8', 'text-base', 'font-semibold',  'shadow-sm', 'transition-transform', 'transform', 'hover:-translate-y-0.5']">
            <RouterLink to="/pricing">TRY FOR FREE</RouterLink>
        </a> 
        </div>

        <!-- if user is logged in render this, if is not, render this: <login-->
        <user-dropable-menu v-if="isLoggedIn"/>
        <div v-else class="px-4 lg:flex lg:space-x-12 float-left lg:float-right"> 
          <a class="block w-screen lg:w-fit items-center border-b-2 border-transparent hover:border-gray-300 pt-1 tracking-widest text-sm font-medium">
            <RouterLink to="/login">LOG IN</RouterLink>
          </a> 
        </div>
    </div>
</template>


<script lang="ts" setup>
  import { computed, ref } from "vue"

  import UserDropableMenu from '@/Components/Navigation/desktopNavigationElements/UserDropableMenu.vue';
  import NavLinks from '@/Components/Navigation/desktopNavigationElements/NavLinks.vue';
  import { useUIStore } from '@/stores/ui';
  import { useUserStore } from "@/stores/user";

  const userStore = useUserStore()
  const isLoggedIn = computed(()=> userStore.isLoggedIn)

  const UIStore = useUIStore()
  const isPageScrolled = computed(()=> UIStore.isPageScrolled)

  const screenWidth = ref(window.innerWidth)


  const open = computed(()=> {
    if(UIStore.isNavigationMenuOpen && screenWidth.value < 1024){
      return true
    }
    if(screenWidth.value > 1024){
      return true
    }
    return false
  })

  const reactiveStyles = computed(()=>{
    return {
      buttonStyles: {
        'py-2.5': isPageScrolled.value,
        'py-3.5	': !isPageScrolled.value,
        'text-white': isPageScrolled.value,
        'text-pink-500': !isPageScrolled.value,
        'bg-pink-500': isPageScrolled.value,
        'bg-white': !isPageScrolled.value             
      },
      navLinksTextColor:{
        'lg:text-white': !isPageScrolled.value,
        'lg:text-gray-500': isPageScrolled.value
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


