<template>
    <div class="grid grid-cols-4 grid-row-2 md:grid-rows-1 gap-4 ">
        <div :class="[tileContent.positionInGrid]"
            v-for="(tileContent, index) in tilesContent"
            :key="index"
        >
        <RouterLink :to="tileContent.destination">
            <div class="flex items-center rounded-2xl h-16 bg-slate-50">
                <div :class="[tileContent.iconBackgroundColor, 'h-12', 'w-12', 'rounded-2xl', 'flex', 'items-center', 'justify-center', 'ml-2', 'mr-3']">
              <!-- here i need icon -->
                <component :is="tileContent.icon" :class="[tileContent.iconColor, 'h-6', 'w-6', ]" />

                </div>
                <div>
                    <p class=" text-blue-300 text-sm"> {{ tileContent.paragraph }}</p>
                    <h2>{{ tileContent.title }}</h2>
                </div>
            </div>
        </RouterLink>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { Square2StackIcon, BuildingLibraryIcon, BookOpenIcon, PlusCircleIcon } from '@heroicons/vue/24/outline'


const tilesContent = [
    {
        destination:'/app/dashboard',
        title:'In learn',
        paragraph: '4 sets in total',
        icon: BookOpenIcon, 
        iconColor: 'text-red-600',
        iconBackgroundColor: 'bg-red-100',
        
        positionInGrid: 'col-span-2 row-span-1 md:col-span-1',
    },
    {
        destination:'/app/dashboard',
        title:'Library',
        paragraph: '54 languages',
        icon: BuildingLibraryIcon,
        iconColor: 'text-green-600',
        iconBackgroundColor: 'bg-green-100',
        positionInGrid: 'col-span-2 col-start-3 row-span-1 md:col-span-1',
    },
    {
        destination:'/app/dashboard',
        title:'Create',
        paragraph: 'Lorem ipsum',
        icon: PlusCircleIcon,
        iconColor: 'text-blue-600',
        iconBackgroundColor: 'bg-blue-100',
        positionInGrid:  'col-span-2 row-start-2 row-span-1 md:col-span-1 md:row-start-1',
    },
    {
        destination:'/app/dashboard',
        title:'Your sets',
        paragraph: '3 sets',
        icon: Square2StackIcon,
        iconColor: 'text-gray-600',
        iconBackgroundColor: 'bg-gray-200',
        positionInGrid: 'col-span-2 col-start-3 row-start-2 row-span-1 md:col-span-1 md:row-start-1'
    },
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