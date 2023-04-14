<script setup>
</script>

<template>
    <div class="bg-cyan-950 h-12 relative z-50">
        <div class="flex mx-auto w-9/12">
            <span class="w-full lg:w-auto lg:mt-3 mt-2.5 lg:ml-0">
                <NuxtLink to="/">
                    <img src="~/assets/logo/BuscaolasLogo1.png">
                </NuxtLink>
            </span>
            <span class="text-center uppercase text-white lg:flex lg:static absolute z-10 w-full text-2xl lg:text-sm lg:my-auto menu mt-10 lg:pt-0 pt-5 pb-5" :class="[toggleMenu ? 'block' : 'hidden']">
                <ul class="w-full justify-evenly lg:flex lg:px-0 mt-0" 
                    :class="menuMobile ? 'px-0':'px-7'">
                    <li class="relative lg:py-0 lg:pt-2.5 lg:pb-2.5 lg:border-0 border-b border-white">
                        <span class="nav">
                        <div class="lg:block hidden">
                            <NuxtLink to="/" class="font-bold lg:pt-2.5 lg:h-10">
                            Playas
                            </NuxtLink>
                            <ul class="text-xs-1 bg-blue absolute text-center text-white whitespace-nowrap uppercase z-10 py-3 px-5 subnav --ml">
                            <li class="py-1.5" 
                                v-for="item in MenuData" 
                                :key="item.path">
                                <NuxtLink :to="'/' + item.path">
                                    {{item.nombre}}
                                </NuxtLink>
                            </li>
                            </ul>
                        </div>
                        <div class="lg:hidden block">
                            <h1 class="font-bold lg:pt-2.5 lg:pb-0 pb-3 lg:h-10" @click="menuMobile = !menuMobile">
                            Playas
                            </h1>
                            <ul class="text-xs-1 bg-blue text-center text-white whitespace-nowrap uppercase z-10 px-5 lg:mb-0 mb-10" v-if="menuMobile">
                            <li class="py-1.5" 
                                v-for="item in MenuData" 
                                :key="item.path">
                                <NuxtLink :to="'/' + item.path">
                                    {{item.nombre}}
                                </NuxtLink>
                            </li>
                            </ul>
                        </div>
                        </span>
                    </li>
                    <li class="relative lg:py-0 pt-2.5 pb-2.5 lg:border-0 border-b border-white" v-if="isAuthenticated">
                        <span class="nav">
                        <span class="font-bold lg:pt-2.5 lg:h-10 block">ALERTAS</span>
                        <ul class="text-xs-1 bg-blue absolute text-white whitespace-nowrap uppercase z-10 -ml-12 py-5 subnav" style="padding:0!important;">
                            <li v-for="(alert, index) in alerts_info" :key="alert.playa_name" class="px-5">
                            <div class="flex items-center w-full pt-2" @click="GetAlert(index)">
                                <label :for="'toggle' + index" class="flex items-center cursor-pointer">
                                <div class="relative">
                                    <input type="checkbox" :id="'toggle_' + index" class="sr-only">
                                    <div class="block bg-white w-7 h-4 rounded-full"></div>
                                    <div class="absolute left-0.5 top-0.5 w-3 h-3 rounded-full transition" :class="{'dot': alert.user, 'bg-gray': !alert.user}"></div>
                                </div>
                                <div class="ml-3 mt-0.5">
                                    {{alert.playa_name}}
                                </div>
                                </label>
                            </div>
                            </li>
                        </ul>
                        </span>
                    </li>
                    <li class="lg:py-0 pt-2.5 pb-2.5 lg:border-0 border-b border-white">
                        <span class="nav">
                        <NuxtLink to="/" class="font-bold lg:pt-2.5 lg:h-10 block">
                            NoticiAS
                        </NuxtLink>
                        </span>
                    </li>
                    <li class="lg:py-0 pt-2.5 pb-2.5 lg:border-0 border-b border-white">
                        <span class="nav">
                        <NuxtLink to="/" class="font-bold lg:pt-2.5 lg:h-10 lg:block hidden">
                            EL CLUB
                        </NuxtLink>
                        <NuxtLink to="/" class="font-bold lg:pt-2.5 lg:h-10 lg:hidden block">
                            club buscaolas
                        </NuxtLink>
                        </span>
                    </li>
                    <li class="lg:py-0 pt-2.5 pb-2.5 lg:border-0 border-b border-white">
                        <span class="nav">
                        <NuxtLink to="/" class="font-bold lg:pt-2.5 lg:h-10 block">
                            Nosotros
                        </NuxtLink>
                        </span>
                    </li>
                    <li class="lg:py-0 pt-2.5">
                        <span class="nav">
                        <NuxtLink to="/" class="font-bold lg:pt-2.5 lg:h-10 block">
                            CONTACTO
                        </NuxtLink>
                        </span>
                    </li>
                </ul>
                <NuxtLink to="/" class="block mx-auto whitespace-nowrap lg:mr-20 lg:ml-15 yellow-bg text-white text-xs-1 lg:h-7 h-10 lg:w-36 w-52 shadow font-bold lg:font-normal text-center tracking-widest-1 text-blue-green rounded-sm lg:px-1 px-4 lg:py-auto py-1 lg:mt-2.5 mt-16 uppercase" v-if="!isAuthenticated">
                    hazte premium
                </NuxtLink>
                <button v-if="!isAuthenticated" @click="OpenLogin()"  class="block mx-auto text-base text-center tracking-widest-1 uppercase text-white whitespace-nowrap lg:hidden border border-white rounded-sm edit-profile px-5 py-2 mt-8">
                <span class="font-bold">Iniciar</span> Sesion</button>
                <img src="~/assets/icons/Group35.png" class="block mx-auto my-auto lg:mt-2.5 mt-16">
            </span>
        </div>
        
    </div>
</template>


<style lang="scss" scoped>
  .dot {
    transform: translateX(100%);
    background-color: #FFA800;
  }
  .nav {
    .subnav{
      display: none;
    }
    &:hover {
      color: #FFA800;
      .subnav{
        display: block;
      }
    }
  }
  a {
    color: #ffffff!important;
    text-decoration: none!important;
  }
  ul {
    margin: 0!important;
  }
  .nav:hover .subnav {
    display: block;
  }
  .text-xs-1 {
    font-size: 10px;
  }
  .bg-blue {
    background: #1C496B;
  }
  .text-yellow {
    color: #FFA800;
  }
  .yellow-bg {
    background: #FFA800;
  }
  .yellow-D{
    background: #FFA800;
  }
  .bg-gray {
    background: #3C3C3B;
  }
  .fa-bars {
    font-size: 60px;
  }
  .edit-profile {
    background: #00A99D;
  }
  .--ml{
    margin-left: -45px!important;
  }
  @media only screen and (max-width: 1023px) {
    .yellow{
      background: #00A99D;
    }
    .yellow-D{
      background: #00A99D;
    }
    .menu {
      background: #00A99D;
    }
    .text-xs-1 {
      font-size: 15px;
    }
    .text-xs-2 {
      font-size: 10px;
    }
    .tracking-widest-1 {
      letter-spacing: 0.25em;
    }
    .text-blue-green {
      color: #00A99D;
    }
    .yellow-bg {
      background: #FFFFFF;
      color:#1C496B !important;
    }
  }
</style>