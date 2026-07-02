<script setup>
import EyebrowText from '@/components/shared/EyebrowText.vue';
import OverLine from '@/components/shared/OverLine.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-8 h-fit"
  >
    <SectionHeader
      title="Featured in Furniture"
    />
    <EyebrowText />
    <div
      class=" py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-auto"
    >
      <div
        v-for="i in 4"
        :key="i"
        class="flex flex-col cursor-pointer dark:bg-slate-900 rounded border border-indigo-700 dark:border-indigo-50"
      >
        <div
          class="h-[260px] overflow-hidden"
        >
          <img
            src="https://picsum.photos/id/211/400/400"
            alt=""
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div
          class="flex-1 px-2 py-6"
        >
          <!-- title and prices  -->
          <div
            class="flex justify-between items-center"
          >
            <span
              class="flex-1 text-sm font-semibold line-clamp-1"
            >
              The Executive
              Backpack
            </span>
            <span
              class="flex-grow-1 text-xs text-indigo-700 brightness-125"
              >$450.00</span
            >
          </div>
          <!-- slug sections -->
          <span
            class="capitalize text-[0.65rem] opacity-75"
            >Natural oak &
            leather</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
