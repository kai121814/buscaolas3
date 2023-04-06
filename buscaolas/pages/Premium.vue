<script setup>
</script>

<template>
    <Header />
    <div class="bg-neutral-200">
        <div class="bg-white drop-shadow-xl">
            <div class="flex mx-auto w-9/12">
                <div class="w-full flex lg:py-7 py-10">
                    <img src="~/assets/icons/D-Green.png">
                    <NuxtLink to="/" class="block mx-auto" v-if="!isAuthenticated">
                        <img src="~/assets/icons/Button1.png">
                    </NuxtLink>
                </div>
                <div class="w-full flex mx-auto items-center">
                    <button type="button"
                        class="border-2 border-black font-bold text-center bg-white text-black lg:mr-5 mr-8 lg:ml-auto ml-auto lg:py-1 py-3 lg:w-40 w-48 flex items-center">
                        <img src="~/assets/icons/Flecha_der.png" alt="Arrow icon" class="ml-2">
                        <span class="mx-auto">VOLVER</span>
                    </button>

                    <button type="button"
                        class="border-2 border-red-500 text-center bg-white text-red-500 lg:ml-5 ml-8 mr-0 lg:py-1 py-3 lg:w-40 w-48">CERRAR
                        SESIÓN</button>
                </div>
            </div>
        </div>
        <div class="flex mx-auto w-9/12">
            <div class="flex mx-auto w-full">
                <!--Left Content-->
                <div class="w-full justify-center h-full">
                    <!--First Form-->
                    <div class="mx-auto lg:mt-16 lg:mb-10">
                        <form action="/" class="lg:mr-10 w-11/12">
                            <p class="font-bold uppercase mb-2">cambiar contraseña</p>
                            <div class="border-2 border-t-zinc-400 w-full">
                                <input class="bg-white placeholder-black w-full uppercase text-center py-2 lg:mt-0 lg:mb-10"
                                    type="text" id="actual-contraseña" name="actual-contraseña"
                                    placeholder="actual contraseña">
                            </div>
                            <div class="border-2 border-t-zinc-400 w-full">
                                <input class="bg-white placeholder-black w-full uppercase text-center py-2 lg:mt-0 lg:mb-10"
                                    type="text" id="nueva-contraseña" name="nueva-contraseña"
                                    placeholder="nueva contraseña">
                            </div>
                            <div class="flex">
                                <div
                                    class="border-2 border-black rounded-md lg:w-72 w-48 lg:h-12 h-16 lg:py-2 py-4 text-center hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out">
                                    <input class="font-bold uppercase" type="submit" value="cambiar">
                                </div>
                                <p class="lg:ml-10 uppercase text-sm">Lorem Ipsum es simplemente el texto de relleno de las
                                    imprentas y archivos de texto.</p>
                            </div>
                        </form>
                    </div>

                    <!--Horizontal Divider-->
                    <div class="border-2 border-t-zinc-700 w-11/12 lg:mr-10 mt-0"></div>

                    <!--Second Form-->
                    <div class="mx-auto lg:mt-16 lg:mb-10">
                        <form action="/" class="lg:mr-10 w-11/12">
                            <p class="font-bold uppercase mb-2">cambiar correo electrónico</p>
                            <div class="border-2 border-t-zinc-400 w-full">
                                <input class="bg-white placeholder-black w-full uppercase text-center py-2 lg:mt-0 lg:mb-10"
                                    type="text" id="correo-actual" name="correo-actual" placeholder="correo actual">
                            </div>
                            <div class="border-2 border-t-zinc-400 w-full">
                                <input class="bg-white placeholder-black w-full uppercase text-center py-2 lg:mt-0 lg:mb-10"
                                    type="text" id="nuevo-correo" name="nuevo-correo" placeholder="nuevo correo">
                            </div>
                            <div class="flex">
                                <div
                                    class="border-2 border-black rounded-md lg:w-72 w-48 lg:h-12 h-16 lg:py-2 py-4 text-center hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out">
                                    <input class="font-bold uppercase" type="submit" value="cambiar">
                                </div>
                                <p class="lg:ml-10 uppercase text-sm">Lorem Ipsum es simplemente el texto de relleno de las
                                    imprentas y archivos de texto.</p>
                            </div>
                        </form>
                    </div>

                    <!--Horizontal Divider-->
                    <div class="border-2 border-t-zinc-700 w-11/12 lg:mr-10 mt-0"></div>

                    <!--Third Form-->
                    <div class="mx-auto lg:mt-16 lg:mb-10">
                        <form action="/" class="lg:mr-10 w-11/12">
                            <p class="font-bold uppercase lg:mb-16 mb-20">cambiar mérodo de pago</p>
                            <div class="w-full lg:mb-2 mb-4">
                                <input class="hidden appearance-none" type="radio" id="merodo1" name="merodo"
                                    value="actual-contraseña" checked>
                                <label for="merodo1"
                                    class="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-stone-600/25 cursor-pointer mr-2 transition-colors duration-300 bg-white">
                                    <div class="w-4 h-4 rounded-full"></div>
                                </label>
                                <label for="merodo1" class="uppercase font-bold cursor-pointer">crédito</label>
                            </div>

                            <div class="w-full flex">
                                <input class="hidden appearance-none" type="radio" id="merodo2" name="merodo"
                                    value="nueva-contraseña">
                                <label for="merodo2"
                                    class="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-stone-600/25 cursor-pointer mr-2 transition-colors duration-300 bg-white">
                                    <div class="w-4 h-4 rounded-full"></div>
                                </label>
                                <label for="merodo2" class="uppercase font-bold cursor-pointer">nueva contraseña</label>
                            </div>

                            <div class="flex lg:mt-12 mt-16">
                                <div
                                    class="border-2 border-black rounded-md lg:w-72 w-48 lg:h-12 h-16 lg:py-2 py-4 text-center hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out">
                                    <input class="font-bold uppercase" type="submit" value="cambiar">
                                </div>
                                <p class="lg:ml-10 uppercase text-sm">Lorem Ipsum es simplemente el texto de relleno de las
                                    imprentas y archivos
                                    de texto.</p>
                            </div>
                            <div class="w-full text-center">
                                <a href="/" class="uppercase text-red-500 underline text-xs">cancelar plan</a>
                            </div>
                        </form>

                    </div>
                </div>

                <!--Vertical Divider-->
                <div class="border-2 border-r-zinc-700 lg:h-11/12 mx-auto lg:my-16"></div>

                <!--Right Content-->
                <div class="w-11/12 lg:ml-10 h-full">

                    <div class="mx-auto lg:mt-16 lg:mb-10 w-full flex justify-between items-center">
                        <div class="w-auto">                        
                            <p class="w-40 uppercase font-bold">Próxima fecha de facturación</p>
                        </div>
                        <div class="w-auto">
                            <p class="w-24 uppercase font-bold">19-09-2021</p>
                        </div>
                    </div>

                    <div class="lg:ml-12 lg:mt-10 lg:mb-10 mx-auto w-11/12">
                        <ul class="list-disc">
                            <li>Luego, tu fecha de facturación será el 19-09-2021</li>
                            <li>Cancela en cualquier momento. Aplican <span class="underline">términos y condiciones</span>
                                de la oferta.</li>
                        </ul>
                    </div>

                    <div class="lg:mt-16 lg:mb-10 mx-auto w-full">
                        <ul class="w-full mx-auto">
                            <li class="flex items-center justify-between lg:my-3 w-full">
                                <p class="flex-1 pt-5 font-bold">facturación anterior</p>
                                <p class="flex-1 pt-5 font-bold text-right mr-0">19-09-2021</p>
                                <div class="ml-4 mr-0 w-10 h-10 bg-[#C4C4C4] hover:bg-[#FFA800] px-2 py-2">
                                    <NuxtLink to="/" class="block" v-if="!isAuthenticated">
                                        <img src="~/assets/icons/White-dl.png">
                                    </NuxtLink>
                                </div>
                            </li>
                            <div class="w-full border border-b-black"></div>

                            <li class="flex items-center justify-between lg:my-3 w-full">
                                <p class="flex-1 pt-5 font-bold">facturación anterior</p>
                                <p class="flex-1 pt-5 font-bold text-right mr-0">19-09-2021</p>
                                <div class="ml-4 mr-0 w-10 h-10 bg-[#C4C4C4] hover:bg-[#FFA800] px-2 py-2">
                                    <NuxtLink to="/" class="block" v-if="!isAuthenticated">
                                        <img src="~/assets/icons/White-dl.png">
                                    </NuxtLink>
                                </div>
                            </li>
                            <div class="w-full border border-b-black"></div>

                            <li class="flex items-center justify-between lg:my-3 w-full">
                                <p class="flex-1 pt-5 font-bold">facturación anterior</p>
                                <p class="flex-1 pt-5 font-bold text-right mr-0">19-09-2021</p>
                                <div class="ml-4 mr-0 w-10 h-10 bg-[#C4C4C4] hover:bg-[#FFA800] px-2 py-2">
                                    <NuxtLink to="/" class="block" v-if="!isAuthenticated">
                                        <img src="~/assets/icons/White-dl.png">
                                    </NuxtLink>
                                </div>
                            </li>
                            <div class="w-full border border-b-black"></div>

                            <li class="flex items-center justify-between lg:my-3 w-full">
                                <p class="flex-1 pt-5 font-bold">facturación anterior</p>
                                <p class="flex-1 pt-5 font-bold text-right mr-0">19-09-2021</p>
                                <div class="ml-4 mr-0 w-10 h-10 bg-[#C4C4C4] hover:bg-[#FFA800] px-2 py-2">
                                    <NuxtLink to="/" class="block" v-if="!isAuthenticated">
                                        <img src="~/assets/icons/White-dl.png">
                                    </NuxtLink>
                                </div>
                            </li>
                            <div class="w-full border border-b-black"></div>

                            <li class="flex items-center justify-between lg:my-3 w-full">
                                <p class="flex-1 pt-5 font-bold">facturación anterior</p>
                                <p class="flex-1 pt-5 font-bold text-right mr-0">19-09-2021</p>
                                <div class="ml-4 mr-0 w-10 h-10 bg-[#C4C4C4] hover:bg-[#FFA800] px-2 py-2">
                                    <NuxtLink to="/" class="block" v-if="!isAuthenticated">
                                        <img src="~/assets/icons/White-dl.png">
                                    </NuxtLink>
                                </div>
                            </li>
                            <div class="w-full border border-b-black"></div>
                        </ul>
                        <a href="/">
                            <p class="text-[#3C3C3B] underline uppercase text-center lg:mt-10">Cargar más</p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
input[type="radio"]:checked+label div {
    background-color: #00A99D;
}
</style>