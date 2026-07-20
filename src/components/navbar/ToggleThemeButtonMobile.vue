<script setup>
import { computed } from 'vue';
import { MoonIcon } from '@heroicons/vue/24/solid';
import { useTheme } from '@/stores/theme';
import { SunIcon } from '@heroicons/vue/16/solid';
import Switch from '../shared/button/Switch.vue';

const theme = useTheme();

// Use a writeable computed property to sync your Switch directly with Pinia
const isDark = computed({
  get: () =>
    theme.theme === 'dark',
  set: () =>
    theme.toggleTheme(),
});
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

    <Switch
      v-model="isDark"
    />
  </div>
</template>
