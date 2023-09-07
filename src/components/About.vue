<template>
    <div class="flex  justify-around w-[1000px] mx-auto mt-[60px]">
        <!-- info de user -->

        <div class="w-[400px] h-auto hover:border-red-500 border-2 border-black bg-black pl-5 pt-5 rounded-lg">
            <div class="w-[200px] h-[200px] bg-gray-500 rounded-full my-2 overflow-hidden">
                <img src="../../pictures/profilePicture.jfif" class="w-full" alt="">
            </div>
            <h1 class="font-semibold text-5xl pt-2">Justo Prado</h1>
            <h2 class="mt-3 text-xl font-semibold">Desarrollador Web Jr</h2>
            <p class="mt-3">Diseño web con pasión, desarrollo con dedicación.</p>
            <Redes class="my-3" />
        </div>

        <div class="h-[400px] w-[2px] border my-auto rounded-xl border-black ">

        </div>

        <!-- breve bio -->
        <div class="p-5 w-[400px] h-auto rounded-3xl bg-black hover:border-red-500 border-2 border-black">
            <p>Soy un apasionado desarrollador web con experiencia en la creación y gestión de proyectos. Mi camino en el
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
