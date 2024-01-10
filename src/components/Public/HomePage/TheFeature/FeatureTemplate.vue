<template>
  <div class="overflow-hidden bg-slate-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <feature-image :imageLink="feature.imageLink" :imagePlacing="imagePlacing" />
        <feature-description
          :featureHeadline="feature.featureHeadline"
          :featureDescription="feature.featureDescription"
          :imagePlacing="imagePlacing"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FeatureDescription from '@/components/Public/HomePage/TheFeature/FeatureDescription.vue'
import FeatureImage from '@/components/Public/HomePage/TheFeature/FeatureImage.vue'

defineProps({
  imagePlacing: {
    required: false,
    type: String
  },
  feature: {
    type: Object,
    required: true
  }
})
</script>
