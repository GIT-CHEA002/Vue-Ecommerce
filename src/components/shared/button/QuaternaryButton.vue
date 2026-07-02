<!-- components/shared/SecondaryButton.vue -->
<!-- use full width -->
<script setup>
import { TruckIcon } from '@heroicons/vue/16/solid';

defineProps({
  icon: {
    type: [Object, Function],
    default: TruckIcon,
  },
  width: {
    type: String,
    default: 'w-full',
  },
});
</script>
<template>
  <div
    :class="`${width} capitalize flex items-center justify-center space-x-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-indigo-50 py-4 px-6 rounded-2xl shadow-sm cursor-pointer`"
  >
    <component
      :is="icon"
      class="w-5 h-5 text-indigo-600 dark:text-indigo-400"
    />
    <span
      class="text-sm font-semibold tracking-wide"
    >
      <slot></slot>
    </span>
  </div>
</template>
