<template >
    <div>
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
                    <th>Nama </th>
                    <th>Nama</th>
                    <th>Foto</th>
                    <th>Desc</th>
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
                <tr v-for="data,i in mahasiswa" :key="data.id">

                    <td data-label="no">{{ i+1 }}</td>
                    <td data-label="npm">{{ data.npm }}</td>
                   
                    <td data-label="nama">{{ data.nama }}</td>
                    <td>
                      <img :src="data.foto" alt="" class="w-[100px] h-[130px]">
                    </td>
                    <td data-label="kelas">{{ data.kelas }}</td>
                    <td class="before:hidden lg:w-1 whitespace-nowrap">
                      <NuxtLink :to="`/admin/mahasiswa/`+data.id" >detail</NuxtLink>
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
    </div>
</template>
<script>

</script>
<style lang="">
    
</style>