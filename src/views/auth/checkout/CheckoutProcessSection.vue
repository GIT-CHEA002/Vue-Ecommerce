<script setup>
const process = [
  'shipping',
  'Payment',
  'Review',
];

const progress = 'shipping';
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 mt-8"
  >
    <div
      class="border-b-2 border-gray-300 relative"
    >
      <div
        class="absolute -top-5 w-full flex justify-between items-center"
      >
        <div
          v-for="(
            item, index
          ) in process"
          :key="index"
          class="flex flex-col items-center w-fit cursor-pointer"
        >
          <div
            class="w-5 h-5 flex items-center justify-center text-xs rounded-full"
            :class="
              item ===
              progress
                ? 'bg-indigo-700 text-white'
                : 'bg-gray-300 text-gray-600'
            "
          >
            {{ index + 1 }}
          </div>

          <span
            class="text-[0.6rem] sm:text-xs md:text-sm capitalize mt-0.5 font-medium"
            :class="
              item ===
              progress
                ? 'text-indigo-700'
                : 'text-gray-500'
            "
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
