<template>
  <Disclosure as="nav" v-slot="open"  v-on:scroll="handleScroll" :class="[reactiveStyles.navBarColor,'transition-all', 'duration-2000', 'fixed','top-0', 'left-0', 'w-screen', 'z-20']">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div :class="[reactiveStyles.navBarHeight, 'relative', 'px-4', 'sm:px-6', 'flex', 'justify-between']">
          <company-logo/> 
          <the-menu/>           
          <hamburger-menu-button :open="open"/>
        </div>
      </div>

      <!-- <dropable-mobile-menu/>   -->
  </Disclosure>
</template>
  
<script lang="ts" setup>
  import { computed, onMounted } from "vue"
  import { Disclosure } from '@headlessui/vue'

  import CompanyLogo from '@/Components/Navigation/CompanyLogo.vue';
  import TheMenu from '@/Components/Navigation/desktopNavigationElements/TheMenu.vue'
  import HamburgerMenuButton from '@/Components/Navigation/mobileNavigationElements/HamburgerMenuButton.vue'

  import { useUIStore } from '@/stores/ui';

  const UIStore = useUIStore()
  const isPageScrolled = computed(()=> UIStore.isPageScrolled)
  const PAGE_IS_SCROLLED = UIStore.PAGE_IS_SCROLLED
  const PAGE_IS_NOT_SCROLLED = UIStore.PAGE_IS_NOT_SCROLLED


  const reactiveStyles = computed(()=>{
    return {
      navBarColor: {
        'bg-white': isPageScrolled.value,
        'bg-transparent': !isPageScrolled.value,
        'transition-bg duration-300': true,
      },
      navBarHeight: {
        'h-12': isPageScrolled.value,
        'h-24	': !isPageScrolled.value,
        'transition-h duration-300': true,
      },
    }
  })

  const handleScroll = () => {
    if(window.scrollY > 0) PAGE_IS_SCROLLED()
    if(window.scrollY === 0) PAGE_IS_NOT_SCROLLED()
  }

  const addListener = () => window.addEventListener('scroll', handleScroll);
  const resetIsScrolled = () => PAGE_IS_NOT_SCROLLED()

  onMounted(()=> {
    addListener(),
    resetIsScrolled()
  })



</script>