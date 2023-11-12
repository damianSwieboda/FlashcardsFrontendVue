<template>
    <div class="mx-auto max-w-2xl  px-10 lg:mx-0 lg:flex-auto">
        <h1 class="mt-10 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-6xl">Fiszki do matury<br>z <span :class="[subjectStyle]">{{ currentSubject }}</span></h1>
        <!-- <p class="mt-6 text-lg leading-8 text-white">Przygotuj się do {{ subject }}</p> -->
        <div class="mt-10 flex items-center gap-x-6">
            <a href="#" class="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
        </div>
    </div>
</template>

<script lang="ts" setup>

    import { ref, computed, onMounted, onUnmounted } from 'vue'

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

    const nextElementInList = (list: string[], element: string) => {
        const positionOfElement = list.indexOf(element);
        const nextElementIndex = (positionOfElement + 1) % list.length
        const nextElement = list[nextElementIndex]
        return nextElement
    }

    onMounted(changeSubject)
    onUnmounted(()=> clearInterval(interval.value))
</script>



<style scoped>
.polskiego {
  color: rgb(242, 62, 12);
}

.angielskiego {
  color: rgb(255, 0, 187);
}

.historii {
  color: #f9ab00;
}

</style>

