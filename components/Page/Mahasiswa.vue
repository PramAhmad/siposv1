<template>
  <!-- loading dull screen -->

    <p class="text-2xl md:text-3xl text-center text-[#63B4FF]">MAHASISWA</p>
    <div
      class="bg-[#FFC700] h-1 w-5/6 my-5 md:w-[568px] rounded-full m-auto mb-9"
    ></div>

    <!-- search button -->
    <div class="flex items-center justify-center" >

      <div class="relative text-gray-600">  <input
        type="search"
        v-model="searchQuery"
        name="search"
        @input="search"
        placeholder="Search"
        class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
    <button @click="search" class="absolute right-0 top-0 mt-3 mr-4">
      <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
      </svg>  
    </button>
  </div>
    </div>



    <div
      class="w-full flex flex-wrap justify-around  lg:py-12 pb-10 container"
    >
      <div
        class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border gap-4 mt-5"
        v-for="data in mahasiswa"
      >
        <div
          class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border hover:scale-105"
          > 
          <div v-if="data.foto == null" >
            
            <!-- unpslah aonymouse -->
            <img src="@/assets/image/logo.png" />
          </div>
          <div v-if="data.foto">

          <img :src="data.foto" alt="ada foto" />
        </div>
        </div>
        <div class="p-6 text-center">
          <h4
            class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
          >
            <NuxtLink :to="`/mahasiswa/${data.id}`">
            {{ data.nama }}
            </NuxtLink>
          </h4>
          <p
            class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
          >
            Kelas
            <!-- uppercase kelas -->
            <span class="uppercase">{{ data.kelas }}</span>
          </p>
        </div>
      
      </div>
    </div>
    <div class="flex justify-center mt-4 pb-10">
  <button
    @click="loadPage(currentPage - 1)"
    :disabled="currentPage === 1"
    class="bg-[#63B4FF] text-white px-3 py-1 rounded-md mx-2"
  >
    Previous
  </button>
  <span class="text-xl">Page {{ currentPage }}</span>
  <button
    @click="loadPage(currentPage + 1)"
    :disabled="mahasiswa.length < itemsPerPage"
    class="bg-[#63B4FF] text-white px-3 py-1 rounded-md mx-2"
  >
    Next
  </button>
</div>
  
</template>
<script setup>
const supabase = useSupabaseClient();
const mahasiswa = ref([]);
const itemsPerPage = 6;
let currentPage = 1;
const searchQuery = ref("");
const loading = ref(false);

const getMahasiswa = async () => {
  loading.value = true
  const offset = (currentPage - 1) * itemsPerPage;

  let q = supabase
    .from("mahasiswa")
    .select()
    .range(offset, offset + itemsPerPage - 1);

  if (searchQuery.value) {
    q = q.or(`nama.ilike.%${searchQuery.value}%`);
  }

  const { data, error } = await q;

  if (error) {
    console.log(error);
  } else {
    loading.value = false
    mahasiswa.value = data;
  }
};
const search = () => {
  // When the search button is clicked, call getMahasiswa to fetch data based on the search query
  currentPage = 1; // Reset to the first page
  getMahasiswa();
};

const loadPage = (page) => {
  if (page < 1) return;
  currentPage = page;
  getMahasiswa();
};

onMounted(() => {
  getMahasiswa();
});
</script>
<style>
.custom-loader {
  width: 45px;
  height: 40px;
  --c: linear-gradient(#3b82f6 0 0);
  background:
    var(--c) 0% 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 9px 100%;
  background-repeat: no-repeat;
  animation: b2 1s infinite linear;
}

@keyframes b2 {
  20% {
    background-size: 9px 60%, 9px 100%, 9px 100%
  }

  40% {
    background-size: 9px 80%, 9px 60%, 9px 100%
  }

  60% {
    background-size: 9px 100%, 9px 80%, 9px 60%
  }

  80% {
    background-size: 9px 100%, 9px 100%, 9px 80%
  }
}
</style>
