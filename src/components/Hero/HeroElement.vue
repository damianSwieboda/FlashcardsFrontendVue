<template>
    <div class="relative isolate bg-[url('@/assets/blob.jpg')] bg-cover bg-no-repeat bg-bottom pb-12 lg:max-h-[100vh] xl:max-h-[80vh]">
        <div class="absolute  top-0 left-0 h-[35%] w-full bg-gradient-to-b from-[#4300ca] to-transparent -z-10 ">
        </div>

        <div class="mx-auto max-w-7xl py-24 sm:py-48 lg:py-auto lg:flex z-10 ">
        
            <div class="mx-auto max-w-2xl  px-10 lg:mx-0 lg:flex-auto">
                <h1 class="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">Fiszki do matury</h1>
                    <p class="mt-6 text-lg leading-8 text-white">Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam adipisicing sit.</p>
                <div class="mt-10 flex items-center gap-x-6">
                    <a href="#" class="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                </div>
            </div>

            <div class="relative h-fit px-5 max-w-16 mt-16 lg:mt-4 b">
                <img src="@/assets/heroVideoThumbnail.jpg" alt="" class=" drop-shadow-2xl lg:max-h-80 h-auto">
                <div class="transition-all drop-shadow-2xl absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 hover:h-26 hover:w-26 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 shadow-inner outline outline-[16px] hover:outline-[8px] outline-purple-700/30 ">
                    <!-- after refactoring code, make height of this element dynamic, so it is bigger after hover on parent element  -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-1 border-t-16 border-r-0 border-b-16 border-l-24 border-t-transparent border-r-transparent border-b-transparent border-white">
                    </div>
                </div>

            </div>

    
         </div>

    </div>
</template>