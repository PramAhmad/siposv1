// plugins/azureBlobStorage.ts
import { BlobServiceClient } from "@azure/storage-blob";

const connection_string = "DefaultEndpointsProtocol=https;AccountName=sisfor23;AccountKey=Sej3CEgYp8DvxLGDF8nvs+j4W15Zo2yq3TkeVXUkS80n+sAO6sAD/7peu3k6oM8dOBs5HxfzjcPd+AStD5K7kg==;EndpointSuffix=core.windows.net"; // Replace with your actual connection string
const blobServiceClient = BlobServiceClient.fromConnectionString(connection_string);

export default ({ app }, inject) => {
  console.log("Plugin injected");
  inject("azureBlobStorage", blobServiceClient);
};






