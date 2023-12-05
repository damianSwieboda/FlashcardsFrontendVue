<template>
    <button :class="[buttonClassStyles]">
        <span>
                {{ text }}
            <slot></slot>
        </span> 
    </button>
</template>

<script lang="ts" setup>
    import { computed, toRefs} from "vue"

    const props = defineProps({
        text: {
            required: true,
            type: String
        },
        type: {
            required: false,
            type: String,
            default: 'primary',
            validator(value: string){
                return ['primary', 'secondary'].includes(value)
            }
        }       
    })

    const { type } = toRefs(props)

    const buttonClassStyles = computed(()=>{
        return {
            [type.value]: true
        }
    })


</script>
<style scoped>
/* 
button {
  @apply px-5 py-3 font-medium;
} */

.primary{
    @apply rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
}
.navButton{
    @apply inline-block w-9/12 lg:w-fit whitespace-nowrap overflow-hidden lg:px-8 rounded-3xl text-base font-semibold shadow-sm transition-transform transform hover:-translate-y-0.5
}

.plainText{
    @apply text-sm font-semibold leading-6 text-gray-900
}




</style>
 