<script setup>
const props = defineProps({
  tab: {
    type: Object,
  },
  activeProfileLinkTab: {
    type: String,
  },
  isShowFullMobileSidebar: {
    type: Boolean,
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
      'cursor-pointer rounded w-full py-2 px-4  flex justify-start items-center gap-1 tracking-wide transition-all duration-300',
      props.activeProfileLinkTab ===
      props.tab.target.trim()
        ? 'border-l-2 bg-indigo-100/95 dark:bg-slate-900 border-indigo-700 dark:border-indigo-500 text-indigo-700 dark:text-indigo-500'
        : 'text-slate-700  hover:border-l-2 hover:bg-indigo-100 hover:dark:bg-slate-900/90 hover:border-indigo-700/90 hover:dark:border-indigo-500/90  hover:text-indigo-700 dark:text-indigo-500',
    ]"
  >
    <component
      :is="props.tab.icon"
      class="md:w-5 md:h-5 w-4 h-4"
    />
    <div
      :class="[
        ' w-auto grid transition-all duration-300 ease-in-out',
        'md:grid-cols-[1fr] md:ml-2',
        props.isShowFullMobileSidebar
          ? 'grid-cols-[1fr] ml-2'
          : 'grid-cols-[0fr] ml-0',
      ]"
    >
      <!-- The actual text inner-container -->
      <span
        class="overflow-hidden whitespace-nowrap text-xs tracking-wide sm:text-base"
      >
        {{ props.tab.title }}
      </span>
    </div>
  </li>
</template>
