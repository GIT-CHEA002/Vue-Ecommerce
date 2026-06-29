<script setup>
defineProps({
  title: {
    type: String,
    default: 'In Stock',
  },
});
</script>
<template>
  <span
    class="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 text-[0.6rem] font-medium text-green-700"
  >
    <span
      class="h-[0.3rem] w-[0.3rem] bg-green-600 rounded-full mx-0.5 animate-pulse capitalize"
    ></span>
    {{ title }}
  </span>
</template>
