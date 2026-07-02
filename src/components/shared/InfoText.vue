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
  defualtColor: {
    type: String,
    default:
      'text-slate-700 dark:text-indigo-50',
  },
});
</script>
<template>
  <p
    :class="` ${defaultText} text-justify ${defualtColor} `"
  >
    {{ text }}
  </p>
</template>
