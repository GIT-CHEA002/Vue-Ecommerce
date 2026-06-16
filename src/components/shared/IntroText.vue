<script setup>
import { defineProps } from 'vue'
defineProps({
  text: {
    type: String,
    default:
      'the sun/moon toggle in the header of either hub to switch between the Light and Dark versions of the entire store instantly',
  },
})
</script>
<template>
  <p class="text-xs sm:text-sm md:text-base opacity-75">{{ text }}</p>
</template>
