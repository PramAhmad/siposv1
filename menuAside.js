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
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://kjklvfzkbunulydidzrp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqa2x2ZnprYnVudWx5ZGlkenJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MTIwODksImV4cCI6MjAxMjQ4ODA4OX0.CDjv4sjjbNZAGgix27pKuPT2bAbKPm2XVmYF2f1t1T4"
);
const { data: { user } } = await supabase.auth.getUser()
console.log(user)
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
