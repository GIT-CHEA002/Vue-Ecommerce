<script setup>
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/solid';
import {
  computed,
  defineProps,
  ref,
} from 'vue';
const props = defineProps({
  mobileLink: {
    type: Object,
    default: () => {},
  },
  isActiveLink: {
    type: Function,
  },
});
const emit = defineEmits([
  'toggleSidebarOpen',
]);
const isOpen = ref(false);
const hasDropDown = computed(
  () => {
    return (
      Array.isArray(
        props.mobileLink
          ?.subTab,
      ) &&
      props.mobileLink.subTab
        .length > 0
    );
  },
);
const handleClick = (e) => {
  if (hasDropDown.value) {
    // Stop instant router navigation so user can expand/collapse subTabs
    e.preventDefault();
    isOpen.value =
      !isOpen.value;
  } else {
    // Normal routing navigation, shut the slider panel wrapper down
    emit('toggleSidebarOpen');
  }
};
const isProfile = computed(
  () => {
    return props.mobileLink
      .target === '/profile'
      ? props.mobileLink
      : null;
  },
);
</script>
<template>
  <div>
    <!-- normal links -->
    <RouterLink
      v-if="
        props.mobileLink
          .target
      "
      :to="
        props.mobileLink.target.trim()
      "
      @click="handleClick"
      :class="[
        ' flex items-center justify-between gap-1 rounded capitalize text-xs sm:text-sm md:text-base py-4 px-2 font-semibold tracking-wide leading-none  transition-all ease-in-out',
        props.isActiveLink(
          props.mobileLink.target.trim(),
        )
          ? 'border-l-2 bg-indigo-50 dark:bg-white/5 border-indigo-700 dark:border-indigo-500   text-indigo-700 dark:text-indigo-500 '
          : 'hover:text-indigo-700/90 hover:bg-indigo-50 dark:hover:bg-white/5 hover:border-l-2 hover:border-indigo-700 dark:hover:border-indigo-500  dark:hover:text-indigo-500/90 ',
      ]"
    >
      <span
        class="flex items-center gap-2"
      >
        <component
          v-if="
            props.mobileLink
              .icon
          "
          :is="
            props.mobileLink
              .icon
          "
          class="w-4 h-4"
        />
        {{
          props.mobileLink
            .title
        }}
      </span>
      <ChevronDoubleRightIcon
        v-if="hasDropDown"
        :class="[
          'w-4 h-4 transition-transform duration-300 ',
          isOpen
            ? 'rotate-90'
            : '',
        ]"
        class="w-4 h-4"
      />
    </RouterLink>
    <!-- dropdown links -->
    <div
      v-else
      @click="
        isOpen = !isOpen
      "
      :class="[
        'flex items-center justify-between gap-1 rounded capitalize text-xs sm:text-sm md:text-base py-4 px-2 font-semibold tracking-wide leading-none transition-all ease-in-out cursor-pointer',
        isOpen
          ? 'border-l-2 bg-indigo-50 dark:bg-white/5 border-indigo-700 dark:border-indigo-500 text-indigo-700 dark:text-indigo-500'
          : 'hover:text-indigo-700/90 hover:bg-indigo-50 dark:hover:bg-white/5 hover:border-l-2 hover:border-indigo-700 dark:hover:border-indigo-500 dark:hover:text-indigo-500/90',
      ]"
    >
      <span
        class="flex items-center gap-2"
      >
        <component
          v-if="
            props.mobileLink
              .icon
          "
          :is="
            props.mobileLink
              .icon
          "
          class="w-4 h-4"
        />
        {{
          props.mobileLink
            .title
        }}
      </span>
      <ChevronDoubleRightIcon
        v-if="hasDropDown"
        :class="[
          'w-4 h-4 transition-transform duration-300',
          isOpen
            ? 'rotate-90'
            : '',
        ]"
      />
    </div>
  </div>
  <ul
    v-if="
      hasDropDown && isOpen
    "
    :class="[
      'overflow-hidden transition-all duration-300 space-y-3 border-l border-t pt-1 pl-2',
      isOpen
        ? 'h-fit'
        : 'h-0',
    ]"
  >
    <li
      v-for="sub in props
        .mobileLink.subTab"
      :key="sub.target"
    >
      <RouterLink
        :to="sub.target"
        @click="
          emit(
            'toggleSidebarOpen',
          )
        "
        :class="[
          'block  rounded capitalize text-xs sm:text-sm py-2 px-3 font-medium tracking-wide transition-all ease-in-out',
          props.isActiveLink(
            sub.target.trim(),
          )
            ? 'border-l-2 bg-indigo-50 dark:bg-white/5 border-indigo-700 dark:border-indigo-500 text-indigo-700 dark:text-indigo-500'
            : 'hover:text-indigo-700/90 hover:bg-indigo-50 dark:hover:bg-white/5 hover:border-l-2 hover:border-indigo-700 dark:hover:border-indigo-500 dark:hover:text-indigo-500/90',
        ]"
      >
        {{ sub.title }}
      </RouterLink>
    </li>
  </ul>
</template>
