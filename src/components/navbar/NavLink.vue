<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

defineProps({
  target: {
    type: String,
    default: '/',
  },
  title: {
    type: String,
    default: 'New Arrival',
  },
  isActiveLink: {
    type: Function,
  },
});
</script>
<template>
  <RouterLink
    :to="target.trim()"
    :class="[
      'capitalize text-sm lg:text-base font-semibold tracking-wide leading-none underline-offset-4 transition-all ease-in-out  ',
      isActiveLink(target)
        ? 'text-indigo-700 dark:text-indigo-500 underline'
        : 'hover:text-indigo-700/90 dark:hover:text-indigo-500/90 hover:underline',
    ]"
  >
    {{ title }}
  </RouterLink>
</template>
