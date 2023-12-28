<template>

<div class="grid grid-cols-4 auto-cols-max gap-4 max-h-full">
    
    <div class="col-span-4 row-span-2">
        <dashboard-hero/>
    </div>
    <div  class=
        "grid grid-cols-4 grid-row-2 gap-4 
        col-span-4 row-span-2 row-start-3  h-36 bg-slate-200 justify-center"
    >
        <div class="bg-slate-50 col-span-2 h-18 row-start-1 flex items-center  rounded-2xl ">
            <div class="h-12 bg-red-200 w-12 rounded-2xl inline-block ml-2 mr-3"></div>
            <div>
                <p class=" text-blue-300 text-sm"> 3 sets in total</p>
                <h2>Your sets</h2>
            </div>
        </div>
        <div class="bg-slate-50 col-span-2 h-18 row-start-1 flex items-center  rounded-2xl ">
            <div class="h-12 bg-green-200 w-12  rounded-2xl inline-block ml-2 mr-3"></div>
            <div>
                <p class=" text-blue-300 text-sm"> 54 languages</p>
                <h2>Your sets</h2>
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
        </div>
    </div>
    <div class="col-span-4 row-start-6 h-16 gap-4 bg-slate-600">


    </div>
    <div class="col-span-4 row-start-7 bg-slate-200">
        <spotlight-sets-carousel />
    </div>


</div>
    
</template>
<script lang="ts" setup>
    import SpotlightSetsCarousel from '@/components/AppLayout/Carousel/SpotlightSetsCarousel.vue'    
    import DashboardHero from '@/components/AppLayout/DashboardHero/DashboardHero.vue';
</script>