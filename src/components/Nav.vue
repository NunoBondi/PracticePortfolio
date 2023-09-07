<template>
    <div class="w-full bg-black">
    <div class="h-14 max-w-[1250px] mx-auto flex justify-around gap-x-[400px]">
        <div class="Logo">
            <p
                class="text-4xl items-center flex bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white italic font-semibold">
                <a href="#">JP.Amoretty</a>
            </p>
        </div>
        <!-- accesing section -->
        <ul class="list-none h-full flex gap-x-10 items-center">
            <li class="font-semibold border-animation"><a href="">About</a></li>
            <li class="font-semibold border-animation"><a href="#skills">Skills</a></li>
            <li class="font-semibold border-animation"><a href="#">Contact</a></li>
            <li class="font-semibold border-animation"><a href="#">Projects</a></li>
        </ul>
    
</div>
</div>
</template>

<script setup>
</script>

<style scoped>
/* Agrega estos estilos a tu hoja de estilos CSS o directamente en el archivo HTML si lo prefieres */
.border-animation {
    position: relative;
}

.border-animation::before {
    position: absolute;
    bottom: 0;
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s;
}

.border-animation:hover::before {
    width: 110%;
    left: 0;
}
</style>