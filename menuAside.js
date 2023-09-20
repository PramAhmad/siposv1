import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
} from "@mdi/js";

export default [
  {
    to: "/admin",
    icon: mdiMonitor,
    label: "Dashboard",
  },
 
  {
    to: "/admin/activity",
    label: "Activity",
    icon: mdiResponsive,
  },
  {
    to: "/admin/event",
    label: "Event",
    icon: mdiPalette,
  },
  {
    to: "/masukan",
    label: "Masukan",
    icon: mdiAccountCircle,
  },
  {
    to: "/admin/payment",
    label: "Payment",
    icon: mdiAccountCircle,
  },
  {
    label: "Mahasiwa",
    icon: mdiViewList,
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

  
];
