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



const supabase = useSupabaseClient();

const room = ref([])
const nama = ref()
const desc = ref()



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
          <FormField label="Masukan Nama Room">
                          <FormControl v-model="nama" :icon="mdiMail"  placeholder="Nama Jenis Payment" />
            <FormControl v-model="desc" :icon="mdiMail"  placeholder="Deskripsi" />
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
