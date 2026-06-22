<script setup>
defineProps({
  target: {
    type: String,
    default: '/products',
  },
  title: {
    type: String,
    default: 'Shop Collections',
  },
})
</script>
<template>
  <RouterLink
    :to="target"
    class=" capitalize py-3 px-4 w-fit text-xs sm:text-sm md:text-base rounded border shadow-sm shadow-indigo-700 dark:shadow-indigo-50 border-indigo-700 dark:border-indigo-50 text-indigo-700 dark:text-white/90 hover:bg-indigo-700 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white/90 transition-colors duration-300"
  >
    {{ title }}
  </RouterLink>
</template>
