import { useRuntimeConfig } from "#imports";
export function usePWAIcon(size, { maskable } = { maskable: false }) {
  return useRuntimeConfig().public.pwaManifest.icons.find((i) => i.sizes === `${+size}x${+size}` && i.purpose === (maskable ? "maskable" : "any"))?.src || "";
}
