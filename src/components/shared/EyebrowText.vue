<script setup>
defineProps({
  text: {
    type: String,
    default:
      'NEW COLLECTION 2024',
  },
  defaultTextColor: {
    type: String,
    default: 'text-green-700',
  },
  animation: {
    type: String,
    default: 'animate-pulse',
  },
});
</script>
<template>
  <div
    :class="`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-green-700 ${animation}`"
  >
    <span
      class="h-2 w-2 rounded-full bg-green-700"
    >
    </span>
    {{ text }}
  </div>
</template>
