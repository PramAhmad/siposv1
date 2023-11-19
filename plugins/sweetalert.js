import Vue from 'vue';
import Swal from 'sweetalert2';

const options = {
  // Konfigurasi SweetAlert2 sesuai kebutuhan Anda
};

Vue.prototype.$swal = Swal.mixin(options);

export default async function (context, inject) {
  inject('swal', Vue.prototype.$swal);
}
