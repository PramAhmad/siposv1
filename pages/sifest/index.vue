<template>
    <div>
    <MyNavbar/>
    <div class="container pt-28 min-h-screen ">
      <p class="text-2xl md:text-3xl text-center text-[#63B4FF] ">SiFess</p>
    <div
      class="bg-[#FFC700]  h-1 w-5/6 my-5 md:w-[568px] rounded-full m-auto mb-9"
    ></div> 
    <NuxtLink to="/sifest/tambah" class="py-3 px-6 inline-block bg-[#63B4FF] text-white  rounded-md font-semibold  text-lg hover:bg-opacity-80 ">
      <div class="inline-block align-middle mr-2">Kirim Sifess</div>
  <div class="inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block align-middle">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  </div>
</NuxtLink>


    <div class="mt-16">
    

          <div class="flex flex-wrap justify-between  w-full  gap-y-10 mb-10" >
    <div class="md:max-w-[45%] w-full bg-white border-4 border-slate-100 rounded-sm p-5 " v-for="data in datas" :key="data.id">
      <div class="flex justify-end">
        <div class="bg-[#63B4FF] text-white rounded-md px-2 py-1" >
          <p class="text-sm">From <span class="font-bold">{{ data.from }}</span></p>
        </div>
      </div>
      <!-- card from -->
      <div class="w-full py-2 rounded-md bg-slate-100 mt-3 p-3">
          <p>To</p>
          <p class="text-[#63B4FF] text-sm">{{data.to}}</p>
      </div>
      <!-- card title -->
      <div class="w-full py-5 rounded-md bg-slate-100  mt-3 p-3">
          <p class="text-slate-500 text-md">{{ data.msg }}</p>
      </div>
    </div>
 
        </div>
        




    </div>
    <!-- <div class="" style="width: 100%; height: 100%">
      
        <div v-for="(icon, index) in icons" :key="index" :style="{ top: `${icon.top}px`, left: `${icon.left}px` }" class="absolute ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="message-icon w-32 h-36 text-gray-200 "
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
        </div>
      </div> -->
    </div>  
    <Footer/>
    </div>
</template>
<script setup>
const supabase = useSupabaseClient()
const datas = ref([])
const getSifest = async ()=>{
    const {data,error} = await supabase.from('sifest').select()
    .order('id', { ascending: false })
    .eq('is_accept',1)
    if (error){
        console.log(error)
    }
    else{
        datas.value = data
    }
}

onMounted(()=>{
    getSifest()
})

</script>
<style>
    .message-icon {
 
  animation: float 3s infinite; /* Atur animasi float selama 3 detik dan diulang secara terus-menerus */
}

/* Definisikan animasi float */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>