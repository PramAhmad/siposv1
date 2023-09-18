<script setup>

const form = reactive({
  login: "",
  pass: "",
  
});

const supabase = useSupabaseClient();
const submit = async () => {
  const {data,error} = await supabase.auth.signInWithPassword({
    email: form.login,
    password: form.pass,
  });
  if(error){
    alert(error.message)
  }
  navigateTo("/admin")
};
</script>

<template>
  <NuxtLayout>
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