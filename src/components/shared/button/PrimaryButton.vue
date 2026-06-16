<script setup>
import { defineProps } from 'vue';
defineProps({
  target: {
    type: String,
    default: '/',
  },
  title: {
    type: String,
    default: 'Return To Home',
  },
});
</script>
<template>
  <RouterLink
    :to="target"
    class="py-3 px-4 w-fit text-xs sm:text-sm md:text-base rounded border bg-indigo-700 shadow-sm shadow-indigo-700 dark:shadow-indigo-300 text-white dark:bg-indigo-500 hover:bg-transparent hover:text-indigo-700 hover:border-indigo-700 dark:hover:bg-transparent dark:hover:text-white/90 dark:hover:border-white transition-colors duration-300"
  >
    {{ title }}
  </RouterLink>
</template>
