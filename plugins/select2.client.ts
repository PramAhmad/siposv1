// plugins/select2.client.ts
import Select2 from 'nuxt3-select2';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Select2", Select2, {});
});