<template>
  <div :class="imageContainerStyle">
    <img
      :src="props.imageLink"
      alt="Feature description"
      class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
      width="2432"
      height="1442"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  imagePlacing: {
    required: false,
    type: String,
    default: 'left'
  },
  imageLink: {
    required: true,
    type: String
  }
})

const imageContainerStyle = computed(() => {
  return {
    [props.imagePlacing]: true
  }
})
</script>

<style scoped>
.left {
  @apply flex items-start justify-end lg:order-first;
}

.right {
  @apply flex items-start justify-start lg:order-last;
}
</style>
