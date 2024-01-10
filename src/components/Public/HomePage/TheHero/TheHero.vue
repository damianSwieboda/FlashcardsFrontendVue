<template>
  <div
    class="relative isolate bg-[url('@/assets/blob.jpg')] bg-cover bg-no-repeat bg-bottom pb-12 lg:max-h-[100vh] xl:max-h-[80vh] min-h-[600px]"
  >
    <div
      class="absolute top-0 left-0 h-[35%] w-full bg-gradient-to-b from-[#4300ca] to-transparent -z-10"
    ></div>

    <div class="mx-auto max-w-7xl py-24 lg:py-48 lg:py-auto lg:flex z-10">
      <the-headline />
      <the-video thumbnailLink="src/assets/heroVideoThumbnail.jpg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheHeadline from '@/components/Public/HomePage/TheHero/TheHeadline.vue'
import TheVideo from '@/components/Public/HomePage/TheHero/TheVideo.vue'
</script>
