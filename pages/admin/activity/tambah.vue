<script setup>
definePageMeta({
  middleware: 'auth'
})

const urlfoto = ref('');

const title = ref('');
const desc = ref('');


const alert = ref(false);
const supabase = useSupabaseClient();

const sendToDiscord = async (message) => {

  const discordWebhookURL = "https://discord.com/api/webhooks/1153007344276488344/Wdtaw5NDrDGNwc1XRwUcMm_EZFTGvQ2EpiVpIg2lOtbS5fedm3W8EwCplBr1AhgxjOQK";

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
  
  const { data, error } = await supabase.from('activity').insert({
    title: title.value,
    desc: desc.value,
    image: urlfoto.value,
  });

  alert.value = true;

  if (error) {
    console.log(error);
  } else {

    const messageToDiscord = `**${title.value}**\n\n${desc.value}\n\n${urlfoto.value}`;
    sendToDiscord(messageToDiscord);
    navigateTo("/admin/activity");
  }
};


</script>

<template>
  <NuxtLayout name="authenticated">
 
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="Tambah Activity"
        main
      >
      </SectionTitleLineWithButton>
      <div class="bg-blue-100 bordeconst kelas = ref('');r-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="false"> 
        <p class="font-bold">Tambah Mahasiswa</p>
        <p class="text-sm">Berhasil Menambahkan Mahasiswa</p>
      </div>
      <CardBox>
        <form @submit.prevent="submit">
         
          <FormField label="title">
            <FormControl v-model="title" placeholder="Input Title" :icon="mdiAccount" />
            
          
          </FormField>

          <FormField label="Desc" help="Your Desc ">
          <FormControl
          v-model="desc"
            type="textarea"
            placeholder="Hos its it going?"
          />
        </FormField>
          <FotoActivity v-model:path="urlfoto"  />
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
