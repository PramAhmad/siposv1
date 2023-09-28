<script setup>

import {
  mdiAccount,
  mdiMail,


} from "@mdi/js";



const url = ref("https://wsgwhdbimgdepfxktxlo.supabase.co/storage/v1/object/public/mahasiswa/");
const fotopath = ref();
const nama = ref()
const npm = ref()
const kelas = ref()
const supabase = useSupabaseClient()
const payment = ref([])
const $route = useRoute()
const loading = ref(false)
const nama_pembayaran = ref([])

const updateMahasiswa = async()=>{
    // validate jika isinya kosong maka field tidak terupdate
 
    const {data,error} = await supabase.from('mahasiswa').update({
        nama: nama.value,
        npm: npm.value,
        kelas: kelas.value,
        foto: url.value + fotopath.value
    }).eq('id',$route.params.id)
    if(error){
        console.log(error)
    }
}

// get nama pembayaran and count every payment
const getNamaPembayaran = async () => {
  try {
    const { data: nama_pembayaran, error } = await supabase
      .from('room_payment')
      .select('id, nama_pembayaran');

    if (error) {
      console.error(error);
      return;
    }

    for (let i = 0; i < nama_pembayaran.length; i++) {
      const roomPaymentId = nama_pembayaran[i].id;

      const { data: paymentCount, error: countError } = await supabase
        .from('payment')
        .select('count(total_bayar)')
        .eq('payment_id', roomPaymentId)
        .eq('mahasiswa_id', $route.params.id);

      if (countError) {
        console.error(countError);
      } else {
        // Assuming the count query returns one row with a count
        const totalCount = paymentCount[0].count;
        nama_pembayaran[i].count = totalCount;
      }
    }

    // Now you can access the nama_pembayaran data with counts
    console.log(nama_pembayaran);
    nama_pembayaran.value = nama_pembayaran;
  } catch (err) {
    console.error(err);
  }
};




const getSingleMahasiswa = async() => {
    const { data, error } = await supabase.from("mahasiswa").select().eq('id', $route.params.id)
    if (data[0]) {
        const mahasiswaData = data[0];
        nama.value = mahasiswaData.nama || '';
        npm.value = mahasiswaData.npm || '';
        kelas.value = mahasiswaData.kelas || '';
        fotopath.value = mahasiswaData.foto || '';
    }
    if (error) {
        console.log(error)
    }
}
const getMahasiswaPayment = async()=>{
  loading.value = false
  const {data,error } =  await supabase.from("payment").select("tanggal_bayar,mahasiswa_id(nama,kelas),total_bayar,payment_id(nama_pembayaran)").eq('mahasiswa_id',$route.params.id)
  if (error) {
    console.log(error)
  } else {
    payment.value = data
    loading.value = true
  }
}
onMounted(() => {
  getMahasiswaPayment()
    getSingleMahasiswa()
    getNamaPembayaran()
})
</script>

<template>
  <NuxtLayout name="authenticated">
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAccount" title="Profile" main>
       
      </SectionTitleLineWithButton>
      
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <MahasiswaCard class="mb-6" />
        <CardBox is-form @submit.prevent="updateMahasiswa">
          <FormField label="New Profile" help="Max 500kb">
            <FotoMahasiswa v-model:path="fotopath"/>
          </FormField>

          <FormField label="nama" help="Masukan nama baru">
            <FormControl
            v-model="nama"
              :icon="mdiAccount"
              name="nama"
              required
              autocomplete="nama"
            />
          </FormField>
          <FormField label="NPM" help="Masukan NPM baru">
            <FormControl
              v-model="npm"
              :icon="mdiMail"
              type="number"
              name="npm"
              required
              autocomplete="npm"
            />
          </FormField>
          <select v-model="kelas" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>

          <template #footer>
            <BaseButtons>
              <BaseButton color="info" type="submit" label="Submit" />
              <BaseButton color="info" label="Options" outline />
            </BaseButtons>
          </template>
        </CardBox>

      
          <BaseDivider />

          
          
        </div>
        <SectionTitleLineWithButton :icon="mdiAccount" main  title="Pembayaran yang sudah di lakukan" >
        
        <!-- <NuxtLink to="/admin/mahasiswa/tambah" class="rounded-full my-3 bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3 md:text-lg text-md">Add Mahasiswa</NuxtLink> -->
      </SectionTitleLineWithButton>
        <CardBox class="mb-6" has-table>
          <ul v-for="data in nama_pembayaran" :key="data.id" >
        <li>{{ data.nama_pembayaran }}</li>
      </ul>
      <table>
          <thead>

              <tr>
                  <th>No</th>
                  <th>Nama Mahasiswa</th>
                  <th>Kelas</th>
                  <th>Tanggal bayar</th>
                  <th>Total bayar</th>
                  <th>Nama Pembayaran</th>
              
              </tr>
          </thead>
          <tbody >
            
              <tr v-for="data,i in payment" :key="data.id">

                  <td data-label="no">{{ i+1 }}</td>
                  <td data-label="nama">{{ data.mahasiswa_id.nama }}</td>
                 
                  <td data-label="kelas">{{ data.mahasiswa_id.kelas }}</td>
               
                  <td data-label="tanggal bayar">{{ data.tanggal_bayar }}</td>
                  <td data-label="tanggal bayar">{{ data.total_bayar }}</td>
                  <td data-label="Nama Pembayaran">{{ data.payment_id.nama_pembayaran }}</td>
                  <td class="before:hidden lg:w-1 whitespace-nowrap ">
                    <div class="flex gap-3">

                      <NuxtLink class="py-1 px-2 rounded-md border "  :to="`/admin/mahasiswa/`+data.id" >detail</NuxtLink>
                      <BaseButtons type="justify-start lg:justify-end" no-wrap>
                            <BaseButton
                            color="danger"
                            :icon="mdiTrashCan"
                            small
                            @click="deleteMahasiswa(data.id)"
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