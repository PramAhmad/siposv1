<script setup>
import { mdiBallotOutline, mdiAccount, mdiGithub } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
// props
import FotoMahasiswa from "@/components/FotoMahasiswa.vue";




const fotopath = ref();
const urlfoto = ref('')

const name = ref('');
const npm = ref('');
const kelas = ref('');

const alert = ref(false);
const supabase = useSupabaseClient();

const sendToDiscord = async (message) => {

  const discordWebhookURL = "https://discord.com/api/webhooks/1152545570272059478/Q6imkAWcj5LQo0j0s19kmyvlCx4B_SvcJc1oaiOGq9zNrGtEdGzuyX1J22MdF2VS0t1_";

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

  const { data, error } = await supabase.from('mahasiswa').insert({
    nama: name.value,
    npm: npm.value,
    kelas: kelas.value,
    foto: urlfoto.value,
  });

  alert.value = true;

  if (error) {
    console.log(error);
  } else {

    const messageToDiscord = `Data mahasiswa baru ditambahkan:\nNama: ${name.value}\nNPM: ${npm.value}\nKelas: ${kelas.value}\nFoto: ${urlfoto.value}`;
    sendToDiscord(messageToDiscord);
    navigateTo("/admin/mahasiswa");
  }
};

const reset = async()=>{
  name.value = ''
  npm.value = ''
  kelas.value = ''
  fotopath.value = ''
}

</script>

<template>
  <NuxtLayout name="authenticated">
 
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="Tambah Mahasiswa"
        main
      >
      </SectionTitleLineWithButton>
      <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="false"> 
        <p class="font-bold">Tambah Mahasiswa</p>
        <p class="text-sm">Berhasil Menambahkan Mahasiswa</p>
      </div>
      <CardBox>
        <form @submit.prevent="submit">
         
          <FormField label="Nama dan Kelas">
            <FormControl v-model="name" placeholder="Your Name" :icon="mdiAccount" />
            <!-- Use a dropdown menu for selecting kelas -->
            <select v-model="kelas" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
          </FormField>

          <FormField label="With help line" help="Do not enter the leading zero">
            <FormControl v-model="npm" type="tel" placeholder="Your npm number" />
          </FormField>
          <FotoMahasiswa v-model:path="urlfoto" />
         
          
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
