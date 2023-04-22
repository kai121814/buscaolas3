<script setup>
const club = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<template>
  <div>
    <div class="overflow-x-hidden">
      <client-only>
        <Clubhead />
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

    <Footer/>
  </div>
</template>
