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
  

  const { data: kasData, error: kasError } = await supabase
    .from('kas')
    .select('*')
    .eq('mahasiswa_id', mahasiswaId);
  
  if (kasError) {
    console.error(kasError);
    return;
  }

  const jumlahPembayaran = kasData.length + 1;
  
  const { data, error } = await supabase.from('kas').insert({
    mahasiswa_id: mahasiswa.value,
    total_bayar: total_bayar.value,
  });

  alert.value = true;

  if (error) {
    console.log(error);
  } else {

    const messageToDiscord = `Terimakasih Udah Bayar Kas:\nNama: ${selectedMahasiswa.nama}\nTotal Bayar: Rp ${total_bayar.value}\nTanggal Bayar: ${new Date().toLocaleDateString()}\nJumlah Pembayaran: ${jumlahPembayaran} kali`;
    sendToDiscord(messageToDiscord);
    navigateTo("/admin/kas");
  }
};

onMounted(()=>{
    getMahasiswa()
})
</script>

<template>
  <NuxtLayout name="authenticated">
    <!-- flash message -->
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="Bayar Kas"
        main
      >
     
      </SectionTitleLineWithButton>
      <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="false"> 
        <p class="font-bold">Tambah Mahasiswa</p>
        <p class="text-sm">Berhasil Menambahkan Mahasiswa</p>
      </div>
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
              <BaseButton type="reset" color="info" outline label="Reset" />
            </BaseButtons>
          </div>
        </form>
      </CardBox>
    </SectionMain>
  </NuxtLayout>
</template>
