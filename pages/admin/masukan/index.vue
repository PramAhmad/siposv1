<template>
    
    <NuxtLayout name="authenticated">
<SectionMain>
  <SectionTitleLineWithButton :icon="mdiTableBorder" title="Kas Kelas B" main>
    <NuxtLink to="/admin/kas/tambah" class="rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3">Bayar Kas</NuxtLink>
  </SectionTitleLineWithButton>
  <NotificationBar color="info" :icon="mdiMonitorCellphone">
    <b>Responsive table.</b> Collapses on mobile
  </NotificationBar>

  <CardBox class="mb-6" has-table>
    <table>
        <thead>

            <tr>
                <th>No</th>
                <th>Nama Mahasiswa</th>
                <th>Kelas</th>
                <th>Jumlah Bayar</th>
                <th>Tanggal Bayar</th>
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
            <tr v-for="data,i in kas" :key="data.id">

                <td data-label="no">{{ i+1 }}</td>
                <td data-label="nama">{{ data.mahasiswa_id.nama }}</td>
               
                <td data-label="kelas">{{ data.mahasiswa_id.kelas }}</td>
            
                <td data-label="jumlah bayar">Rp. {{ data.total_bayar }}</td>
                <td data-label="jumlah bayar">{{ data.tanggal_bayar }}</td>
                <td class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton
                        color="danger"
                        :icon="mdiTrashCan"
                        small
                        @click="deleteMahasiswa(data.id)"
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
<script setup>
import {
mdiMonitorCellphone,
mdiTableBorder,

mdiTrashCan,

} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import NotificationBar from "@/components/NotificationBar.vue";

import CardBox from "@/components/CardBox.vue";

import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
const kas = ref([])
const loading = ref(false)
const supabase  = useSupabaseClient()
const getKas = async ()=>{
loading.value = false
const {data,error} = await supabase.from('kas').select("total_bayar,tanggal_bayar,mahasiswa_id(nama,kelas)")
.order('id', { ascending: false }) 
if(error){
    console.log(error)
}
kas.value = data.map((item) => ({
...item,
tanggal_bayar: formatDateCustom(item.tanggal_bayar),
}));
loading.value = true
}
const deleteMahasiswa = async (id)=>{
const {data,error} = await supabase.from('kas').delete().match({id:id})
if(error){
    console.log(error)
}else{
    getKas()
}
}
// Fungsi untuk mengonversi format tanggal
const formatDateCustom = (dateString) => {
const date = new Date(dateString);
const monthNames = [
"Januari", "Februari", "Maret",
"April", "Mei", "Juni", "Juli",
"Agustus", "September", "Oktober",
"November", "Desember"
];

const day = date.getDate();
const monthIndex = date.getMonth();
const year = date.getFullYear();

const monthName = monthNames[monthIndex];

return `${day} ${monthName} ${year}`;
};


onMounted(()=>{
getKas()
})
</script>
