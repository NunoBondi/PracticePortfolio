<template>
    <section class="w-full sm:h-[500px] h-[900px] sm:mt-[100px] flex pt-1 items-center mt-[8px] ">
        <div id="contacto"
            class=" w-[380px] sm:w-[800px] h-[600px]  sm:flex flex flex-col-reverse  sm:flex-row-reverse sm:justify-between mx-auto  ">

            <form class="w-[380px]   h-[400px] bg-white rounded-xl shadow-xl drop-shadow-2xl " data-netlify="true"
                name="contact" method="POST">
                <h1
                    class="text-black font-workSans font-semibold text-4xl pt-6 border-black w-auto h-auto text-center  mb-4">
                    Contacto</h1>
                
                    <input
                        class="h-[40px] w-[300px] mx-[40px] border-slate-500 border-b-[1px] bg-transparent  text-left  mb-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-sky-400 focus:rounded-md text-black"
                        type="text" name="asunto" required placeholder="  Asunto">
                
                
                    <input
                        class=" h-[40px] w-[300px] mx-[40px] border-slate-500 border-b-[1px] bg-transparent text-left  mb-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-sky-400 focus:rounded-md text-black"
                        type="email" name="email" required placeholder="  Email">
                
                
                    <textarea
                        class="h-[90px] w-[300px] mx-[40px] border-slate-500 border-b-[1px] bg-transparent  text-left mb-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-sky-400 focus:rounded-md  text-black"
                        name="message" id="message" required cols="30" rows="10" placeholder="Dime algo."></textarea>
                
                <button type="submit"
                    class="text-black mx-[115px] mt-8 hover:bg-black hover:text-white w-[150px] h-[40px] bg-slate-200 rounded-lg">Submit</button>
            </form>


            <h1 class="sm:h-[200px] sm:w-[200px] sm:text-left sm:pl-8 text-center  sm:pt-8 mb-16 font-workSans text-5xl">
                <p class="leading-snug">
                    ¿Puedo ayudarte? <br>
                    Escríbeme<span class="animate-ping">_</span>
                </p>
            </h1>
        </div>
    </section>
</template>
<script setup>

</script>