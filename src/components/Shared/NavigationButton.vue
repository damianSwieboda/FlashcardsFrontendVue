<template>
    <button :class="[buttonClassStyles]">
        <a>
            <RouterLink :to="destination">
                {{ text }}
            </RouterLink>
        </a> 
    </button>
</template>

<script lang="ts" setup>
    import { useUIStore } from '@/stores/ui'

    import { computed, toRefs} from "vue"

    const props = defineProps({
        text: {
            required: true,
            type: String
        },
        destination: {
            required: true,
            type: String,
            default:'/page404',
            validator(value: string){
                return value.charAt(0) === "/"
            }
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

    const uiStore = useUIStore()
    // const isPageScrolled = computed(()=> uiStore.isPageScrolled)


    const buttonClassStyles = computed(()=>{

        // if(type.value === "navCallToAction")  return isPageScrolled.value === true ? {navButtonWhenScrolled: true} : {navButtonWhenNotScrolled: true}

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


.navButton{
    @apply inline-block w-9/12 lg:w-fit whitespace-nowrap overflow-hidden lg:px-8 rounded-3xl text-base font-semibold shadow-sm transition-transform transform hover:-translate-y-0.5
}

</style>
