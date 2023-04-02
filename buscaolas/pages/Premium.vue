<script setup>
</script>

<template>
    <Header />
        <ClientOnly>
            <div class="bg-neutral-200">
                <div class="bg-white drop-shadow-xl">
                    <div class="flex mx-auto w-9/12">
                        <div class="w-full flex lg:py-7 py-10">
                            <img src="~/assets/icons/D-Green.png">
                            <NuxtLink to="/" class="block mx-auto" v-if="!isAuthenticated">
                                <img src="~/assets/icons/Button1.png">
                            </NuxtLink>   
                        </div>
                        <div class="w-full flex">
                             <button class="border-inherit text-center">VOLVER</button>
                        </div>                
                    </div>
                </div>
                <div class="flex mx-auto w-9/12">
                    Text
                </div>
            </div>
        </ClientOnly>
</template>