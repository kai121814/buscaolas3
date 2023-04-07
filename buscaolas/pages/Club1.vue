<script setup>
const club = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<template>
  <div>
    <div class="overflow-x-hidden">
      <client-only>
        <Header />
        <div class="mx-auto w-11/12">
          <div
            id="carouselExampleCaptions"
            class="relative"
            data-te-carousel-init
            data-te-carousel-slide
          >
            <div
              class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-te-carousel-indicators
            >
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="0"
                data-te-carousel-active
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="1"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="2"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              ></button>
            </div>
            <div
              class="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
            >
              <div
                class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active
                data-te-carousel-item
                style="backface-visibility: hidden"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                  class="block w-full"
                  alt="..."
                />
                <div
                  class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
                >
                  <h5 class="text-xl">First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                style="backface-visibility: hidden"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                  class="block w-full"
                  alt="..."
                />
                <div
                  class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
                >
                  <h5 class="text-xl">Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                style="backface-visibility: hidden"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                  class="block w-full"
                  alt="..."
                />
                <div
                  class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
                >
                  <h5 class="text-xl">Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="prev"
            >
              <span class="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Previous</span
              >
            </button>
            <button
              class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="next"
            >
              <span class="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Next</span
              >
            </button>
          </div>
        </div>
      </client-only>
    </div>

    <div class="grid grid-cols-3 gap-5 mx-auto w-11/12 pt-8 pb-8">
      <div class="border" v-for="(c, i) in club" :key="i">
        <img
          src="~/assets/thumbnails/image.jpg"
          class="object-cover h-48 w-full ..."
        />
        <a
          href="#"
          class="block w-full p-6" style="background-color: #F0F0F0;"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-dark-grey text-center pb-2"
          >
            ESCUELA TURIMOS LOS LOBOS
          </h5>

          <div class="flex justify-center">
            <button
              class="text-skyblue font-bold py-2 px-4 border border-skyblue uppercase"
            >
              B e n e f i c i o s
            </button>
          </div>
        </a>
      </div>
    </div>

    <div class="flex bg-gradient-to-br from-blue-900 to-teal-500 text-white">
      <div class="lg:w-5/12">
        <img
          src="~/assets/thumbnails/club-surf.png"
          class="object-cover h-auto w-auto"
        />
      </div>
      <div class="lg:w-7/12 pl-10 pr-96 pt-14 pb-6 text-3xl">
        <p class="w-7/12">
          <span class="font-bold">¿QUIERES SER PARTE DEL CLUB BUSCAOLAS? </span>
        </p>

        <p class="uppercase text-2xl pt-2">
          <span class="font-bold">¡Únete</span> y muestrate a miles de usuarios!
        </p>
        <div class="button flex items-center uppercase">
        <button class="bg-orangee text-white border border-orangee uppercase text-sm p-2 px-8 font-bold" style="letter-spacing: 0.25em;">
          Contacto
        </button>
        </div>

        
      </div>
    </div>
  </div>
</template>
