<template>
  <div>
    <mobile-menu />
    <div class="grid grid-cols-12 gap-5 lg:gap-2 grid-rows-[50px] lg:grid-rows-[80px] bg-slate-200">
      <div class="lg:col-span-2 lg:row-span-5">
        <div class="hidden lg:block lg:overflow-y-auto h-screen">
          <side-nav-bar />
        </div>
      </div>

      <div class="col-span-12 col-start-1 h-[70px] row-start-1 lg:col-start-3">
        <top-sub-nav-bar />
      </div>

      <div
        class="grid grid-cols-3 col-span-12 col-start-1 gap-4 row-start-2 h-full row-span-4 lg:col-start-3"
      >
        <main class="col-span-3 xl:col-span-2 m-3 h-auto">
          <router-view />
        </main>
        <aside
          class="hidden xl:col-start-3 xl:col-span-1 overflow-y-auto border-r m-3 ml-0 bg-slate-900 border-gray-200 px-4 py-6 xl:px-8 xl:block"
        ></aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideNavBar from '@/components/App/Navigation/SideNavBar.vue'
import MobileMenu from '@/components/App/Navigation/MobileMenu.vue'
import TopSubNavBar from '@/components/App/Navigation/TopSubNavBar.vue'
</script>
