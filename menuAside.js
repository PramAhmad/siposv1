import {
  mdiAccountCircle,
  mdiMonitor,
  mdiAccount,
  mdiHandCoin,
  mdiHistory,
  mdiEvernote,
  mdiAlertPlus,
  mdiAlertCircleCheckOutline,
  mdiMail,
  mdiMailbox,
} from "@mdi/js";

export default
 [
  
 
  {
    to: "/admin",
    icon: mdiMonitor,
    label: "Dashboard",

  },
  {
    label: "Tata Tertib",
    icon: mdiAlertCircleCheckOutline,
    menu: [
      {
        to: "/admin/tata-tertib",
        label: "List Tata Tertib",
      },
      {
        to: "/admin/tata-tertib/tambah",
        label: "Tambah Tata Tertib", 
      },
    ],
  },
  {
    label: "Siswa",
    icon: mdiAccountCircle,
    menu: [
      {
        to: "/admin/siswa",
        label: "List Siswa",
      },
      {
        to: "/admin/siswa/tambah",
        label: "Tambah Siswa", 
      },
    ],
  },
  {
    label: "Jenis Tata Tertib",
    icon: mdiMail,
    menu: [
      {
        to: "/admin/jenis-tata-tertib",
        label: "List Jenis ",
      },
      {
        to: "/admin/jenis-tata-tertib/tambah",
        label: "Tambah Jenis ", 
      },
    ],
  },
  {
    label: "User",
    icon: mdiAccount,
    menu: [
      {
        to: "/admin/user",
        label: "List user ",
      },
      {
        to: "/admin/user/tambah",
        label: "Tambah user ", 
      },
    ],
  },

  
];
