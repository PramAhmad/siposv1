<script setup>


const alert = ref(false);
const supabase = useSupabaseClient();
const mail = ref('');
const password = ref('');
const role = ref('');

const submit = async () => {
  alert.value = false;
    const {data,error} = await supabase.auth.admin.createUser({
        email: mail.value,
        password: password.value,
       options: {
        data: { role: role.value },
      },
    })
    if(error){
        console.log(error)
    }


  alert.value = true;


};


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
              <option value="mahasiswa">mahasiswa</option>
              <option value="bendahara">bendahara</option>
              <option value="admin">admin</option>
              
            </select>
          </FormField>

          <FormField label="Password" help="Do not enter the leading zero">
            <FormControl v-model="password" type="password" placeholder="Your password" />
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
