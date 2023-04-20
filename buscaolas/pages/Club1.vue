<script setup>
const club = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<template>
  <div>
    <div class="overflow-x-hidden">
      <client-only>
        <Header />
          <div class="clubhead flex">
            <div class="leftblue bg-white">
            </div>

            <div class="headtext lg:text-3xl uppercase text-textgr font-bold text-left pt-12 pl-36 pr-16">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>


            <div>
              <NuxtLink to="/">
              <img src="~/assets/thumbnails/clubsurf1.png" class=" image" />
            </NuxtLink>
            </div>

            <div class="rightblue bg-gradient-to-br from-headblue to-botgr">
            </div>
          </div>
      </client-only>
    </div>

    <div class="grid grid-cols-3 gap-5 mx-auto w-9/12 pt-8 pb-8">
      <div class="border" v-for="(c, i) in club" :key="i">
        <div class="image-container">
        <img
          src="~/assets/thumbnails/image.jpg"
          class="object-cover h-48 w-full ..."
        />
        <div class="shape bg-white top-14  left-14"> </div>
      </div>
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
    <Footer/>
  </div>
</template>

<style scoped>
.clubhead {
 height: 480px;
}

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
  height: 480px;
}

.shape {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Add styles for your shape, for example: */
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.rightblue {
  width: 183px;
}
</style>