<template >
    <div>
        <nav
        class="hidden md:flex bg-white fixed w-full md:h-20 lg:h-16 top-0 left-0 shadow z-10 justify-around items-center"
      >
        <img src="/silogo.png" class="w-13 h-13" />
        <ul
        class="flex justify-between md:gap-5 md:text-sm lg:text-md lg:gap-12 cursor-pointer"
      >
        <li>
          <NuxtLink
            to="/"
            class="text-slate-800 hover:text-[#63B4FF] hover:border-b hover:transition duration-100 border-[#63B4FF]"
            :class="{ 'text-sky-500': $route.path === '/' }"
          >
            Beranda
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/mahasiswa"
            class="text-slate-800 hover:text-[#63B4FF] hover:border-b hover:transition duration-100 border-[#63B4FF]"
            :class="{ 'text-sky-500': $route.path === '/mahasiswa' }"
          >
            Mahasiswa
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/activity"
            class="text-slate-800 hover:text-[#63B4FF] hover:border-b hover:transition duration-100 border-[#63B4FF]"
            :class="{ 'text-sky-500': $route.path === '/activity' }"
          >
            Aktivitas
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/sifest"
            class="text-slate-800 hover:text-[#63B4FF] hover:border-b hover:transition duration-100 border-[#63B4FF]"
            :class="{ 'text-sky-500': $route.path === '/sifest' }"
          >
            Sifest
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/masukan"
            class="text-slate-800 hover:text-[#63B4FF] hover:border-b hover:transition duration-100 border-[#63B4FF]"
            :class="{ 'text-sky-500': $route.path === '/masukan' }"
          >
            Masukkan
          </NuxtLink>
        </li>
      </ul>

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
              <li class="my-4"  ><NuxtLink  to="/">Beranda</NuxtLink></li>
              <li class="my-4"><NuxtLink  to="/mahasiswa">Mahasiswa</NuxtLink></li>
              <li class="my-4"><NuxtLink  to="/activity">Aktivitas</NuxtLink></li>
              <li class="my-4"><NuxtLink  to="/activity">Sifess</NuxtLink></li>
              <li class="my-4"><NuxtLink  to="/masukan">Masukkan</NuxtLink></li>
             
            </ul>
          </div>
        </button>
      </nav>
    </div>
</template>
<script setup>

</script>
<style lang="">
    
</style>