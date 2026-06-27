<script setup>
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/vue/16/solid';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  isFirstPage: {
    type: Boolean,
    required: true,
  },
  isLastPage: {
    type: Boolean,
    required: true,
  },
  pageSize: {
    type: Number,
    required: false,
    defautl: 9,
  },
});

const emit = defineEmits([
  'prev',
  'next',
]);
</script>

<template>
  <section>
    <div
      class="flex justify-center items-center gap-4 mt-6"
    >
      <button
        class="px-4 py-2 rounded disabled:opacity-50 hover:scale-110 transition-all duration-300"
        :disabled="
          isFirstPage
        "
        @click="emit('prev')"
      >
        <ChevronDoubleLeftIcon
          class="w-6 h-6 text-slate-700 dark:text-indigo-50"
        />
      </button>

      <span
        class="font-medium text-sm text-slate-700 dark:text-indigo-50"
      >
        Page:
        {{ currentPage }} /
        {{ pageCount }}
      </span>
      <button
        class="px-4 py-2 rounded disabled:opacity-50 hover:scale-110 transition-all duration-300"
        :disabled="isLastPage"
        @click="emit('next')"
      >
        <ChevronDoubleRightIcon
          class="w-6 h-6 text-slate-700 dark:text-indigo-50"
        />
      </button>
    </div>
    <div class="text-center">
      <span
        class="font-medium text-sm text-slate-700 dark:text-indigo-50"
      >
        showing
        {{
          currentPage *
          pageSize
        }}
        result of
        {{
          pageCount * pageSize
        }}
        item
      </span>
    </div>
  </section>
</template>
