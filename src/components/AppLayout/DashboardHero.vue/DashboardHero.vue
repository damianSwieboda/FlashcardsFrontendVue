<template>
    <div class="text-white py-4 pl-5  bg-purple-500  rounded-2xl relative">
        
        <h1 class="font-bold text-2xl">World is waiting for you!</h1>
        <p class="text-sm mt-1"
        >
            Chose what you want to learn <br>
            and start using new best flashcard app!
        </p>
        
        <div class="mt-4">
            
            <div class="inline-block">
                <RouterLink to="/app/library">
                  <navigation-button 
                    text="Browse library" 
                    type="dashboardHeroButton" 
                  />
                </RouterLink>                
            </div>

  

        </div>



    </div>

</template>

<script lang="ts" setup>
import NavigationButton from '@/components/Shared/NavigationButton.vue';

</script>
