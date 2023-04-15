<script setup>
const club = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<template>
  <div>
    <div class="overflow-x-hidden">
      <client-only>
        <Header />
        <div class="mx-auto w-11/12">
          
        </div>
      </client-only>
    </div>

    <div class="grid grid-cols-3 gap-5 mx-auto w-11/12 pt-8 pb-8">
      <div class="border" v-for="(c, i) in club" :key="i">
        <img
          src="~/assets/thumbnails/image.jpg"
          class="object-cover h-48 w-full ..."
        />
        <a
          href="#"
          class="block w-full p-6" style="background-color: #F0F0F0;"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-dark-grey text-center pb-2"
          >
            ESCUELA TURIMOS LOS LOBOS
          </h5>

          <div class="flex justify-center">
            <button
              class="text-skyblue font-bold py-2 px-4 border border-skyblue uppercase"
            >
              B e n e f i c i o s
            </button>
          </div>
        </a>
      </div>
    </div>

    <div class="flex bg-gradient-to-br from-blue-900 to-teal-500 text-white">
      <div class="lg:w-5/12">
        <img
          src="~/assets/thumbnails/club-surf.png"
          class="object-cover h-auto w-auto"
        />
      </div>
      <div class="lg:w-7/12 pl-10 pr-96 pt-14 pb-6 text-3xl">
        <p class="w-7/12">
          <span class="font-bold">¿QUIERES SER PARTE DEL CLUB BUSCAOLAS? </span>
        </p>

        <p class="uppercase text-2xl pt-2">
          <span class="font-bold">¡Únete</span> y muestrate a miles de usuarios!
        </p>
        <div class="button flex items-center uppercase">
        <button class="bg-orangee text-white border border-orangee uppercase text-sm p-2 px-8 font-bold" style="letter-spacing: 0.25em;">
          Contacto
        </button>
        </div>

        
      </div>
    </div>
  </div>
</template>

<style>
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
}</style>