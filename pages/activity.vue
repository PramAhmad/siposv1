<script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue';
const supabase = useSupabaseClient()

const event = ref([])
const loading = ref(false)
let limits = 1 
let offset = 0


const getEvent = async()=>{
  loading.value = true
    const {data,error} = await supabase
    .from("activity")
    .select()
    .range(offset,offset+limits)

  

    if(error){
        console.log(error)
    }
    else{
      // format date created at
      data.map((item)=>{
        const date = new Date(item.created_at)
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        const format = `${day}/${month}/${year}`
        item.created_at = format
      })
        event.value = data
        loading.value = false
        
    }
}

const Loadmore = async () => {
  loading.value = true
  offset += limits + 1
  const { data, error } = await supabase
    .from("activity")
    .select()
    .range(offset, offset + limits)
  if (error) {
    console.log(error)
  } else {
    // format date created at
    data.map((item) => {
      const date = new Date(item.created_at)
      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      const format = `${day}/${month}/${year}`
      item.created_at = format
    })
    event.value = [...event.value, ...data]
    loading.value = false
  }
}


onMounted(()=>{
    getEvent()

})
</script>

<template>
  <div>
    <MyNavbar/>
    
    <div class="container pt-28 s">
      <p class="text-2xl md:text-3xl text-center text-[#63B4FF] ">Acara/Event</p>
    <div
      class="bg-[#FFC700] h-1 w-5/6 my-5 md:w-[568px] rounded-full m-auto mb-9"
    ></div>
    <!-- loading -->
    <p v-if="loading" class="custom-loader text-center m-auto" ></p>
      <div class="flex flex-wrap justify-around pt-10  gap-4" >
        <article class="md:w-[45%] bg-white/5 border dark:border-white/10 p-5 rounded-3xl " v-for="data in event" :key="data.id">
      <img
        :src="data.image"
          
        class="rounded-2xl mb-5 shadow-xl w-full"
        width="334px"
        height="188px"
        loading="lazy"
      >
      <!-- Blog Meta -->
      <div class="inline-flex items-center mb-2">
        <div class="inline-flex items-center">
          <Icon name="heroicons:calendar" class="mr-2" size="16" />
          <span>{{ data.title }}</span>
        </div>
        <div class="inline-flex items-center ml-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>

          <span>{{ data.created_at }}</span>
        </div>
      </div>
      <!-- ./ Blog Meta  -->
      <NuxtLink class="block">
        <h3 class="text-lg leading-tight font-bold">
         {{ data.desc }}
        </h3>
      </NuxtLink>
    </article>
      </div>
    </div>
    <!-- loadmore -->
    <div class="flex justify-center">
      <button @click="Loadmore" class="bg-[#63B4FF] text-white/90 px-5 py-2 rounded-full">Load More</button>
    </div>
    <Footer class="mt-16"/>
  </div>
</template>
<style>
.custom-loader {
  width: 45px;
  height: 40px;
  --c: linear-gradient(#63B4FF 0 0);
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