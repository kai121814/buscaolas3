<script setup>
const club = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<template>
    <div class="overflow-y-hidden">
      <client-only>
        <Clubhead />
        <div class="mx-auto w-11/12">
          
        </div>
      </client-only>
    </div>

    
    <Contactofoot />
    <Footer/>
</template>
