<script setup>
import{
  mdiSignCaution,
  
} from "@mdi/js"



const supabase = useSupabaseClient()

const nama = ref('')

const alert = ref(false)
const $route = useRoute()

const getDetailJenisTataTertib = async () => {
  const { data, error } = await supabase
    .from('jenis_tata_tertib')
    .select("id, nama, is_active")
    .eq('id', $route.params.id);

  if (error) {
    console.log(error);
  } else {
   if(data[0]){

       nama.value = data[0].nama;
     
   }
  }
};

const submit = async ()=>{

    const {data,error} = await supabase
        .from('jenis_tata_tertib')
       .update([
        { 
            nama: nama.value,
        }
        ])
        .match({ id: $route.params.id })
  if(error){
    console.log(error)
  }else{
    alert.value = true
    
   

  }
}

onMounted(()=>{
  getDetailJenisTataTertib()
})
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
        <span class="font-semibold">Berhasil!</span> Tata Tertib berhasil diubah.
      </Alert>
      <CardBox class="mt-5">
        <form @submit.prevent="submit">
         
          <FormField label="Nama Tata Tertib ">
            <FormControl v-model="nama" placeholder="nama" :icon="mdiSignCaution"  />
            
          </FormField>
          
        
          <div class="flex gap-5">
         
              <button type="submit" class="py-2 px-5 bg-blue-500 rounded-md text-white hover:bg-sky-500">Ubah</button>
         
            <NuxtLink to="/admin/jenis-tata-tertib" class="py-2 px-5 bg-red-500 rounded-md text-white hover:bg-red-600">Kembali</NuxtLink>
          </div>
        </form>
      </CardBox>
    </SectionMain>
  </NuxtLayout>
</template>