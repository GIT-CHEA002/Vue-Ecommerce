<script setup>
import { StarIcon as SolidStar } from '@heroicons/vue/24/solid';
import { StarIcon as OutlineStar } from '@heroicons/vue/24/outline';

defineProps({
  defaultColor: {
    type: String,
    default:
      'text-indigo-600',
  },
  rating: {
    type: String,
    default: '',
  },
  ratingCount: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div
    class="flex justify-between items-center"
  >
    <div
      :class="[
        'flex items-center gap-2',
        defaultColor,
      ]"
    >
      <!-- 4 Full Stars -->
      <SolidStar
        v-for="i in 4"
        :key="i"
        class="w-4 h-4"
      />
      <div
        class="relative w-4 h-4"
      >
        <OutlineStar
          :class="[
            'absolute inset-0 w-4 h-4',
            defaultColor,
          ]"
        />
        <div
          class="absolute inset-0 w-1/2 overflow-hidden"
        >
          <SolidStar
            :class="[
              'w-4 h-4',
              defaultColor,
            ]"
          />
        </div>
      </div>
    </div>
    <span
      v-if="rating != ''"
      class="ml-2 text-sm text-slate-700 dark:text-indigo-50"
    >
      {{ rating }}
    </span>
    <span
      v-if="ratingCount != ''"
      class="ml-2 tracking-wide text-sm text-slate-700 dark:text-indigo-50"
    >
      ({{
        ratingCount
      }}
      Reviews)
    </span>
  </div>
</template>
