<template>
     <NuxtLayout name="authenticated">
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAccount"  title="Payment" main>
        <!-- delete button -->
        
       <button @click="deletePayment()" class="py-2 px-3 bg-rose-600 rounded-full text-white hover:bg-rose-500">delete</button>
      </SectionTitleLineWithButton>
      <!-- alert -->
      <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="alert"> 
        <p class="font-bold">Update Room</p>
        <p class="text-sm">Berhasil Update Room</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <MahasiswaCard class="mb-6" />
        <CardBox is-form @submit.prevent="updateRoom">
          

          <FormField label="nama" help="Masukan nama baru">
            <FormControl
            v-model="nama"
              :icon="mdiAccount"
              name="nama"
              required
              autocomplete="nama"
            />
          </FormField>
          <FormField label="Desc" help="Masukan NPM baru">
            <FormControl
              v-model="desc"
              :icon="mdiMail"
              type="text"
              name="desc"
              required
              autocomplete="desc"
            />
          </FormField>
         

          <template #footer>
            <BaseButtons>
              <BaseButton color="info" type="submit" label="Submit" />
              <a href="/admin/payment" class="py-2 px-3 bg-white border-2 rounded-md border-slate-950" >kembali </a>
            </BaseButtons>
          </template>
        </CardBox>

      
          <BaseDivider />

          
          
        </div>
      
    </SectionMain>
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  middleware: 'auth'
})
const supabase = useSupabaseClient()

const $route = useRoute()
const desc = ref()
const nama = ref()
const alert = ref(false)
const getSettingRoom = async()=>{
    const {data,error} = await supabase.from('room_payment').select().eq('id', $route.params.room)
  if(data[0]){
    const roomData = data[0]
    nama.value = roomData.nama_pembayaran
    desc.value = roomData.desc

  }
}

const updateRoom = async()=>{
    alert.value = false
    const{data,error} = await supabase.from('room_payment').update({
        nama_pembayaran: nama.value,
        desc: desc.value
    }).eq('id', $route.params.room)
    if(error){
        console.log(error)
    }
    else{
        alert.value = true
        
    }
}
const deletePayment = async()=>{
  // confirm yakin akan menghapus
  const confirm = window.confirm('yakin akan menghapus?')
  if(confirm){
    const {data,error} = await supabase.from('room_payment').update({
      is_delete: 1
    }).eq('id', $route.params.room)
    if(error){
      console.log(error)
    }
    else{
       navigateTo('/admin/payment')
    }
  }
}
onMounted(()=>{
    getSettingRoom()
})
</script>
