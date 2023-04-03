<script setup>
</script>

<template>
    <Header />
            <div class="bg-neutral-200">
                <div class="bg-white drop-shadow-xl">
                    <div class="flex mx-auto w-9/12">
                        <div class="w-full flex lg:py-7 py-10">
                            <img src="~/assets/icons/D-Green.png">
                            <NuxtLink to="/" class="block mx-auto" v-if="!isAuthenticated">
                                <img src="~/assets/icons/Button1.png">
                            </NuxtLink>   
                        </div>
                        <div class="w-full flex mx-auto">
                             <button type="button" class="font-bold text-center bg-white text-black mx-auto">VOLVER</button>
                             <button type="button" class="text-center bg-white text-red-500 mx-auto">CERRAR SESIÓN</button>
                        </div>                
                    </div>
                </div>
                <div class="flex mx-auto w-9/12">
                    <div class="flex mx-auto w-full">
                        <div class="w-full flex lg:py-7 py-10 bg-black items-center justify-center h-screen">
                            <form action="/" class="max-w-md w-full bg-white">
                                <p class="font-bold uppercase">cambiar contraseña</p>
                                <div>
                                    <input type="actual-contraseña" id="actual-contraseña" name="actual-contraseña" value="actual-contraseña"><br>
                                </div>
                                <div>
                                    <input type="text" id="lname" name="lname" value="Doe">
                                </div>
                                <div>
                                    <input type="submit" value="Submit">
                                </div> 
                            </form> 
                        </div>
                        <div class="w-full flex mx-auto">
                             <button type="button" class="font-bold text-center bg-white text-black mx-auto">VOLVER</button>
                             <button type="button" class="text-center bg-white text-red-500 mx-auto">CERRAR SESIÓN</button>
                        </div>                
                    </div>
                </div>
            </div>
</template>