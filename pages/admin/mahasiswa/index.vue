<script setup>
import {
  mdiMonitorCellphone,
  mdiTableBorder,
  mdiTableOff,
  mdiEye,
  mdiTrashCan,
  mdiGithub,
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import TableSampleClients from "@/components/TableSampleClients.vue";
import CardBox from "@/components/CardBox.vue";
// import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
// import BaseButtons from "@/components/BaseButtons.vue";
import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue";


const isModalActive = ref(false);
const isModalDangerActive = ref(false);
const mahasiswa = ref([]);
const supabase = useSupabaseClient();
const getMahasiswa = async ()=>{
    const { data, error } = await supabase
    .from('mahasiswa')
    .select()
    .order('npm', { ascending: true })
    mahasiswa.value = data
}
const deleteMahasiswa = async (id)=>{
    const { data, error } = await supabase
    .from('mahasiswa')
    .delete()
    .match({ id: id })
    getMahasiswa()
}
onMounted(()=>{
    getMahasiswa()
})

</script>

<template>
  <NuxtLayout name="authenticated">
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Mahasiswa" main>
        <NuxtLink to="/admin/mahasiswa/tambah" class="rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3">Tambah Mahasiswa</NuxtLink>
      </SectionTitleLineWithButton>
      <NotificationBar color="info" :icon="mdiMonitorCellphone">
        <b>Responsive table.</b> Collapses on mobile
      </NotificationBar>

      <CardBox class="mb-6" has-table>
        <table>
            <thead>

                <tr>
                    <th>No</th>
                    <th>Npm</th>
                    <th>Nama</th>
                    <th>Kelas</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="data in mahasiswa" :key="data.id">

                    <td data-label="no">{{ data.id }}</td>
                    <td data-label="npm">{{ data.npm }}</td>
                    <td data-label="nama">{{ data.nama }}</td>
                    <td data-label="kelas">{{ data.kelas }}</td>
                    <td class="before:hidden lg:w-1 whitespace-nowrap">
                        <BaseButtons type="justify-start lg:justify-end" no-wrap>
                            <BaseButton
                            color="info"
                            :icon="mdiEye"
                            small
                            @click="isModalActive = true"
                            />
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