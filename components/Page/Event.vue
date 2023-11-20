<template>
  <div>
    <section class="py-6 px-5 md:px-12 lg:px-28 lg:py-12 ">
      <div class="container">
        <div class="grid justify-items-center w-full">
            <p class="text-3xl   text-[#63B4FF]">Acara</p>
            <h3 class="text-base text-gray-600 text-center">Acara Sistem Informasi 2023 formal & nonformal</h3>
            <div
              class="bg-[#FFC700] h-1 w-5/6 my-5 md:w-[568px] rounded-full"
            ></div>
      </div>
        <div class="grid justify-items-center grid-cols-1 md:grid-cols-2 w-full py-5 gap-10">
          <!-- Kolom kiri -->
          <div class="md:col-span-1 col-span-1 rounded-md bg-gray-500 h-[92%] w-full p-2 ">
            <div
              class="text-white text-center md:justify-items-start md:text-left md:m-5 lg:w-1/2 lg:h-24 lg:my-10 lg:m-auto"
              v-for="data in event"
              :key="data.id"
            >
              <p class="text-lg  text-left md:mx-0 mx-3">{{ data.title }}</p>
              <p class="text-xs  text-left  mx-3 md:mx-0">{{ data.desc }}</p>
              <div class="bg-white h-1 w-5/6 my-5 lg:w-full rounded-full"></div>
            </div>
         
          </div>

          <!-- Kolom kanan -->
          <div class="md:col-span-1 col-span-1 rounded-md w-full  h-auto">
            <!-- swiper -->
            <div>
              <!-- swiper -->
              <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slides-per-view="1"
                :loop="true"
                :effect="'creative'"
                :autoplay="{
                  delay: 8000,
                  disableOnInteraction: true,
                }"
                :creative-effect="{
                  prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                  },
                  next: {
                    translate: ['100%', 0, 0],
                  },  
                }"
              >
                <SwiperSlide v-for="slide in event" :key="slide">
                  <div
                    class="w-[100%] min-h-full relative rounded-2xl p-4 border-2 shadow-md   border-opacity-30 dark:border-opacity-70 dark:border-black/30 bg-white dark:bg-gray-900 backdrop-blur bg-opacity-10 dark:bg-opacity-20 dark:shadow-2xl group hover:cursor-pointer mb-12 overflow-hidden"
                  >
                    <div class="h-full w-full relative">
                      <img :src="slide.image" class="w-full h-full">
                      <div
                      class="overlay absolute top-0 right-0 bottom-0 left-0 bg-gray-900 grid place-items-center text-white bg-opacity-40 group-hover:bg-opacity-80 duration-300 backdrop-blur-[0px] group-hover:backdrop-blur-[5px] z-10"
                    >
                      <div class="flex flex-col items-center">
                    
                        <p
                          class="text-white -translate-y-5 scale-0 group-hover:scale-100 group-hover:-translate-y-0 transition-all duration-300"
                          >{{ slide.desc }}</p
                        >
                      </div>
                    </div>
                    </div>
                    <div
                        class="p-4 w-full  bg-white dark:bg-black/50 text-center flex justify-center bg-opacity-60 z-20"
                      >
                        <a
                          class="text-xl"
                          href=""
                        >
                        {{ slide.title }}
                        </a>
                      </div>
                          </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
const supabase = useSupabaseClient()

const event = ref([])
const foto = ref([])
const loading = ref(false)

const getEvent = async()=>{
  loading.value = true
    const {data,error} = await supabase
    .from("activity")
    .select()
    .limit(3)

    if(error){
        console.log(error)
    }
    else{
        event.value = data
        // foto
        // console.log(data)
        foto.value = data.map((item)=>{
            return item.image
        })
        loading.value = false
    }
}
onMounted(()=>{
    getEvent()

})
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