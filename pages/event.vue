<script setup>
// import LayoutGuest from '@/layouts/LayoutGuest.vue'
// ...
</script>

<template>
  <div id="body">
    <Head>
      <Title>Eternal Insight | Aktivitas</Title>
    </Head>
    <NuxtLayout>
      <!-- Nav Tablet & PC -->
      <nav
        class="hidden md:flex bg-white fixed w-full md:h-20 lg:h-16 top-0 left-0 shadow z-10 justify-around items-center"
      >
        <img src="/silogo.png" class="w-13 h-13" />
        <ul
          class="flex justify-between active:text-[#63B4FF] md:gap-5 md:text-sm lg:text-md lg:gap-12 cursor-pointer"
        >
          <li><a href="/">Beranda</a></li>
          <li><a href="/mahasiswa">Mahasiswa</a></li>
          <li><a href="/event">Aktivitas</a></li>
          <li><a href="/news">Berita</a></li>
          <li><a href="/contact">Masukkan</a></li>
        </ul>
        <div
          class="rounded-full focus:outline-none hover:bg-gray-800 bg-[#B4B4B4] md:flex items-center w-24 h-9"
        >
          <button class="rounded-full w-8 h-7 bg-[#FFE500] mx-1"></button>
        </div>
      </nav>

      <!-- Nav Mobile -->
      <nav
        class="flex justify-around items-center fixed bg-white top-0 left-0 w-full h-16 z-40 md:hidden"
      >
        <img src="/silogo.png" class="w-13 h-13" />
        <button class="group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
          >
            <path
              d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"
            ></path>
          </svg>
          <div
            class="absolute my-3 -right-full w-full h-auto bg-white opacity-0 border transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
          >
            <ul class="flex flex-col items-center w-full cursor-pointer">
              <li class="my-6"><a href="/">Beranda</a></li>
              <li class="my-6"><a href="/mahasiswa">Mahasiswa</a></li>
              <li class="my-6"><a href="/event">Aktivitas</a></li>
              <li class="my-6"><a href="/news">Berita</a></li>
              <li class="my-6"><a href="/contact">Masukkan</a></li>
              <div
                class="rounded-full focus:outline-none bg-gray-800 bg-[#B4B4B4] w-24 h-10"
              >
                <button
                  class="rounded-full w-9 h-8 -ml-12 mt-1 bg-[#FFE500]"
                ></button>
              </div>
            </ul>
          </div>
        </button>
      </nav>


      <section class="container py-20">
        <div class="grid justify-items-center">
          <p class="text-2xl text-[#63B4FF]">Aktivitas</p>
          <div
            class="bg-[#FFC700] h-1 w-5/6 my-5 md:w-[568px] rounded-full"
          ></div>
        </div>
        <div
          class="grid justify-items-center md:flex md:gap-0 md:w-5/6 md:m-auto py-5 gap-5"
        >
          <div
            class="h-auto w-4/5 md:w-full md:basis-1/2 md:w-5/6 bg-[#858585] rounded-lg md:rounded-none md:rounded-l-lg"
          >
            <div
              class="text-white grid justify-items-center text-center md:justify-items-start md:text-left md:m-5 lg:w-1/2 lg:h-24 lg:my-10 lg:m-auto"
            >
              <p class="text-lg">Aktivitas 1</p>
              <p class="text-xs mx-3 md:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                culpa asperiores esse incidunt, in et odit saepe cupiditate
                similique praesentium obcaecati! Ut molestias odio a,
                perspiciatis eveniet at iste sunt!
              </p>
              <div class="bg-white h-1 w-5/6 my-5 lg:w-full rounded-full"></div>
            </div>
            <div
              class="text-white grid justify-items-center text-center md:justify-items-start md:text-left md:m-5 lg:w-1/2 lg:h-24 lg:my-10 lg:m-auto"
            >
              <p class="text-lg">Aktivitas 2</p>
              <p class="text-xs mx-3 md:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                culpa asperiores esse incidunt, in et odit saepe cupiditate
                similique praesentium obcaecati! Ut molestias odio a,
                perspiciatis eveniet at iste sunt!
              </p>
              <div class="bg-white h-1 w-5/6 my-5 lg:w-full rounded-full"></div>
            </div>
            <div
              class="text-white grid justify-items-center text-center md:justify-items-start md:text-left md:m-5 lg:w-1/2 lg:h-24 lg:my-10 lg:m-auto"
            >
              <p class="text-lg">Aktivitas 3</p>
              <p class="text-xs mx-3 md:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                culpa asperiores esse incidunt, in et odit saepe cupiditate
                similique praesentium obcaecati! Ut molestias odio a,
                perspiciatis eveniet at iste sunt!
              </p>
              <div class="bg-white h-1 w-5/6 my-5 lg:w-full rounded-full"></div>
            </div>
          </div>

          <div
            class="bg-[#63B4FF] h-96 w-4/5 md:w-full md:basis-1/2 md:h-auto md:w-5/6 relative rounded-lg md:rounded-none md:rounded-r-lg"
          >
            <!-- <div class="inset-x-20 flex bottom-0 absolute">
              <button class="mx-[3px] box-content h-[10px] w-[38px] cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding lg:bg-red-900 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
              <button class="mx-[3px] box-content h-[10px] w-[38px] cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding lg:bg-red-900 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
              <button class="mx-[3px] box-content h-[10px] w-[38px] cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding lg:bg-red-900 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
            </div> -->
            <div
              class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
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
          </div>
        </div>
      </section>

      <section class="container py-6">
        <div
          class="grid justify-items-center md:flex md:gap-0 md:w-5/6 md:m-auto py-5 gap-5"
        >
          <div
            class="bg-[#63B4FF] h-96 w-4/5 md:w-full md:basis-1/2 md:h-auto md:w-5/6 relative rounded-lg md:rounded-none md:rounded-l-lg"
          >
            <!-- <div class="inset-x-20 flex bottom-0 absolute">
              <button class="mx-[3px] box-content h-[10px] w-[38px] cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding lg:bg-red-900 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
              <button class="mx-[3px] box-content h-[10px] w-[38px] cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding lg:bg-red-900 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
              <button class="mx-[3px] box-content h-[10px] w-[38px] cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding lg:bg-red-900 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
            </div> -->
            <div
              class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
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
          </div>

          <div
            class="h-auto w-4/5 md:w-full md:basis-1/2 md:w-5/6 bg-[#858585] rounded-lg md:rounded-none md:rounded-r-lg"
          >
            <div
              class="text-white grid justify-items-center text-center md:justify-items-start md:text-left md:m-5 lg:w-1/2 lg:h-24 lg:my-10 lg:m-auto"
            >
              <p class="text-lg">Aktivitas 4</p>
              <p class="text-xs mx-3 md:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                culpa asperiores esse incidunt, in et odit saepe cupiditate
                similique praesentium obcaecati! Ut molestias odio a,
                perspiciatis eveniet at iste sunt!
              </p>
              <div class="bg-white h-1 w-5/6 my-5 lg:w-full rounded-full"></div>
            </div>
            <div
              class="text-white grid justify-items-center text-center md:justify-items-start md:text-left md:m-5 lg:w-1/2 lg:h-24 lg:my-10 lg:m-auto"
            >
              <p class="text-lg">Aktivitas 5</p>
              <p class="text-xs mx-3 md:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                culpa asperiores esse incidunt, in et odit saepe cupiditate
                similique praesentium obcaecati! Ut molestias odio a,
                perspiciatis eveniet at iste sunt!
              </p>
              <div class="bg-white h-1 w-5/6 my-5 lg:w-full rounded-full"></div>
            </div>
            <div
              class="text-white grid justify-items-center text-center md:justify-items-start md:text-left md:m-5 lg:w-1/2 lg:h-24 lg:my-10 lg:m-auto"
            >
              <p class="text-lg">Aktivitas 6</p>
              <p class="text-xs mx-3 md:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                culpa asperiores esse incidunt, in et odit saepe cupiditate
                similique praesentium obcaecati! Ut molestias odio a,
                perspiciatis eveniet at iste sunt!
              </p>
              <div class="bg-white h-1 w-5/6 my-5 lg:w-full rounded-full"></div>
            </div>
          </div>
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