<template>
    <navigation-bar/>
    <router-view/>
    <TheFooter/>

</template>

<script lang="ts" setup>

import NavigationBar from '@/components/Navigation/NavigationBar.vue';
import TheFooter from '@/components/Footer/TheFooter.vue'

</script>