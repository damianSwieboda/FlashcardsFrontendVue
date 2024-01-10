<template>
  <footer class="bg-gray-900 mt-12" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>

    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <company-logo />
          <p class="text-sm leading-6 text-gray-300">
            Making the world a better place through constructing elegant hierarchies.
          </p>
          <social-media-icons />
        </div>

        <footer-navigation />
      </div>

      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-400">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import FooterNavigation from '@/components/Public/Footer/FooterNavigation.vue'
import CompanyLogo from '@/Components/Shared/CompanyLogo.vue'

import SocialMediaIcons from '@/components/Shared/SocialMediaIcons.vue'
</script>
