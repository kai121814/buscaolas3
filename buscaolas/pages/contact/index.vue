<script setup>
</script>

<template>
    <div class="overflow-x-hidden">
        <Header/>
        <Contactohead/>
        <div class=" flex mx-auto w-fit" >
          <div class="pb-20 pt-10">
          <form class="text-center items-center">
            <label for="base-input" class="inline-block text-sm font-normal text-textgr pr-2.5 pb-7">Nombre</label>
            <input type="text" id="base-input" class=" text-sm font-normal rounded-sm inline-block p-2.5 bg-gray-200 border-gray-100 text-textgr " style="width:200px;">
            <label for="base-input" class="inline-block text-sm font-normal text-textgr pr-2.5 pl-8">Correo Eléctronico</label>
            <input type="text" id="base-input" class="text-sm font-normal rounded-sm inline-block p-2.5 bg-gray-200 border-gray-100 text-textgr" style="width:244px;"><br>
            
            <label for="base-input" class=" inline-block text-sm font-normal text-textgr pr-2.5 pl-2 pb-7">Asunto</label>
            <input type="text" id="base-input" class="text-sm font-normal rounded-sm p-2.5 bg-gray-200 border-gray-100 text-textgr" style="width:600px;"><br>

            <label for="base-input" class="inline-block text-sm font-normal text-textgr pr-2.5">Mensaje</label>
            <input type="text" id="base-input" class="text-sm font-normal rounded-sm p-2.5 bg-gray-200 border-gray-100 text-textgr h-32" style="width:600px;"> <br>
            
            <div class="flex justify-center mt-10 pl-80">
            <button
              class="inline-block w-40 h-10 text-sm text-skyblue font-bold border border-skyblue uppercase hover:bg-gray-200" style="letter-spacing: 0.25em;"
            >
            <img src="~/assets/icons/leftarrowskyblue.png" class="inline-block pr-3">
              Volver
            </button>

            <button
              class="w-40 h-10 text-sm text-white font-bold border border-skyblue bg-skyblue  hover:bg-orangee uppercase ml-5" style="letter-spacing: 0.25em;"
            >
              Enviar
            </button>
          </div>
          </form>
        </div>
        
    </div>
        <Contactofoot/>
        <Footer/>
    </div>
  </template>
  


<style>
</style>