<script setup>
const supabase =  useSupabaseClient()
const email = ref('')
const password = ref('')
const loading = ref(false)
const login = async () => {
    loading.value = true
    const {data,error} = await 
    supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    if(error){
        console.log(error)
        alert("password/email anda salah")
    }
    loading.value = false
    navigateTo('/admin')
};
</script>

<template>
  <NuxtLayout>
   <!-- handle loading -->
    <div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-6">
        <div class="flex items-center justify-center">
          <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </div>
    </div>
    


 
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">

      <CardBox :class="cardClass" is-form @submit.prevent="login">
        <FormField label="email" help="Masukan Email Kamu">
          <FormControl
            v-model="email"
            :icon="mdiAccount"
            name="email"
            autocomplete="email"
          />
        </FormField>

        <FormField label="password" help="Masukan Password Kamu">
          <FormControl
            v-model="password"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="password"
          />
        </FormField>

     

        <template #footer>
          <BaseButtons>
            <button class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500 ">Login</button>
            <button class="py-2 px-5 bg-rose-600 rounded-md text-white hover:bg-rose-500 ">Back</button>
           
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </NuxtLayout>
</template>
