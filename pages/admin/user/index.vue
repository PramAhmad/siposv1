<template>
    <NuxtLayout name="authenticated">
      <SectionMain>
        <SectionTitleLineWithButton :icon="mdiAccount" main  title="user" >
            <NuxtLink to="/admin/user/tambah" class="rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3">Tambah user</NuxtLink>
    
        </SectionTitleLineWithButton>
      
        <CardBox class="mb-6 md:w-1/2" has-table>
          <table>
              <thead>
  
                  <tr>
                      <th>No</th>
                      <th>Nama user</th>                                   
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
                  <tr v-for="data,i in users.users" :key="i">
  
                      <td data-label="no">{{ i+1 }}</td>
                      <td data-label="email">{{ data.email }}</td>                 
                      <td class="before:hidden lg:w-1 whitespace-nowrap ">
                        <div class="flex gap-3">
                            
                          <BaseButtons type="justify-start lg:justify-end" no-wrap>
                                <BaseButton
                                color="danger"
                                :icon="mdiTrashCan"
                                small
                                @click="deleteUser(data.id)"
                                />
                            </BaseButtons>
                        </div>
                      </td>
                  </tr>
              </tbody>
          </table>
        </CardBox>
  
       
      </SectionMain>
    </NuxtLayout>
  </template>
  
  
 <script setup>
 import { createClient } from '@supabase/supabase-js';
 import {mdiTrashCan} from  "@mdi/js";
 const supabase = createClient("https://kjklvfzkbunulydidzrp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqa2x2ZnprYnVudWx5ZGlkenJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjkxMjA4OSwiZXhwIjoyMDEyNDg4MDg5fQ.XyEoK7w0-182r5ZOAn4j2dLI8zPSZWdayN237_xTSu0", {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const users = ref([])
const loading = ref(false)
// Access auth admin api
const adminAuthClient = supabase.auth.admin
const getUser = async ()=>{
    loading.value = false
    const {data,error} = await adminAuthClient.listUsers()
    if(error){
        console.log(error)
    }else{
        users.value = data
        loading.value = true
    }
}

const deleteUser = async(id)=>{
    // confirm
    const confirm = window.confirm('Are you sure?')
    if(confirm){
        const {data,error} = await adminAuthClient.deleteUser(id)
        if(error){
            console.log(error)
        }else{
            getUser()
        }
    }

}
onMounted(()=>{
    getUser()
})  
</script>