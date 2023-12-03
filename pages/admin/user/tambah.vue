<script setup>
import{
  mdiAccount,
  mdiAccountMultiple
} from "@mdi/js"
import { createClient } from '@supabase/supabase-js'

const form ={
  mail: '',
  password: '',
  role: '',
  nama_depan: '',
  nama_belakang: '',

}
const supabase = createClient("https://iopmpofmctwamjhqugwp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvcG1wb2ZtY3R3YW1qaHF1Z3dwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDc0MzkxOSwiZXhwIjoyMDE2MzE5OTE5fQ.SesQYkh5xVNd4X-8Yp0SCrYX2-t_qOpbpJZWOoBVzYI", {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// select option
const selectOptions = [
  "admin",
  "bk",
  "wali kelas",
  "guru",
]

const alert = ref(false)
// Access auth admin api
const adminAuthClient = supabase.auth.admin

const submit = async ()=>{
  console.log(form)
  const {data,error} = await adminAuthClient.createUser({
    email: form.mail,
    password: form.password,
    user_metadata: {
      nama_depan:form.nama_depan,
      nama_belakang:form.nama_belakang,
      role: form.role


    },
    email_confirm: true
  })
  if(error){
    console.log(error)
  }else{
    alert.value = true
    form.mail = ''
    form.password = ''
    form.role = ''
    form.nama_depan = ''
    form.nama_belakang = ''

  }
}

</script>

<template>
  <NuxtLayout name="admin">
 
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="Tambah User"
        main
      >
      </SectionTitleLineWithButton>
   
      <Alert v-if="alert" type="success" class="mb-4">
        <span class="font-semibold">Berhasil!</span> User berhasil ditambahkan.
      </Alert>
      <CardBox class="mt-5">
        <form @submit.prevent="submit">
         
          <FormField label="Email ">
            <FormControl v-model="form.mail" placeholder="Email" :icon="mdiAccount" />
            
          </FormField>
          <FormField label="Role ">
            <FormControl v-model="form.role" placeholder="Role yang akan di berikan" :icon="mdiAccountMultiple" :options="selectOptions" />
            
          </FormField>
          <FormField label="Nama">
            <FormControl v-model="form.nama_depan" placeholder="Masukan Nama Depan" :icon="mdiAccount" />
            <FormControl v-model="form.nama_belakang" placeholder="Masukan Nama Belakang" :icon="mdiAccount" />
          </FormField>

          <FormField label="Password" help="Harus Lebih Dari 6">
            <FormControl v-model="form.password" type="password" placeholder="Password yang Akan Di Gunakan" />
          </FormField>
        
          <div class="flex gap-5">
         
              <button type="submit" class="py-2 px-5 bg-blue-500 rounded-md text-white hover:bg-sky-500">Tambah</button>
         
            <NuxtLink to="/admin/user" class="py-2 px-5 bg-red-500 rounded-md text-white hover:bg-red-600">Kembalis</NuxtLink>
          </div>
        </form>
      </CardBox>
    </SectionMain>
  </NuxtLayout>
</template>