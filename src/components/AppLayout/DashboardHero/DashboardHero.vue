<template>
    <div class="text-white py-4 pl-5 bg-gradient-to-br from-purple-700 to-black  rounded-2xl relative">
        
        <div class="relative z-10">
            <h1 class="font-bold text-2xl">Świat czeka <br class="2xs:hidden"> na Ciebie!</h1>
            <p class="text-sm mt-1"
            >
                Wybierz czego chcesz się uczyć <br>
               i zdobądź niezbędną wiedzę <br class='xs:hidden'> do zdania matury!
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

        <div class="inline-block absolute -right-3 xs:right-5 md:right-12 bottom-0 z-100">
            <img  class='h-[9rem] xs:h-[10.5rem] xl:h-48' src="../../../assets/rocket.png">
        </div>




    </div>

</template>

<script lang="ts" setup>
import NavigationButton from '@/components/Shared/NavigationButton.vue';

</script>
