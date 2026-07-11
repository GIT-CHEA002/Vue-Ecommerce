<script setup>
import ProdcutDisplaySectionCard from './ProdcutDisplaySectionCard.vue';
import { useOffsetPagination } from '@vueuse/core';
import { productService } from '@/services/productService.js';
import {
  computed,
  onMounted,
  reactive,
  ref,
} from 'vue';
import Pagination from '@/components/shared/Pagination.vue';
defineProps({
  category: {
    type: String,
    required: false,
    default:
      'Trending products',
  },
});
const state = reactive({
  allProducts: [],
});
onMounted(async () => {
  const response =
    await productService.getAllProducts();
  state.allProducts =
    response.data.products;
});

// product per page to display
const pageSize = 9;
const {
  currentPage,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  // use to memorize the size globaly
  total: computed(
    () =>
      state.allProducts
        ?.length || 0,
  ),
  page: 1,
  pageSize,
});
// local in parent node
const paginationProduct =
  computed(() => {
    const start =
      (currentPage.value -
        1) *
      pageSize;
    return state.allProducts.slice(
      start,
      start + pageSize,
    );
  });
const handlePrev = () => {
  prev();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
const handleNext = () => {
  next();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>
<template>
  <section class="w-full">
    <div
      class="flex-1 md:border-l h-fit md:min-h-[180vh] md:ps-6 py-4"
    >
      <h2
        class="text-xl font-bold text-indigo-700"
      >
        Product Type :
        <span
          class="underline"
          >{{
            category
          }}</span
        >
      </h2>
      <div
        class="py-6 flex flex-nowrap overflow-x-auto gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        <ProdcutDisplaySectionCard
          v-for="product in paginationProduct"
          :key="product.id"
          :product="product"
        />
      </div>
      <Pagination
        :current-page="
          currentPage
        "
        :page-count="
          pageCount
        "
        :is-first-page="
          isFirstPage
        "
        :is-last-page="
          isLastPage
        "
        :page-size="pageSize"
        @prev="handlePrev"
        @next="handleNext"
      />
    </div>
  </section>
</template>
