<script setup>
const club = [1, 2, 3];
</script>

<template>
  <div>
    <div class="overflow-y-hidden">
      <Header />
      <Clubhead />
      <div class="flex mx-auto w-9/12 pt-10 pb-10">
        <div class="left border-r-2 border-headblue text-headblue h-auto">
          <div class="uppercase text-sm">
            <p class="font-bold mb-0">WEB</p>
            <p class="pb-4">www.ESCUELADESURFMAITENCILLO.CL</p>
            <p class="font-bold mb-0">Horario</p>
            <p class="mb-0">Martes a viernes</p>
            <p class="mb-0">09:00 - 13:00 hrs / 15:00 - 19:00 hrs.</p>
            <p class="mb-0">Sábado y domingo</p>
            <p class="mb-0 pb-14">10:00 - 13:00 hrs / 15:00 - 20 hrs.</p>
            <p class="font-bold mb-0">DIRECCIÓN</p>
            <p class="mb-0 pb-10">AVENIDA DEL MAR 1466, MAITENCILLO</p>
            <img src="~/assets/thumbnails/map.png" class="object-cover h-auto w-auto ..." />
          </div>
        </div>

        <div class="right uppercase pl-10">
          <p class="font-bold text-4xl  text-headblue pb-3">Lista de beneficios</p>
          <p class="text1 bg-skyblue text-xs text-white pl-10 pt-14 mb-10"><span class="font-bold">20% DE DESCUENTO</span>
            EN CLASES DE SURF, FORMATO GRUPAL O PARTICULAR <br> (NO INCLUYE CURSOS EXTENSOS)</p>
          <p class="text1 bg-skyblue text-xs text-white pl-10 pt-14"><span class="font-bold">20% DE DESCUENTO</span> EN
            CLASES DE SURF, FORMATO GRUPAL O PARTICULAR <br> (NO INCLUYE CURSOS EXTENSOS)</p>
        </div>
      </div>

      <div class="mx-auto w-9/12 uppercase">
        <p class="font-bold text-4xl text-headblue mt-10">partner asociados</p>
        <div class="grid grid-cols-3 gap-5 pt-5 pb-8">
          <div class="border" v-for="(c, i) in club" :key="i">
            <div class="image-container">
              <img src="~/assets/thumbnails/image.jpg" class="object-cover h-48 w-full ..." />
              <div class="shape bg-white top-14  left-14"> </div>
            </div>
            <a href="#" class="block w-full p-6" style="background-color: #F0F0F0;">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-dark-grey text-center pb-2">
                ESCUELA TURIMOS LOS LOBOS
              </h5>

              <div class="flex justify-center">
                <button class="text-skyblue font-bold py-2 px-4 border border-skyblue uppercase">
                  B e n e f i c i o s
                </button>
              </div>
            </a>
          </div>
        </div>
        <div class="flex justify-center mt-10 mb-10 ">
            <button
              class="rounded inline-block w-40 h-10 text-sm text-textgr font-bold border border-textgr uppercase hover:bg-gray-200" style="letter-spacing: 0.25em;">
              <img src="~/assets/icons/leftarrowblack.png" class="inline-block pr-3">   Volver
            </button>
            </div>
      </div>




    </div>
    <Contactofoot />
    <Footer />
  </div>
</template>

<style>
.left {
  width: 400px;
}

.right {
  width: 680px;
}

.text1 {
  width: 640px;
  height: 160px;
}
</style>
