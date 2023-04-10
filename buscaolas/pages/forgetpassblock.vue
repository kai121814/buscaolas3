<script>
import regpopup from '~/components/regpopup.vue';

export default {
  components: {
    regpopup
  }
};
</script>
  <template>
    <div class="overflow-x-hidden">
      <Header />
      <div class="relative mx-auto w-full h-full">
        <div>
          <img src="~/assets/css/banners/forget.png" class="w-full" alt="forget" />
        </div>
        <div>
          <img class="absolute lg:top-1/2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 lg:w-85"
            src="~/assets/icons/adblock.png" alt="block" />
        </div>
      </div>
      <regpopup />
      <div class="pt-5 bg-gradient-to-t from-[#F8C8DC] to-white">
        <div class="w-1/3 mx-auto text-center">
          <p>
            <span class="font-bold italic text-4xl">Estas usando un Adblocker</span>
          </p>
  
          <p class="pt-5">
            Por favor desactiva el Adblocker para continuar usando nuestro sitio web.
          </p>
  
          <p class="pt-5">
            Con los ads, podemos entregar cámaras gratis en toda las playas donde tenemos nuestras cámaras.
          </p>
          </div>
        </div>
      </div>
  </template>
  

  
  <style>
  
  </style>