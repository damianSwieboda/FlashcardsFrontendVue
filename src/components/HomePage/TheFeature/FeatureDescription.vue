<template>
    <div :class="imageContainerStyle">
        <div class="lg:max-w-lg">      
          
            <h2 class="text-base font-semibold leading-7 text-indigo-600"
            > {{ featureHeadline.introductoryTitle }} </h2>

            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            > {{ featureHeadline.descriptoryTitle }} </p>

            <p class="mt-6 text-lg leading-8 text-gray-600"
            > {{ featureHeadline.headlineDescription }} </p>
                        
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div v-for="feature in featureDescription" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">
                  {{ feature.description }}
                </dd>
            </div>
            </dl>
        </div>
    </div>
</template>

<script lang="ts" setup>

  import { computed } from "vue"

  const props = defineProps({
    imagePlacing: {
      required: false,
      type: String,
      default:"left"
    },
    featureHeadline: {
      type: Object,
      required: true
    },
    featureDescription:{
      type: Object,
      required: true
    }
  })

  const imageContainerStyle = computed(()=>{
    return {
      [props.imagePlacing]: true
    }
  })

</script>


<style scoped>

  .left{
    @apply lg:mr-auto lg:pr-4 lg:pt-4
  }
  .right{
    @apply lg:mr-auto lg:pr-4 lg:pt-4
  }

</style>