<script setup>
const club = [1, 2, 3, 4, 5, 6];
</script>

<template>
    <div class="overflow-y-hidden">
      <Header/>
      <div class="flex h-80">
    <div class="leftblue bg-gradient-to-br from-headblue to-botgr">
    </div>

    <div class="headtext lg:text-3xl  text-textgr text-center pt-10">
      <NuxtLink to="/">
        <img src="~/assets/logo/ellipse.png" class="block m-auto pb-5">
      </NuxtLink>
      <h1 class="font-bold uppercase">Torneo Poisson</h1>
      <div>
      <span class="flex text-xs w-min mx-auto lg:mt-0 mt-10 pt-3">
        <span class="calendar"></span>
          <span class="uppercase text-black ml-4 mt-0.5 whitespace-nowrap">
           Lunes 4 y 5 de
           <span class="font-bold">Diciembre</span>
           2021
           </span>
           </span>
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

  <div class="flex w-9/12 mx-auto pt-16" >
  <div class="w-full aspect-video">
   <iframe width="1023" height="585" src="https://www.youtube.com/embed/4A5_H3YqPQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>
<div class="flex w-9/12 mx-auto pt-12 pb-96">
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </p>
  </div>


  <div class="mx-auto w-9/12 uppercase">
        <p class="font-bold text-3xl text-headblue mt-10">partner asociados</p>
        <div class="flex pt-5 pb-40">
          <div v-for="(c, i) in club" :key="i" class="">
            <div class="w-20 h-20 bg-[#C4C4C4] rounded-full mx-auto mr-5"></div>
          </div>
        </div>
      </div>

    <Contactofoot />
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

.calendar {
        background: url('~/assets/icons/calendar.png');
        width: 20px;
        height: 20px;
    }
</style>
