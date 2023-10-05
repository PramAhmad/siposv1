<script setup>

import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import menuAside from "@/menuAside.js";
import menuNavBar from "@/menuNavBar.js";
import { useMainStore } from "@/stores/main.js";
import { useStyleStore } from "@/stores/style.js";
import BaseIcon from "@/components/BaseIcon.vue";
import FormControl from "@/components/FormControl.vue";
import NavBar from "@/components/NavBar.vue";
import NavBarItemPlain from "@/components/NavBarItemPlain.vue";
import AsideMenu from "@/components/AsideMenu.vue";
import FooterBar from "@/components/FooterBar.vue";

const user = useSupabaseUser()

useMainStore().setUser({
  name: user.value.email,
  email: "john@example.com",
  avatar:
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",
});

const layoutAsidePadding = "xl:pl-60";

const styleStore = useStyleStore();

const router = useRouter();

const isAsideMobileExpanded = ref(false);
const isAsideLgActive = ref(false);

router.beforeEach(() => {
  isAsideMobileExpanded.value = false;
  isAsideLgActive.value = false;
});

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    styleStore.setDarkMode();
  }

  if (item.isLogout) {
    //
  }
};

</script>

<template>
  <div
    :class="{
      dark: styleStore.darkMode,
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
    }"
  >
    <div
      :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
    >
      <NavBar
        :menu="menuNavBar"
        :class="[
          layoutAsidePadding,
          { 'ml-60 lg:ml-0': isAsideMobileExpanded },
        ]"
        @menu-click="menuClick"
      >
        <NavBarItemPlain
          display="flex lg:hidden"
          @click.prevent="isAsideMobileExpanded = !isAsideMobileExpanded"
        >
          <BaseIcon
            :path="isAsideMobileExpanded ? mdiBackburger : mdiForwardburger"
            size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain
          display="hidden lg:flex xl:hidden"
          @click.prevent="isAsideLgActive = true"
        >
          <BaseIcon :path="mdiMenu" size="24" />
        </NavBarItemPlain>
        <NavBarItemPlain use-margin>
          <h2 class="text-xl font-bold text-gray-900 dark:text-gray-200">Information System</h2>
        </NavBarItemPlain>
      </NavBar>
      <AsideMenu
        :is-aside-mobile-expanded="isAsideMobileExpanded"
        :is-aside-lg-active="isAsideLgActive"
        :menu="menuAside"
        @menu-click="menuClick"
        @aside-lg-close-click="isAsideLgActive = false"
      />
      <slot />
      <!-- back butotn in left fiex posisiton -->
      <div
    
    class="fixed bottom-4 right-4 z-50"
  >
    <button
      @click="router.back()"
      class="flex items-center justify-center w-10 h-10 rounded-full text-white bg-blue-600 dark:bg-blue-600 shadow-lg"
    >
<!-- back icon svg -->
      <svg
        class="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.7071 4.29289C11.0976 3.90237 11.0976 3.2692 10.7071 2.87868C10.3166 2.48815 9.68342 2.48815 9.29289 2.87868L4.58579 7.58579C4.39052 7.78106 4.39052 8.09763 4.58579 8.29289L9.29289 13.00001C9.68342 13.3905 10.3166 13.3905 10.7071 13.0001C11.0976 12.6096 11.0976 11.9764 10.7071 11.5858L7.41421 8.29289H15C15.5523 8.29289 16 7.84521 16 7.29289C16 6.74057 15.5523 6.29289 15 6.29289H7.41421L10.7071 3.00001C11.0976 2.60948 11.0976 1.97631 10.7071 1.58579Z"
        />
      </svg>
    </button>
  </div>
      <FooterBar>
       
      </FooterBar>
    </div>
  </div>
</template>
