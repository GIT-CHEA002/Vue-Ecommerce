<script setup>
defineProps({
  title: {
    type: String,
    default: 'Explore',
  },
});
</script>
<template>
  <span
    class="text-indigo-700 dark:text-indigo-300 font-semibold uppercase text-xs"
  >
    {{ title }}
  </span>
</template>
