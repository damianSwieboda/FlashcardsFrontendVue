<template>
  <div class="w-full">
    <div class="flex justify-between items-center mb-3">
      <h1 class="text-xl">Most popular sets:</h1>
      <router-link to="/app/dashboard">
        <p class="text-purple-500 text-sm font-bold">See all →</p>
      </router-link>
    </div>

    <!-- need to fix sliders margin or padding, couse it unable 'space-betweem' prop work properly in swiper-->
    <swiper class="default-slider w-full" :slides-per-view="2.5" :space-between="10">
      <swiper-slide v-for="(subjectCard, index) in subjectsCards" :key="index">
        <router-link class="h-full w-full flex flex-col items-center" :to="subjectCard.destination">
          <div class="z-20">
            <img class="h-24 shad" :src="getImageUrl(subjectCard.imageURL)" alt="pic" />
          </div>

          <div
            class="flex flex-col justify-center px-3 h-[100vh] w-full -mt-10 bg-slate-50 rounded-3xl shadow-xl text-gray-700"
          >
            <h1 class="text-md text-blue-700">{{ subjectCard.title }}</h1>
            <p class="text-xs">{{ subjectCard.paragraph }}</p>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.default-slider .swiper-slide {
  display: flex;
  height: 35vh !important;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin: 15px;
}
</style>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const subjectsCards = [
  {
    title: 'Angielski',
    paragraph: 'lorem ipsum',
    imageURL: 'flashcardsThumbnails/angielski.png',
    destination: '/app/dashboard'
  },
  {
    title: 'Angielski',
    paragraph: 'lorem ipsum',
    imageURL: 'flashcardsThumbnails/angielski.png',
    destination: '/app/dashboard'
  },
  {
    title: 'Angielski',
    paragraph: 'lorem ipsum',
    imageURL: 'flashcardsThumbnails/angielski.png',
    destination: '/app/dashboard'
  },
  {
    title: 'Angielski',
    paragraph: 'lorem ipsum',
    imageURL: 'flashcardsThumbnails/angielski.png',
    destination: '/app/dashboard'
  },
  {
    title: 'Angielski',
    paragraph: 'lorem ipsum',
    imageURL: 'flashcardsThumbnails/angielski.png',
    destination: '/app/dashboard'
  },
  {
    title: 'Angielski',
    paragraph: 'lorem ipsum',
    imageURL: 'flashcardsThumbnails/angielski.png',
    destination: '/app/dashboard'
  }
]

const getImageUrl = (path: string) => {
  return new URL(`../../../assets/${path}`, import.meta.url).href
}
</script>
