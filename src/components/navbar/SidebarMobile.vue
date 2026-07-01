<script setup>
import { XMarkIcon } from '@heroicons/vue/16/solid';
import NavLinkMobile from './NavLinkMobile.vue';
import ToggleThemeButtonMobile from './ToggleThemeButtonMobile.vue';
defineProps({
  isSidebarOpen: {
    type: Boolean,
  },
  links: {
    type: Array,
    default: () => [],
  },
  toggleSiebarOpen: {
    type: Function,
  },
  isActiveLink: {
    type: Function,
  },
});
</script>
<template>
  <Transition
    enter-active-class="transition-transform duration-500 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-to-class="translate-x-full"
    leave-from-class="translate-x-0"
    leave-active-class="transition-tranform duration-500 ease-in"
  >
    <div
      v-if="isSidebarOpen"
      class="fixed right-0 top-0 h-screen w-[300px] bg-white dark:bg-slate-900 z-50 shadow-xl border-l flex flex-col"
    >
      <div
        class="flex items-center justify-between p-4 pb-4 border-b"
      >
        <h1
          class="capitalize tracking-widest text-indigo-700 dark:text-indigo-500 text-sm md:text-base font-extrabold"
        >
          LuxeCommerce
        </h1>
        <button
          @click="
            toggleSiebarOpen
          "
        >
          <XMarkIcon
            class="w-6 h-6 text-indigo-700 dark:text-indigo-200"
          />
        </button>
      </div>
      <div
        class="flex-1 flex flex-col p-4"
      >
        <div
          class="flex-1 space-y-10"
        >
          <NavLinkMobile
            v-for="item in links"
            :target="
              item.target
            "
            :title="
              item.title
            "
            :is-active-link="
              isActiveLink
            "
            :toggle-siebar-open="
              toggleSiebarOpen
            "
          />
        </div>
        <ToggleThemeButtonMobile />
      </div>
    </div>
  </Transition>
</template>
