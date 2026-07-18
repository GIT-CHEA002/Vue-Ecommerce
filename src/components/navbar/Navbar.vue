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
import { useUserStore } from '@/stores/userStore.js';
import {
  SparklesIcon,
  ShoppingBagIcon,
  EnvelopeIcon,
  Squares2X2Icon,
  UserIcon,
} from '@heroicons/vue/24/outline';
const route = useRoute();
const isActiveLink = (
  routePath,
) => {
  return (
    route.fullPath ===
      routePath ||
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
    icon: SparklesIcon,
  },
  {
    target: '/products',
    title: 'Product',
    icon: ShoppingBagIcon,
  },
  {
    target: '/contact',
    title: 'Contact',
    icon: EnvelopeIcon,
  },
  {
    target: '/category',
    title: 'Category',
    icon: Squares2X2Icon,
  },
  {
    title: 'Profile',
    icon: UserIcon,
    subTab: [
      {
        target:
          '/profile?tab=profile',
        title: 'Profile Info',
      },
      {
        target:
          '/profile?tab=orders',
        title: 'Orders',
      },
      {
        target:
          '/profile?tab=wishlist',
        title: 'Wishlist',
      },
      {
        target:
          '/profile?tab=security',
        title: 'Security',
      },
    ],
  },
];
const desktopLinks = computed(
  () => {
    return links.filter(
      (link) =>
        link.title !=
        'Profile',
    );
  },
);
const mobileLinks = computed(
  () => links,
);
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
const userStore =
  useUserStore();
const { isLoggedIn } =
  storeToRefs(userStore);

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
          v-for="item in desktopLinks"
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
          v-if="
            isLoggedIn.value
          "
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
        <RouterLink
          to="/profile"
          class="flex items-center gap-0.5 text-indigo-700 dark:text-indigo-500 border border-indigo-700 p-0.5 rounded-sm"
        >
          <span
            class="text-xs font-medium"
            >Profile</span
          >
          <UserIcon
            class="w-6 h-6"
          />
        </RouterLink>
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
        :mobile-links="
          mobileLinks
        "
        :is-sidebar-open="
          isSidebarOpen
        "
        @toggle-sidebar-open="
          toggleSiebarOpen
        "
        :is-active-link="
          isActiveLink
        "
      />
    </div>
  </nav>
</template>
