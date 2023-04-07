<script setup>
</script>

<template>
  <div>
    <div class="overflow-y-hidden">
        <Header />
        <Clubhead/>
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
              <img
              src="~/assets/thumbnails/map.png"
              class="object-cover h-auto w-auto ..."
              />
              </div>
            </div>

              <div class="right uppercase">
                <p class="font-bold text-4xl">Lista de beneficios</p>

              </div>

            
          </div>

        </div>
        <Contactofoot/>
    </div>

</template>

<style>
.left {
  width:400px;
}

.right {
  width:680px;
}
</style>
