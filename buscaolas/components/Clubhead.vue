<script setup>
</script>

<template>
  <div class="flex h-80">
    <div class="leftblue bg-gradient-to-br from-headblue to-botgr">
    </div>

    <div class="headtext lg:text-3xl uppercase text-textgr font-bold text-center pt-10">
      <NuxtLink to="/">
        <img src="~/assets/logo/ellipse.png" class="block m-auto pb-5">
      </NuxtLink>
      <p>ESCUELA DE SURF MAITENCILLO</p>
    </div>


    <div>
      <NuxtLink to="/">
      <img src="~/assets/thumbnails/contacto-surf.png" class="h-80 image" />
    </NuxtLink>
    </div>

    <div class="rightblue bg-gradient-to-br from-headblue to-botgr">
    </div>
  </div>
</template>

<style>
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