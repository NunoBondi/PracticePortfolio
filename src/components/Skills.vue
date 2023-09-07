<template>
    <div id="skills" class="w-auto ease-in duration-300 mt-[40px]">

        <h1  class="text-center font-semibold  from-neutral-400 italic text-5xl ">

            <span class="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white transition delay-300 ease-in-out hover:from-white hover:to-gray-500">
                Skills
            </span>
        </h1>
        <div class="max-w-[700px] max-h-[120px] mt-3 justify-between mx-auto flex rounded-xl overflow-hidden  ">

            <div class="w-[300px] h-auto ">
                <h2 class="text-center my-2 font-semibold text-xl">Frontend</h2>
                <ul class="flex gap-x-2">
                    <li class="flex flex-col items-center h-[75px] justify-between">
                        <img class="w-[40px] h-[40px] mt-2 grayscale hover:grayscale-0 " src="./../../pictures/Vuejs.png"
                            alt="Vue js">
                        Vue
                    </li>
                    <li class="flex flex-col items-center h-[75px] justify-between">
                        <img class="w-[50px] h-[50px] grayscale hover:grayscale-0" src="./../../pictures/html-5.png"
                            alt="Html 5">
                        HTML
                    </li>
                    <li class="flex flex-col items-center h-[75px] justify-between">
                        <img class="w-[50px] h-[50px] grayscale hover:grayscale-0" src="./../../pictures/css-3.png"
                            alt="CSS 3">
                        CSS
                    </li>
                    <li class="flex flex-col items-center h-[75px] justify-between">
                        <img class="w-[40px] h-[40px] mt-2 grayscale hover:grayscale-0" src="./../../pictures/js.png"
                            alt=" Javascript">
                        Javascript
                    </li>

                    <li class="flex flex-col items-center h-[75px] justify-between">
                        <img class="w-[40px] h-[20px] mt-4 grayscale hover:grayscale-0"
                            src="./../../pictures/tailwindcss.png" alt="Tailwindcss">
                        Tailwind
                    </li>
                </ul>

            </div>
            <div class=" w-[200px] h-auto ">
                <h2 class="text-center my-1 font-semibold text-xl">Backend</h2>

                <ul class="flex gap-x-4 justify-center">
                    <li class="flex flex-col items-center h-[75px] justify-between">
                        <img class="w-[60px] h-[60px]mt-2 grayscale hover:grayscale-0 " src="./../../pictures/php.png"
                            alt="PHP">
                        PHP
                    </li>
                    <li class="flex flex-col items-center h-[85px] justify-between">

                        <img class="w-[50px] h-[50px] mt-1  grayscale hover:grayscale-0" src="./../../pictures/Laravel.png"
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