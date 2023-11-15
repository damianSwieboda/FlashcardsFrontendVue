<template>          
    <div :class="[reactiveStyles.dropableMenuTopSpacing,  'absolute','left-0','lg:static', 'lg:ml-6', 'lg:flex', 'lg:items-center', 'bg-white', 'w-screen', 'lg:w-fit']">
        <nav-links :class="[reactiveStyles.navLinksTextColor]"/>

        <a :class="[reactiveStyles.buttonStyles, 'inline-block',  'px-12', 'rounded-3xl', 'mr-8', 'text-base', 'font-semibold',  'shadow-sm', 'transition-transform', 'transform', 'hover:-translate-y-0.5']">
            <RouterLink to="/pricing">PRICING</RouterLink>
        </a> 
        <!-- if user is logged in render this, if is not, render this: <login-->
        <user-dropable-menu v-if="isLoggedIn"/>
    </div>
</template>


<script lang="ts" setup>
  import { computed } from "vue"

  import UserDropableMenu from '@/Components/Navigation/desktopNavigationElements/UserDropableMenu.vue';
  import NavLinks from '@/Components/Navigation/desktopNavigationElements/NavLinks.vue';

  import { useUIStore } from '@/stores/ui';
  import { useUserStore } from "@/stores/user";

  const userStore = useUserStore()
  const isLoggedIn = computed(()=> userStore.isLoggedIn)

  const UIStore = useUIStore()
  const isPageScrolled = computed(()=> UIStore.isPageScrolled)

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
        'text-gray-500': true

        // 'text-white': !isPageScrolled.value,
        // 'text-gray-500': isPageScrolled.value
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


