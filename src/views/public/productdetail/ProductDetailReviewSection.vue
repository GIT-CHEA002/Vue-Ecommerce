<script setup>
import RatingStar from '@/components/shared/RatingStar.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import ProductDetailReviewSectionCard from './ProductDetailReviewSectionCard.vue';
const props = defineProps({
  product: {
    type: Object,
  },
});
</script>
<template>
  <section class="py-6">
    <div
      class="flex justify-between"
    >
      <SectionHeader
        title="Customer Service"
      />
      <button
        class="capitalize text-xs rounded-full border border-indigo-700 py-1 px-6 text-indigo-700 hover:text-indigo-50 hover:bg-indigo-700 transition-transform duration-300 hover:border-indigo-50"
      >
        write a review
      </button>
    </div>
    <div
      class="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
    >
      <!-- reviewer -->
      <ProductDetailReviewSectionCard
        v-for="review in props
          .product?.reviews"
        :key="review"
        :review="review"
      />
      <!-- rating star -->
      <div
        class="p-6 flex flex-col justify-center items-center bg-blue50/90 dark:bg-slate-900 shadow-md rounded-md space-y-3"
      >
        <span
          class="text-4xl font-semibold"
          >{{
            props.product
              ?.rating
          }}</span
        >
        <RatingStar />
        <span
          class="text-xs sm:text-sm md:text-base"
          >Base on
          {{
            props.product
              ?.reviews
              ?.length
          }}
          Reviews</span
        >
      </div>
    </div>
  </section>
</template>
