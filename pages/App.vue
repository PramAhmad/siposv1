<script setup>
import { useStyleStore } from "@/stores/style.js";
import { darkModeKey, styleKey } from "@/config.js";

useHead({
  titleTemplate: (titleChunk) => {
    const titleBase = "Information System";

    return titleChunk ? `${titleChunk} - ${titleBase}` : titleBase;
  },
});

const styleStore = useStyleStore();

const currentStyle =
  typeof localStorage !== "undefined" && localStorage[styleKey]
    ? localStorage[styleKey]
    : "dark"; // Ganti "dark" dengan style mode gelap Anda jika ada


styleStore.setStyle(currentStyle);

const currentStoredDarkMode =
  typeof localStorage !== "undefined" && localStorage[darkModeKey] === "1"
    ? true
    : true;
if (
  (!currentStoredDarkMode &&
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  currentStoredDarkMode
) {
  styleStore.setDarkMode(true);
}
</script>

<template>
  <div>
    <NuxtLayout class="">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
