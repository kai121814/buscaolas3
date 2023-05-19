<script setup>
// export default {
//     data() {
//       return {
//         lists: [
//           {
//             id:1,
//           },
//           {
//             id:2,
//           },
//           {
//             id:3,
//           },
//           {
//             id:4,
//           },
//           {
//             id:5,
//           }
//         ]
//       }
//     }
//   }
</script>

<template>
  <div class="">
    <div class="overflow-x-hidden">
      <client-only>
        <Header />
        <div class="flex h-80">
          <div class="leftblue bg-gradient-to-br from-headblue to-botgr"></div>
          <div class="headtext ml-16 mt-16">
            <div class="flex text-xs lg:mt-0 ">
              <NuxtLink to="/">
                <img src="~/assets/icons/calendar.png" class="h-5 w-5" />
              </NuxtLink>
              <span class="uppercase text-black text-xs mt-0.5 ml-5">
                Lunes
                <span class="font-bold">25 octubre</span>
                2021
              </span>
            </div>
            <div class="text-headblue uppercase text-blue mt-8">
              <span class="text-4xl font-black tracking-widest">
                Playa <br>
                MAITENCILLO</span>
              <span class="block text-base">(abanico)</span>
            </div>
            <div class="ml-0.5 mt-10 text-headblue">
              <span class="block text-xs uppercase text-gray">Condición:</span>
              <div>
                <button
                  class="font-black text-base tracking-widest uppercase text-white bg-skyblue w-48 py-2">Buena</button>
                <span class="text-base uppercase text-gray">
                  <span class="font-bold ml-2">0,6 - 0,9</span> mts
                </span>
              </div>
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
      </client-only>
    </div>

    <div class="lg:w-9/12 mx-auto mt-10 px-10">
      <div class="flex uppercase mb-8">
        <span class="font-bold text-4xl  text-headblue">
          COMENTARIOS
        </span>
        <span class="flex">
          <NuxtLink to="/">
            <img src="~/assets/icons/comment-blue.png" class="h-6 w-6  mt-3 ml-7" />
          </NuxtLink>
          <span class="font-bold text-base text-black ml-2.5 mt-2.5">525</span>
        </span>
        <div class="text-headblue ml-12">
          <span class=" text-black mr-2.5">
            Ordenar por:
          </span>
          <select name="date" class="border border-headblue rounded-sm pl-3 py-1 mr-9">
            <option value="">FECHA</option>
          </select>
          <select name="tipo" class="border border-headblue rounded-sm pl-3 py-1">
            <option value="">LIKES</option>
          </select>
        </div>
      </div>
      <button class="font-bold text-sm text-center text-white bg-skyblue shadow rounded-sm w-64 py-2.5 mb-10">HACER UN
        COMENTARIO</button>
      <!-- <div class="mb-10" v-for="(list, index) in lists" :key="index"> -->
        <div class="mb-10">
        <div class="flex">
          <span class="bg-skyblue">
            <NuxtLink to="/">
              <img src="~/assets/icons/comment-white.png" class="h-6 w-6 block mx-2 mt-2 mb-1" />
            </NuxtLink>
          </span>
          <span class="bg-headblue font-bold text-white text-center w-64 pt-1.5">
            Nombre Usuario
          </span>
        </div>
        <div class="px-10 bg-midgrey rounded-sm text-justify relative">
          <div class="pt-8 mb-12">
            <p class="mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="border-t border-textgr h-10">
            <div class="float-right mr-10">
              <div class="date text-black uppercase flex">
                <span class="mt-3 mr-10 text-xs">
                  <span class="font-bold">25 DICIEMBRE</span> 2020
                </span>
                <span class="flex">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/like.png" class="h-5 w-5 block mt-2 mr-2" />
                  </NuxtLink>
                  <span class="font-bold text-xs uppercase text-textgr mt-3">25</span>
                </span>
                <span class="flex ml-5">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/unlike.png" class="h-5 w-5 block mt-2.5 mr-2 ml-3" />
                  </NuxtLink>
                  <span class="font-bold text-xs uppercase text-textgr mt-3">02</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="mx-auto my-10 block text-sm uppercase underline text-textgr">
        Cargar más COMENTARIOS
      </button>
      <button class="mx-auto arrow block rounded-sm border border-textgr font-bold text-sm uppercase tracking-widest text-textgr
        box-border lg:w-36 lg:h-10 return text-right pr-5 mb-10">
        VOLVER 
      </button>
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

.arrow {
    background: url('~/assets/icons/arrowleft-gray.png') no-repeat 10% 50%;
  }
</style>
