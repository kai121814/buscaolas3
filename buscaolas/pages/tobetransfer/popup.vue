<script setup>
const isOpen = ref(false);
</script>

<template>
    <div class="w-full mx-auto justify-center">
        <button @click="isOpen = true">Register</button>
        <div v-if="isOpen" class="modal">
            <div class="modal-content">
                <span class="close" @click="isOpen = false">&times;</span>
                <div class="modal-image">
                    <img src="~/assets/thumbnails/contacto-surf.png" alt="surf">
                </div>

                <div class="bg-gradient-to-br from-[#1C496BE5] to-[#00A99DE5] h-full">
                    <div class="text-white pt-8 px-4" style="box-sizing: border-box;">
                        <div class="text-3xl font-bold uppercase text-center">REGISTRATE y hazte premium</div>
                        <span class="text-xl block mt-2 mb-5" style="text-align: center;">
                            <span class="uppercase underline underline-offset-8 decoration-4">Para que</span> cada sesión
                            valga la pena
                        </span>
                        <div class="w-9/12 mx-auto" style="text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's text...</div>
                    </div>
                    
                    <form class="mx-auto w-2/3" style="box-sizing: border-box; padding-bottom: 80px;">
                        <div class="form-group">
                            <input class="bg-white placeholder-black w-full uppercase text-center py-2" type="text"
                                id="Ingresa el código acá" name="Ingresa el código acá" placeholder="Ingresa el código acá">
                        </div>
                        <div class="form-group">
                            <input class="bg-white placeholder-black w-full uppercase text-center py-2" type="text"
                                id="Ingresa el código acá" name="Ingresa el código acá" placeholder="Ingresa el código acá">
                        </div>
                        <div class="form-group">
                            <input class="bg-white placeholder-black w-full uppercase text-center py-2" type="text"
                                id="Ingresa el código acá" name="Ingresa el código acá" placeholder="Ingresa el código acá">
                        </div>
                        <div class="form-group">
                            <input class="bg-white placeholder-black w-full uppercase text-center py-2" type="text"
                                id="Ingresa el código acá" name="Ingresa el código acá" placeholder="Ingresa el código acá">
                        </div>
                        <div class="form-group">
                            <input class="bg-white placeholder-black w-full uppercase text-center py-2" type="text"
                                id="Ingresa el código acá" name="Ingresa el código acá" placeholder="Ingresa el código acá">
                        </div>
                        <div class="form-group">
                            <input class="bg-white placeholder-black w-full uppercase text-center py-2" type="text"
                                id="Ingresa el código acá" name="Ingresa el código acá" placeholder="Ingresa el código acá">
                        </div>
                        <div class="form-group">
                            <input class="bg-white placeholder-black w-full uppercase text-center py-2" type="text"
                                id="Ingresa el código acá" name="Ingresa el código acá" placeholder="Ingresa el código acá">
                        </div>
                        <div class="form-group text-center mt-5">
                            <button type="submit" class="uppercase text-white py-2 px-8 bg-[#00A99D] rounded">
                                Continuar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
.form-group {
    margin-bottom: 10px;
}

.modal {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: white;
    height: auto;
    margin: auto;
    justify-content: center;
    border: 1px solid #888;
    width: 40%;
}

.close {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    width: 9/12;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
