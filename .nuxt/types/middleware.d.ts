import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/home/nehphren/Documents/project/sistem_informasi/Information_System/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}