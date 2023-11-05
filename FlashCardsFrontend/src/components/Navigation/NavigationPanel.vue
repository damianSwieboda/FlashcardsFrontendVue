<template>
  <Disclosure as="nav"  v-on:scroll="handleScroll" :class="[backgroundColor, 'transition', 'ease-in-out', 'shadow','fixed','top-0', 'left-0', 'w-screen', 'z-10']">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          
          <div class="flex">
            <company-logo/>
            <nav-links-large/>
          </div>

          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <desktop-user-dropable-menu />
          </div>
          
          <hamburger-menu-button/>

        </div>
      </div>
      
      <dropable-mobile-menu/>  

  </Disclosure>
</template>
  
<script lang="ts" setup>
  import { computed, ref, onMounted, onBeforeUnmount } from "vue"
  import { Disclosure } from '@headlessui/vue'

  import CompanyLogo from '@/Components/Navigation/CompanyLogo.vue';
  import NavLinksLarge from '@/Components/Navigation/NavLinksLarge.vue';
  import DesktopUserDropableMenu from '@/Components/Navigation/DesktopUserDropableMenu.vue';
  import DropableMobileMenu from '@/Components/Navigation/DropableMobileMenu.vue';
  import HamburgerMenuButton from '@/Components/Navigation/HamburgerMenuButton.vue'

  const isScrolled = ref(false)

  const backgroundColor = computed(()=>{
    return { 
      'bg-white': isScrolled.value,
      'bg-transparent': !isScrolled.value
    }
  })

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
  }



  const addListener = () => window.addEventListener('scroll', handleScroll);
  const removeListener = () => window.removeEventListener('scroll', handleScroll)
  
  onMounted(addListener)

  onBeforeUnmount(removeListener)


</script>