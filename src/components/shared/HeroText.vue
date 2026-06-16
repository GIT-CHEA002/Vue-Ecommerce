<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: 'Lost in the Elegance.',
  },
  hightlightText: {
    type: String,
    default: 'Elegance',
  },
  defaultText: {
    type: String,
    default: 'text-3xl md:text-4xl lg:text-5xl',
  },
})
const titleParts = computed(() => {
  if (!props.text) {
    return []
  }
  if (!props.hightlightText) {
    return [props.text]
  }
  // regex to cut the string
  const regex = new RegExp(`(${props.hightlightText})`, 'gi')
  return props.text.split(regex)
})
</script>
<template>
  <div>
    <h1
      :class="`capitalize leading-tight  ${defaultText}  font-extrabold text-black dark:text-white`"
    >
      <template v-for="(part, index) in titleParts" :key="index">
        <span
          v-if="part.toLowerCase() === props.hightlightText.toLowerCase()"
          class="text-indigo-700 dark:text-indigo-500 drop-shadow-[0_2px_8px_rgba(67,56,202,0.5)] dark:drop-shadow-[0_2px_8px_rgba(129,140,248,0.5)]"
        >
          {{ part }}
        </span>
        <span v-else>
          {{ part }}
        </span>
      </template>
    </h1>
  </div>
</template>
