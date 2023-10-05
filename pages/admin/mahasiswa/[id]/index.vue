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
const alert = ref(false)

const updateMahasiswa = async()=>{
    // validate jika foto kosong jangan update fotonya
   alert.value = false
    if(fotopath.value ){
        const {data,error} = await supabase.from('mahasiswa').update({
            nama: nama.value,
            npm: npm.value,
            kelas: kelas.value,
        }).eq('id', $route.params.id)
        if(error){
            console.log(error)
        }
        else{
            alert.value = true
            getSingleMahasiswa()
        }
    }else{

      const {data,error} = await supabase.from('mahasiswa').update({
          nama: nama.value,
          npm: npm.value,
          kelas: kelas.value,
          foto: url.value + fotopath.value
      }).eq('id', $route.params.id)
      if(error){
          console.log(error)
      }
      else{
          alert.value = true
          getSingleMahasiswa()
         
      }
    }
    
 
   
}





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
const getMahasiswaPayment = async () => {
  loading.value = false;
  const { data, error } = await supabase
    .from("payment")
    .select("tanggal_bayar,mahasiswa_id(nama,kelas),total_bayar,payment_id(nama_pembayaran)")
    .eq('mahasiswa_id', $route.params.id);
  
  if (error) {
    console.log(error);
  } else {
    payment.value = data || []; // Ensure payment is an array
    loading.value = true;
  }
};
const calculateTotalPaymentPerNamaPembayaran = computed(() => {

  const totalPerNamaPembayaran = {};

  for (const data of payment.value) { // Access the array
    const namaPembayaran = data.payment_id.nama_pembayaran;
    const total = data.total_bayar;

    if (!totalPerNamaPembayaran[namaPembayaran]) {
      totalPerNamaPembayaran[namaPembayaran] = 0;
    }

    totalPerNamaPembayaran[namaPembayaran] += total;
  }

  return totalPerNamaPembayaran;
});


onMounted(() => {
  getMahasiswaPayment()
    getSingleMahasiswa()
    // getNamaPembayaran()
})
</script>

<template>
  <NuxtLayout name="authenticated">
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAccount" title="Profile" main>
       
      </SectionTitleLineWithButton>
        <!--alert  -->
        <NotificationBarInCard v-if="alert" class="mb-6" type="success">
          Data berhasil di update
        </NotificationBarInCard>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <MahasiswaCard class="mb-6" />
        <form method="post" @submit.prevent="updateMahasiswa">
        <CardBox>
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

       
            <BaseButtons>
              <button type="submit" class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500">Update</button>

              <BaseButton color="info" label="Options" outline />
            </BaseButtons>
         
          </CardBox>
        </form>

      
          <BaseDivider />

          
          
        </div>
        <SectionTitleLineWithButton :icon="mdiAccount" main  title="Pembayaran " >
        
        <!-- <NuxtLink to="/admin/mahasiswa/tambah" class="rounded-full my-3 bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3 md:text-lg text-md">Add Mahasiswa</NuxtLink> -->
      </SectionTitleLineWithButton>
      <CardBox class="mb-6" has-table>
  <div class="mt-4">
    <strong>Total Pembayaran Yang Sudah Di Lakukan:</strong>
    <ul class="mt-2 mb-4">
      <li v-for="(total, namaPembayaran) in calculateTotalPaymentPerNamaPembayaran" :key="namaPembayaran" class="text-gray-700 dark:text-white font-semibold py-1 list-disc ml-6">
        {{ namaPembayaran }}: <span class="text-blue-500">Rp. {{ total }}</span>
      </li>
    </ul>
  </div>
  <table>
    <thead>
      <tr>
        <th>No</th>
      
        <th>Nama Pembayaran</th>
        <th>Total bayar</th>
        <th>Tanggal bayar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, i) in payment" :key="data.id">
        <td data-label="no">{{ i + 1 }}</td>
        <td data-label="Nama Pembayaran">{{ data.payment_id.nama_pembayaran }}</td>
      
        <td data-label="Total Bayar">Rp.{{ data.total_bayar }}</td>
        <td data-label="Tanggal Bayar">{{ data.tanggal_bayar }}</td>
     
      </tr>
    </tbody>
  </table>
</CardBox>

    </SectionMain>
  </NuxtLayout>
</template>