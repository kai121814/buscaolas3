<script setup>
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

      <div class="flex bg-orange-500 justify-center pt-2  rounded">
        <div><img src="~assets/icons/alerta.png" alt="alerta"></div>
        <div>
          <p class="text-white">INFO CAMARA EN REPARACIION</p>
        </div>
      </div>
    </div>
    <div class="flex mx-auto container w-9/12 py-10">
      <div class="actual border-t-2 border-orange-500 w-full items-center">
        <div class="flex">
          <div class=" bg-orange-500 px-5 text-white">
            Actualizacion
          </div>
          <div class="pl-5">
            Junio 28, 2021 14:00
          </div>
        </div>
        <div class="pt-10">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.esktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>

    <div class="flex mx-auto container w-9/12 py-10">
      <div class="actual border-t-2 border-orange-500 w-full items-center">
        <div class="flex">
          <div class=" bg-orange-500 px-5 text-white">
            Actualizacion
          </div>
          <div class="pl-5">
            Junio 28, 2021 10:00
          </div>
        </div>
        <div class="pt-10">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.esktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
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
          <img src="~assets/icons/audio.png" alt="audio">
          <div class="text-headblue text-2xl font-bold pl-2 border-headblue">CONDICIONES GENERALES</div>
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
        <div class="py-3 w-10/12">
          <div class="grid grid-cols-6 gap-x-1 gap-y-4">
            <div class="font-bold">Principiante</div>
            <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
            <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
            <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
            <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
            <div class="bg-gray-200 w-14 h-6 rounded-full"></div>

            <div class="font-bold">Intermedio</div>
            <div class="bg-blue-600 w-14 h-6 rounded-full"></div>
            <div class="bg-blue-600 w-14 h-6 rounded-full"></div>
            <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
            <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
            <div class="bg-gray-200 w-14 h-6 rounded-full"></div>

            <div class="font-bold">Avanzado</div>
            <div class="bg-blue-600 w-14 h-6 rounded-full"></div>
            <div class="bg-blue-600 w-14 h-6 rounded-full"></div>
            <div class="bg-blue-600 w-14 h-6 rounded-full"></div>
            <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
            <div class="bg-gray-200 w-14 h-6 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 w-9/12 mx-auto justify-center">
      <img class="mx-auto" src="~assets/thumbnails/tides.png" alt="tides">
      <img class="mx-auto" src="~assets/thumbnails/mareas.png" alt="mareas">
    </div>
    <hr class="w-9/12 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-neutral-900">
    <div class="grid grid-cols-2 gap-x-4 mx-auto w-9/12 pb-5">
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

    <div class="w-9/12 mx-auto pb-10">
      <hr class="h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-neutral-900">
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
          <div ref="answer" class="paa-answer text-headblue text-2xl"
            :class="{ block: item.active, hidden: !item.active }">
            {{ item.answer }}
          </div>
        </li>
      </ul>
    </div>

    <div class="w-9/12 mx-auto pb-10 mt-16">
      <p class="font-bold text-3xl text-headblue uppercase">COMENTARIOS DESTACADOS</p>
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