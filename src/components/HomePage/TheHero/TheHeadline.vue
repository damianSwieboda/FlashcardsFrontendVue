<template>
    <div class="mx-auto max-w-2xl mt-10 pl-6 lg:px-12 lg:mx-0 lg:flex-auto">
        <p class="text-xl font-base tracking-tight text-white sm:text-2xl lg:text-3xl">Figma</p>
        <h1 class="mt-5 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-6xl">Fiszki do matury<br>z <span :class="[subjectStyle]">{{ currentSubject }}</span></h1>
        <div class="mt-10 flex items-center gap-x-6">
            <navigation-button text="Get started" type="primary" destination="/login"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed, onMounted, onUnmounted } from 'vue'
    import NavigationButton from "@/components/Shared/NavigationButton.vue"
    import nextElementInList from '@/utils/nextElementInList'

    const currentSubject = ref('polskiego')

    const interval = ref<ReturnType<typeof setInterval>>() 

    const subjectStyle = computed(()=>{
        return {
            [currentSubject.value]: true
        }
    })

    const changeSubject = () =>{
        interval.value = setInterval(()=>{
            const subjects = ['polskiego', 'angielskiego', 'historii']
            currentSubject.value = nextElementInList(subjects, currentSubject.value)
        }, 2000)
    }

   
    onMounted(changeSubject)
    onUnmounted(()=> clearInterval(interval.value))

</script>



<style scoped>
.polskiego {
  /* color: rgb(255, 72, 30); */
    color: white
}

.angielskiego {
  /* color: rgb(254, 64, 204); */
    color: white
}

.historii {
  /* color: #fdb416; */
    color: white
}

</style>

