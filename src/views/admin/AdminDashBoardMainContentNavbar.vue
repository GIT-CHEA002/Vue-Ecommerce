<script setup>
import { useTheme } from '@/stores/theme';
import {
  MoonIcon,
  SunIcon,
} from '@heroicons/vue/16/solid';
import {
  BellAlertIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline';

const theme = useTheme();
</script>
<template>
  <nav
    class="py-4 md:py-6 px-12 flex justify-between items-center border-b border-indigo-700 dark:border-indigo-500 shadow-sm"
  >
    <span
      class="text-sm md:text-lg lg:text-xl font-bold tracking-wide"
      >User Overview</span
    >

    <div
      class="flex-1 flex justify-end items-center gap-3"
    >
      <button
        @click="
          theme.toggleTheme
        "
      >
        <MoonIcon
          v-if="
            theme.theme ===
            'light'
          "
          class="w-6 h-6"
        />
        <SunIcon
          v-else
          class="w-6 h-6"
        />
      </button>
      <BellAlertIcon
        class="w-6 h-6"
      />
      <form action="">
        <div
          class="flex justify-between items-center ps-2 bg-white dark:bg-slate-900 rounded border border-slate-300 focus-within:border-indigo-700 dark:focus-within:border-indigo-500"
        >
          <MagnifyingGlassIcon
            class="w-4 h-4 text-indigo-700 dark:text-indigo-500"
          />
          <input
            type="text"
            placeholder="search orders"
            class="flex-1 outline-none px-3 py-1 bg-transparent placeholder:capitalize placeholder:text-xs text-sm"
          />
        </div>
      </form>
    </div>
  </nav>
</template>
