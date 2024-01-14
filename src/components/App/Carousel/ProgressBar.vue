<template>
  <div :class="[pixelHeight, 'w-full', 'justify-stretch']">
    <div :class="[pixelHeight, 'w-full', 'bg-slate-300', 'relative']">
      <div
        :style="{ width: `${props.progress}%` }"
        :class="[pixelHeight, 'bg-purple-600', 'absolute', 'top-0']"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
const props = defineProps({
  progress: {
    type: Number
  },
  pixelHeight: {
    type: String,
    default: 'h-[1px]'
  }
})
</script>
