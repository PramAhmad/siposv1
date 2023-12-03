<script setup>

const supabase = useSupabaseClient()
const loading = ref(false)
const results = ref([])


const getJenisTataTertib = async ()=>{

  loading.value = false
   const {data,error} = await supabase
    .from('jenis_tata_tertib')
    .select("id,created_at,nama")
    .order('created_at', { ascending: false })
    .eq('is_active', true)
    results.value = data
    loading.value = true

}

const deleteJenisTataTertib = async (id)=>{
  if(confirm('Yakin ingin menghapus data?')){

    const { data, error } = await supabase
    .from('jenis_tata_tertib')
    .update({
      "is_active": false
    })
    .match({ id: id })
    if(error){
      console.log(error)
    }
 
    getJenisTataTertib()
  }
  else{
    alert('data tidak jadi dihapus')
  
  }
}

const filterJenisTataTertib = async (e)=>{

  const { data, error } = await supabase
    .from('jenis_tata_tertib')
    .select("id,created_at,nama")
    .order('created_at', { ascending: false })
    // search by nama
    .ilike('nama', e.target.value + '%')
    if (e.target.value == '') {
      getJenisTataTertib()
    }
    
    if(error){
      console.log(error)
    }
    results.value = data
    loading.value = true
}

onMounted(()=>{
    getJenisTataTertib()
})

</script>

<template>
  <NuxtLayout name="admin">
    <SectionMain>
      <SectionTitleLineWithButton   title="Jenis Tata Tertib" >
        
        <NuxtLink to="/admin/jenis-tata-tertib/tambah" class="rounded-full text-right my-3 bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3 md:text-lg text-md">Tambah Jenis</NuxtLink>
      </SectionTitleLineWithButton>
      <!-- search button -->
      <div class="flex justify-start mt-5 mb-2">
        <div class="flex gap-3">
          <div class="relative">
            <input type="text" @input="filterJenisTataTertib" class="rounded-full border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-gray-200 focus:outline-none text-sm text-gray-600 placeholder-gray-400 py-2 px-3 pl-10 block w-full appearance-none leading-normal ds-input dark:bg-slate-700" placeholder="Search">
            <div class="absolute top-1 left-0 inline-flex items-center p-2">
              <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
        </div>
        </div>
        </div>
        <!-- end search button -->

      <CardBox class="mb-6 mt-5" has-table>
        <table>
            <thead>

                <tr>
                    <th>No</th>
                    <th>Nama Jenis Tata Tertib</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody >
                <tr v-if="!loading">
                    <td colspan="3" class="text-center">
                        <div class="flex justify-center items-center">
                            <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                    </td>
                </tr>
                <tr v-if="results.length <= 0">
                  <td colspan="3" class="text-center">data tidak di temukan</td>
                </tr>
                <tr v-for="data,i in results" :key="i">

                    <td data-label="no">{{ i+1 }}</td>
                    <td >{{ data.nama }}</td>                
                    <td class="before:hidden lg:w-1 whitespace-nowrap ">
                      <div class="flex gap-3">

                        <NuxtLink class="py-1 px-1.5 rounded-md border "  :to="`/admin/jenis-tata-tertib/`+data.id" >detail</NuxtLink>
                      <button  @click="deleteJenisTataTertib(data.id)" class="py-1 px-2 rounded-md border border-rose-600 text-rose-600">delete</button>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
      </CardBox>

     
    </SectionMain>
  </NuxtLayout>
</template>