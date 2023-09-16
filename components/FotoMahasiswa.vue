<script setup>
const props = defineProps(['path'])
const { path } = toRefs(props)

const emit = defineEmits(['update:path', 'upload'])

const supabase = useSupabaseClient()

const uploading = ref(false)
const src = ref('')
const files = ref()



const submit = async (evt) => {
  files.value = evt.target.files
  try {
    uploading.value = true

    const file = files.value[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`
    console.log(filePath)

    let { error: uploadError } = await supabase.storage.from('mahasiswa').upload(filePath, file)

    if (uploadError) throw uploadError

    emit('update:path', filePath)
    emit('upload')
  } catch (error) {
    alert(error.message)
  } finally {
    uploading.value = false
  }
}


</script>

<template>
  <div>
    
    <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="avatar image"
      style="width: 10em; height: 10em;"
    />
   
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="single">
        {{ uploading ? 'Uploading ...' : 'Upload Here' }}
      </label>
      <input
        
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
        type="file"
        id="single"
        accept="image/*"
        @change="submit"
        :disabled="uploading"
      />
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300 " id="file_input_help">PNG, JPG ,JPEG only.</p>
    </div>

</template>