<template>
<NuxtLayout name="authenticated">
  <SectionMain>
    <SectionTitleLineWithButton :icon="mdiTableBorder" title="Pembayaran" main>
      <NuxtLink to="/admin/payment/tambah" class="bg-blue-600 hover:bg-blue-600s py-2 px-3 rounded-full mr-5 text-white">Tambah</NuxtLink>
    </SectionTitleLineWithButton>
    <div class=" w-full">
      <div class="md:flex md:flex-wrap md:justify-start"> <!-- Menggunakan justify-start untuk mengatur card ke samping -->
        <div v-for="data in rooms" :key="data.id" class="md:w-[30%] w-full rounded-md overflow-hidden shadow-lg dark:bg-slate-900 mr-4 mb-4">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ data.nama_pembayaran }}</div>
            <p class="text-gray-700 text-base dark:text-gray-400">
              {{ data.desc }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <NuxtLink :to="`/admin/payment/` + data.id" class="bg-blue-600 hover:bg-blue-600s py-2 px-3 rounded-full mr-5 text-white">Kelola</NuxtLink>
            <NuxtLink :to="`/admin/payment/${data.id}/setting`" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Detail</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </SectionMain>
</NuxtLayout>


</template>
<script setup>
definePageMeta({
  middleware: 'auth'
})
const supabase = useSupabaseClient()
const rooms = ref([])
const getPaymentRoom = async ()=>{
   const { data, error } = await supabase.from('room_payment').select('*')
    .eq('is_delete', 0)
  //is_delte != 1
   .order('id', { ascending: false })
 
   if (error) {
       console.log(error);
   } else {
       rooms.value = data
   }
}

onMounted(() => {
   getPaymentRoom()

})
</script>

