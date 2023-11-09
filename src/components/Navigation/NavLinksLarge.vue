<template> 
    <ul class="hidden sm:ml-6 sm:flex sm:space-x-12 float-right mr-8">
        <li v-for="(item, index) in menuItems" :key="index" class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 tracking-widest text-sm font-medium hover:text-gray-700">
            <router-link :to="item.url" >
                {{ item.text }}
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts" setup>

    import { ref } from "vue"

    const menuItems = ref([
        {text: "FIGMA", url: "/"},
        {text: "FEATURES", url: "/features"},
        {text: "ABOUT", url: "/about"},
        {text: "ACCOUNT", url: "/account"},
    ])
  </script>

  <!-- 
    Na scroll zmieniaa się
    - kolor tła
    - kolor buttonu
    - wysokość buttonu
    - kolor nawigacji
    - wysokość pamelu nawigacyjnego nawigacji
    - wysokość elementu trzymajacego wszystkie nav linki


   -->