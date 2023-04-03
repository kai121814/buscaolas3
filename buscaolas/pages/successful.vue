<template>
    <div class="overflow-x-hidden">
        <Header />
        <div class="relative mx-auto w-full h-full">
            <div>
                <img src="~/assets/css/banners/successful.png" class="w-full" alt="successful" />
            </div>
        </div>
        <div class="pt-5 bg-gradient-to-t from-[#F8C8DC] to-white">
            <div class="w-1/3 mx-auto">
                <p class="text-center italic text-4xl">
                    <span class="font-bold">
                    Bienvenido a Premium
                    </span>
                </p>

                <p class="text-center">
                    Hemos verificado tu subscripcion y ahora eres parte de la <span class="font-bold"> familia premium.</span> Con increibles beneficios para ti.
                </p>
                <p class="text-center">Te recordamos que tienes 14 dias de pruebas y tu primer cobro se realizara el <span class="font-bold">20 de octubre 2021.</span> </p>
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