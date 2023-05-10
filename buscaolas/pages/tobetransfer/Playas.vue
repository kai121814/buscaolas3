<script setup>
const club = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isOpen = ref(false);
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
              <p class="lg:text-4xl uppercase text-headblue font-black tracking-widest mt-5">headline <br> playas</p>
              <div class="text-textgr mt-8 uppercase font-normal">
                <span class="text-base font-bold pl-24">F i l t r a r </span>
                <span class="break-words">p o r</span> <br>
                <button class="py-2 pl-14 w-80 mt-2 bg-inputgr uppercase">
                  F a v o r i t o s
                  <img src="~/assets/icons/downarrow.png" class="inline-block pl-20">
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
      </client-only>
    </div>

    <div class="grid grid-cols-3 gap-5 mx-auto w-9/12 mt-16 mb-16">
      <div class="border" v-for="(c, i) in club" :key="i">
        <img src="~/assets/thumbnails/image.jpg" class="object-cover h-48 w-full ..." />
        <!-- <div class="relative">
      <div class="absolute flex object-right">
                <span class="text-white uppercase title pl-3 pt-1">
                  <span class="block font-bold text1">{{list.nombre}}</span>
                </span>
                <span class="float-right pt-2 pr-3 ">
                  <img src="~/assets/icons/star.png" />
                </span>
              </div>
            </div> -->
      </div>
    </div>
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


</style>
