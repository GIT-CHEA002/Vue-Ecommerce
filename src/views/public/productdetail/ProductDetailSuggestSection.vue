<script setup>
import SectionHeader from '@/components/shared/SectionHeader.vue';
// done 
</script>
<template>
  <section class="py-6">
    <SectionHeader
      title="You May Also Like This"
      class="py-2"
    />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-8"
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
          <h1
            class="font-semibold line-clamp-1"
          >
            The Executive
            Backpack
          </h1>
          <span
            class="text-xs text-slate-700 dark:text-indigo-50"
            >$450.00</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
