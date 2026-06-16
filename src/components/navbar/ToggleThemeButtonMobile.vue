<script setup>
import { ref } from 'vue';
import { MoonIcon } from '@heroicons/vue/24/solid';
import { useTheme } from '@/stores/theme';
import { SunIcon } from '@heroicons/vue/16/solid';
const theme = useTheme();
const isDark = ref(
  theme.theme === 'dark',
);
</script>
<template>
  <div
    class="flex items-center justify-between w-full max-w-xs p-4 bg-indigo-50 dark:bg-white/5 rounded-xl select-none"
  >
    <div
      class="flex items-center gap-4"
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
      <span
        class="text-sm font-bold tracking-widest text-indigo-700 dark:text-indigo-500 uppercase"
      >
        Dark Mode
      </span>
    </div>

    <label
      class="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        @change="
          theme.toggleTheme()
        "
        v-model="isDark"
        class="sr-only peer focus:outline-none"
      />
      <div
        class="w-14 h-7 bg-slate-800 peer-focus:outline-none rounded-full peer-checked:bg-indigo-950/40 peer-checked:border-indigo-400/30 transition-all duration-300"
      ></div>
      <div
        class="absolute left-1 top-1 w-5 h-5 bg-indigo-300 rounded-full transition-all duration-300 peer-checked:translate-x-7"
      ></div>
    </label>
  </div>
</template>
