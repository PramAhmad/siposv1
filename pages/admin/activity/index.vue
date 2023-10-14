<script setup>
definePageMeta({
  middleware: 'auth'
})
import {mdiTrashCan,mdiEye} from "@mdi/js";
const activity = ref([]);
const loading = ref(false)
const supabase = useSupabaseClient();
const getActivity = async ()=>{
  loading.value = false
    const { data, error } = await supabase
    .from('activity')
    .select()
    .order('id', { ascending: false })
    activity.value = data
    loading.value = true
}
const deleteActvity = async (id)=>{
  if(confirm('Yakin ingin menghapus data?')){

    const { data, error } = await supabase
    .from('activity')
    .delete()
    .match({ id: id })

  }
  else{
    alert('data tidak jadi dihapus')
    
  }
  getActivity()
}
onMounted(()=>{
    getActivity()
})

</script>

<template>
  <NuxtLayout name="authenticated">
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="activity" main>
        <NuxtLink to="/admin/activity/tambah" class="rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3">Tambah activity</NuxtLink>
      </SectionTitleLineWithButton>
    
      <CardBox class="mb-6 " has-table>
        <table>
            <thead>

                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Foto</th>
                    <th>Desc</th>
                    <th>action</th>
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
                <tr  v-for="data,i in activity" :key="data.id">

                    <td data-label="no">{{ i+1 }}</td>
                    <td data-label="Judul">{{ data.title }}</td>
                   
                    <td>
                      <img :src="data.image" alt="" class="md:w-[200px] md:h-[150px] max-w-full w-full h-[100%]">
                    </td>
                    <td data-label="desc">{{ data.desc }}</td>
                   
                    <td class="before:hidden lg:w-1 whitespace-nowrap">
                      <div class="md:flex md:justify-center md:gap-3">

                        <NuxtLink :to="`/admin/activity/`+data.id" >
                          <BaseButton
                              color="danger"
                              :icon="mdiEye"
                              small
                              
                              />
                        </NuxtLink>
                          <BaseButtons type="justify-start lg:justify-end" no-wrap>
                              <BaseButton
                              color="danger"
                              :icon="mdiTrashCan"
                              small
                              @click="deleteActvity(data.id)"
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