<template> 
    <ul class="lg:flex lg:space-x-12 float-left lg:float-right mr-8">
        <li 
            class="block w-screen text-base lg:w-fit items-center pl-5 lg:pl-0 pt-5 lg:py-0 border-b-2 border-gray-200 lg:border-transparent lg:hover:border-gray-300 lg:text-base"
            v-for="(item, index) in menuItems" :key="index" 
        >
            <router-link :to="item.url" >
                {{ item.text }}
            </router-link>
        </li> 
    </ul>
</template>

<script lang="ts" setup>

    import { useNavigationStore } from "@/stores/navigation";
    const navigationStore = useNavigationStore()
    
    const menuItems = navigationStore.publicNavigationList


</script>
