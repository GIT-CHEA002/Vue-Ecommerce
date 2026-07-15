<script setup>
import { useTheme } from '@/stores/theme';
import {
  MoonIcon,
  SunIcon,
} from '@heroicons/vue/16/solid';
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid';

const theme = useTheme();
</script>
<template>
  <section>
    <nav
      class="sticky top-0 z-50 max-w-7xl px-4 sm:px-8 md:px-12 py-4 md:py-6 bg-indigo-100 dark:bg-slate-900 shadow-md"
    >
      <div
        class="flex items-center justify-between"
      >
        <div
          class="flex-1 tracking-wide w-fit"
        >
          <RouterLink
            to="/"
            class="capitalize tracking-widest text-indigo-700 dark:text-indigo-500 text-sm md:text-base lg:text-lg font-extrabold"
          >
            LuxeCommerce
          </RouterLink>
        </div>
        <RouterLink
          to="/"
          class="flex items-center gap-1"
        >
          <ArrowLeftCircleIcon
            class="w-3 h-3 text-slate-700 dark:text-indigo-50"
          />
          <span
            class="text-xs text-slate-700 dark:text-indigo-50 tracking-wide hover:underline underline-offset-2"
            >Back to
            home</span
          >
        </RouterLink>

        <button
          @click="
            theme.toggleTheme()
          "
          class="px-2 py-1 text-indigo-700 dark:text-indigo-500 rounded-sm text-xs"
        >
          <SunIcon
            v-if="
              theme.theme ===
              'dark'
            "
            class="w-6 h-6"
          />
          <MoonIcon
            v-else
            class="w-6 h-6"
          />
        </button>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </section>
</template>
