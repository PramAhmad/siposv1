<script setup>
import BaseIcon from "@/components/BaseIcon.vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
  },
  small: Boolean,
});
</script>

<template>
  <div
    class="inline-flex items-center capitalize leading-none "
    :class="[small ? 'text-xs' : 'text-sm']"
  >
    <BaseIcon
      v-if="icon"
      :path="icon"
      h="h-4"
      w="w-4"
      :class="small ? 'mr-1 text-slate-950 dark:text-white' : 'mr-2 text-slate-950 dark:text-white'"
      :size="small ? 14 : null"
    />
    <span class="text-slate-950 dark:text-white">{{ label }}</span>
  </div>
</template>
