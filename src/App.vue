
<template>
  <navigation-panel/>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationPanel from '@/components/Navigation/NavigationPanel.vue';
</script>
