<script setup>
const club = [
  {
    title: 'regular',
    time: '9:00',
    mts: '1.20',
    mm: '2.96',
    status: 'regular',
    ss: '12',
    degree: '242',
  },
  {
    title: 'buena',
    time: '10:00',
    mts: '10:00',
    mm: '2.96',
    status: 'buena',
    ss: '12',
    degree: '242',
  },
  {
    title: 'corre 2 de 10',
    time: '11:00',
    mts: '1.20',
    mm: '2.96',
    status: 'corre blue',
    ss: '12',
    degree: '242',
  },
  {
    title: 'regular',
    time: '12:00',
    mts: '1.20',
    mm: '2.96',
    status: 'regular',
    ss: '12',
    degree: '242',
  },
  {
    title: 'corre 5 de 10',
    time: '13:00',
    mts: '1.20',
    mm: '2.96',
    status: 'corre gray',
    ss: '12',
    degree: '242',
  },
  
  {
    title: 'corre 6 de 10',
    time: '14:00',
    mts: '1.20',
    mm: '2.96',
    status: 'corre skyblue',
    ss: '12',
    degree: '242',
  },
  {
    title: 'regular',
    time: '09:00',
    mts: '1.20',
    mm: '2.96',
    status: 'regular',
    ss: '12',
    degree: '242',
  },
  {
    title: 'buena',
    time: '10:00',
    mts: '10:00',
    mm: '2.96',
    status: 'buena',
    ss: '12',
    degree: '242',
  },
  {
    title: 'corre 2 de 10',
    time: '11:00',
    mts: '1.20',
    mm: '2.96',
    status: 'corre blue',
    ss: '12',
    degree: '242',
    opacity: 60
  },
  {
    title: 'regular',
    time: '12:00',
    mts: '1.20',
    mm: '2.96',
    status: 'regular',
    ss: '12',
    degree: '242',
  },
  {
    title: 'corre 5 de 10',
    time: '13:00',
    mts: '1.20',
    mm: '2.96',
    status: 'corre gray',
    ss: '12',
    degree: '242',
  },
];

