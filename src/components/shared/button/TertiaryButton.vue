<!-- components/shared/PrimaryButton.vue -->
<!-- use full width -->
<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
});
</script>

<template>
  <button
    :type="type"
    class="w-full capitalize bg-indigo-700 hover:bg-indigo-700/95 text-indigo-50 font-semibold py-4 px-6 rounded-2xl shadow-[0_10px_25px_-5px_rgba(79,70,229,0.4)] transition-all duration-300 active:scale-[0.99]"
  >
    <slot></slot>
  </button>
</template>
