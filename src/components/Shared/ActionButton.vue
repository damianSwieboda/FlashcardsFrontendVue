<template>
    <button :class="buttonClass">
        {{ text }}
    </button>
</template>


<script lang="ts" setup>

    import { computed, toRefs} from 'vue'

    const props = defineProps({
        text:{
            required: true,
            type: String,
        },
        type: {
            required: true,
            type: String,
            default: "primary",
            validator(value: string ){
                return ["primary", "secondary"].includes(value)
            }
        }
    })

    const { type } = toRefs(props)

    const buttonClass = computed(()=>{
        return {
            [type.value]: true
        }
    })

</script>

<style scoped>
/* button {
  @apply px-5 py-3 font-medium;
}
 */
.primary {
    @apply rounded-3xl bg-indigo-600 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
}


</style>