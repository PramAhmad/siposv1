<script setup>

import {
  mdiAccount,
  mdiMail,


} from "@mdi/js";



const url = ref("https://wsgwhdbimgdepfxktxlo.supabase.co/storage/v1/object/public/mahasiswa/");
const fotopath = ref();
const nama = ref()
const npm = ref()
const kelas = ref()
const supabase = useSupabaseClient()
const $route = useRoute()
const updateMahasiswa = async()=>{
    // validate jika isinya kosong maka field tidak terupdate
 
    const {data,error} = await supabase.from('mahasiswa').update({
        nama: nama.value,
        npm: npm.value,
        kelas: kelas.value,
        foto: url.value + fotopath.value
    }).eq('id',$route.params.id)
    if(error){
        console.log(error)
    }
}
const getSingleMahasiswa = async() => {
    const { data, error } = await supabase.from("mahasiswa").select().eq('id', $route.params.id)
    if (data[0]) {
        const mahasiswaData = data[0];
        nama.value = mahasiswaData.nama || '';
        npm.value = mahasiswaData.npm || '';
        kelas.value = mahasiswaData.kelas || '';
        fotopath.value = mahasiswaData.foto || '';
    }
    if (error) {
        console.log(error)
    }
}
onMounted(() => {
    getSingleMahasiswa()
})
</script>

<template>
  <NuxtLayout name="authenticated">
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAccount" title="Profile" main>
       
      </SectionTitleLineWithButton>

      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <MahasiswaCard class="mb-6" />
        <CardBox is-form @submit.prevent="updateMahasiswa">
          <FormField label="New Profile" help="Max 500kb">
            <FotoMahasiswa v-model:path="fotopath"/>
          </FormField>

          <FormField label="nama" help="Masukan nama baru">
            <FormControl
            v-model="nama"
              :icon="mdiAccount"
              name="nama"
              required
              autocomplete="nama"
            />
          </FormField>
          <FormField label="NPM" help="Masukan NPM baru">
            <FormControl
              v-model="npm"
              :icon="mdiMail"
              type="number"
              name="npm"
              required
              autocomplete="npm"
            />
          </FormField>
          <select v-model="kelas" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>

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