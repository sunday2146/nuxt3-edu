import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth" | "search"
declare module "E:/WebProject/Nuxt3SSR/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}