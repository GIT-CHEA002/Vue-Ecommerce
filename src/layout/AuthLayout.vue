<script setup>
import { useTheme } from '@/stores/theme';

const theme = useTheme();
</script>
<template>
  <section>
    <h1>Auth Layout</h1>
    <button
      @click="
        theme.toggleTheme()
      "
      class="px-2 py-1 text-indigo-50 rounded-sm text-xs bg-indigo-600"
    >
      {{
        theme.theme === 'dark'
          ? 'light'
          : 'dark'
      }}
    </button>
    <main>
      <RouterView />
    </main>
  </section>
</template>
