<template> 
    <ul class="sm:ml-6 px-4 lg:flex lg:space-x-12 float-left lg:float-right mr-8">
        <!-- inline-flex -->
        <li 
            class="block w-screen lg:w-fit items-center border-b-2 border-transparent hover:border-gray-300 pt-1 tracking-widest text-sm font-medium"
            v-for="(item, index) in menuItems" :key="index" 
        >
            <router-link :to="item.url" >
                {{ item.text.toUpperCase() }}
            </router-link>
        </li> 
    </ul>
</template>

<script lang="ts" setup>

    import { useNavigationStore } from "@/stores/navigation";
    const navigationStore = useNavigationStore()
    
    const menuItems = navigationStore.publicNavigationList


</script>
