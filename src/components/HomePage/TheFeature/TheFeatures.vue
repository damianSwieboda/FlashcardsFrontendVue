<template>
    <feature-template :feature="feature" imagePlacing="left" />
    <feature-template :feature="feature" imagePlacing="right" />

</template>

<script lang="ts" setup>
    import FeatureTemplate from "@/components/HomePage/TheFeature/FeatureTemplate.vue"
    import { CloudArrowUpIcon, LockClosedIcon, ServerIcon} from '@heroicons/vue/20/solid'

    import type { Feature } from "@/types/Feature.ts"

    const feature: Feature= {
        imageLink: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
        featureHeadline: {
            introductoryTitle: 'Deploy faster',
            descriptoryTitle:'A better workflow',
            headlineDescription:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        },
        featureDescription: [
            {
                name: 'Push to deploy.',
                description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
                icon: CloudArrowUpIcon,
            },
            {
                name: 'SSL certificates.',
                description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
                icon: LockClosedIcon,
            },
            {
                name: 'Database backups.',
                description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
                icon: ServerIcon,
            },
        ]
    }
</script>

