<template>
  <div>
    
  </div>
</template>
<script setup>
const supabase = useSupabaseClient()
console.log(supabase)
const getMahasiswa = async()=>{
  const {data,error} = await supabase.from('mahasiswa').select()
  console.log(data)
  if(error){
    console.log(error)
  }
}
onMounted(()=>{
  getMahasiswa()
})
</script>
<style lang="">
  
</style>