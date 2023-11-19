<script setup>
import { createClient } from '@supabase/supabase-js'
const mail = ref('')
const password = ref('')
const role = ref('')
const supabase = createClient("https://kjklvfzkbunulydidzrp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqa2x2ZnprYnVudWx5ZGlkenJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjkxMjA4OSwiZXhwIjoyMDEyNDg4MDg5fQ.XyEoK7w0-182r5ZOAn4j2dLI8zPSZWdayN237_xTSu0", {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Access auth admin api
const adminAuthClient = supabase.auth.admin


const submit = async ()=>{
  const {data,error} = await adminAuthClient.createUser({
    email: mail.value,
    password: password.value,
    user_metadata: {
      role: role.value
    },
    email_confirm: true
  })
}


</script>

<template>
  <NuxtLayout name="authenticated">
 
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
      <CardBox>
        <form @submit.prevent="submit">
         
          <FormField label="Nama dan role">
            <FormControl v-model="mail" placeholder="Your mail" :icon="mdiAccount" />
         
            <select v-model="role" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2">
           
              <option value="km">km</option>
              <option value="guru">guru</option>
              
            </select>
          </FormField>

          <FormField label="Password" help="Do not enter the leading zero">
            <FormControl v-model="password" type="password" placeholder="Your password" />
          </FormField>
        
          <div>
            <BaseButtons>
              <button type="submit" class="py-2 px-5 bg-blue-500 rounded-md text-white hover:bg-sky-500">Tambah</button>
              <BaseButton @click="reset" color="info" outline label="Reset" />
            </BaseButtons>
          </div>
        </form>
      </CardBox>
    </SectionMain>
  </NuxtLayout>
</template>