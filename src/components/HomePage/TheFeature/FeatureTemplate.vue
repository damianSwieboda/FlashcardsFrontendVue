<template>

<div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <feature-description/>    
                <feature-image/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import FeatureDescription from '@/components/HomePage/TheFeature/FeatureDescription.vue';
    import FeatureImage from '@/components/HomePage/TheFeature/FeatureImage.vue';

    //     =""
    //     imageLink=""    

    const props = defineProps({

        headlineTitle: {
            required: false,
            type: String,
            default: "Feature"
        },
        descriptoryTitle: {
            required: true,
            type: String
        },
        featureDetails: {
            required: false,
            type: Array,
        },
        imageLink: {
            required: true,
            type: String,
            default: 'primary',
        }  
    })     
</script>