<script setup>
definePageMeta({
  middleware: 'auth'
})


const supabase = useSupabaseClient();

const room = ref([])
const nama = ref()
const desc = ref()
const alert = ref(false)


const submit = async () => {
  alert.value = false;
  
  const  {data,error} =  await supabase.from('room_payment').insert({
      nama_pembayaran:nama.value,
      desc:desc.value

  })
  

  if (error) {
    console.log(error);
  } else {
    alert.value = true;
    nama.value = ''
    desc.value = ''
  }
};

const reset = async ()=>{
  nama.value = ''
  desc.value = ''

}
</script>

<template>
  <NuxtLayout name="authenticated">
    <!-- flash message -->
    <SectionMain>
   
    <SectionTitleLineWithButton :icon="mdiTableBorder" title="Room Payment" main>

    </SectionTitleLineWithButton>
    
    <!-- alert -->
    <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="alert"> 
        <p class="font-bold">Sukses
        </p>
        <p class="text-sm">Berhasil Menambahkan Room</p>
      </div>
   
      <CardBox>
        <form @submit.prevent="submit">
            <NotificationBarInCard
                color="info"
                :icon="mdiMonitorCellphone"
                class="mb-6"></NotificationBarInCard>
          <FormField label="Masukan Nama Room">
                          <FormControl v-model="nama" :icon="mdiMail"  placeholder="Nama Jenis Payment" />
                          
                          
                        </FormField>
                        <!-- textarea desc -->
                        <label for="" class="font-semibold text-gray-800">Masukan Desc</label>
                        <textarea  v-model="desc" id="" cols="30" rows="10" class="
                        w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2  
                        " placeholder="deskripsi"></textarea>

       
          <div>
            <BaseButtons>
              <button type="submit" class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500">Tambah</button>
              <BaseButton @click="reset" color="info" outline label="Reset" />
            </BaseButtons>
          </div>
        </form>
      </CardBox>
    </SectionMain>
  </NuxtLayout>
</template>
