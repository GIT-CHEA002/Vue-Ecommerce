<script setup>
defineProps({
  title: {
    type: String,
    default:
      'Shop by Category',
  },
  defaultText: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <h1
    :class="` py-1 ${defaultText} text-base md:text-lg lg:text-2xl font-semibold`"
  >
    {{ title }}
  </h1>
</template>
