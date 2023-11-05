<template> 
    <ul class="hidden sm:ml-6 sm:flex sm:space-x-8">
        <li v-for="(item, index) in menuItems" :key="index" class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
            <router-link :to="item.url" >
                {{ item.text }}
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts" setup>

    import { ref } from "vue"

    const menuItems = ref([
        {text: "Home", url: "/"},
        {text: "Pricing", url: "/pricing"},
    ])
  </script>