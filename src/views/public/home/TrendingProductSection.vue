<script setup>
import OverLine from '@/components/shared/OverLine.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import TrendingProductSectionCard from './TrendingProductSectionCard.vue';
import { RouterLink } from 'vue-router';
import { ArrowRightIcon } from '@heroicons/vue/16/solid';
const props = defineProps({
  produts: {
    type: Array,
    default: () => [],
  },
});
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12"
  >
    <div class="text-center">
      <SectionHeader
        title="Trending Now"
      />
      <OverLine
        title="Our most coveted pieces of the season"
      />
    </div>
    <!-- card grids  -->
    <div
      class="flex overflow-x-auto gap-12 py-12 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:overflow-x-visible [&::-webkit-scrollbar]:hidden""
    >
      <!-- cards  -->
      <TrendingProductSectionCard
        v-for="product in props.produts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div
      class="text-center flex justify-center"
    >
      <RouterLink
        to="/products"
        class="w-fit flex items-center text-xs text-indigo-700 dark:text-indigo-300 cursor-pointer hover:underline underline-offset-2 tracking-wider transition-all duration-300"
        >View All
        <ArrowRightIcon
          class="w-3 h-3 ms-1"
        />
      </RouterLink>
    </div>
  </section>
</template>
