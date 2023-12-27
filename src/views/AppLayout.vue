
<template>
    <div>
      <mobile-menu/> 
      <div class="grid grid-cols-10 grid-rows-[70px_minmax(900px,_1fr)_100px] h-screen gap-0 bg-slate-50">
        
        <div class="lg:col-span-2 lg:row-span-5">
          <div class="hidden lg:block lg:overflow-y-auto h-full">
            <side-nav-bar/>
          </div>
        </div>
        
        <div class="col-span-10 col-start-1 row-start-1 lg:col-start-3">
          <top-sub-nav-bar/>
        </div>

        <div class="col-span-10 col-start-1 row-start-2  row-span-4 lg:col-start-3 lg:row-start-2  bg-slate-100">
          <main class="bg-lime-500">
              <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-6"></div>
          </main>
          <aside class="hidden overflow-y-auto border-r bg-slate-900 border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          </aside>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>


  import SideNavBar from '@/components/AppLayout/Navigation/SideNavBar.vue'
  import MobileMenu from '@/components/AppLayout/Navigation/MobileMenu.vue'
  import TopSubNavBar from '@/components/AppLayout/Navigation/TopSubNavBar.vue'



  </script>
