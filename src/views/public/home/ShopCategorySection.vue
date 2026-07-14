<script setup>
import OverLine from '@/components/shared/OverLine.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import { ArrowRightIcon } from '@heroicons/vue/16/solid';
import ShopCategorySectionCard from './ShopCategorySectionCard.vue';
const props = defineProps({
  categoryProduct: {
    type: Array,
    default: () => [],
  },
});
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12"
  >
    <div class="">
      <OverLine
        title="Explore"
      />
      <div
        class="flex items-center justify-between"
      >
        <SectionHeader />
        <RouterLink
          to="/products"
          class="flex items-center text-xs text-indigo-700 dark:text-indigo-300 cursor-pointer"
          >View All
          <ArrowRightIcon
            class="w-3 h-3 ms-1"
          />
        </RouterLink>
      </div>

      <div
        class="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 auto-rows-[350px]"
      >
        <ShopCategorySectionCard
          v-for="(
            category, index
          ) in categoryProduct"
          :key="index"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>
