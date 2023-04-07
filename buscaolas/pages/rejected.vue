<template>
    <div class="overflow-x-hidden">
        <Header />
        <div class="relative mx-auto w-full h-full">
            <div>
                <img src="~/assets/css/banners/rejected.png" class="w-full" alt="rejected" />
            </div>
        </div>
        <div class="pt-12 bg-gradient-to-t from-[#F8C8DC] to-white">
            <div class="w-1/3 mx-auto">
                <p class="text-center italic text-4xl">
                    <span class="font-bold">
                        Oh no su wipeout?
                    </span>
                </p>

                <p class="text-center">Tu pago fue rechazado</p>

                <p class="text-center">
                    A todos nos pasas, pero cada vez que sucede tomamos la tabla y volvemos a intentarlo.
                </p>
                <p class="text-center">Si tiene problemas completando tu suscripcion escribenos a </p>
                <p class="text-center">
                    <span class="font-bold">contacto@buscaolas.cl
                    </span>
                </p>
                    
            </div>
            <div class="flex justify-center">
                <button class="bg-orangee text-white font-bold py-2 px-4 rounded shadow-2xl uppercase ">
                intentar nuevo
            </button>
            </div>

            <div class="cover-bg lg:visible invisible h-0 lg:h-auto mt-0 lg:-mt-28 pt-5 text-headblue">
                <div class="cover">
                    <div class="box pt-40 pb-10">
                        <gopremium />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style></style>