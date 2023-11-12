<template>
  <Disclosure as="nav"  v-on:scroll="handleScroll" :class="[reactiveStyles.navBarColor,'transition-all', 'duration-2000', 'fixed','top-0', 'left-0', 'w-screen', 'z-20']">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- variable navigation height  -->
        <div :class="[reactiveStyles.navBarHeight, 'flex', 'justify-between']">
            <company-logo/>            
          <div class="hidden lg:ml-6 lg:flex lg:items-center ">
            <nav-links-large :class="[reactiveStyles.navLinksTextColor]"/>
            <a :class="[reactiveStyles.buttonStyles,  'px-12', 'rounded-3xl', 'mr-8', 'text-base', 'font-semibold',  'shadow-sm', 'transition-transform', 'transform', 'hover:-translate-y-0.5']">
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

  const reactiveStyles = computed(()=>{
    return {
      navBarColor: {
        'bg-white': isScrolled.value,
        'bg-transparent': !isScrolled.value,
        'transition-bg duration-300': true,
      },
      navBarHeight: {
        'h-12': isScrolled.value,
        'h-24	': !isScrolled.value,
        'transition-h duration-300': true,
      },
      buttonStyles: {
        'py-2.5': isScrolled.value,
        'py-3.5	': !isScrolled.value,
        'text-white': isScrolled.value,
        'text-pink-500': !isScrolled.value,
        'bg-pink-500': isScrolled.value,
        'bg-white': !isScrolled.value             
      },
      navLinksTextColor:{
        'text-white': !isScrolled.value,
        'text-gray-500': isScrolled.value
      }
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