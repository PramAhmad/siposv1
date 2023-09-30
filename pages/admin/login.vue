<script setup>

const form = reactive({
  login: "",
  pass: "",
  
});
const loading = ref(false)
const supabase = useSupabaseClient();
const submit = async () => {
  const {data,error} = await supabase.auth.signInWithPassword({
    email: form.login,
    password: form.pass,
  });
  loading.value = true
  if(error){
    alert(error.message)
  }

  navigateTo("/admin")
};
</script>

<template>
  <NuxtLayout>
    <!-- loading full custom view screen -->
    <div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-6">
        <div class="flex items-center justify-center">
          <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </div>
    </div>
    


      <!-- <img src="@/assets"> -->
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">

      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="Login" help="Please enter your login">
          <FormControl
            v-model="form.login"
            :icon="mdiAccount"
            name="login"
            autocomplete="username"
          />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="form.pass"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
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
<script setup>

</script>
<style lang="">
    
</style>