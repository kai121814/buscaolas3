<template>
  <div>
    <Header />
    <div class="flex flex-col">
      <div class="hero gradient-color w-full">
        <div class="hero-container flex mx-auto lg:w-10/12">
          <div class="bg-white lg:w-1/2">
            <div
              class="
                curved-corner-topright
                bottom-0
                absolute
                lg:visible
                invisible
              "
            ></div>
            <div class="headline-box lg:mt-10 lg:ml-10 lg:mr-10">
              <div
                class="
                  flex
                  text-xs
                  lg:visible
                  invisible
                  h-0
                  lg:h-auto lg:w-auto
                  w-0
                  uppercase
                  leading-8
                  text-2xl
                  font-light
                "
              >
               {{VideosData.playa.nombreescuela}}
              </div>
              <div
                class="
                  uppercase
                  headline
                  font-black
                  lg:visible
                  invisible
                  h-0
                  lg:h-auto
                  text-dark-blue
                "
              >
                 {{VideosData.playa.nombre}}
              </div>
              <div class="lg:w-auto w-screen pt-5 pb-4 lg:pt-0 lg:pb-0">
                <div
                  class="text-center uppercase sub-text lg:mt-10 lg:mb-2 mb-3"
                >
                  <span class="font-bold label">Selecciona</span> la fecha
                </div>
                <select
                  name="fecha"
                  class="
                    block
                    mx-auto
                    lg:mx-0
                    rounded-sm
                    text-center
                    px-3
                    uppercase
                    favoritos
                  "
                   v-model="filterBy"
                >
                  <option v-for="(day, index) in VideosData.videos" :key="index"  :value="day.date">{{$moment(day.date).format('LL')}}</option>
                </select>
              </div>
            </div>
          </div>
          <div
            class="
              w-1/2
              float-right
              rounded-tr-full
              image-container
              lg:visible
              invisible
            ">
            <img
              src="~/static/img/banner/Rectangle194-2.png"
              class="image-banner"
            />
          </div>
        </div>
      </div>
      <div class="md:w-9/12 mx-auto lg:pt-16 w-full grid lg:grid-cols-2">
        <div><VideoHistory :source="filterData[0].url_video" :chapters="filterData[0].url_chapters" /></div>
        <div> <VideoHistory :source="filterData[0].url_video_primium" :chapters="filterData[0].url_chapters_premium" v-if="filterData[0].url_video_primium" /></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
  middleware: 'auth',
  data() {
    return {
      url: null,
      filterBy: null,
      button: null,
      DataFiltered: null
    }
  },
  async asyncData({ $axios, params}) {
    if (params.slug) {
      const VideosData  = await $axios.$get(
        "/api/main/playa/history/" +
          params.slug
      );
    return { VideosData };
    }
  },
  methods: {
    PlayUrl(url){
      this.url = url
      window.scrollTo(0,0);
    },
    FilterAM(buttonclikde){
       if (buttonclikde == "AM") {
         this.button = "AM"
       } else {
         this.button = "PM"
       }
    }
  },
  computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser', 'IsPremium']),
        filterData(){
        if(this.filterBy){
        this.DataFiltered = this.VideosData.videos.filter((list) => {
          return list.date.match(this.filterBy)
        });
          console.log(this.DataFiltered)
          return this.DataFiltered 
        } else {
          return this.VideosData.videos
        }
      }
    },
};
</script>

<style lang="scss" scoped>
.gradient-color {
  background: linear-gradient(163.41deg, #1c496b 0%, #00a99d 100%);
  transform: rotate(-180deg);
  .hero-container {
    transform: rotate(180deg);
  }
}
.bg-gradient {
  background: linear-gradient(180deg, #000000 0%, rgba(196, 196, 196, 0) 100%);
  background-blend-mode: multiply;
}
.image-banner {
  display: block;
  width: 640px;
  height: 100%;
}
.image-container {
  margin: 0 0 0 -95px;
}
.bg-white {
  margin: 0 0 0 40px;
}
.text-dark-green {
  color: #1c496b99;
}
.calendar {
  background: url("~/static/img/icon/calendar.png");
  width: 20px;
  height: 20px;
}
.headline {
  letter-spacing: 0.1em;
  font-size: 36px;
  line-height: 46px;
}
.sub-text {
  font-size: 15px;
  line-height: 22px;
  color: #3c3c3b;
  letter-spacing: 0.25em;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: url("static/img/icon/flecha_der.png") no-repeat;
  background-size: 20px 12px;
  background-position: 85% 50%;
}
.favoritos {
  background-color: #e5e5e5;
  width: 319px;
  height: 40px;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.25em;
  color: #3c3c3b;
}
.headline-box {
  width: 319px;
}
.curved-corner-topright {
  width: 100px;
  height: 100px;
  overflow: hidden;
  background: none;
  transform: rotate(90deg);
  margin: 0 0 0 -99.5px;
}
.curved-corner-topright:before {
  content: "";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  border-radius: 50%;
  top: 0;
  right: 0;
  box-shadow: 50px -50px 0 0 #fff;
}
.comments {
  background: #00a99d;
  width: 91px;
  height: 40px;
}
.comment_icon {
  background-image: url("~/static/img/icon/comment_icon.png");
  width: 20px;
  height: 20px;
}
.bg-yellow {
  background: #ffa800;
}
.text-dark-blue {
  color: #1c496b;
}
.number {
  width: 51px;
  height: 40px;
}
.border-r {
  border-right: 1px solid #808080;
}
.label {
  font-size: 15px;
}
.download-icon {
  background-image: url("~/static/img/icon/fi-bs-download.png");
  width: 24px;
  height: 24px;
}
@media only screen and (max-width: 1023px) {
  .comments {
    width: 80px;
  }
  .curved-corner-topright {
    width: 0;
    height: 0;
  }
  .headline-box {
    width: 0;
  }
  .favoritos {
    width: 85vw;
    height: 30px;
    background-color: #fff;
    color: #3c3c3b;
  }
  .bg-white {
    margin: 0;
  }
  .image-banner {
    width: 0;
    height: 0;
  }
  .mobile-gradient-color {
    background: linear-gradient(163.41deg, #1c496b 0%, #00a99d 100%);
    background-blend-mode: multiply;
    transform: rotate(-180deg);
    .filter-box {
      transform: rotate(-180deg);
    }
  }
  .sub-text {
    color: #fff;
  }
  select {
    background-position: 95% 50%;
  }
}
</style>