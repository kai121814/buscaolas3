<script setup>
    const route = useRoute();
</script>

<template>
  <div>
    {{ route.params.students }}
    <div>
      <h1>list of students</h1>
      <ul class="md:grid lg:grid-cols-3 md:grid-cols-2 lg:w-full  border border-red w-11/12 mx-auto">
        <li class="lg:w-32 lg:h-10 mx-auto border mb-3 p-2 lg:whitespace-nowrap">sdkljhfkdshfkjhjds fjkdshjfjklhdskjfh sfskdhjfkldshjklfhjsdlk jkdfgjlkdsjlkd</li>
        <li class="lg:w-32 lg:h-10 mx-auto border mb-3 p-2">B</li>
        <li class="lg:w-32 lg:h-10 mx-auto border mb-3 p-2">C</li>
        <li class="lg:w-32 lg:h-10 mx-auto border mb-3 p-2">D</li>
        <li class="lg:w-32 lg:h-10 mx-auto border mb-3 p-2">D</li>
        <li class="lg:w-32 lg:h-10 mx-auto border mb-3 p-2">D</li>
        <li class="lg:w-32 lg:h-10 mx-auto border mb-3 p-2">D</li>
        <li class="lg:w-32 lg:h-10 mx-auto border mb-3 p-2">D</li>
        <li class="lg:w-32 lg:h-10 mx-auto border mb-3 p-2">D</li>
        <li class="lg:w-32 lg:h-10 mx-auto border mb-3 p-2">D</li>
      </ul>
    </div>
  </div>
</template>