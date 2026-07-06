<script setup>
const process = [
  'shipping',
  'Payment',
  'Review',
];
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 mt-8"
  >
    <div
      class="border-b-2 border-indigo-500 relative"
    >
      <div
        class="absolute -top-5 w-full flex justify-between items-center"
      >
        <div
          v-for="(
            item, index
          ) in process"
          :key="index"
          class="flex items-center flex-col w-fit cursor-pointer"
        >
          <div
            class="w-5 h-5 flex items-center justify-center text-xs rounded-full bg-indigo-700 text-indigo-50"
          >
            {{ index + 1 }}
          </div>

          <span
            class="text-xs md:text-sm capitalize opacity-75 mt-0.5"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
