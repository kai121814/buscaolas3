<script setup>
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
    <p class="lg:text-4xl uppercase text-headblue font-black tracking-widest mt-5">playa <br> maintecillo</p>
    <p class="text-sm text-headblue uppercase font-normal tracking widest">(ABANICO)</p>
    <div class="text-textgr mt-8 uppercase font-normal">
    <span class="text-base font-bold pl-24">F i l t r a r  </span> 
    <span class="break-words">p o r</span> <br>
            <button
              class="py-2 pl-14 w-80 mt-2 bg-inputgr uppercase"
            >
            F a v o r i t o s
            <img src="~/assets/icons/downarrow.png" class="inline-block pl-20">
            </button>
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
        </div>
        <div class="mx-auto w-11/12">
          
        </div>
      </client-only>
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
