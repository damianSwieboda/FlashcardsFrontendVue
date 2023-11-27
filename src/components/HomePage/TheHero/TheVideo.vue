<template>
    <div class="relative h-fit px-5  lg:pl-3 lg:pr-12 max-w-16 mt-16 lg:mt-4 b">
        <img :src="thumbnailLink" alt="" class=" drop-shadow-2xl lg:max-h-80 h-auto">
        <!-- add element for screen readers -->
        <play-button />
    </div>
</template>

<script lang="ts" setup>

    import PlayButton from '@/components/HomePage/TheHero/PlayButton.vue'

    defineProps({
        thumbnailLink: String
    })
</script>