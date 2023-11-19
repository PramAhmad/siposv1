<template>
    <div class="">
    <MyNavbar/>
    <div class="container  pt-28  min-h-screen">
        <p class="text-2xl md:text-3xl text-center text-[#63B4FF] ">Kirim SiFest</p>
        <h3 class="text-gray-600  text-center text-lg mt-3">Sampaikan perasaan yang tidak dapat kalian sampaikan ^^</h3> 
    <div
      class="bg-[#FFC700]  h-1 w-5/6 my-5 md:w-[568px] rounded-full m-auto mb-9"
    ></div>

    <div class="mt-16">
        <!-- alert -->
        <div v-if="alert" class="mb-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
    <strong class="font-bold">Berhasil!</strong>
    <span class="block sm:inline">Pesan berhasil dikirim</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg @click="alert = false" class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>Close</title>
            <path
                d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414l-2.93 2.93a1 1 0 01-1.414-1.414l2.93-2.93-2.93-2.93a1 1 0 011.414-1.414l2.93 2.93 2.93-2.93a1 1 0 011.414 1.414l-2.93 2.93 2.93 2.93a1 1 0 010 1.414z">
            </path>
        </svg>
        </span>
</div>
        <form @submit.prevent="addSifest">

            <div class="md:w-1/3 w-full mb-10 m-auto">
                <label for="dari" class=" text-[#63B4FF] text-xl pb-3">From</label>
                <input type="text" name="from" id="" class="block py-2 my-3 h-14 w-full border-slate-200 border-2 rounded-md" v-model="from">
                <label for="dari" class=" text-[#63B4FF] text-xl pb-3 ">To</label>
                <input type="text" name="from" id="" class="block py-2 my-3 h-14 w-full border-slate-200 border-2 rounded-md" v-model="to">
                <label for="dari" class=" text-[#63B4FF] text-xl pb-3">Pesan</label>
                <textarea type="text" name="from" id="" cols="3" rows="8" class="block  my-3  w-full border-slate-200 border-2 rounded-md" v-model="msg" ></textarea>
                <button type="submit" class="py-3 px-6 inline-block bg-[#63B4FF] text-white  rounded-md font-semibold  text-lg hover:bg-opacity-80 mt-3 ">
          <div class="inline-block align-middle mr-2">Kirim Menfest</div>
      <div class="inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block align-middle">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      </div>
    </button>
            </div>
        </form>
    </div>
    </div>
    <Footer/>
    </div>
</template>
<script setup>
const supabase = useSupabaseClient()
const from = ref('')
const to = ref('')
const msg = ref('')
const alert = ref(false)


const addSifest = async ()=>{
    const {data,error} = await supabase.from('sifest').insert([
        {from:from.value,to:to.value,msg:msg.value}
    ])
    if (error){
        console.log(error)
    }
    else{
        alert.value = true
        from.value = ''
        to.value = ''
        msg.value = ''
      
            alert.value = true
      
    }
}

</script>
<style lang="">
    
</style>