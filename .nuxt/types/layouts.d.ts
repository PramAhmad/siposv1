import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "authenticated" | "default"
declare module "/home/nehphren/Documents/project/sistem_informasi/Information_System/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}