import { ref } from 'vue';
const items = ref([
  {
    question: 'REPORTE Martes',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu vestibulum erat. Pellentesque quis consectetur tellus, sit amet posuere tortor. Suspendisse nec venenatis eros. Proin sed massa orci. Vestibulum in placerat nisi. Mauris tincidunt, augue ut bibendum viverra, nulla eros egestas orci, et malesuada quam tortor et mauris. Vivamus condimentum tortor at purus maximus, a accumsan sapien venenatis. Integer at tincidunt erat, sit amet faucibus dolor. Morbi pellentesque lorem ac arcu tincidunt consectetur et vel nisl. Phasellus placerat erat non nulla dapibus sollicitudin. Duis sed lacus tempor, vehicula tortor in, finibus dui. Sed egestas felis justo, at laoreet arcu porta non. Cras nibh augue, dapibus nec nunc et, rhoncus blandit libero. Vivamus faucibus, nulla ac venenatis facilisis, nunc nulla tempus massa, ut dignissim augue justo ut turpis. Nam bibendum auctor nisi.',
    active: false
  },
  {
    question: 'REPORTE Miércoles',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu vestibulum erat. Pellentesque quis consectetur tellus, sit amet posuere tortor. Suspendisse nec venenatis eros. Proin sed massa orci. Vestibulum in placerat nisi. Mauris tincidunt, augue ut bibendum viverra, nulla eros egestas orci, et malesuada quam tortor et mauris. Vivamus condimentum tortor at purus maximus, a accumsan sapien venenatis. Integer at tincidunt erat, sit amet faucibus dolor. Morbi pellentesque lorem ac arcu tincidunt consectetur et vel nisl. Phasellus placerat erat non nulla dapibus sollicitudin. Duis sed lacus tempor, vehicula tortor in, finibus dui. Sed egestas felis justo, at laoreet arcu porta non. Cras nibh augue, dapibus nec nunc et, rhoncus blandit libero. Vivamus faucibus, nulla ac venenatis facilisis, nunc nulla tempus massa, ut dignissim augue justo ut turpis. Nam bibendum auctor nisi.',
    active: false
  },
  {
    question: 'REPORTE Jueves',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu vestibulum erat. Pellentesque quis consectetur tellus, sit amet posuere tortor. Suspendisse nec venenatis eros. Proin sed massa orci. Vestibulum in placerat nisi. Mauris tincidunt, augue ut bibendum viverra, nulla eros egestas orci, et malesuada quam tortor et mauris. Vivamus condimentum tortor at purus maximus, a accumsan sapien venenatis. Integer at tincidunt erat, sit amet faucibus dolor. Morbi pellentesque lorem ac arcu tincidunt consectetur et vel nisl. Phasellus placerat erat non nulla dapibus sollicitudin. Duis sed lacus tempor, vehicula tortor in, finibus dui. Sed egestas felis justo, at laoreet arcu porta non. Cras nibh augue, dapibus nec nunc et, rhoncus blandit libero. Vivamus faucibus, nulla ac venenatis facilisis, nunc nulla tempus massa, ut dignissim augue justo ut turpis. Nam bibendum auctor nisi.',
    active: false
  },
  {
    question: 'REPORTE Viernes',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu vestibulum erat. Pellentesque quis consectetur tellus, sit amet posuere tortor. Suspendisse nec venenatis eros. Proin sed massa orci. Vestibulum in placerat nisi. Mauris tincidunt, augue ut bibendum viverra, nulla eros egestas orci, et malesuada quam tortor et mauris. Vivamus condimentum tortor at purus maximus, a accumsan sapien venenatis. Integer at tincidunt erat, sit amet faucibus dolor. Morbi pellentesque lorem ac arcu tincidunt consectetur et vel nisl. Phasellus placerat erat non nulla dapibus sollicitudin. Duis sed lacus tempor, vehicula tortor in, finibus dui. Sed egestas felis justo, at laoreet arcu porta non. Cras nibh augue, dapibus nec nunc et, rhoncus blandit libero. Vivamus faucibus, nulla ac venenatis facilisis, nunc nulla tempus massa, ut dignissim augue justo ut turpis. Nam bibendum auctor nisi.',
    active: false
  },
  {
    question: 'REPORTE Sábado',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu vestibulum erat. Pellentesque quis consectetur tellus, sit amet posuere tortor. Suspendisse nec venenatis eros. Proin sed massa orci. Vestibulum in placerat nisi. Mauris tincidunt, augue ut bibendum viverra, nulla eros egestas orci, et malesuada quam tortor et mauris. Vivamus condimentum tortor at purus maximus, a accumsan sapien venenatis. Integer at tincidunt erat, sit amet faucibus dolor. Morbi pellentesque lorem ac arcu tincidunt consectetur et vel nisl. Phasellus placerat erat non nulla dapibus sollicitudin. Duis sed lacus tempor, vehicula tortor in, finibus dui. Sed egestas felis justo, at laoreet arcu porta non. Cras nibh augue, dapibus nec nunc et, rhoncus blandit libero. Vivamus faucibus, nulla ac venenatis facilisis, nunc nulla tempus massa, ut dignissim augue justo ut turpis. Nam bibendum auctor nisi.',
    active: false
  },
  {
    question: 'REPORTE Domingo',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu vestibulum erat. Pellentesque quis consectetur tellus, sit amet posuere tortor. Suspendisse nec venenatis eros. Proin sed massa orci. Vestibulum in placerat nisi. Mauris tincidunt, augue ut bibendum viverra, nulla eros egestas orci, et malesuada quam tortor et mauris. Vivamus condimentum tortor at purus maximus, a accumsan sapien venenatis. Integer at tincidunt erat, sit amet faucibus dolor. Morbi pellentesque lorem ac arcu tincidunt consectetur et vel nisl. Phasellus placerat erat non nulla dapibus sollicitudin. Duis sed lacus tempor, vehicula tortor in, finibus dui. Sed egestas felis justo, at laoreet arcu porta non. Cras nibh augue, dapibus nec nunc et, rhoncus blandit libero. Vivamus faucibus, nulla ac venenatis facilisis, nunc nulla tempus massa, ut dignissim augue justo ut turpis. Nam bibendum auctor nisi.',
    active: false
  },
]);
function toggleActive(index) {
  items.value[index].active = !items.value[index].active;
}
</script>
<template>
  <div>
    <div class="overflow">
      <Header />
    </div>
    <div class="mx-auto h-auto w-9/12">
      <div class="flex bg-red-700 justify-center pt-2 rounded">
        <div><img src="~assets/icons/alerta.png" alt="alerta"></div>
        <div>
          <p class="text-white">INFO <span class="gap-x-2">MERJADA</span></p>
        </div>
      </div>

      <div class="flex pt-16 gap-1 w-full">
        <div class="flex mx-auto h-auto w-full bg-[#FFA800] justify-center pt-4 gap-x-2">
          <div>
            <img src="~assets/icons/vervideo.png" alt="vervideo">
          </div>
          <p class="text-white font-bold">VER MODO MULTICAMARA</p>
        </div>
        <div class="flex mx-auto h-auto w-full bg-[#00A99D] justify-center pt-4 gap-x-2">
          <div>
            <img src="~assets/icons/verclock.png" alt="verclock">
          </div>
          <p class="text-white font-bold">VER HISTORIAL</p>
        </div>
      </div>

      <div class="flex justify-center mx-auto pb-12">
        <div>
          <img class="w-full" src="~assets/thumbnails/beachmap.png" alt="beach">
        </div>
        <div>
          <img class="w-full" src="~assets/thumbnails/beachmap.png" alt="beach">
        </div>
      </div>
    </div>

    <div class="flex mx-auto container w-9/12 py-10">
      <div class="text-headblue">
        <div class="text-3xl">ESCUELA DE TURISMO LOS BOLOS</div>
        <div class="text-5xl text-bold font-extrabold">LA BOCA</div>
      </div>
      <div class="w-16 h-16 rounded-full bg-gray-300 ml-auto"></div>
      <div class="py-3 px-5"><img src="~assets/icons/instagramb.png" alt="igb"></div>
    </div>
    <hr class="w-9/12 mx-auto my-4 bg-headblue border-black rounded md:my-10">
    <div class="grid grid-cols-2 mx-auto w-9/12 gap-x-11">
      <div class=" container mx-auto">
        <div class="flex">
          <div class="w-32 h-10 bg-orangee rounded drop-shadow">
            <NuxtLink to="/">
              <img src="~/assets/icons/audio.png" class="h-6 w-auto mx-auto my-2" />
            </NuxtLink>
          </div>
          <div class="text-headblue text-2xl font-bold ml-8 border-headblue my-auto mb-5">CONDICIONES GENERALES</div>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and
            scrambled it to make a type specimen book.
          </p>

          <p>
            PM: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div class="container mx-auto">
        <p class="text-headblue font-bold my-0">TABLA RECOMENDADA:</p>
        <p class="font-bold">La que mas te acomode</p>
        <hr class="w-full mx-auto my-5 bg-headblue border-black rounded">
        <p class="text-headblue uppercase font-bold mb-3">Indicadores por nivel</p>
        <div class="py-3 w-full">
          <div>
            <div class="flex my-2">
              <div class="font-bold w-32">Principiante</div>
              <div class="grid grid-cols-6 gap-x-2">
                <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
                <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
                <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
                <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
                <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
              </div>
            </div>

            <div class="flex my-2">
              <div class="font-bold w-32">Intermedio</div>
              <div class="grid grid-cols-6 gap-x-2">
                <div class="bg-blue-600 w-14 h-6 rounded-full"></div>
                <div class="bg-blue-600 w-14 h-6 rounded-full"></div>
                <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
                <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
                <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
              </div>
            </div>
            <div class="flex my-2">
              <div class="font-bold w-32">Avanzado</div>
              <div class="grid grid-cols-6 gap-x-2">
                <div class="bg-blue-600 w-14 h-6 rounded-full"></div>
                <div class="bg-blue-600 w-14 h-6 rounded-full"></div>
                <div class="bg-blue-600 w-14 h-6 rounded-full"></div>
                <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
                <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-9/12 mx-auto mt-10 mb-10">
      <div class="relative">
        <span class=" absolute translate-y-1/2 transform top-1/2 ">
          <NuxtLink to="/">
            <img src="~/assets/icons/carret-left.png" class="h-11 w-5" />
          </NuxtLink>
        </span>
        <ul class="flex justify-evenly">
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class="block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">09:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-textgr">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 w-7/12">Regular</span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class="block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class=" block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">10:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-orangee">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                  buena
                </span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class=" block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class=" block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">11:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-headblue">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                  corre 2 de 10
                </span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class=" block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class=" font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class="block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">09:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-textgr">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 w-7/12">Regular</span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class="block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class=" block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">11:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-core">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                  corre 5 de 10
                </span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class=" block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class=" font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class=" block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">11:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-skyblue">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                  corre 6 de 10
                </span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class=" block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class=" font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class="block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">09:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-textgr">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 w-7/12">Regular</span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class="block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class=" block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">10:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-orangee">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                  buena
                </span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class=" block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class=" block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">11:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-headblue">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                  corre 2 de 10
                </span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class=" block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class=" font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class=" block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">11:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-textgr">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                  regular
                </span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class=" block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class=" font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class=" block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">11:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-core">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                  corre 2 de 10
                </span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class=" block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class=" font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="text-textgr w-20 h-20 text-center pt-5">
                <span class=" block mx-auto mb-1">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock.png" class="w-5 h-5 mx-auto" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center uppercase">11:00</span>
              </div>
              <div class="uppercase text-center text-white font-bold text-xs relative w-20 h-20 bg-skyblue">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                  corre 2 de 10
                </span>
              </div>
              <div class="w-20 h-52 bg-headblue m-0 border border-t-white text-white text-center">
                <span>
                  <span class=" block mx-auto mt-5 mb-3">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/wave.png" class="w-7 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class=" font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span class=" block mx-auto mt-5">
                    <NuxtLink to="/">
                      <img src="~/assets/icons/water.png" class="w-6 h-5 mx-auto" />
                    </NuxtLink>
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
        </ul>
        <span class=" absolute translate-y-1/2 transform top-1/2 right-0">
          <NuxtLink to="/">
            <img src="~/assets/icons/carret-right.png" class="h-11 w-5" />
          </NuxtLink>
        </span>
      </div>
    </div>

    <div class="w-8/12 mx-auto mt-15 mb-15">
      <div class="text-2xl w-9/12 text-headblue font-bold uppercase pb-1 border-b border-textgr leading-9">
        MAREAS
      </div>
      <div class="flex">
        <div class="w-9/12 mr-10">
          <div class="flex justify-between w-full">
            <div class="flex pt-6 pb-2 border-b border-textgr">
              <span class="flex">
                <span class="block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/wave-blue.png" class="h-5 w-7" />
                  </NuxtLink>
                </span>
                <span class="uppercase text-heablue -mt-0.5 ml-2 mr-10">alta</span>
              </span>
              <span class="flex">
                <span class="block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock-blue.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center lowercase text-textgr ml-2 mr-10">08:00</span>
              </span>
              <span class="flex">
                <span class="block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/arrow-up-down-blue.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center lowercase text-textgr ml-2 whitespace-nowrap">1.12 m</span>
              </span>
            </div>
            <div class="flex pt-6 pb-2 border-b border-textgr">
              <span class="flex">
                <span class="block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/wave-yellow.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="uppercase text-orangee -mt-0.5 ml-2 mr-10">alta</span>
              </span>
              <span class="flex">
                <span class="block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock-yellow.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center lowercase text-orangee ml-2 mr-10">08:00</span>
              </span>
              <span class="flex">
                <span class=" block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/arrow-up-down-yellow.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center lowercase text-orangee ml-2 whitespace-nowrap">1.12 m</span>
              </span>
            </div>
          </div>
          <div class="flex justify-between w-full">
            <div class="flex pt-6 pb-2 border-b border-textgr">
              <span class="flex">
                <span class="block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/wave-blue.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="uppercase text-headblue -mt-0.5 ml-2 mr-10">alta</span>
              </span>
              <span class="flex">
                <span class="block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock-blue.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center lowercase text-textgr ml-2 mr-10">08:00</span>
              </span>
              <span class="flex">
                <span class="arrow-up-down-blue block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/arrow-up-down-blue.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center lowercase text-textgr ml-2 whitespace-nowrap">1.12 m</span>
              </span>
            </div>
            <div class="flex pt-6 pb-2 border-b border-textgr">
              <span class="flex">
                <span class="block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/wave-blue.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="uppercase text-blue -mt-0.5 ml-2 mr-10">alta</span>
              </span>
              <span class="flex">
                <span class="block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/clock-blue.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center lowercase text-textgr ml-2 mr-10">08:00</span>
              </span>
              <span class="flex">
                <span class=" block">
                  <NuxtLink to="/">
                    <img src="~/assets/icons/arrow-up-down-blue.png" class="h-5 w-5" />
                  </NuxtLink>
                </span>
                <span class="font-bold text-sm text-center lowercase text-textgr ml-2 whitespace-nowrap">1.12 m</span>
              </span>
            </div>
          </div>
        </div>
        <div class="w-2/12 mx-auto">
          <div class="flex pb-3.5">
            <span class="sunrise block">
              <NuxtLink to="/">
                <img src="~/assets/icons/sunrise-blue.png" class="h-10 w-10" />
              </NuxtLink>
            </span>
            <span class="font-bold text-2xl text-center lowercase text-textgr w-8/12 ml-2">07:15</span>
          </div>
          <div class="flex pt-3.5 border-t border-textgr">
            <span class="sunset block">
              <NuxtLink to="/">
                <img src="~/assets/icons/sunset-blue.png" class="h-10 w-10" />
              </NuxtLink>
            </span>
            <span class="font-bold text-2xl text-center lowercase text-textgr w-8/12 ml-2">18:25</span>
          </div>
        </div>
      </div>
    </div>

    <hr class="w-9/12 mx-auto mt-10 bg-headblue border-black rounded">
    <div class="grid grid-cols-2 gap-x-4 mx-auto w-9/12 pb-5 mt-10">
      <div>
        <div>
          <p class="font-bold text-3xl text-headblue uppercase">Reporte de la región</p>
          <iframe width="500" height="300" src="https://www.youtube.com/embed/1HZaBYXRc8s"
            title="Whitewoods - Somber Waves" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
          <img class="pt-5" src="~assets/thumbnails/like.png" alt="like">
        </div>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.

          PM: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.

          PM: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>

    <div class="w-9/12 mx-auto pb-10 mt-10">
      <hr class=" my-4 bg-headblue border-black rounded ">
      <p class="font-bold text-3xl text-headblue uppercase text-center">Reporte semanal</p>
    </div>
    <div class="w-9/12 mx-auto item-center">
      <img class="mx-auto" src="~assets/thumbnails/semanal.png" alt="semanal">
    </div>

    <div class="paa-container mx-auto w-9/12 pt-5">
      <ul class="paa-list border-t border-b border-blue-500">
        <li v-for="(item, index) in items" :key="index" class="paa-item border-t border-blue-500" :class="{
          'border-t': index > 0,
          'border-b': index < items.length - 1
        }">
          <div class="paa-question font-bold text-headblue text-2xl" @click="toggleActive(index)">
            {{ item.question }}
          </div>
          <span class="mt-5 mr-5">
            <NuxtLink to="/">
              <img src="~/assets/icons/arrow-down-yellow.png" class="h-5 w-6" />
            </NuxtLink>
          </span>
          <div ref="answer" class="paa-answer text-headblue text-2xl"
            :class="{ block: item.active, hidden: !item.active }">
            {{ item.answer }}
          </div>
        </li>
      </ul>
    </div>

    <!-- reporte semanal in reference
    <div class="w-9/12 mx-auto my-14">
      <ul class="border-blue">
        <li class="" v-for="(day, index) in days" :key="index">
          <div class="block w-full border-blue h-12">
            <div class="flex">
              <span class="carret-down mt-5 mr-5"></span>
              <span class="uppercase pt-2.5 text-blue text-lg">
                REPORTE <span class="font-bold">{{ day.name }}</span>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div> -->

    <div class="w-9/12 mx-auto mb-10 mt-16">
      <p class="font-bold text-3xl text-headblue uppercase">COMENTARIOS DESTACADOS</p>
      <div class="flex mt-10">
        <span class="bg-skyblue">
          <NuxtLink to="/">
            <img src="~/assets/icons/comment-white.png" class="h-6 w-6 block mx-2 mt-2 mb-1" />
          </NuxtLink>
        </span>
        <span class="bg-headblue font-bold text-white text-center w-64 pt-1.5">
          Nombre Usuario
        </span>
      </div>
      <div class="px-10 bg-midgrey rounded-sm text-justify relative mb-10">
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
        <div class="border-t border-textgr h-10 mb-10">
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
      <div class="relative h-10 mb-10 mt-12">
        <div class="commentbox absolute right-0 rounded-sm flex px-10 w-72 h-10 bg-orangee">
          <NuxtLink to="/">
            <img src="~/assets/icons/comment-white.png" class="h-6 w-6 block mt-2 mr-4" />
          </NuxtLink>
          <span
            class="bg-white rounded-full text-black white-circle my-1 p-1 mx-2 text-center font-bold text-xs">525</span>
          <span class="font-bold text-sm text-white text-center mt-2.5">
            COMENTARIOS
          </span>
        </div>
      </div>
    </div>


  </div>
  <Footer />
</template>

<style>
.commentbox {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}

.paa-item.active .paa-answer {
  display: block;
}

.paa-list {
  border-top: 1px solid #1C496B;
  border-bottom: 2px solid#1C496B;
}

.paa-item {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.paa-question {
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color .25s ease-in-out;
}

.paa-question:hover {
  background-color: #ccd9e3;
}
</style>