<script setup>
import OverLine from '@/components/shared/OverLine.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import TrendingProductSectionCard from './TrendingProductSectionCard.vue';
import { toRaw } from 'vue';
const props = defineProps({
  produts: {
    type: Array,
    default: () => [],
  },
});
console.log(
  toRaw(props.produts),
);
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
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-12 py-12"
    >
      <!-- cards  -->
      <TrendingProductSectionCard
        v-for="product in props.produts"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
