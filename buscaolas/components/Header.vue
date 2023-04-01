<script setup>
</script>

<template>
    <div class="bg-cyan-950 h-12 relative z-50">
        <div class="flex mx-auto w-9/12">
            <span class="w-full lg:w-auto lg:mt-3 mt-2.5 lg:ml-0 ml-8">
                <NuxtLink to="/">
                    <img src="~/assets/logo/BuscaolasLogo1.png">
                </NuxtLink>
            </span>
            <span class="lg:flex lg:static absolute z-10 w-full uppercase text-center text-2xl lg:text-sm text-white lg:my-auto menu mt-10 lg:pt-0 pt-5 pb-5" :class="[toggleMenu ? 'block' : 'hidden']">
                
            </span>
        </div>
        
    </div>
</template>