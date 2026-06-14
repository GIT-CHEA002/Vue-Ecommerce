<script setup>
import { defineProps } from 'vue'
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
})
</script>
<template>
  <RouterLink
    :to="target.trim()"
    :class="[
      ' block rounded capitalize text-xs sm:text-sm md:text-base py-4 px-2 font-semibold tracking-wide leading-none  transition-all ease-in-out',
      isActiveLink(target.trim())
        ? 'border-l-2 bg-indigo-50 dark:bg-white/5 border-indigo-700 dark:border-indigo-300   text-indigo-700 dark:text-indigo-300 '
        : 'hover:text-indigo-700/90 hover:bg-indigo-50 dark:hover:bg-white/5 hover:border-l-2 hover:border-indigo-700 dark:hover:border-indigo-300  dark:hover:text-indigo-300/90 ',
    ]"
  >
    {{ title }}
  </RouterLink>
</template>
