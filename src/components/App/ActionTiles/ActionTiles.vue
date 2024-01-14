<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 grid-row-3 xs:grid-rows-1 gap-4 xs:gap-1 md:gap-2">
    <!-- tiles -->
    <div
      :class="[tileContent.positionInGrid]"
      v-for="(tileContent, index) in tilesContent"
      :key="index"
    >
      <!-- tile content -->
      <div class="rounded-2xl flex items-center justify-between h-16 bg-slate-50">
        <RouterLink
          :to="tileContent.destination"
          class="w-full h-full flex items-center justify-between"
        >
          <div class="flex items-center h-full">
            <div
              :class="[
                tileContent.iconBackgroundColor,
                'h-12',
                'w-12',
                'rounded-2xl',
                'flex',
                'items-center',
                'justify-center',
                'ml-2',
                'mr-3'
              ]"
            >
              <component :is="tileContent.icon" :class="[tileContent.iconColor, 'h-6', 'w-6']" />
            </div>
            <div>
              <p class="text-slate-400 text-sm">{{ tileContent.paragraph }}</p>
              <h2 class="text-black font-medium">{{ tileContent.title }}</h2>
            </div>
          </div>

          <div class="mr-4">
            <component :is="tileContent.moreInfoIcon" class="h-6 text-gray-400" />
          </div>
        </RouterLink>

        <!-- absolute content under div  -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Square2StackIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
  EllipsisVerticalIcon
} from '@heroicons/vue/24/outline'

const tilesContent = [
  {
    destination: '/app/dashboard',
    title: 'Stwórz zestaw',
    paragraph: 'Kreator fiszek',
    icon: PlusCircleIcon,
    iconColor: 'text-blue-600',
    iconBackgroundColor: 'bg-blue-100',
    positionInGrid: 'col-span-1 row-start-1 sm:col-start-1 sm:row-start-1',
    moreInfoIcon: EllipsisVerticalIcon
  },
  {
    destination: '/app/dashboard',
    title: 'Przeglądaj bibliotekę',
    paragraph: 'Gotowe zestawy',
    icon: BuildingLibraryIcon,
    iconColor: 'text-green-600',
    iconBackgroundColor: 'bg-green-100',
    positionInGrid: 'col-span-1 row-start-2 sm:col-start-2 sm:row-start-1',
    moreInfoIcon: EllipsisVerticalIcon
  },
  {
    destination: '/app/dashboard',
    title: 'Twoje zestawy',
    paragraph: 'Przejrzyj swoje zestawy',
    icon: Square2StackIcon,
    iconColor: 'text-gray-600',
    iconBackgroundColor: 'bg-gray-200',
    positionInGrid: 'col-span-1 row-start-3 sm:col-start-3 sm:row-start-1',
    moreInfoIcon: EllipsisVerticalIcon
  }
]
</script>

<!--         
        <div class="bg-slate-50 col-span-2 h-18 row-start-1 flex items-center  rounded-2xl ">
            <div class="h-12 bg-green-200 w-12  rounded-2xl inline-block ml-2 mr-3"></div>
            <div>
                <p class=" text-blue-300 text-sm"> 54 languages</p>
                <h2>Library</h2>
            </div>
        </div>
        <div class="bg-slate-50 col-span-2 h-18 row-start-2 flex items-center  rounded-2xl ">
            <div class="h-12 bg-blue-200 w-12  rounded-2xl inline-block ml-2 mr-3"></div>
            <div>
                <p class=" text-blue-300 text-sm">Lorem ipsum</p>
                <h2>Create</h2>
            </div>
        </div>
        <div class="bg-slate-50 col-span-2 h-18 row-start-2 flex items-center  rounded-2xl ">
            <div class="h-12 bg-slate-400 w-12  rounded-2xl inline-block ml-2 mr-3"></div>
            <div>
                <p class=" text-blue-300  text-sm">3 sets</p>
                <h2>Your sets</h2>
            </div>
        </div> -->
