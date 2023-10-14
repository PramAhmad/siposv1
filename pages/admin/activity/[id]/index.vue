<template>
    <div>
        <NuxtLayout name="authenticated">
            <!-- loading timpa all elemet -->
            <div v-if="loading" class="flex justify-center items-center h-screen">
                <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
                <!-- single layout -->

                <CardBox >
                  <div class="bg-white rounded-lg shadow-md p-6">
  <!-- Information Grid -->
  <div class="grid grid-cols-2 gap-4 mb-6">
    <div>

      <img :src="fotopath" alt="">
    </div>
      <div>
        <h2 class="text-xl font-semibold">Informasi Aktivitas</h2>
        <div class="max-w-full">
            <h3 class="text-gray-800 dark:text-white font-semibold text-3xl my-2">Nama Activity: <span>{{ title }}</span></h3>
            <!-- Apply the whitespace-pre-line class to the description container -->
            <p class="text-gray-800 dark:text-white font-semibold text-md my-2 max-w-full break-words">
   <span>{{ desc }}</span>
</p></div>
      </div>
  </div>
  
  <!-- Table Grid -->
</div>

  </CardBox>
  <form method="post" @submit.prevent="updateActivity">
        <CardBox>
          <FormField label="New Profile" help="Max 500kb">
            <FotoActivity model:path="fotopath"/>
          </FormField>

          <FormField label="title" help="Masukan Title baru">
            <FormControl
            v-model="title"
              :icon="mdiAccount"
              name="nama"
              required
              autocomplete="nama"
            />
          </FormField>
          <FormField label="desc" help="Masukan desc baru">
            <FormControl
              v-model="desc"
              :icon="mdiMail"
              type="text"
              name="desc"
              required
              autocomplete="desc"
            />
          </FormField>
       

       
            <BaseButtons>
              <button type="submit" class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500">Update</button>

              <BaseButton color="info" label="Options" outline />
            </BaseButtons>
         
          </CardBox>
        </form>

        </NuxtLayout>
    </div>
</template>
<script setup>


const supabase = useSupabaseClient()
const $route = useRoute()
const fotopath = ref('')
const desc = ref('')
const title = ref('')
const loading = ref(false)
const getSingleActivity = async()=>{
    const {data,error} = await supabase.from("activity").select().eq('id',$route.params.id)
   fotopath.value = data[0].image
   desc.value = data[0].desc
    title.value = data[0].title
    if(error){
        console.log(error)
    }
}
const updateActivity = async ()=>{
    loading.value = true
    // validate jika tidak ada foto
    if(fotopath.value){

        const {data,error} = await supabase.from("activity").update({image:fotopath.value,title:title.value,desc:desc.value}).eq('id',$route.params.id)
        if(error){
            console.log(error)
        }
        else{
        }
        loading.value = false
    }
    else{
        const {data,error} = await supabase.from("activity").update({title:title.value,desc:desc.value}).eq('id',$route.params.id)
        if(error){
            console.log(error)
        }
        else{
        }
        loading.value = false
    }
}

onMounted(()=>{
    getSingleActivity()
})
</script>
