<template>
    <div id="about" class="sm:flex justify-around sm:w-[1000px] -translate-y-[10px] w-[400px] mx-auto mt-[60px]">
        <!-- info de user -->

        <div class="w-[380px] flex-col text-center mx-auto h-auto hover:border-gray-500 border-2 border-[#0e0d1b] bg-[#1c1a30]  pt-5 rounded-lg">
                <img src="../../pictures/profilePicture.jfif" class="w-[200px] mx-auto rounded-full h-[200px]" alt="">
            
            <h1 class="font-semibold text-3xl pt-2">Justo Prado</h1>
            <h2 class="mt-3 text-xl text-blue-600 font-semibold">Desarrollador Web Jr</h2>
            <p class="mt-3">Diseño web con pasión, desarrollo con dedicación.</p>
            <Redes class="my-3 mx-auto" />
        </div>
<!-- Estaba pensando que la ultima vez que te vi fue poco mas de tres anos, la vez que te acompa'e por tus lentes -->
        <div class="sm:h-[400px] my-4 sm:w-[2px] sm:border sm:my-auto sm:rounded-xl sm:border-black ">

        </div>

        <!-- breve bio -->
        <div class="font-ptSans text-lg p-5 w-[380px]  mx-auto h-auto rounded-3xl hover:border-gray-500 border-[#0e0d1b] bg-[#1c1a30] border-2 text-center">
            <p class="">Soy un apasionado desarrollador web con experiencia en la creación y gestión de proyectos. Mi camino en el
                mundo del desarrollo comenzó como estudiante de Ingeniería en Computación, y a lo largo del tiempo, he
                tenido la oportunidad de trabajar en diversos proyectos que han enriquecido mi portafolio y me han brindado
                una valiosa experiencia práctica.</p>
            <br>
            <p>Mi enfoque actual sigue siendo el aprendizaje constante y la mejora continua de mis habilidades en el campo
                del desarrollo web.</p>

        </div>
    </div>
</template>

<script setup>
import Redes from './../components/Redes.vue';
</script>
