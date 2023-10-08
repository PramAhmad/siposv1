<template>
    <div>
        <NuxtLayout name="authenticated">
                <!-- single layout -->
                <CardBox >
    <BaseLevel type="justify-around lg:justify-center h-full">
      <img :src="fotopath" 
      class=" block h-full min-w-[300px] bg-clip-content  max-w-full bg-gray-100 dark:bg-slate-800 lg:mx-12"
       alt="">
      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <div class="flex justify-center md:block">
        
        </div>
        <h1 class="text-2xl">
          Title, <b>{{ title }}</b
          >
        </h1>
        <p> Judul: <b>{{ desc  }}</b></p>
       
      </div>
    </BaseLevel>
  </CardBox>
        </NuxtLayout>
    </div>
</template>
<script setup>


const supabase = useSupabaseClient()
const $route = useRoute()
const fotopath = ref('')
const desc = ref('')
const title = ref('')
const getSingleActivity = async()=>{
    const {data,error} = await supabase.from("activity").select().eq('id',$route.params.id)
   fotopath.value = data[0].image
   desc.value = data[0].desc
    title.value = data[0].title
    if(error){
        console.log(error)
    }
}
onMounted(()=>{
    getSingleActivity()
})
</script>
