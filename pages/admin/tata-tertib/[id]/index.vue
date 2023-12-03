<script setup>
import{
  mdiSignCaution,
  
} from "@mdi/js"



const supabase = useSupabaseClient()

const nama = ref('')
const jenis = ref([])
const konsekuensi = ref('')
const poin = ref(0)

const alert = ref(false)
const $route = useRoute()

const getDetailTataTertib = async () => {
  const { data, error } = await supabase
    .from('tata_tertib')
    .select("id,created_at,jenis(id,nama),nama,konsekuensi,poin")
    .eq('id', $route.params.id);

  if (error) {
    console.log(error);
  }
  else {
       console.log(data)
   if(data[0]){

        nama.value = data[0].nama;
        konsekuensi.value = data[0].konsekuensi;
        poin.value = data[0].poin;
        jenis.value.label = data[0].jenis.nama;
     
   }
  }
};


const getJenis = async ()=>{
const {data,error} = await supabase
    .from('jenis_tata_tertib')
    .select("id,nama")
    .eq('is_active', true)


    if(error){
    console.log(error)
    }
    // swap value agar sesuai dengan template admin
    jenis.value = data.map(item => ({
      label: item.nama, 
      value: item.id 
    }));

}


const submit = async ()=>{

    const {data,error} = await supabase
        .from('tata_tertib')
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
  getDetailTataTertib()
    getJenis()
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
        <span class="font-semibold">Berhasil!</span> Tata Tertib berhasil ditambahkan.
        </Alert>
        <CardBox class="mt-5">
        <form @submit.prevent="submit">
            
            <FormField label="Nama Tata Tertib ">
            <FormControl v-model="nama" placeholder="nama" :icon="mdiSignCaution" />
            
            </FormField>
    
             <FormField label="Jenis Tata Tertib ">
            <FormControl v-model="jenis" placeholder="jenis tata tertib" :icon="mdiSignCaution" :options="jenis" />
            
            </FormField>
            <!-- form konsekuensi -->
            <FormField label="Konsekuensi ">
             <FormControl v-model="konsekuensi" placeholder="konsekuensi" :icon="mdiSignCaution" />
            </FormField>    
            <!-- form poin -->
            <FormField label="Poin ">
             <FormControl v-model="poin" placeholder="poin" :icon="mdiSignCaution" />
            </FormField>
    
        
            <div class="flex gap-5">
            
                <button type="submit" class="py-2 px-5 bg-blue-500 rounded-md text-white hover:bg-sky-500">Tambah</button>
            
            <NuxtLink to="/admin/tata-tertib" class="py-2 px-5 bg-red-500 rounded-md text-white hover:bg-red-600">Kembali</NuxtLink>
            </div>
        </form>
        </CardBox>
    </SectionMain>
    </NuxtLayout>
</template>