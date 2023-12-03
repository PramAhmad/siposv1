<script setup>
import{
mdiSignCaution,

} from "@mdi/js"


const supabase = useSupabaseClient()
const jenis = ref([])
// swap jenis.nama jadi jenis.label

const alert = ref(false)
const form ={
nama : '',
jenis : '',
konsekuensi: '',
poin:0,
is_active: true
}


const getJenis = async ()=>{
const {data,error} = await supabase
    .from('jenis_tata_tertib')
    .select("id,nama")
    .eq('is_active', true)


    if(error){
    console.log(error)
    }
    jenis.value = data.map(item => ({
      label: item.nama, 
      value: item.id 
    }));

}


const submit = async ()=>{
   
    const {data,error} = await supabase
        .from('tata_tertib')
        .insert([
        { 
            nama: form.nama,
            jenis: form.jenis.value,
            konsekuensi: form.konsekuensi,
            poin: form.poin,
            is_active: form.is_active
        }
        ])
    if(error){
    console.log(error)
    }else{
    alert.value = true



    }
}

onMounted(()=>{
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
        <FormControl v-model="form.nama" placeholder="nama" :icon="mdiSignCaution" />
        
        </FormField>

         <FormField label="Jenis Tata Tertib ">
        <FormControl v-model="form.jenis" placeholder="jenis tata tertib" :icon="mdiSignCaution" :options="jenis" />
        
        </FormField>
        <!-- form konsekuensi -->
        <FormField label="Konsekuensi ">
         <FormControl v-model="form.konsekuensi" placeholder="konsekuensi" :icon="mdiSignCaution" />
        </FormField>    
        <!-- form poin -->
        <FormField label="Poin ">
         <FormControl v-model="form.poin" placeholder="poin" :icon="mdiSignCaution" />
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