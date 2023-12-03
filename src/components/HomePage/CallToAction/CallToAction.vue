<template>
    <div class="bg-slate-50">
        <div class="px-6 pt-8 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Boost your learning.<br />Start using our app today.</h2>
                <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <navigation-button text="Get started" type="primary" destination="/signin"/>
                <navigation-button text="Learn more" type="plainText" destination="/signin">
                    <span aria-hidden="true"> →</span>
                </navigation-button>
            </div>
        </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
    import NavigationButton from "@/components/Shared/NavigationButton.vue"
</script>