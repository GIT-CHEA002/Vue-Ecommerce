<script setup>
defineProps({
  title: {
    type: String,
    default:
      'Shop by Category',
  },
  defaultText: {
    type: String,
    default:
      'text-sm md:text-base lg:text-xl font-medium',
  },
});
</script>
<template>
  <h1
    :class="` py-1 tracking-wide ${defaultText} `"
  >
    {{ title }}
  </h1>
</template>
