<script setup>

import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://iopmpofmctwamjhqugwp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvcG1wb2ZtY3R3YW1qaHF1Z3dwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDc0MzkxOSwiZXhwIjoyMDE2MzE5OTE5fQ.SesQYkh5xVNd4X-8Yp0SCrYX2-t_qOpbpJZWOoBVzYI", {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const loading = ref(false)
const results = ref([])


const getUser = async ()=>{
  loading.value = false
   const {data,error} = await supabase
    .from('petugas')
    .select("created_at,user_id,nama_depan,nama_belakang,role")
    .order('created_at', { ascending: false })
    results.value = data
    loading.value = true
}

const deleteUser = async (id)=>{
  if(confirm('Yakin ingin menghapus data?')){

    const { data, error } = await supabase
    .from('petugas')
    .delete()
    .match({ user_id: id })
    if(error){
      console.log(error)
    }
    // delete user di schema auth
    const { data: data2, error: error2 } = await supabase.auth.admin.deleteUser(id)
    if(error2){
      console.log(error2)
    }
    getUser()
  }
  else{
    alert('data tidak jadi dihapus')
  
  }
}

const filterUser = async (e)=>{

  const { data, error } = await supabase
    .from('petugas')
    .select("created_at,user_id,nama_depan,nama_belakang,role")
    .order('created_at', { ascending: false })
    // filter nama depan nama belakang
    .ilike('nama_depan', e.target.value + '%')
   

    if(error){
      console.log(error)
    }
    results.value = data
    loading.value = true
}

onMounted(()=>{
    getUser()
})

</script>

<template>
  <NuxtLayout name="admin">
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAccount" main  title="Petugas/User" >
        
        <NuxtLink to="/admin/tambah/user" class="rounded-full my-3 bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3 md:text-lg text-md">Tambah User</NuxtLink>
      </SectionTitleLineWithButton>
      <!-- search button -->
      <div class="flex justify-start mt-2 mb-2">
        <div class="flex gap-3">
          <div class="relative">
            <input type="text" @input="filterUser" class="rounded-full border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-gray-200 focus:outline-none text-sm text-gray-600 placeholder-gray-400 py-2 px-3 pl-10 block w-full appearance-none leading-normal ds-input dark:bg-slate-700" placeholder="Search">
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
                    <th>Nama Depan</th>
                    <th>Nama Belakang</th>                   
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody >
                <tr v-if="!loading">
                    <td colspan="6" class="text-center">
                        <div class="flex justify-center items-center">
                            <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                    </td>
                </tr>
                <tr v-for="data,i in results" :key="i">

                    <td data-label="no">{{ i+1 }}</td>
                    <td data-label="nama depan">{{ data.nama_depan }}</td>                
                    <td data-label="nama belakang">{{ data.nama_belakang }}</td>                 
                    <td data-label="role" >{{ data.role }}</td>
                    <td class="before:hidden lg:w-1 whitespace-nowrap ">
                      <div class="flex gap-3">

                        <NuxtLink class="py-1 px-1.5 rounded-md border "  :to="`/admin/mahasiswa/`+data.user_id" >detail</NuxtLink>
                      <button  @click="deleteUser(data.user_id)" class="py-1 px-2 rounded-md border border-rose-600 text-rose-600">delete</button>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
      </CardBox>

     
    </SectionMain>
  </NuxtLayout>
</template>