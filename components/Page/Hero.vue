<template>
    <div class="container">

<section
class="section-hero container pt-20 mx-auto flex flex-col md:flex-row justify-between items-center lg:h-screen relative w-full px-4 md:py-20 lg:py-0"
>
  <div class="flex flex-col md:flex-nowrap lg:flex-row ">
    <div class="text-xl md:text-3xl my-5 lg:basis-1/2 leading-7">
      <p class="text-[#63B4FF] text-3xl md:text-4xl">SISTEM INFORMASI</p>
      <p class="text-[#606060]">UNIVERSITAS SILIWANGI</p>
      <div class="bg-[#FFC700] h-1 w-5/6 my-5 rounded-full"></div>
      <p class="text-sm md:text-lg mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        expedita nulla, nisi doloremque reprehenderit, sit illo error
        quisquam magnam eveniet consectetur suscipit delectus quo
        repellendus possimus inventore aperiam quaerat non!
      </p>
      <NuxtLink to="/activity" class="text-lg text-white bg-[#63B4FF] py-1.5 px-3 rounded-md  hover:bg-sky-500">Si News</NuxtLink>
    </div>
    <div class="max-w-full md:w-5/12 feature-image-box mt-5 relative">
      <div class="globe opacity-30">
          <div class="globe-item globe-item__primary rounded-full absolute z-10 w-[100px] h-[100px] bg-gradient-to-tr from-green-400 to-green-600 lg:w-96 lg:h-96"></div>
          <div class="globe-item globe-item__warning rounded-full absolute z-10 hidden md:block md:w-96 md:h-96 bg-gradient-to-tr from-yellow-500 to-yellow-300"></div>
          <div class="globe-item globe-item__success rounded-full absolute z-10 w-60 h-60 md:w-96 md:h-96 bg-gradient-to-tr from-sky-500 to-sky-300"></div>
          <div class="globe-item globe-item__danger rounded-full absolute z-10 hidden md:block md:w-[300px] md:h-[300px] bg-gradient-to-tr from-red-300 to-red-500"></div>
        </div>


<div
class=" md:mx-20 w-full min:h-[200px] relative rounded-2xl border-8 border-white border-opacity-30 dark:border-opacity-70 dark:border-black/30 bg-white dark:bg-gray-900 backdrop-blur bg-opacity-10 dark:bg-opacity-20 shadow-2xl dark:shadow-2xl group hover:cursor-pointer mb-12 overflow-hidden"
>
<div class="h-full w-full relative ">
  <img
    src="@/assets/image/banner.jpg"
    
  >
  <div
    class="overlay absolute top-0 right-0 bottom-0 left-0 bg-gray-900 grid place-items-center text-white bg-opacity-40 group-hover:bg-opacity-80 duration-300 backdrop-blur-[0px] group-hover:backdrop-blur-[5px] z-10"
  >
    <div class="flex flex-col items-center">
   
      <a
       
        class="text-white -translate-y-5 scale-0 group-hover:scale-100 group-hover:-translate-y-0 transition-all duration-300"
        >Sistem Informasi 2023🔥🔥</a
      >
    </div>
  </div>
</div>
<div
  class="p-4 w-full bg-white dark:bg-black/50 text-center flex justify-center bg-opacity-60 z-20"
>
  <a
    class="text-xl"
    href="https://www.youtube.com/@jahiddev?sub_confirmation=1"
  >
   
  </a>
</div>
</div>
</div>
  </div>
</section>
</div>
</template>
<script setup>

</script>
<style>
    

    .globe-item__primary {
  top: -15%;
  left: -10%;
}
.globe-item__success {
  left: 10%;
  bottom: -35%;
}
.globe-item__warning {
  right: -15%;
  bottom: -10%;
}
.globe-item__danger {
  right: -10%;
  top: -15%;
}

.globe-item {
  @apply blur-3xl;
}

.globe-item:nth-child(1) {
  animation: blob 5s ease infinite;
}

.globe-item:nth-child(2) {
  animation: blob 5s ease infinite 1s;
}

.globe-item:nth-child(3) {
  animation: blob 5s ease infinite 2s;
}

.globe-item:nth-child(4) {
  animation: blob 5s ease infinite 3s;
}
@keyframes blob {
  0% {
    transform: scale(1) translate(0);
  }
  33% {
    transform: scale(1.1) translate(20px, 20px);
  }
  66% {
    transform: scale(0.9) translate(-20px, -20px);
  }
  100% {
    transform: scale(1) translate(0);
  }
}

</style>