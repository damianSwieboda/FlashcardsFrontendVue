<template>
  <Menu  as="div" class="relative" >
    <!-- create menu component and pass it here -->
    <div>
      <!-- user image as menu button -->
      <MenuButton class="relative flex  ml-7 rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span class="absolute -inset-1.5" />
        <span class="sr-only">Open user menu</span>
        <profile-picture height="h-10" width="w-10"/>
      </MenuButton>
    </div>
    
    <!-- profile menu list -->
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems  class="absolute left-0 z-10  w-screen bg-white lg:left-auto lg:right-0 lg:mt-2  lg:w-48  lg:origin-top-right  lg:rounded-md  lg:py-1  lg:shadow-lg  lg:ring-1  lg:ring-black  lg:ring-opacity-5  lg:focus:outline-none" >
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
  </Menu>
</template>

<script lang="ts" setup>
    import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import ProfilePicture from '@/Components/Navigation/ProfilePicture.vue';

    import { useNavigationStore } from "@/stores/navigation";

    const navigationStore = useNavigationStore()

    const userNavigationList = navigationStore.userNavigationList

</script>

