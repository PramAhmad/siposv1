<script setup>
import { reactive, ref } from "vue";
import { mdiBallotOutline, mdiAccount, mdiMail, mdiGithub } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import FormCheckRadioGroup from "@/components/FormCheckRadioGroup.vue";
import FormFilePicker from "@/components/FormFilePicker.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import SectionTitle from "@/components/SectionTitle.vue";
// import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import NotificationBarInCard from "@/components/NotificationBarInCard.vue";

const selectOptions = [
  { id: 1, label: "A" },
  { id: 2, label: "B" },
  { id: 3, label: "C" },
];

const form = reactive({
  name: "",
  email: "john.doe@example.com",
  npm: "",
  kelas: selectOptions[0],
  subject: "",
  question: "",
});
const alert = ref(false)
const supabase = useSupabaseClient()
const submit = async () => {
   alert.value = false
    const {data,error} = await supabase.from('mahasiswa').insert([
        {npm:form.npm,nama:form.name,kelas:form.kelas.label}
    ])
    alert.value = true
    navigateTo("/admin/mahasiswa")
    if(error){
      console.log(error)
    }
};

</script>

<template>
  <NuxtLayout name="authenticated">
    <!-- flash message -->
    <SectionMain>

        <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="Tambah Mahasiswa"
        main
      >
        <BaseButton
          href="https://github.com/justboil/admin-one-vue-tailwind"
          target="_blank"
          :icon="mdiGithub"
          label="Star on GitHub"
          color="contrast"
          rounded-full
          small
        />
        
      </SectionTitleLineWithButton>
      <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="false"> 
      <p class="font-bold">Tambah Mahasiswa</p>
      <p class="text-sm">Berhasil Menambahkan Mahasiswa</p>
    </div>
    <CardBox>
  <form @submit.prevent="submit">
    <!-- csrf token -->
    <input type="hidden" name="_token" value="csrf_token_here">

    <FormField label="Nama dan Kelas">
      <FormControl v-model="form.name" placeholder="Your Name" :icon="mdiAccount" />
      <FormControl v-model="form.kelas" :options="selectOptions" placeholder="Your Class"/>
    </FormField>

    <FormField label="With help line" help="Do not enter the leading zero">
      <FormControl v-model="form.npm" type="tel" placeholder="Your npm number" />
    </FormField>

    <div >
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