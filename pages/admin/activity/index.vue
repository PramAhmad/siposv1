<script setup>
definePageMeta({
  middleware: 'auth'
})
import {mdiTrashCan} from "@mdi/js";
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
    getactivity()
  }
  else{
    alert('data tidak jadi dihapus')
  
  }
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
     
      <CardBox class="md:block hidden">
        <div  v-for="data,i in activity" :key="i">
            <div class="flex justify-end gap-3 my-3">

                <NuxtLink :to="`/admin/activity/`+data.id" class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border p-1 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</NuxtLink>
                            <BaseButtons type="justify-start lg:justify-end" no-wrap>
                                <BaseButton
                                class="rounded-md"
                                color="danger"
                                :icon="mdiTrashCan"
                                small
                                @click="deleteActvity(data.id)"
                                />
                            </BaseButtons>
            </div>
            <img :src="data.image" alt="" class="w-2/3 h-2/3 object-contain">
            <h3 class="text-gray-800 dark:text-white font-bold text-left my-3 text-2xl">{{ data.title }}</h3>
            <p class="text-md text-gray-700 dark:text-gray-200 sfont-semibold text-left ">{{ data.desc }}</p>
        </div>
      </CardBox>
      <CardBox class="mb-6 md:hidden" has-table>
        <table>
            <thead>

                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Foto</th>
                    <th>Desc</th>
                    
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
                      <img :src="data.image" alt="" class="max-w-full w-full h-[100%]">
                    </td>
                    <td data-label="desc">{{ data.desc }}</td>
                   
                    <td class="before:hidden lg:w-1 whitespace-nowrap">
                      <NuxtLink :to="`/admin/activity/`+data.id" >detail</NuxtLink>
                        <BaseButtons type="justify-start lg:justify-end" no-wrap>
                            <BaseButton
                            color="danger"
                            :icon="mdiTrashCan"
                            small
                            @click="deleteActvity(data.id)"
                            />
                        </BaseButtons>
                    </td>
                </tr>
            </tbody>
        </table>
      </CardBox>

     
    </SectionMain>
  </NuxtLayout>
</template>