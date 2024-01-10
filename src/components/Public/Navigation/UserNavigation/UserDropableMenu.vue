<template>
  <Menu as="div" class="relative lg:mt-5 lg:ml-5">
    <!-- create menu component and pass it here -->
    <div @click="OPEN_OR_CLOSE_USER_DESKROP_MENU">
      <div class="relative flex rounded-full text-sm">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <profile-picture height="h-10" width="w-10" />
          </div>
          <div class="ml-3 lg:hidden items-left">
            <div class="w-fit text-base font-medium text-gray-800">Tom Cook</div>
            <div class="text-sm font-medium text-gray-500">tom@example.com</div>
          </div>
        </div>
      </div>
    </div>

    <user-navigation-menu />
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from '@headlessui/vue'
import ProfilePicture from '@/Components/Shared/ProfilePicture.vue'
import UserNavigationMenu from '@/components/Public/Navigation/UserNavigation/userNavigationMenu.vue'
import { useUIStore } from '@/stores/ui'

const uiStore = useUIStore()

const OPEN_OR_CLOSE_USER_DESKROP_MENU = uiStore.OPEN_OR_CLOSE_USER_DESKROP_MENU
</script>

<!-- profile menu list -->
