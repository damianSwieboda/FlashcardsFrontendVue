<template>
  <div class="overflow-hidden">
    <div class="flex justify-between items-center mb-3">
      <h1 class="text-xl font-medium">Most popular sets</h1>
    </div>

    <div class="w-full pt-2 pl-2 bg-slate-50 rounded-3xl relative">
      <!-- Swiper container -->
      <swiper
        class="default-slider w-full overflow-visible"
        :slides-per-view="2.5"
        :space-between="20"
        :navigation="true"
      >
        <swiper-slide v-for="(subjectCard, index) in subjectsCards" :key="index">
          <router-link
            class="h-full w-full flex flex-col items-center"
            :to="subjectCard.destination"
          >
            <div class="w-full relative">
              <img
                class="h-40 w-full rounded-3xl object-cover object-bottom"
                :src="getImageUrl(subjectCard.imageURL)"
                alt="pic"
              />

              <div class="absolute group top-3 right-3 flex items-center justify-center">
                <div v-if="subjectCard.inLearn" class="hidden group-hover:inline-block">
                  <p
                    class="text-xs text-slate-100 font-light mr-1 bg-slate-700/70 px-3 py-1 rounded-xl"
                  >
                    W NAUCE
                  </p>
                </div>
                <div class="flex items-center justify-center bg-slate-700/70 p-[5px] rounded-full">
                  <component
                    v-if="subjectCard.inLearn"
                    :is="HeartSolidIcon"
                    class="h-5 w-5 text-red-500"
                  />
                  <component v-else :is="HeartOutlineIcon" class="h-5 w-5 text-gray-100" />
                </div>
              </div>
            </div>

            <div class="flex flex-col mt-2 space-y-3 w-full">
              <div
                :class="[
                  subjectCard.titleBackgroudColor,
                  'flex items-center text-sm font-normal px-3 py-[1px] rounded-2xl w-fit'
                ]"
              >
                <component
                  :is="subjectCard.icon"
                  :class="[subjectCard.iconColor, 'h-4 w-4 mr-2']"
                />
                <h2 :class="[subjectCard.titleTextColor]">
                  {{ subjectCard.title.toUpperCase() }}
                </h2>
              </div>
              <p class="text-base font-medium h-16">{{ subjectCard.description }}</p>
            </div>
            <div class="w-full mt-3">
              <progress-bar :progress="subjectCard.progress" pixelHeight="h-[3px]" />
            </div>
          </router-link>
        </swiper-slide>

        <!-- Swipe buttons positioned outside the swiper -->
        <swipe-buttons class="absolute -top-12 right-0 z-50" />
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import SwipeButtons from '@/Components/App/Carousel/SwipeButtons.vue'
import ProgressBar from '@/Components/App/Carousel/ProgressBar.vue'

import {
  ChatBubbleLeftRightIcon,
  FlagIcon,
  ScaleIcon,
  GlobeEuropeAfricaIcon,
  PuzzlePieceIcon
} from '@heroicons/vue/24/outline'

import { HeartIcon as HeartOutlineIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/vue/24/solid'

const subjectsCards = [
  {
    title: 'Angielski',
    description:
      'Niezbędne słownictwo z języka angielskiego, na poziomie podstawowym i rozszerzonym',
    imageURL: 'flashcardsThumbnails/eng.jpg',
    destination: '/app/dashboard',
    icon: ChatBubbleLeftRightIcon,
    iconColor: 'text-pink-900',
    titleBackgroudColor: 'bg-pink-200',
    titleTextColor: 'text-pink-900',
    progress: 65,
    inLearn: true
  },
  {
    title: 'Polski',
    description: 'Środki stylistyczne, oraz opracowanie najwazniejszych informacji z lektur ',
    imageURL: 'flashcardsThumbnails/setThumbnail.jpg',
    destination: '/app/dashboard',
    icon: FlagIcon,
    iconColor: 'text-blue-900',
    titleBackgroudColor: 'bg-blue-200',
    titleTextColor: 'text-blue-900',
    progress: 0,
    inLearn: false
  },
  {
    title: 'Historia',
    description:
      'Zestawienie dat bitw, roaz ważnych wydarzeń historycznych. Nazwiska, nazwy własne, oraz pojęcia.',
    imageURL: 'flashcardsThumbnails/setThumbnail.jpg',
    destination: '/app/dashboard',
    icon: ScaleIcon,
    iconColor: 'text-green-900',
    titleBackgroudColor: 'bg-green-200',
    titleTextColor: 'text-green-900',
    progress: 96,
    inLearn: true
  },
  {
    title: 'Geografia',
    description:
      'Zestawienie najważniejszych informacji, nazw zjawisk atmosferycznych, wyjaśnienia zjawisk wraz ze streszczonymi opisami',
    imageURL: 'flashcardsThumbnails/setThumbnail.jpg',
    destination: '/app/dashboard',
    icon: GlobeEuropeAfricaIcon,
    iconColor: 'text-blue-900',
    titleBackgroudColor: 'bg-blue-200',
    titleTextColor: 'text-blue-900',
    progress: 0,
    inLearn: false
  },
  {
    title: 'Wiedz o społeczeństwie',
    description: 'Zestawienie wydarzeń wraz z datami i opisami, naziwska, pojęcia z socjologii',
    imageURL: 'flashcardsThumbnails/setThumbnail.jpg',
    destination: '/app/dashboard',
    icon: PuzzlePieceIcon,
    iconColor: 'text-purple-900',
    titleBackgroudColor: 'bg-purple-200',
    titleTextColor: 'text-purple-900',
    progress: 0,
    inLearn: false
  }
]

const getImageUrl = (path: string) => {
  return new URL(`../../../assets/${path}`, import.meta.url).href
}
</script>

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
