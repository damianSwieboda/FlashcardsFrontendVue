<template>
    <div>

        <h3 class="text-sm font-semibold leading-6 text-white"
        >
            {{ columnTitle }}
        </h3>

        <ul role="list" class="mt-6 space-y-4">
            <li v-for="item in navigation" :key="item.name">
                <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
            </li>
        </ul>
        
    </div>
</template>
<script lang="ts" setup>

    defineProps({
        columnTitle:{
            required: true,
            type: String,
        },
        navigation:{
            required: true, 
            type: Object
        }
    })

</script>