import {
  mdiAccountCircle,
  mdiMonitor,
  mdiAccount,
  mdiHandCoin,
  mdiHistory,
  mdiEvernote,
  mdiAlertPlus,
  mdiAlarm,
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
    label: "Mahasiwa",
    icon: mdiAccountCircle,
    menu: [
      {
        to: "/admin/mahasiswa",
        label: "List Mahasiswa",
      },
      {
        to: "/admin/mahasiswa/tambah",
        label: "Tambah Mahasiswa  ",
      },
    ],
  },
  {
    to: "/admin/payment",
    label: "Pembayaran",
    icon: mdiHandCoin,
  },
  {
    to: "/admin/activity",
    label: "Activity",
    icon: mdiHistory,
  },
  {
    to: "/admin/masukan",
    label: "Masukan",
    icon: mdiMailbox,
  },
  {
    to: "/admin/user",
  label: "User",
    icon: mdiAccount,
  },
 
 
  

  
];
