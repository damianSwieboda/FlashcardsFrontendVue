
<template>
  <navigation-bar/>
  <RouterView/>
  <TheFooter/>
  
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/Navigation/NavigationBar.vue';
import TheFooter from '@/components/Footer/TheFooter.vue'
</script>
