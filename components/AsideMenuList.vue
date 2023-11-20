<script setup>
import AsideMenuItem from "@/components/AsideMenuItem.vue";

defineProps({
  isDropdownList: Boolean,
  menu: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["menu-click"]);

const menuClick = (event, item) => {
  emit("menu-click", event, item);
};
const user = useSupabaseUser()
</script>

<template>
  <ul>
    <AsideMenuItem
      v-if="user && user.user_metadata.role === 'admin'"
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-dropdown-list="isDropdownList"
      @menu-click="menuClick"
    />

    <AsideMenuItem
      v-if="user && user.user_metadata.role === 'bendahara'"
      :item="{
        to: '/admin/pembayaran',
        label: 'Pembayaran',
        icon: 'mdi-hand-coin',
      }"
      :is-dropdown-list="isDropdownList"
      @menu-click="menuClick"
    />
  </ul>
</template>
