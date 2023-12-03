import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "admin" | "default"
declare module "/home/nehphren/Documents/project/smkn4/siposv1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}