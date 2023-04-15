<script setup>
</script>

<template>
    <div>
        <div class="overflow">
            <Header />
            <Videohead />
        </div>
        <div class="flex justify-center pt-24">
  <div class="aspect-w-16 aspect-h-9">
    <iframe width="1010" height="498"
src="https://www.youtube.com/embed/1HZaBYXRc8s?autoplay=0&mute=0">
</iframe>
  </div>
</div>
        </div>
    <div>
    <div class="gallery mx-auto w-9/12 p-10">
    <p>8:00 AM</p>
    <div class="gallery-row">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    </div>
    <div class="gallery-row">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    </div>
    <div class="gallery-row">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    </div>
    </div>
    <div class="gallery mx-auto w-9/12 p-10">
    <p class="pt-5">9:00 AM</p>
    <div class="gallery-row">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    </div>
    <div class="gallery-row">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    </div>
    <div class="gallery-row">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    <img src="~assets/thumbnails/beach.png" alt="Image 11" class="gallery-item">
    </div>
    </div>
    </div>

        <Footer />

</template>
<style>
.gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.gallery-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.gallery-item {
  width: calc(20% - 8px);
  /* Subtract 8px (2 * 4px gap) from 20% to account for gaps between items */
  height: auto;
}
</style>