<script setup>
defineProps({
  text: {
    type: String,
    defaul: 'Info Text',
  },
  defaultText: {
    type: String,
    default:
      'text-xs sm:text-sm md:text-md lg:text-base',
  },
});
</script>
<template>
  <p
    :class="` ${defaultText} text-justify text-slate-700 dark:text-indigo-50`"
  >
    {{ text }}
  </p>
</template>
