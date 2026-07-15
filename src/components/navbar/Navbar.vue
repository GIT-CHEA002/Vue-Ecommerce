<script setup>
import { useTheme } from '@/stores/theme';
import {
  SunIcon,
  MoonIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  ListBulletIcon,
} from '@heroicons/vue/16/solid';
import NavbarLink from './NavbarLink.vue';
import {
  computed,
  onUpdated,
  ref,
  toRaw,
  watch,
  watchEffect,
} from 'vue';
import { useRoute } from 'vue-router';
import SidebarMobile from './SidebarMobile.vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore.js';

const route = useRoute();
const isActiveLink = (
  routePath,
) => {
  return (
    route.path === routePath
  );
};
const theme = useTheme();
const isSidebarOpen =
  ref(false);
const toggleSiebarOpen =
  () => {
    isSidebarOpen.value =
      !isSidebarOpen.value;
  };
onUpdated(() => {
  if (
    window.innerWidth >= 876
  ) {
    isSidebarOpen.value = false;
  }
});
const links = [
  {
    target: '/',
    title: 'New arrivals',
  },
  {
    target: '/products',
    title: 'Product',
  },
  {
    target: '/contact',
    title: 'Contact',
  },
  {
    target: '/category',
    title: 'Category',
  },
];
const cartStore =
  useCartStore();
const {
  totalProductQuantity,
} = storeToRefs(cartStore);

const totalQuantity =
  computed(
    () =>
      totalProductQuantity.value,
  );

// watch(cartItem, () => {
//   console.log(
//     toRaw(cartItem.value),
//   );
//   console.log(
//     totalQuantity.value,
//   );
// });
</script>
<template>
  <nav
    class="sticky top-0 z-50 max-w-7xl px-4 sm:px-8 md:px-12 py-4 md:py-6 bg-indigo-100 dark:bg-slate-900 shadow-md"
  >
    <div
      class="flex items-center justify-between"
    >
      <div
        class="tracking-wide w-fit"
      >
        <RouterLink
          to="/"
          class="capitalize tracking-widest text-indigo-700 dark:text-indigo-500 text-sm md:text-base lg:text-lg font-extrabold"
        >
          LuxeCommerce
        </RouterLink>
      </div>
      <div
        class="flex-1 hidden md:flex items-center justify-center space-x-8"
      >
        <NavbarLink
          v-for="item in links"
          :key="item"
          :is-active-link="
            isActiveLink
          "
          :target="
            item.target
          "
          :title="item.title"
        />
      </div>
      <div
        class="flex items-center space-x-5"
      >
        <!-- search button -->
        <RouterLink
          to="/search"
        >
          <MagnifyingGlassIcon
            class="w-6 h-6 text-indigo-700 dark:text-indigo-500"
          />
        </RouterLink>
        <!-- Cart -->
        <div
          class="relative cursor-pointer"
        >
          <RouterLink
            to="/cart"
          >
            <ShoppingCartIcon
              class="w-6 h-6 text-indigo-700 dark:text-indigo-500"
            />
            <span
              class="text-[8px] text-white text-center rounded-full absolute -top-2 right-0 bg-indigo-700 w-3 h-3"
              >{{
                totalQuantity
              }}</span
            >
          </RouterLink>
        </div>
        <!-- toggle theme -->
        <button
          @click="
            theme.toggleTheme()
          "
        >
          <SunIcon
            v-if="
              theme.theme ===
              'dark'
            "
            class="w-6 h-6 text-indigo-700 dark:text-indigo-500"
          />
          <MoonIcon
            v-if="
              theme.theme ===
              'light'
            "
            class="w-6 h-6 text-indigo-700 dark:text-indigo-500"
          />
        </button>
        <!-- toggle sidbars -->
        <button
          @click="
            toggleSiebarOpen
          "
          class="block md:hidden"
        >
          <ListBulletIcon
            class="w-6 h-6 text-indigo-700 dark:text-indigo-500"
          />
        </button>
      </div>
      <!-- mobile menu -->
      <SidebarMobile
        :links="links"
        :toggle-siebar-open="
          toggleSiebarOpen
        "
        :is-sidebar-open="
          isSidebarOpen
        "
        :is-active-link="
          isActiveLink
        "
      />
    </div>
  </nav>
</template>
