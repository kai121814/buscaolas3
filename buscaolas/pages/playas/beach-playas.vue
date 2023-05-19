<script setup>
const club = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<template>
  <div class="">
    <div class="overflow-x-hidden">
      <client-only>
        <Header />
        <div>
          <div class="flex h-80">
    <div class="leftblue bg-gradient-to-br from-headblue to-botgr">
    </div>

    <div class="headtext ml-16 mt-16">
    <div class="flex text-xs lg:mt-0 ">
      <NuxtLink to="/">
      <img src="~/assets/icons/calendar.png" class="h-5 w-5" />
    </NuxtLink>
    <span class="uppercase text-black mt-0.5 ml-5">
            Lunes 
           <span class="font-bold">25 octubre</span>
           2021
           </span>
          </div>
      <p class="lg:text-4xl uppercase text-headblue font-black tracking-widest mt-8">mis playas</p>
      
      <div class="flex mt-14">
            <button
              class="text-white font-bold py-2 px-4 uppercase w-72 bg-orangee"
            >
            Ver en HD
            </button>
            </div>
    </div>


    <div>
      <NuxtLink to="/">
      <img src="~/assets/thumbnails/playasurf.png" class="h-80 image" />
    </NuxtLink>
    </div>

    <div class="rightblue bg-gradient-to-br from-headblue to-botgr">
    </div>
  </div>
        </div>
        <div class="mx-auto w-11/12">
          
        </div>
      </client-only>
    </div>

    <div class="grid grid-cols-3 gap-5 mx-auto w-9/12 mt-16 mb-16">
      <div class="border" v-for="(c, i) in club" :key="i">
        <img
          src="~/assets/thumbnails/image.jpg"
          class="object-cover h-48 w-full ..."
        />
      </div>
    </div>

    <Footer/>
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
</style>
