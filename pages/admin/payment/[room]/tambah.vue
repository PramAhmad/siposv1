<script setup>
import { reactive, ref } from "vue";
import { mdiBallotOutline, mdiAccount, mdiMail } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";

import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";

import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import NotificationBarInCard from "@/components/NotificationBarInCard.vue";


const mahasiswa = ref();
const total_bayar = ref('');
const mahasiswas = ref([])
const alert = ref(false);
const supabase = useSupabaseClient();
const $route = useRoute()
const room = ref([])
const getInfoRoom = async ()=>{
const { data, error } = await supabase
  .from('room_payment')
    .select('id,nama_pembayaran, desc')
    .eq("id", $route.params.room)
if (error) {
    console.log(error)
    
}
else {
    room.value = data
}
}
const getMahasiswa = async ()=>{

        const { data, error } = await supabase
        .from('mahasiswa')
        .select()
        .order('npm', { ascending: true })
        mahasiswas.value = data
    
}

const sendToDiscord = async (message) => {

  const discordWebhookURL = "https://discord.com/api/webhooks/1152573110315393134/-yvMPEfyJyirKt8_WN-6nEu7C2_D4CAjUtLQ8FFryiMOdcWMV2pJ2W6zGPluN0j4xfNw";

  const data = {
    content: message,
  };

  try {
    const response = await fetch(discordWebhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Pesan berhasil dikirim ke Discord");
    } else {
      console.error("Gagal mengirim pesan ke Discord");
    }
  } catch (error) {
    console.error("Gagal mengirim pesan ke Discord:", error);
  }
};

const submit = async () => {
  alert.value = false;

  const mahasiswaId = mahasiswa.value;
  const selectedMahasiswa = mahasiswas.value.find(mahasiswa => mahasiswa.id === mahasiswaId);
  
  if (!selectedMahasiswa) {
    console.error("Mahasiswa tidak ditemukan");
    return;
  }
  
  const  {data,error} =  await supabase.from('payment').insert({
    mahasiswa_id: mahasiswaId,
    payment_id: 1,
    total_bayar: total_bayar.value,
    tanggal_bayar: new Date().toLocaleDateString()
  })
  

  if (error) {
    console.log(error);
  } else {

    const messageToDiscord = `Terimakasih Udah Bayar Kas:\nNama: ${selectedMahasiswa.nama}\nTotal Bayar: Rp ${total_bayar.value}\nTanggal Bayar: ${new Date().toLocaleDateString()}\nJumlah Pembayaran: ${jumlahPembayaran} kali`;
    sendToDiscord(messageToDiscord);
    navigateTo("/admin/kas");
  }
};
const reset = async ()=>{
  mahasiswa.value = ''
  total_bayar.value = ''
}
onMounted(()=>{
    getMahasiswa()
    getInfoRoom()
})
</script>

<template>
  <NuxtLayout name="authenticated">
    <!-- flash message -->
    <SectionMain>
      <div v-for="r in room" :key="r.id">
    <SectionTitleLineWithButton :icon="mdiTableBorder" :title="`payment ` + r.nama_pembayaran" main>
      <NuxtLink :to="`/admin/payment/${r.id}/tambah`" class="rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3">Bayar payment</NuxtLink>
    </SectionTitleLineWithButton>
    

    </div>
      <!-- <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="false"> 
        <p class="font-bold">{{ $route.params.room  }}
        </p>
        <p class="text-sm">Berhasil Menambahkan Mahasiswa</p>
      </div> -->
      <CardBox>
        <form @submit.prevent="submit">
            <NotificationBarInCard
                color="info"
                :icon="mdiMonitorCellphone"
                class="mb-6"></NotificationBarInCard>
          <FormField label="Masukan Nama dan jjumlah">
              <select  v-model="mahasiswa" :icon="mdiAccount" >
                <option v-for="data,i in mahasiswas" :key="data.id" :value="data.id">{{ data.nama }} kelas {{ data.kelas }}</option>
               
                
            </select>
            <FormControl v-model="total_bayar" :icon="mdiMail"  placeholder="jumlah bayar" />
        </FormField>

       
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

<style>
.pram{
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
