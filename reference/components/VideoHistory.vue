<template>
    <video ref="videoPlayer" class="video-js vjs-16-9 visual"></video>
</template>

<script>
import { mapGetters} from 'vuex';
import videojs from "video.js";
import 'assets/skins/shaka/videojs.min.css';

if (process.client) {
  require('~/static/js/nuevo.js')
  require('~/static/js/vroll.js')
}
export default {
    props: {
        source: String,
        camera_num: Number,
        chapters: String,
        triggerSource: String,
        source_hd: String
    },
    data () {
        return {
            htmlVideo: '',
            actionv: null,
            offsetv: '12'
        }
    },
    mounted () {
                var videojs_options = {
                    controls: true,
                    preload: "auto",
                    playsinline: true,
                    language: 'es',
                    crossorigin: "anonymous",
                    poster: "https://media-buscaolas.s3.sa-east-1.amazonaws.com/videos/historial_poster.png",
                    sources: [
                        {
                            src: this.source,
                            type: "application/x-mpegURL",
                            res: "SD",
                            label: "SD"
                        }
                    ]
                    }
                var nuevo_options = {
                    rateMenu: false,
                    zoomMenu: true,
                    zoomInfo: true,
                    zoomWheel: true,
                    videoInfo: true,
                    chapterMarkers:true,
                    infoDescription: this.htmlVideo
                };
        this.player = videojs(
            this.$refs.videoPlayer,
            videojs_options,
              // function onPlayerReady() {
              //   console.log("onPlayerReady", this);
              // }
              );
        this.player.nuevo(nuevo_options);

        var chapters = [{kind:"chapters", src:this.chapters, srclang:"es"}];
        this.player.on('loadeddata', function(){
            this.loadTracks(chapters);
        });
    },
        beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser', 'IsPremium'])
    },
    watch: {
        source(newSource, oldsource){
            const new_video = {
                sources: [
                    {
                        src: newSource,
                        type: "application/x-mpegURL",
                    },
                ]
            }
            var chapters = [{kind:"chapters", src:this.chapters, srclang:"es"}];
            this.player.on('loadeddata', function(){
            this.loadTracks(chapters);
            });
            this.player.changeSource(new_video)
        }
    },
}
</script>