<script setup>
definePageMeta({
  middleware: 'auth'
})


const supabase = useSupabaseClient()
const payment = ref([])
const mahasiswa = ref()
const $route = useRoute()
const tanggal_bayar = ref()
const total_bayar = ref() 
const loading = ref(false)
const alert = ref(false)

const sendMsgToDiscrod = async()=>{
    const discordWebhookURL = "https://discord.com/api/webhooks/1152573110315393134/-yvMPEfyJyirKt8_WN-6nEu7C2_D4CAjUtLQ8FFryiMOdcWMV2pJ2W6zGPluN0j4xfNw";
    const data = {
        content: `Transaksi diperbarui dari ${mahasiswa.value}\n sebesar ${total_bayar.value}\n  pada tanggal ${tanggal_bayar.value}`,
    };
    try {
        const response = await fetch(discordWebhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        });
    } catch (error) {
        console.error(error);
    }
}
const updatePayment = async()=>{
    // validate jika isinya kosong maka field tidak terupdate
    alert.value = false
    const {data,error} = await supabase.from('payment').update({
        tanggal_bayar: tanggal_bayar.value,
        total_bayar: total_bayar.value,
    }).eq('id',$route.params.id)
    if(error){
        console.log(error)
    }
    else{
        alert.value = true
        sendMsgToDiscrod()
    }
    
}
const getValuePayment = async() => {
    const { data, error } = await supabase.from("payment").select("tanggal_bayar,mahasiswa_id(nama,kelas),total_bayar,payment_id(nama_pembayaran)").eq('id', $route.params.id)
    if (data[0]) {
      const paymentData = data[0];
        tanggal_bayar.value = paymentData.tanggal_bayar || '';
        total_bayar.value = paymentData.total_bayar || '';
        mahasiswa.value = paymentData.mahasiswa_id.nama || '';
    }
    if (error) {
        console.log(error)
    }
}
const getPayment = async()=>{
  loading.value = false
    const {data,error } =  await supabase.from("payment").select("tanggal_bayar,mahasiswa_id(nama,kelas),total_bayar,payment_id(nama_pembayaran)").eq('id',$route.params.id)
  if(error){
    console.log(error)
  }
  else{
    payment.value = data
    loading.value = true
  }
}
onMounted(() => {
    getValuePayment()
    getPayment()
    
})
</script>

<template>
    
<NuxtLayout name="authenticated">
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAccount" title="Profile" main>
       
      </SectionTitleLineWithButton>
      <!-- alert -->
      <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="alert"> 
            <p class="font-bold">Transaksi</p>
            <p class="text-sm">Transaksi Berhasil</p>
          </div>
        <BaseDivider />
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <MahasiswaCard class="mb-6" />
        <CardBox is-form @submit.prevent="updatePayment">
        

            <FormControl
            v-model="mahasiswa"
            disabled
            aria-readonly="true"
              :icon="mdiAccount"
              type="text"
              name="nama"
              
             class="mb-3"
              />
          <FormField label="Total Bayar" help="Masukan total bayar baru">
            <FormControl
            v-model="total_bayar"
              :icon="mdiAccount"
              type="number"
              name="nama"
              required
             
            />
          </FormField>
          <FormField label="Tanggal bayar" help="Masukan NPM baru">
            <FormControl
              v-model="tanggal_bayar"
              :icon="mdiMail"
              type="date"
              name="tanggal_bayar"
              required
             
            />
          </FormField>
         

          <template #footer>
            <BaseButtons>
              <BaseButton color="info" type="submit" label="Submit" />
              <BaseButton color="info" label="Options" outline />
            </BaseButtons>
          </template>
        </CardBox>

      
          <BaseDivider />

          
          
        </div>
     
    </SectionMain>
  </NuxtLayout> 
</template>