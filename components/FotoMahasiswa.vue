<!-- components/ImageUploader.vue -->
<template>
  <div>
    <input type="file" @change="uploadImage" accept="image/*" />
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
        const connection_string ="BlobEndpoint=https://sisfor23.blob.core.windows.net/;QueueEndpoint=https://sisfor23.queue.core.windows.net/;FileEndpoint=https://sisfor23.file.core.windows.net/;TableEndpoint=https://sisfor23.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwlacupiytfx&se=2024-10-08T06:36:44Z&st=2023-10-07T22:36:44Z&spr=https&sig=afa6eRmfFh783CPHQ4aHFS0blfZkseFH0bpf3jv3JlM%3D"; // Replace with your connection string
        const blobServiceClient = BlobServiceClient.fromConnectionString(connection_string);
        console.log(blobServiceClient)
        const containerClient = blobServiceClient.getContainerClient("mahasiswa");
        console.log(containerClient)
        const blockBlobClient = containerClient.getBlockBlobClient(file.name);
        console.log(blockBlobClient)


        try {
          
          await blockBlobClient.uploadBrowserData(file, { blobHTTPHeaders: { blobContentType: "image/jpeg" } });
    console.log("Image uploaded successfully!");
    // get th url image
    urlfoto.value = blockBlobClient.url;
    emit('update:path', urlfoto.value)
    emit('upload')
    
console.log(urlfoto.value)
          
        } catch (error) {
          console.error("Failed to upload image:", error);
        }
      }
    }
 

</script>
