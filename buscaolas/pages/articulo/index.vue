<script setup>
const club = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<template>
    <div class="">
        <div class="overflow-x-hidden">
            <client-only>
                <Header />
                <div class="flex h-80">
                    <div class="leftblue bg-gradient-to-br from-headblue to-botgr"></div>
                    <div class="headtext ml-16 mt-16">
                        <div class="flex text-xs lg:mt-0 ">
                            <NuxtLink to="/">
                                <img src="~/assets/icons/calendar.png" class="h-5 w-5" />
                            </NuxtLink>
                            <span class="uppercase text-black text-xs mt-0.5 ml-5">
                                Lunes
                                <span class="font-bold">25 octubre</span>
                                2021
                            </span>
                        </div>
                        <div class="text-headblue uppercase text-blue mt-8">
                            <span class="text-4xl font-black tracking-widest">
                                headline <br>
                                noticias</span>
                        </div>
                        <div class="lg:w-auto w-screen mobile-gradient-color pt-5 pb-4 lg:pt-0 lg:pb-0">
                            <div class="filter-box">
                                <div class=" uppercase text-sm leading-5 text-textgr tracking-widest lg:mt-7 lg:mb-2 mb-3">
                                    <span class="font-bold label pl-28">Filtrar </span> por
                                </div>
                                <select name="filter_news"
                                    class="block mx-auto lg:mx-0 rounded-sm text-center px-3 uppercase bg-inputgr w-80 h-10">
                                    <!-- v-model="filterBy">
                  <option v-for="cat in CategoryData" :key="cat.categoria_nm" :value="cat.categoria_nm">{{cat.categoria_nm}}</option> -->
                                    <option> T O D O S </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <NuxtLink to="/">
                            <img src="~/assets/thumbnails/contacto-surf.png" class="h-80 image" />
                        </NuxtLink>
                    </div>
                    <div class="rightblue bg-gradient-to-br from-headblue to-botgr">
                    </div>
                </div>
            </client-only>
        </div>

        <div class="grid grid-cols-3 gap-5 mx-auto w-9/12 mt-16 mb-16">
            <div class="" v-for="(c, i) in club" :key="i">
                <h1 class="font-bold text-2xl lg:w-80 w-full text-textgr block mb-2 uppercase"> Lorem</h1>
                <img src="~/assets/thumbnails/image.jpg" class="object-cover h-48 w-full ..." />
                <div class="flex">
                    <p class="w-1/2 font-bold text-xs text-center uppercase text-white bg-skyblue tracking-widest pt-0.5">
                        categoria</p>
                    <p class="w-1/2 text-sm text-center uppercase text-brown">hace</p>
                </div>
            </div>
        </div>
        <button class="mx-auto my-10 block text-sm uppercase underline text-textgr">
            Cargar más COMENTARIOS
        </button>
        <button class="mx-auto arrow block rounded-sm border border-textgr font-bold text-sm uppercase tracking-widest text-textgr
        box-border lg:w-36 lg:h-10 return text-right pr-5 mb-10">
            VOLVER
        </button>
        <Footer />
    </div>
</template>

<style scoped>
.leftblue {
    width: 180px;
    border-radius: 100px 0px 0px 0px;
    transform: rotate(-180deg);
}

.headtext {
    width: 448px;
}

.image {
    width: 650px;
    border-radius: 0px 0px 0px 100px;
}

.rightblue {
    width: 183px;
}

.arrow {
    background: url('~/assets/icons/arrowleft-gray.png') no-repeat 10% 50%;
}
</style>
