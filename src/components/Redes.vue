<template>
    <div class="h-[50px] w-[100px] items-center  rounded-lg flex gap-x-2">
        <a href="https://github.com/NunoBondi">
            <img class="logo" src="../../pictures/GitHub1.svg" alt="github profile">
        </a>

        <a class="" target="_blank" href="https://www.linkedin.com/in/justo-p-amoretty">
            <img class="logo" src="../../pictures/linkedin.png" alt="github profile">
        </a>

    </div>
</template>

<script>

</script>

<style>
.logo {
    height: 2.5em;
    
    will-change: filter;
    transition: filter 100ms;
}

.logo:hover {
    filter: drop-shadow(0 0 0.5em #352F44);
    transform: scale(1.1);
}

</style>