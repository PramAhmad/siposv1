<script setup>
// seawt alert

const alert = ()=>{
  
  
}

onMounted(()=>{
  alert()

})
</script>

<template>
  <Head>
    <Title>Eternal Insight </Title>
  </Head>
  <div id="body" class="">
    <NuxtLayout>
      <!-- Nav Tablet & PC -->
    <MyNavbar/>

      <!-- Main section -->
     <PageHero/>

      <!-- Mahasiswa section -->
      <section class="py-6 lg:py-12 pt-28 pb-20 bg-slate-50 min-h-screen">
   <PageMahasiswa/>
   <!-- <div class="flex justify-evenly w-screen lg:w-full container">
      <NuxtLink
        to="/mahasiswa"
        class="text-[#63B4FF] font-semibold border border-[#63B4FF] py-2 px-5 hover:px-6 rounded-full inline-flex items-center group transform hover:text-primary hover:-translate-y-1 duration-200"
      >
        Lihat Semua
        <svg
          class="w-4 h-4 ml-1 transform group-hover:translate-x-2 duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </NuxtLink>
    </div> -->
</section>
<!-- berita -->
<PageSifess/>



      <!-- Event section-->
    <PageEvent/>
    

      <!-- Contact section -->
  <PageContact/>

      <!-- footer -->
      <hr/>
      <Footer/>
    </NuxtLayout>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap");
/* font */
body {
  font-family: "Poppins", sans-serif;
}
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