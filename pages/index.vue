<script setup>
// import LayoutGuest from '@/layouts/LayoutGuest.vue'
// ...
</script>

<template>
  <div id="body" class="mx-5 py-28 lg:py-0 lg:mx-0">
    <NuxtLayout>
      <!-- Nav Tablet & PC -->
      <nav
        class="hidden md:flex fixed w-full md:h-20 lg:h-16 top-0 left-0 shadow z-10 justify-around items-center"
      >
        <img src="/silogo.png" class="w-13 h-13" />
        <ul
          class="flex justify-between active:text-[#63B4FF] md:gap-5 md:text-sm lg:text-md lg:gap-12 cursor-pointer"
        >
          <li><a href="/">Beranda</a></li>
          <li><a>Aktivias</a></li>
          <li><a>Acara</a></li>
          <li><a>Mahasiswa</a></li>
          <li><a>Masukkan</a></li>
        </ul>
        <div class="rounded-full focus:outline-none hover:bg-gray-800 bg-[#B4B4B4] md:flex items-center w-24 h-9">
          <button class="rounded-full w-8 h-7 bg-[#FFE500] mx-1"></button>
        </div>
      </nav>

      <!-- Nav Mobile -->
      <nav class="flex justify-around items-center fixed bg-white top-0 left-0 w-full h-16 md:hidden">
        <img src="/silogo.png" class="w-13 h-13" />
        <button class="group">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
          </svg>
          <div class="absolute my-3 -right-full w-full h-auto bg-white opacity-0 border transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul class="flex flex-col items-center w-full cursor-pointer">
                <li class="my-6"><a href="/">Beranda</a></li>
                <li class="my-6"><a>Aktivias</a></li>
                <li class="my-6"><a>Acara</a></li>
                <li class="my-6"><a>Mahasiswa</a></li>
                <li class="my-6"><a>Masukkan</a></li>
                 <div class="rounded-full focus:outline-none bg-gray-800 bg-[#B4B4B4] w-24 h-10">
                  <button class="rounded-full w-9 h-8 -ml-12 mt-1 bg-[#FFE500]"></button>
                </div>
              </ul>
          </div>
        </button>
      </nav>

      <!-- Main section -->
      <section class="container columns-1 md:px-24 lg:px-32 lg:my-20 lg:py-20">
        <div class="block lg:flex">
          <div class="text-xl md:text-3xl my-5 lg:basis-1/2">
            <p class="text-[#63B4FF] text-3xl md:text-4xl">SISTEM INFORMASI</p>
            <p class="text-[#606060]">UNIVERSITAS SILIWANGI</p>
            <div class="bg-[#FFC700] h-0.5 w-5/6 my-5 rounded-full"></div>
            <p class="text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              expedita nulla, nisi doloremque reprehenderit, sit illo error
              quisquam magnam eveniet consectetur suscipit delectus quo
              repellendus possimus inventore aperiam quaerat non!
            </p>
          </div>
          <img src="/img home.png" class="my-20 lg:my-0 lg:basis-1/2" />
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap");

#body {
  font-family: "Poppins", sans-serif;
}
</style>