<script setup>
import Footer from '@/components/footer/Footer.vue';
import { useTheme } from '@/stores/theme';
import {
  ArrowLeftIcon,
  LockClosedIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/vue/16/solid';
const theme = useTheme();
</script>
<template>
  <nav
    class="sticky top-0 flex justify-between items-center z-50 max-w-7xl px-4 sm:px-8 md:px-12 py-4 md:py-6 bg-indigo-100 dark:bg-slate-900 shadow-md"
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
      class="flex-1 flex justify-end items-center space-x-5"
    >
      <div
        class="w-fit flex items-center space-x-1 cursor-pointer"
      >
        <LockClosedIcon
          class="w-3 h-3 md:h-4 md:w-4 text-indigo-700 dark:text-indigo-500"
        />
        <span
          class="text-sm opacity-75 hidden md:block"
          >Secured
          Checkout</span
        >
      </div>
      <RouterLink
        to="/cart"
        class="w-fit flex items-center space-x-0.5 opacity-75 hover:text-indigo-700 hover:opacity-100"
      >
        <ArrowLeftIcon
          class="w-3 h-3 md:w-4 md:h-4"
        />
        <span
          class="text-sm hidden md:block capitalize"
          >Return To shopping
          carts</span
        >
      </RouterLink>
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
          class="w-4 h-4 text-indigo-500"
        />
        <MoonIcon
          v-else
          class="w-4 h-4"
        />
      </button>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
