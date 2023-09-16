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
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
 
  {
    to: "/activity",
    label: "Activity",
    icon: mdiResponsive,
  },
  {
    to: "/event",
    label: "Event",
    icon: mdiPalette,
  },
  {
    to: "/masukan",
    label: "Masukan",
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
  {
    label: "Kas",
    icon: mdiViewList,
    menu: [
      {
        label: "Bayar Kas",
      },
      {
        label: "List Kas",
      },
    ],
  },
  
];
