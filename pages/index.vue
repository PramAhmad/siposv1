<script setup>

</script>

<template>
  <div id="body" class="px-16">
   
    <NuxtLayout>
      <nav class="w-full flex justify-around items-center h-16">
        <img src="@/assets/logo/silogo.png" class="w-13 h-13" />
        <ul class="flex justify-between gap-10 cursor-pointer">
          <li class="text-[#63B4FF]"><a>Beranda</a></li>
          <li><a>Aktivias</a></li>
          <li><a>Acara</a></li>
          <li><a>Mahasiswa</a></li>
          <li><a>Masukkan</a></li>
        </ul>
        <input type="to">
       
      </nav>

      <!-- Main section -->
      <section class="mx-32 my-20 py-20">
        <div class="flex flex-row gap-5">
          <div class="text-3xl my-5 basis-1/2">
            <p class="text-[#63B4FF] text-4xl">SISTEM INFORMASI</p>
            <p class="text-[#606060]">UNIVERSITAS SILIWANGI</p>
            <div class="bg-[#FFC700] h-0.5 w-5/6 my-5 rounded-full"></div>
            <p class="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              expedita nulla, nisi doloremque reprehenderit, sit illo error
              quisquam magnam eveniet consectetur suscipit delectus quo
              repellendus possimus inventore aperiam quaerat non!
            </p>
          </div>

    
          <!-- <img src="home.png" class="basis-1/2" /> -->
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