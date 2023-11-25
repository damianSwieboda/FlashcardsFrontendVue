<template>
  <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <MenuItems v-show="isUserMenuOpen" static class="absolute left-0 z-10  w-screen bg-white lg:left-auto lg:right-0 lg:mt-2  lg:w-48  lg:origin-top-right  lg:rounded-md  lg:py-1  lg:shadow-lg  lg:ring-1  lg:ring-black  lg:ring-opacity-5  lg:focus:outline-none" >
      <MenuItem 
        v-slot="{ active }"
        v-for="(item, index) in userNavigationList"
        :key="index"
      >
        <a :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
          <RouterLink :to="item.url">
            {{ item.text }}
          </RouterLink>
        </a>
      </MenuItem>
    </MenuItems>
  </transition>
</template>

<script lang="ts" setup>
    import {  computed } from 'vue'
    import { MenuItem, MenuItems } from '@headlessui/vue'
    

    import { useNavigationStore } from "@/stores/navigation";
    import { useUIStore } from '@/stores/ui';


    const navigationStore = useNavigationStore()
    const uiStore = useUIStore() 
    
    const isUserMenuOpen = computed(()=> uiStore.isUserMenuOpen)
    const userNavigationList = navigationStore.userNavigationList
    
</script>
