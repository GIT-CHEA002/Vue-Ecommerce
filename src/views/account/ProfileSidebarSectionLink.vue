<script setup>
const props = defineProps({
  tab: {
    type: Object,
  },
  activeProfileLinkTab: {
    type: String,
  },
});
const emit = defineEmits([
  'setActiveProfileLinkTab',
]);
</script>
<template>
  <li
    @click="
      $emit(
        'setActiveProfileLinkTab',
        props.tab.target,
      )
    "
    :class="[
      'cursor-pointer rounded py-2 px-4 flex justify-start items-center gap-1 tracking-wide transition-all duration-300',
      props.activeProfileLinkTab ===
      props.tab.target.trim()
        ? 'border-l-2 bg-indigo-100/95 dark:bg-slate-900 border-indigo-700 dark:border-indigo-500 text-indigo-700 dark:text-indigo-500'
        : 'text-slate-700  hover:border-l-2 hover:bg-indigo-100 hover:dark:bg-slate-900/90 hover:border-indigo-700/90 hover:dark:border-indigo-500/90  hover:text-indigo-700 dark:text-indigo-500',
    ]"
  >
    <component
      :is="props.tab.icon"
      class="w-5 h-5"
    />
    <span>{{
      props.tab.title
    }}</span>
  </li>
</template>
