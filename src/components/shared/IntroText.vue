<script setup>
import { defineProps } from 'vue';
defineProps({
  text: {
    type: String,
    default:
      'the sun/moon toggle in the header of either hub to switch between the Light and Dark versions of the entire store instantly',
  },
  defaultTextColor: {
    type: String,
    default:
      'opacity-75 text-white dark:text-indigo-50',
  },
});
</script>
<template>
  <p
    :class="`text-xs sm:text-sm md:text-base ${defaultTextColor} py-2`"
  >
    {{ text }}
  </p>
</template>
