<script setup>
import { useTheme } from '@/stores/theme';
import {
  SunIcon,
  MoonIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  ListBulletIcon,
  XMarkIcon,
} from '@heroicons/vue/16/solid';
import NavLink from './NavLink.vue';
import {
  onUpdated,
  ref,
} from 'vue';
import NavLinkMobile from './NavLinkMobile.vue';
import { useRoute } from 'vue-router';
import ToggleThemeButtonMobile from './ToggleThemeButtonMobile.vue';

const route = useRoute();
const isActiveLink = (
  routePath,
) => {
  return (
    route.path === routePath
  );
};
// const isActiveLink = (
//   routePath,
// ) => {
//   if (
//     Array.isArray(
//       routePath.target,
//     )
//   ) {
//     return routePath.target.some(
//       (path) => {
//         return route.path.startsWith(
//           path.replace(
//             ':/id',
//             '',
//           ),
//         );
//       },
//     );
//   }
//   return route.path === routePath;
// };
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
        <NavLink
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
              >1</span
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
                target="/"
                :is-active-link="
                  isActiveLink
                "
              />
              <NavLinkMobile
                target="/products"
                title="Products"
                :is-active-link="
                  isActiveLink
                "
              />
              <NavLinkMobile
                target="/products"
                title="Category"
                :is-active-link="
                  isActiveLink
                "
              />
              <NavLinkMobile
                target="/contact"
                title="Contact"
                :is-active-link="
                  isActiveLink
                "
              />
            </div>
            <ToggleThemeButtonMobile />
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
