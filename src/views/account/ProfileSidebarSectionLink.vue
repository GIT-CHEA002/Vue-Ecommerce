<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  activeProfileLinkTab: {
    type: String,
  },
  tab: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <li
    :class="[
      'cursor-pointer rounded w-full py-2 px-1.5 sm:px-2 md:px-4 flex justify-start items-center gap-1 tracking-wide transition-all duration-300',
      props.activeProfileLinkTab ===
      tab.target
        ? 'border-l-2 bg-indigo-100/95 dark:bg-slate-900 border-indigo-700 dark:border-indigo-500 text-indigo-700 dark:text-indigo-500'
        : 'text-slate-700 hover:border-l-2 hover:bg-indigo-100 hover:dark:bg-slate-900/90 hover:border-indigo-700/90 hover:dark:border-indigo-500/90 hover:text-indigo-700 dark:text-indigo-500',
    ]"
  >
    <RouterLink
      :to="`/profile?tab=${tab.target}`"
      class="flex items-center gap-2 w-full text-sm"
    >
      <component
        :is="tab.icon"
        class="w-3 h-3 md:w-5 md:h-5 sm:w-4 sm:h-4"
      />
      {{ tab.title }}
    </RouterLink>
  </li>
</template>
