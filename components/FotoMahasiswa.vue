<!-- components/ImageUploader.vue -->
<template>
  <div>
    <input type="file" @change="uploadImage" accept="image/*" class="w-full dark:bg-gray-800 py-2 rounded-md border border-gray-900 "/>
  </div>
</template>

<script setup>
import { BlobServiceClient } from "@azure/storage-blob";

const urlfoto = ref('')
// props
const props = defineProps(["path"])  
const emit = defineEmits(["update:path", "upload"])
   const uploadImage =  async (event) =>{
      const file = event.target.files[0];
    if (file) {
        const connection_string ="BlobEndpoint=https://infoangkatanku.blob.core.windows.net/;QueueEndpoint=https://infoangkatanku.queue.core.windows.net/;FileEndpoint=https://infoangkatanku.file.core.windows.net/;TableEndpoint=https://infoangkatanku.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2024-10-15T00:02:15Z&st=2023-10-14T16:02:15Z&spr=https,http&sig=WNHC5FemyO8YXvuiuTCG4r4DIzsmCc9sJ0pIgk52uvU%3D"
        const blobServiceClient = BlobServiceClient.fromConnectionString(connection_string);     
      
        const containerClient = blobServiceClient.getContainerClient("siswa");
        const blockBlobClient = containerClient.getBlockBlobClient(file.name);
        


        try {
          
          await blockBlobClient.uploadBrowserData(file, { blobHTTPHeaders: { blobContentType: "image/jpeg" } });
    console.log("Image uploaded successfully!");
    // get th url image
    urlfoto.value = blockBlobClient.url;
    emit('update:path', urlfoto.value)
    emit('upload')
    

          
        } catch (error) {
          console.error("Failed to upload image:", error);
        }
      }
    }
 

</script>