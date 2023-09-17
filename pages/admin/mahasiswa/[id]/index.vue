<template>
    <div>
        <NuxtLayout name="authenticated">
       {{ mahasiswa }}
    </NuxtLayout>
</div>
</template>
<script setup>
const supabase = useSupabaseClient();
const mahasiswa = ref();
const $route = useRoute()
const getMahasiswa = async()=>{
    const { data, error } = await supabase
    .from('mahasiswa')
    .select()
    .eq('id', $route.params.id)
    .order('npm', { ascending: true })
    mahasiswa.value = data  
}
onMounted(()=>{
    getMahasiswa()
})
</script>
<style lang="">
    
</style>