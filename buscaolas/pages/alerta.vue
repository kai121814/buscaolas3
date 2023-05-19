<script setup>
const club = [1, 2, 3];
</script>

<template>
    <Header />
    <div class="">

        <div class="mx-auto w-9/12">
            <div class="flex mx-auto w-full">
                <!--Left Content-->
                <div class="w-8/12 h-full">
                    <!--First Content-->
                    <p class="mx-auto bg-redd text-center font-bold uppercase text-white mt-5 p-3"> 02 actualizaciones</p>
                    <div class="ml-0 w-11/12 lg:mt-16 lg:mb-5 ">
                        <div class="flex mt-0 ml-o">
                            <p class="w-40 text-center font-bold uppercase text-white bg-redd">Alerta</p>
                            <p class="w-40 text-center uppercase">Junio 28, 2021</p>
                        </div>
                    </div>

                    <!--Divider-->
                    <div class="flex ml-0 w-full lg:my-5 ">
                        <div class="bg-[#1C496B] text-center text-white font-bold lg:w-10 lg:h-10 lg:py-2 rounded-full">AS
                        </div>
                        <p class="lg:py-2 ml-2 uppercase">por <span class="font-bold">Alejandro Santibañes</span></p>
                    </div>

                    <!--Second Content-->
                    <div class="lg:my-5 w-11/12">
                        <p class="text-3xl uppercase font-bold">
                            PRONÓSTICO GENERAL - LUNES 28/06 - VIERNES 02/07
                        </p>
                        <p>Revisa el pronostico general para las costas de Chile de esta semana</p>
                        <div class="ml-0 w-full lg:my-5 ">
                            <div class="h-40 w-full bg-gray-400">
                                <!--Image Gallery-->
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s. </p>
                        <p>
                            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </p>
                        <div class="flex">
                            <div class="uppercase mr-5">
                                <p class="my-0 font-bold">ES BUENO</p>
                                <p class="text-sm tracking-widest">c o m p a r t i r ></p>
                            </div>
                            <div class="flex lg:my-1">
                                <NuxtLink to="/" class="block mx-2" v-if="!isAuthenticated">
                                    <img src="~/assets/icons/fb-color.png">
                                </NuxtLink>
                                <NuxtLink to="/" class="block mx-2" v-if="!isAuthenticated">
                                    <img src="~/assets/icons/twitter.png">
                                </NuxtLink>
                                <NuxtLink to="/" class="block mx-2" v-if="!isAuthenticated">
                                    <img src="~/assets/icons/insta.png">
                                </NuxtLink>
                            </div>
                        </div>
                        <div>
                            <button type="button"
                                class="lg:mt-10 border-2 border-black font-bold text-center bg-white text-black lg:py-1 py-3 lg:w-40 w-48 flex items-center">
                                <img src="~/assets/icons/Flecha_der.png" alt="Arrow icon" class="ml-2">
                                <span class="mx-auto">VOLVER</span>
                            </button>
                        </div>
                    </div>

                    <!--Third Content-->
                    <div class="ml-0 w-11/12 lg:mt-16 lg:mb-2">
                        <div class="flex mt-0 ml-o">
                            <p class="w-40 text-center font-bold uppercase text-white bg-redd">Actualización</p>
                            <p class="w-40 text-center uppercase">Junio 28, 2021</p>
                        </div>

                        <p class="uppercase font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div class="w-11/12 lg:my-15">
                        <div class="ml-0 w-full lg:my-16 ">
                            <div class="h-96 w-full bg-gray-400">
                                <!--Image Gallery-->
                            </div>
                        </div>
                    </div>

                    <!--Fourth Content-->
                    <div class="ml-0 w-11/12 lg:mt-16 lg:mb-2">
                        <div class="flex mt-0 ml-o">
                            <p class="w-40 text-center font-bold uppercase text-white bg-redd">Actualización</p>
                            <p class="w-40 text-center uppercase">Junio 28, 2021</p>
                        </div>

                        <p class="uppercase font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div class="w-11/12 lg:my-15">
                        <div class="ml-0 w-full lg:my-16 ">
                            <div class="h-96 w-full bg-gray-400">
                                <!--Image Gallery-->
                            </div>
                        </div>
                    </div>


                </div>
                <!--Vertical Divider-->
                <div class="border-2 border-r-zinc-500 lg:h-11/12 mx-auto lg:my-16"></div>

                <!--Right Content-->
                <div class="w-4/12 lg:ml-10 h-full">
                    <div class="ml-0 w-full lg:mt-16 lg:mb-5 ">
                        <p class="uppercase text-[#1C496B] font-bold text-5xl">Últimos Artículos </p>
                    </div>
                    <div class="mt-20">
                        <ul>
                            <li class="pb-14">
                                <div class="">
                                    <div class="flex uppercase border-t border-[#00A99D] w-full">
                                        <span
                                            class="bg-[#00A99D] blue-green-text w-1/2 text-center font-bold text-sm text-white uppercase">
                                            categoria 1
                                        </span>
                                        <span class="text-sm pl-3 gray w-1/2 text-center">
                                            junio 25, 2023
                                        </span>
                                    </div>
                                    <p class="gray font-bold text-sm uppercase my-5">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <p class="font-bold text-xs uppercase text-[#00A99D] tracking-wider float-right">
                                        l e e r m a s
                                    </p>
                                </div>
                            </li>
                            <li class="pb-14 mt-10">
                                <div class="">
                                    <div class="flex uppercase border-t border-[#00A99D] w-full">
                                        <span
                                            class="bg-[#00A99D] blue-green-text w-1/2 text-center font-bold text-sm text-white uppercase">
                                            categoria 1
                                        </span>
                                        <span class="text-sm pl-3 gray w-1/2 text-center">
                                            junio 25, 2023
                                        </span>
                                    </div>
                                    <p class="gray font-bold text-sm uppercase my-5">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <p class="font-bold text-xs uppercase text-[#00A99D] tracking-wider float-right">
                                        l e e r m a s
                                    </p>
                                </div>
                            </li>
                            <li class="pb-14 mt-10">
                                <div class="">
                                    <div class="flex uppercase border-t border-[#00A99D] w-full">
                                        <span
                                            class="bg-[#00A99D] blue-green-text w-1/2 text-center font-bold text-sm text-white uppercase">
                                            categoria 1
                                        </span>
                                        <span class="text-sm pl-3 gray w-1/2 text-center">
                                            junio 25, 2023
                                        </span>
                                    </div>
                                    <p class="gray font-bold text-sm uppercase my-5">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <p class="font-bold text-xs uppercase text-[#00A99D] tracking-wider float-right">
                                        l e e r m a s
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div>
                <div>
                    <div class="flex">
                        <div class="uppercase mr-5">
                            <p class="my-0 font-bold">ES BUENO</p>
                            <p class="text-sm tracking-widest">c o m p a r t i r ></p>
                        </div>
                        <div class="flex lg:my-1">
                            <NuxtLink to="/" class="block mx-2" v-if="!isAuthenticated">
                                <img src="~/assets/icons/fb-color.png">
                            </NuxtLink>
                            <NuxtLink to="/" class="block mx-2" v-if="!isAuthenticated">
                                <img src="~/assets/icons/twitter.png">
                            </NuxtLink>
                            <NuxtLink to="/" class="block mx-2" v-if="!isAuthenticated">
                                <img src="~/assets/icons/insta.png">
                            </NuxtLink>
                        </div>
                    </div>

                    <div>
                        <button type="button"
                            class="lg:mt-10 mb-10 border-2 border-black font-bold text-center bg-white text-black lg:py-1 py-3 lg:w-40 w-48 flex items-center">
                            <img src="~/assets/icons/Flecha_der.png" alt="Arrow icon" class="ml-2">
                            <span class="mx-auto">VOLVER</span>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    </div>

    <Footer />
</template>

<style scoped>
.benefits {
    border: 1px solid #00A99D;
}
</style>