<template>
  <div class="flex">
    <button
      class="group transition-all bg-slate-50 rounded-full h-8 w-8 mr-3 flex justify-center items-center hover:bg-purple-400"
      @click="swiper.slidePrev(200, true)"
    >
      <component :is="ChevronLeftIcon" class="h-5 text-slate-500 group-hover:text-slate-50" />
    </button>
    <button
      class="group transition-all bg-slate-50 rounded-full h-8 w-8 mr-1 flex justify-center items-center hover:bg-purple-400"
      @click="swiper.slideNext(200, true)"
    >
      <component :is="ChevronRightIcon" class="h-5 text-slate-500 group-hover:text-slate-50" />
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useSwiper } from 'swiper/vue'
const swiper = useSwiper()

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>
