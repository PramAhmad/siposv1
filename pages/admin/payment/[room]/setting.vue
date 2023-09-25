<template>
    <div>
       <div class="w-1/2">
        <p>{{ room }}</p>
       </div>
    </div>
</template>
<script setup>
const supabase = useSupabaseClient()
const room = ref([])
const $route = useRoute()

const getSettingRoom = async()=>{
    const {data,error} = await supabase.from('room_payment').select('*').eq('id', $route.params.room)
    if (error) {
        console.log(error);
    } else {
        room.value = data
        
    }
}
onMounted(()=>{
    getSettingRoom()
})
</script>
