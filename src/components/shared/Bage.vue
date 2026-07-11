<!-- Badge.vue -->
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'In Stock',
  },
  defaultTextColor: {
    type: String,
    default: 'text-green-700',
  },
  defaultBgColor: {
    type: String,
    default: 'bg-green-600',
  },
  defaultWrapperColor: {
    type: String,
    default: 'bg-green-100', // Dynamic badge capsule background wrapper
  },
});
</script>

<template>
  <span
    :class="`inline-flex items-center rounded-md px-2 py-0.5 text-[0.6rem] font-medium transition-colors duration-200 ${defaultWrapperColor} ${defaultTextColor}`"
  >
    <span
      :class="`h-[0.3rem] w-[0.3rem] rounded-full mx-0.5 animate-pulse ${defaultBgColor}`"
    ></span>
    <span
      class="capitalize"
      >{{ props.title }}</span
    >
  </span>
</template>
