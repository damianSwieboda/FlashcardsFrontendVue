<template>
    <DisclosurePanel class="lg:hidden bg-white">
      <!-- mobile navigation -->
        <div class="space-y-1 pb-3 pt-2">
          <DisclosureButton as="a" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            v-for="(item, index) in publicNavigationList" :key="index"
          >
            <RouterLink :to="item.url"> {{ item.text }}</RouterLink>
          </DisclosureButton>

        </div>

        <!-- mobile profile displayed in mobile menu -->
        <div class="border-t border-gray-200 pb-3 pt-4">

          <!-- user profile menu -->
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <profile-picture height="h-10" width="w-10"/>
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">Tom Cook</div>
              <div class="text-sm font-medium text-gray-500">tom@example.com</div>
            </div>
            <button type="button" class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <!-- user profile mobile menu -->
          <div class="mt-3 space-y-1">
            <DisclosureButton 
              as="a" 
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              v-for="(item, index) in userNavigationList"
              :key="index"
            >
              <RouterLink :to="item.url">
                {{ item.text }}
              </RouterLink>
            </DisclosureButton>

          </div>

        </div>

      </DisclosurePanel>
</template>

<script lang="ts" setup>
    import { DisclosureButton, DisclosurePanel, MenuItem } from '@headlessui/vue'
    import { BellIcon } from '@heroicons/vue/24/outline'

    import ProfilePicture from '@/Components/Navigation/ProfilePicture.vue';

    import { useNavigationStore } from "@/stores/navigation";

    const navigationStore = useNavigationStore()

    const publicNavigationList = navigationStore.publicNavigationList
    const userNavigationList = navigationStore.userNavigationList


</script>