<script setup>
definePageMeta({
  middleware: 'auth'
})
import {
  mdiMonitorCellphone,
  mdiTableBorder,
  mdiChartTimelineVariant,
  mdiTrashCan,
  mdiAccountMultiple,
  mdiCartOutline

} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import NotificationBar from "@/components/NotificationBar.vue";

import CardBox from "@/components/CardBox.vue";

import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";

const supabase = useSupabaseClient();

const user = useSupabaseUser()
const transaksi = ref([])
const chartData = ref([]);
const mahasiswa  = ref([])
const countMahasiswa = async ()=>{
  const {data,error} = await supabase.from('mahasiswa').select('id')
  mahasiswa.value = data

}

const countTransaksi = async()=>{
  // count total transaksi
  const {data,error} = await supabase.from('payment').select('id')
  transaksi.value = data
}

const calcuateTotalBayarInEveryRoom = async()=>{
  const {data,error} = await supabase.from('room_payment').select('id,nama_pembayaran')
  if(error){
    console.error(error)
  }else{
    const result = await Promise.all(data.map(async(item)=>{
      const {data,error} = await supabase.from('payment').select('total_bayar').eq('payment_id',item.id)
      if(error){
        console.error(error)
      }else{
        const total = data.reduce((acc,curr)=>acc+curr.total_bayar,0)
        return {
          ...item,
          total_bayar: total
        }
      }
    }))
    // format total bayar to rupiah
    result.forEach((item)=>{
      item.total_bayar = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.total_bayar)
    })
    
    chartData.value = result
    console.log(result)
  }
}
onMounted(()=>{
  countMahasiswa()
  countTransaksi()

  calcuateTotalBayarInEveryRoom()
})

</script>

<template >
  <div>

    <NuxtLayout name="authenticated">
      <SectionMain>
        <SectionTitleLineWithButton
          :icon="mdiChartTimelineVariant"
          title="Overview"
          main
        >
        
        </SectionTitleLineWithButton>
  
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            trend="12%"
            trend-type="up"
            color="text-emerald-500"
            :icon="mdiAccountMultiple"
            :number="mahasiswa.length"
            label="Mahasiswa"
            class="border border-slate-200"
          />
          <CardBoxWidget
            trend="12%"
            trend-type="down"
            color="text-blue-500"
            :icon="mdiCartOutline"
            :number="transaksi.length"
            prefix=""
            label="Transaksi"
            class="border border-slate-200"
          />
          <CardBoxWidget
            trend="Overflow"
            trend-type="alert"
            color="text-red-500"
            :icon="mdiChartTimelineVariant"
            :number="256"
            suffix="%"
            label="Performance"
            class="border border-slate-200"
          />
        </div>
  
    
  
        <CardBox has-table class="md:w-1/2 w-full">
          <table>
            <thead>
              <tr>
                <th >no</th>
                <th >Pembayaran</th>
                <th >Jumlah Uang</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data,i in chartData" :key="i">
                <td data-label="no">{{ i+1 }}</td>
                <td data-label="pembayaran">{{ data.nama_pembayaran }}</td>
                <td data-label="jumlah uang">{{ data.total_bayar }}</td>
              </tr>
            </tbody>
          </table>
        </CardBox>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>