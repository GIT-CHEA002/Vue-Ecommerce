<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'

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
      'capitalize font-semibold tracking-wide leading-none underline-offset-2 transition-all ease-in-out',
      isActiveLink(target)
        ? 'text-indigo-700 dark:text-indigo-300 underline'
        : 'hover:text-indigo-700/90 dark:hover:text-indigo-300/90 hover:underline',
    ]"
  >
    {{ title }}
  </RouterLink>
</template>
