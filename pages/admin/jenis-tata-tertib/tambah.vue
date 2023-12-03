<script setup>
import{
  mdiSignCaution,
  
} from "@mdi/js"


const supabase = useSupabaseClient()
const form ={
  nama : '',
  is_active: true
}

const alert = ref(false)


const submit = async ()=>{
  console.log(form)
    const {data,error} = await supabase
        .from('jenis_tata_tertib')
        .insert([
        { 
            nama: form.nama,
            is_active: form.is_active
        }
        ])
  if(error){
    console.log(error)
  }else{
    alert.value = true
    form.nama = ''
   

  }
}

</script>

<template>
  <NuxtLayout name="admin">
 
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="Tambah Tata Tertib"
        main
      >
      </SectionTitleLineWithButton>
   
      <Alert v-if="alert" type="success" class="mb-4">
        <span class="font-semibold">Berhasil!</span> Tata Tertib berhasil ditambahkan.
      </Alert>
      <CardBox class="mt-5">
        <form @submit.prevent="submit">
         
          <FormField label="Nama Tata Tertib ">
            <FormControl v-model="form.nama" placeholder="nama" :icon="mdiSignCaution" />
            
          </FormField>
          
        
          <div class="flex gap-5">
         
              <button type="submit" class="py-2 px-5 bg-blue-500 rounded-md text-white hover:bg-sky-500">Tambah</button>
         
            <NuxtLink to="/admin/jenis-tata-tertib" class="py-2 px-5 bg-red-500 rounded-md text-white hover:bg-red-600">Kembali</NuxtLink>
          </div>
        </form>
      </CardBox>
    </SectionMain>
  </NuxtLayout>
</template>