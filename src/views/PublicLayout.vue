<template>
  <navigation-bar />
  <router-view />
  <TheFooter />
</template>

<script lang="ts" setup>
import NavigationBar from '@/components/Public/Navigation/NavigationBar.vue'
import TheFooter from '@/components/Public/Footer/TheFooter.vue'
</script>
