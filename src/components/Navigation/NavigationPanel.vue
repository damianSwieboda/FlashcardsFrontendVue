<template>
  <Disclosure as="nav"  v-on:scroll="handleScroll" :class="[ variableNavStyles.BackgroundColor,'transition-all', 'duration-2000', 'fixed','top-0', 'left-0', 'w-screen', 'z-10']">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- variable navigation height  -->
        <div :class="[variableNavStyles.Height, 'flex', 'justify-between']">
          
          <div class="flex">
            <company-logo/>            
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center ">
                    <!-- variable navlinks color  -->
            <nav-links-large class="mr-8 h-16"/>
          <!-- button  --><!-- variable button color height  --><!-- variable button text  -->
            <a href="#" :class="[variableNavStyles.ButtonTextColor, variableNavStyles.ButtonWidth, variableNavStyles.ButtonBackgroundColor,  'px-12', 'rounded-3xl', 'mr-8', 'text-base', 'font-semibold',  'shadow-sm', 'transition-transform', 'transform', 'hover:-translate-y-0.5']">
              <RouterLink to="/pricing">PRICING</RouterLink>
              
            </a>
            <desktop-user-dropable-menu />
          </div>
          
          <hamburger-menu-button/>

        </div>
      </div>
      
      <dropable-mobile-menu/>  

  </Disclosure>
</template>
  
<script lang="ts" setup>
  import { computed, ref, onMounted } from "vue"
  import { Disclosure } from '@headlessui/vue'

  import CompanyLogo from '@/Components/Navigation/CompanyLogo.vue';
  import NavLinksLarge from '@/Components/Navigation/NavLinksLarge.vue';
  import DesktopUserDropableMenu from '@/Components/Navigation/DesktopUserDropableMenu.vue';
  import DropableMobileMenu from '@/Components/Navigation/DropableMobileMenu.vue';
  import HamburgerMenuButton from '@/Components/Navigation/HamburgerMenuButton.vue'

  const isScrolled = ref(false)

  const variableNavStyles = computed(()=>{
    return {
      BackgroundColor: {
        'bg-white': isScrolled.value,
        'bg-transparent': !isScrolled.value,
        'transition-bg duration-300': true,

      },
      Height: {
        'h-12': isScrolled.value,
        'h-32	': !isScrolled.value,
        'transition-h duration-300': true,

      },
      ButtonWidth: {
        'py-2.5': isScrolled.value,
        'py-3.5	': !isScrolled.value,
        
      },
      ButtonTextColor: {
        'text-white': isScrolled.value,
        'text-pink-500': !isScrolled.value
      },
      ButtonBackgroundColor: {
        'bg-pink-500': isScrolled.value,
        'bg-transparent': !isScrolled.value
      },
    }
    }
  )

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
  }



  const addListener = () => window.addEventListener('scroll', handleScroll);
  const resetIsScrolled = () => isScrolled.value = false

  onMounted(()=> {
    addListener(),
    resetIsScrolled()
  })



</script>