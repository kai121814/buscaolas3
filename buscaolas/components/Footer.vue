<script setup>
</script>

<template>
    <div class="bg-cyan-950 lg:h-auto h-10">
        <div class="flex mx-auto w-9/12">
            <div class="ml-0 w-4/12 lg:py-7 py-10 pl-0">
                <div class="flex flex-col items-center">
                    <div class="lg:mt-3 mt-2.5 item-1">
                        <img src="~/assets/logo/Marca.png" />
                    </div>
                    <div class="lg:mt-6 mt-8 mx-auto item-4">
                        <div>
                            <img src="~/assets/logo/BuscaolasSurfcams.png" class="mx-auto" />
                        </div>

                        <div class="border-t footer box text-white text-center uppercase mx-auto block mt-2 text-xs">
                            Copyrights © 2020 Todo los derechos reservados
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto w-4/12 lg:py-7 py-10 item-2">
                <div class="flex flex-col items-center w-full">
                    <div
                        class="font-bold lg:w-52 w-58 pt-2 border-t footer box text-white text-center uppercase mx-auto block mt-2">
                        <a href="/">
                            PLAYAS
                        </a>
                    </div>
                    <div
                        class="font-bold lg:w-52 w-58 pt-2 border-t footer box text-white text-center uppercase mx-auto block mt-2">
                        <a href="/">
                            ÚLTIMAS NOTICIAS
                        </a>
                    </div>
                    <div
                        class="font-bold lg:w-52 w-58 pt-2 border-t footer box text-white text-center uppercase mx-auto block mt-2">
                        <a href="/">
                            CLUB BUSCAOLAS
                        </a>
                    </div>
                    <div
                        class="font-bold lg:w-52 w-58 pt-2 border-t footer box text-white text-center uppercase mx-auto block mt-2">
                        <a href="/">
                            NOSOTROS
                        </a>
                    </div>
                    <div
                        class="font-bold lg:w-52 w-58 pt-2 border-t footer box text-white text-center uppercase mx-auto block mt-2">
                        <a href="/">
                            términos de uso
                        </a>
                    </div>
                </div>
            </div>
            <div class="mr-0 w-4/12 lg:py-7 py-10 lg:mb-20 item-3">
                <div class="flex flex-col items-center w-full">
                    <button
                        class="rounded-none bg-[#FFA800] text-center font-bold text-white lg:py-1 py-2 lg:w-80 w-74 mt-2 lg:mb-12 mb-18">
                        GRATIS PREMIUM 14 días
                    </button>
                    <button
                        class="rounded-none bg-[#00A99D] text-center font-bold text-white lg:py-1 py-2 lg:w-80 w-74 lg:mb-12 mb-18">
                        CONTACTO
                    </button>

                    <div class="flex w-full items-center justify-between lg:px-24 px-28">
                        <a href="/"><img class="mx-auto" src="~/assets/icons/instagram.png" /></a>
                        <a href="/"><img class="mx-auto" src="~/assets/icons/facebook.png" /></a>
                        <a href="/"><img class="mx-auto" src="~/assets/icons/youtube.png" /></a>
                    </div>
                    <div class="w-10/12 mx-auto lg:mt-2 text-center uppercase text-sm">
                        <p class="text-white">
                            <span class="font-bold">Síguenos y participa</span> en nuestras redes sociales
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@media only screen and (max-width: 1023px) {
.flex {
    flex-direction: column;
  }
  .item-1 {
    order: 1;
  }
  .item-2 {
    order: 2;
  }
  .item-3 {
    order: 3;
  }
  .item-4 {
    order: 4;
  }
}
</style>
