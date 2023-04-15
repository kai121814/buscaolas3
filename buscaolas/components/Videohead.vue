<script setup>
</script>

<template>
  <div class="flex w-11/12">
    <div class="leftblue bg-gradient-to-br from-headblue to-botgr">
    </div>

    <div class="headtext text-3xl uppercase text-[#1C496B] font-bold text-center pt-10">
      <NuxtLink to="/">
        <img src="~/assets/logo/ellipse.png" class="m-auto pb-5">
      </NuxtLink>
      <p>ESCUELA DE TURISMO LOS LOBOS</p>
      <p class="font-black">LA BOCA</p>
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-neutral-300 dark:hover:bg-neutral-500 dark:focus:ring-stone-900" type="button">F E C H A <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
<br>
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-neutral-300 dark:hover:bg-neutral-500 dark:focus:ring-stone-900" type="button">C A M A R A <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

    </div>

    <div class="w-full">
      <img src="~/assets/thumbnails/contacto-surf.png" class="object-cover h-full w-full image" />
    </div>

    <div class="rightblue bg-gradient-to-br from-headblue to-botgr">
    </div>
    
  </div>
</template>

<style>
.leftblue {
  width: 30%;
  border-radius: 100px 0px 0px 0px;
  transform: rotate(-180deg);
}

.headtext {
  width: 50%;
}

.image {
  width: 100%;
  border-radius: 0px 0px 0px 100px;
}

.rightblue {
  width: 30%;
}
</style>