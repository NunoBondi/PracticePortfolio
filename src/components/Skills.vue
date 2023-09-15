<template>
    <div id="skills" class="w-auto h-[500px] pb-[1px] sm:h-[600px] pt-[40px] mt-[40px]  ">
        <!-- bg-[#272444] -->
        <h1 class="text-center font-semibold  from-neutral-400 italic text-5xl">
            <span
                class=" bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white transition delay-300 ease-in-out hover:from-white hover:to-gray-500">
                Skills
            </span>
        </h1>

        <div class="sm:w-[900px] h-[450px] w-[400px] border-b-[1px] border-t-[1px] border-[#3f3a6b] sm:flex-col sm:gap-y-9 mt-3 sm:justify-around mx-auto">

            <div class="w-[auto] h-auto  mx-auto mt-7">
                <h2 class="text-center my-2 font-semibold sm:text-2xl sm:mb-7 text-xl">Frontend</h2>
                <ul class="flex sm:gap-x-5 gap-x-4 mt-5 mx-auto justify-center">
           
                    <li class="flex flex-col items-center h-auto justify-between font-semibold">
                        <img class="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] sm:mb-2 grayscale hover:grayscale-0" src="./../../pictures/html-5.png"
                            alt="Html 5">
                        HTML
                    </li>
                    <li class="flex flex-col items-center h-[75px] justify-between font-semibold">
                        <img class="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] sm:mb-2 grayscale hover:grayscale-0" src="./../../pictures/css-3.png"
                            alt="CSS 3">
                        CSS
                    </li>
                    <li class="flex flex-col items-center h-[75px] justify-between font-semibold">
                        <img class="w-[40px] h-[20px] sm:w-[60px] sm:h-[40px] mt-4 grayscale hover:grayscale-0"
                            src="./../../pictures/Tailwindcss.png" alt="Tailwindcss">
                            <span class="sm:mt-[45px]">Tailwind</span>
                    </li>
                    <li class="flex flex-col items-center h-[75px] justify-between font-semibold">
                        <img class="w-[40px] h-[40px] mt-2 sm:w-[80px] sm:mb-2 sm:h-[80px] grayscale hover:grayscale-0" src="./../../pictures/js.png"
                            alt=" Javascript">
                        Javascript
                    </li>
                    <li class="flex flex-col items-center h-[75px] justify-between font-semibold">
                        <img class="w-[40px] h-[40px] mt-2 sm:w-[80px] sm:h-[80px] grayscale hover:grayscale-0 " src="./../../pictures/Vuejs.png"
                            alt="Vue js">
                        <span class="sm:mt-5">Vue 3</span>
                    </li>

                </ul>

            </div>

            <div class=" w-[200px] h-auto mx-auto mt-[40px]">
                <h2 class="text-center my-1 font-semibold sm:text-2xl sm:mb-7 text-xl">Backend</h2>

                <ul class="flex gap-x-7 justify-center">
                    <li class="flex flex-col items-center h-[75px] justify-between font-semibold">
                        <img class="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]  grayscale hover:grayscale-0 " src="./../../pictures/php.png"
                            alt="PHP">
                        PHP
                    </li>
                    <li class="flex flex-col items-center h-[85px] justify-between font-semibold">

                        <img class="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] mt-[8px]  grayscale hover:grayscale-0" src="./../../pictures/Laravel.png"
                            alt="PHP">
                        Laravel
                    </li>

                </ul>

            </div>
        </div>
    </div>
</template>


<script setup>
</script>