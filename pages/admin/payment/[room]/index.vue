<template>
    <NuxtLayout name="authenticated">
      <SectionMain>
        <!-- loading full screen -->
        <div v-if="!loading" class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-white">
          <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
  
        <div v-for="r in room" :key="r.id">
          <SectionTitleLineWithButton :icon="mdiTableBorder" :title="`payment ` + r.nama_pembayaran" main>
           <!-- add button responsive mobile-->
              <NuxtLink :to="`/admin/payment/${r.id}/tambah`" class="rounded-md border-2 border-gray-900 py-1.5 px-1.5">
                <!-- icon add -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </NuxtLink>
          </SectionTitleLineWithButton>
        </div>
        <!-- filter section -->
        <div class="flex flex-col lg:flex-row gap-3 mb-6">
          <div class="flex-1">
            <input
              type="text"
              class="form-input"
              placeholder="Cari nama mahasiswa, kelas, jumlah bayar, tanggal bayar"
              v-model="search"
            />
          </div>
        </div>
      
  
        <!-- end filter section -->
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
            <tbody>
                <tr v-for="(data, i) in filteredPayment" :key="data.id">
      <td data-label="no">{{ i + 1 }}</td>
      <td data-label="nama">
        <NuxtLink :to="`/admin/mahasiswa/` + data.mahasiswa_id.id">{{ data.mahasiswa_id.nama }}</NuxtLink>
      </td>
      <td data-label="kelas" class="uppercase">{{ data.mahasiswa_id.kelas }}</td>
      <td data-label="jumlah bayar"> {{ data.total_bayar }}</td>
      <td data-label="jumlah bayar">{{ data.tanggal_bayar }}</td>
      <td class="before:hidden lg:w-1 whitespace-nowrap">
        <!-- pembungkus 2 buttton -->
        <div class="flex gap-3 justify-center">
          <NuxtLink :to="`/admin/payment/` + $route.params.room + `/` + data.id">
            <!-- inner detail -->
            <BaseButton color="primary" :icon="mdiEye" small />
          </NuxtLink>
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
        <!-- loadmore button -->
        <div class="flex justify-center">
          <BaseButton color="primary" @click="LoadMore" label="more" >
            
          </BaseButton>
        </div>
      </SectionMain>
    </NuxtLayout>
  </template>
  
  <script setup>
 definePageMeta({
  middleware: 'auth'
})
// import icon
import { mdiTableBorder, mdiEye, mdiTrashCan } from "@mdi/js";
  let payment = ref([]);
  let room = ref([]);
  let search = ref("");
  const loading = ref(false);
  const supabase = useSupabaseClient();
  const $route = useRoute();
  const getInfoRoom = async () => {
    const { data, error } = await supabase
      .from("room_payment")
      .select("id,nama_pembayaran, desc")
      .eq("id", $route.params.room);
     
    if (error) {
      console.log(error);
    } else {
      room.value = data;
    }
  };
  const getpayment = async () => {
    loading.value = false;
    const { data, error } = await supabase
      .from("payment")
      .select("id,total_bayar, tanggal_bayar, mahasiswa_id(id,nama, kelas), payment_id(nama_pembayaran, desc)")
      .eq("payment_id", $route.params.room)
      .limit(5)
      .order("id", { ascending: false });
    if (error) {
      console.error(error);
    }
    // format total bayar to rupiah
    data.forEach((item) => {
      item.total_bayar = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(item.total_bayar);
    });
    payment.value = data.map((item) => ({
      ...item,
      tanggal_bayar: formatDateCustom(item.tanggal_bayar),
    }));
    loading.value = true;
  };
 
  const deleteMahasiswa = async (id) => {
    // confirm
    const confirm = window.confirm("yakin akan menghapus?");
    if (confirm) {
      const { data, error } = await supabase.from("payment").delete().eq("id", id);
      if (error) {
        console.log(error);
      } else {
        getpayment();
      }
    }
  };
  // Fungsi untuk mengonversi format tanggal
  const formatDateCustom = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const monthName = monthNames[monthIndex];
    return `${day} ${monthName} ${year}`;
  };

  const LoadMore = async () => {
    const { data, error } = await supabase
      .from("payment")
      .select("id,total_bayar, tanggal_bayar, mahasiswa_id(id,nama, kelas), payment_id(nama_pembayaran, desc)")
      .eq("payment_id", $route.params.room)
      .order("id", { ascending: false })
      .range(payment.value.length, payment.value.length + 5);
    if (error) {
      console.error(error);
    }
    payment.value = [...payment.value, ...data];
  };


    const filteredPayment = computed(() => {
        return payment.value.filter((data) => {
        return (
            data.mahasiswa_id.nama.toLowerCase().includes(search.value.toLowerCase()) ||
            data.mahasiswa_id.kelas.toLowerCase().includes(search.value.toLowerCase()) ||
            data.total_bayar.toString().toLowerCase().includes(search.value.toLowerCase())||
            data.tanggal_bayar.toLowerCase().includes(search.value.toLowerCase())
        );
        });
    });
  onMounted(() => {
    getpayment();
    getInfoRoom();
  });
  </script>
  