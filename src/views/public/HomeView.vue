<template>
    <the-hero/>

    <div class="bg-slate-50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 xl:px-8">
        <div class="mx-auto max-w-2xl xl:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
        </div>
        
        <ul role="list" class="mt-10 md:mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16  sm:grid-cols-3  xl:max-w-none  xl:grid-cols-6">
          <li v-for="setSpotlight in flashcardSetSpotlight" :key="setSpotlight.name">

            <img class="h-64 w-52 rounded-md" :src="setSpotlight.imageUrl" alt="" />
            <h3 class="mt-2 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ setSpotlight.name }}</h3>
            <p class="text-sm leading-6 text-gray-600">{{ setSpotlight.description }}</p>
          
        </li>
        </ul>
        
      </div>
    </div>

    <call-to-action/>

    <the-features/>

</template>

<script lang="ts" setup>


import TheHero from '@/components/HomePage/TheHero/TheHero.vue'
import CallToAction from '@/components/HomePage/CallToAction/CallToAction.vue'
import TheFeatures from '@/components/HomePage/TheFeature/TheFeatures.vue';


interface setSpotlight {
  name: string;
  description: string;
  imageUrl: string;
}

const flashcardSetSpotlight: setSpotlight[] = [
    {
      name: 'Angielski',
      description: 'podstawa, rozszerzenie',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },    {
      name: 'Polski',
      description: 'Najważniejsze informacje z lektur',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
      name: 'Biologia',
      description: 'podstawa, rozszerzenie',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
      name: 'Geografia',
      description: 'podstawa, rozszerzenie',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
      name: 'Historia',
      description: 'podstawa, rozszerzenie',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },      
    {
      name: 'Historia',
      description: 'podstawa, rozszerzenie',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },    
  ]
</script>

