<script setup>
  
definePageMeta({
  middleware: 'auth'
})

const mahasiswa = ref('');
const total_bayar = ref('');
const user = useSupabaseUser();
const alert = ref(false);
const supabase = useSupabaseClient();
const $route = useRoute();
const room = ref([]);
const filter = ref([]);
const getInfoRoom = async () => {
  try {
    const { data } = await supabase
      .from('room_payment')
      .select('id, nama_pembayaran, desc')
      .eq('id', $route.params.room);

    room.value = data;
  } catch (error) {
    console.error(error);
  }
};

const filterMahasiswa = async(e)=>{
 const {data,error} = await supabase
  .from('mahasiswa')
  .select('id,nama,kelas')
  .ilike('nama', '%'+e.target.value+'%')
  filter.value = data;
  
  if(error){
    console.error(error);
  }
}


const sendToDiscord = async (message) => {
  const discordWebhookURL = 'https://discordapp.com/api/webhooks/1157344823666294784/5l_evA92FI2JNTOHlyUhj-zr_xMLyhaLAmII8hPOMhubBErwUfiwqLTRJON72sISLn4W'; 
  const data = {
    content: message,
  };

  try {
    const response = await fetch(discordWebhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Pesan berhasil dikirim ke Discord');
    } else {
      console.error('Gagal mengirim pesan ke Discord');
    }
  } catch (error) {
    console.error('Gagal mengirim pesan ke Discord:', error);
  }
};

const addPayment = async () => {
  alert.value = false;

  

  try {
    const { error } = await supabase.from('payment').insert({
      mahasiswa_id: filter.value[0].id,
      payment_id: $route.params.room,
      total_bayar: total_bayar.value,
      add_by: user.value.id,
 
    });

    if (error) {
      alert(error.message);
    } else {
      const messageToDiscord = `
      \`\`\`md
  Terimakasih sudah bayar

 Informasi Pembayaran:
  -Nama: ${filter.value[0].nama}
  -Total Bayar: Rp ${total_bayar.value}
  -Tanggal Bayar: ${new Date().toLocaleDateString()} 
  -Nama Pembayaran: ${room.value[0].nama_pembayaran}
  \`\`\`
  `;

      mahasiswa.value = '';
      total_bayar.value = '';
      sendToDiscord(messageToDiscord);
      alert.value = true;
     
    }
  } catch (error) {
    console.error(error);
  }
};

const reset = () => {
  mahasiswa.value = '';
  total_bayar.value = '';
};

const router = useRouter();

onMounted(() => {
  
  getInfoRoom();
});
</script>

<template>
  <NuxtLayout name="authenticated">
    <!-- flash message -->
    <SectionMain>
      <div v-for="r in room" :key="r.id">
        <SectionTitleLineWithButton :icon="mdiTableBorder" :title="`payment ` + r.nama_pembayaran" main>
          <!-- <NuxtLink :to="`/admin/payment/${r.id}/tambah`" class="rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3">Bayar payment</NuxtLink> -->
        </SectionTitleLineWithButton>
      </div>

      <!-- alert -->
      <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="alert">
        <p class="font-bold">Transaksi</p>
        <p class="text-sm">Transaksi Berhasil</p>
      </div>

      <CardBox>
        <NotificationBarInCard color="info" :icon="mdiMonitorCellphone" class="mb-6"></NotificationBarInCard>
        <form @submit.prevent="addPayment">
          <FormField label="Masukan Nama dan jumlah">
          <!-- select 2 mahasiswa -->
          <FormControl v-model="mahasiswa" :icon="mdiMail" placeholder="Nama Mahasiswa" @input="filterMahasiswa" />

            <!-- radio from filter -->
            <div v-for="f in filter" :key="f.id" class="flex items-center">
              <input type="radio" :value="f.id" class="mr-2" />
              <label>{{ f.nama }} - {{ f.kelas }}</label>
            </div>

            
            <FormControl v-model="total_bayar" :icon="mdiMail" placeholder="jumlah bayar" />
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
    <div
    
      class="fixed bottom-4 right-4 z-50"
    >
      <button
        @click="router.back()"
        class="flex items-center justify-center w-10 h-10 rounded-full text-white bg-blue-600 dark:bg-blue-600 shadow-lg"
      >
      <BaseIcon :path="mdiArrowLeft" size="24px" color="white" />
      </button>
    </div>
  </NuxtLayout>
</template>

<style>
.pram {
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>