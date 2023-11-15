
 <template>
    <div class="-mr-2 flex items-center lg:hidden">

    <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    @click="OPEN_OR_CLOSE_MENU"
    >
        <span class="absolute -inset-0.5" />
         <span class="sr-only">Open main menu</span>
        <Bars3Icon v-if="!open"  class="block h-8 w-8" aria-hidden="true" />
        <XMarkIcon v-else class="block h-8 w-8" aria-hidden="true" />
    </DisclosureButton>
    </div>
</template>

<script lang="ts" setup>
    import { DisclosureButton } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
    import { useUIStore } from '@/stores/ui';
    import { computed } from "vue"

    const UIStore = useUIStore()
    const open = computed(()=> UIStore.isMenuOpen)
    const OPEN_OR_CLOSE_MENU = UIStore.OPEN_OR_CLOSE_MENU
</script> 