<script setup>
import ProdcutDisplaySectionCard from './ProdcutDisplaySectionCard.vue';
import { useOffsetPagination } from '@vueuse/core';
import {
  computed,
  reactive,
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
const allProducts = reactive([
  {
    id: 1,
    name: 'Minimalist Leather Backpack',
    category: 'Accessories',
    price: 89.99,
    rating: 4.8,
    image:
      'https://picsum.photos/id/26/400/400',
  },
  {
    id: 2,
    name: 'Wireless Noise-Canceling Headphones',
    category: 'Electronics',
    price: 149.5,
    rating: 4.6,
    image:
      'https://picsum.photos/id/211/400/400',
  },
  {
    id: 3,
    name: 'Ceramic Coffee Dripper Set',
    category: 'Kitchenware',
    price: 34.0,
    rating: 4.9,
    image:
      'https://picsum.photos/id/225/400/400',
  },
  {
    id: 4,
    name: 'Classic Stainless Steel Watch',
    category: 'Accessories',
    price: 199.0,
    rating: 4.7,
    image:
      'https://picsum.photos/id/175/400/400',
  },
  {
    id: 5,
    name: 'Ergonomic Mechanical Keyboard',
    category: 'Electronics',
    price: 120.0,
    rating: 4.5,
    image:
      'https://picsum.photos/id/160/400/400',
  },
  {
    id: 6,
    name: 'Organic Soy Scented Candle',
    category: 'Home Decor',
    price: 18.99,
    rating: 4.3,
    image:
      'https://picsum.photos/id/365/400/400',
  },
  {
    id: 7,
    name: 'Full-Grain Leather Wallet',
    category: 'Accessories',
    price: 45.0,
    rating: 4.7,
    image:
      'https://picsum.photos/id/352/400/400',
  },
  {
    id: 8,
    name: 'Double-Walled Glass Mug',
    category: 'Kitchenware',
    price: 22.5,
    rating: 4.4,
    image:
      'https://picsum.photos/id/429/400/400',
  },
  {
    id: 9,
    name: 'Retro Desktop Bluetooth Speaker',
    category: 'Electronics',
    price: 79.95,
    rating: 4.6,
    image:
      'https://picsum.photos/id/445/400/400',
  },
  {
    id: 10,
    name: 'Matte Black Fountain Pen',
    category: 'Stationery',
    price: 28.0,
    rating: 4.8,
    image:
      'https://picsum.photos/id/306/400/400',
  },
]);

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
    () => allProducts.length,
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
    return allProducts.slice(
      start,
      start + pageSize,
    );
  });
</script>
<template>
  <section class="w-full">
    <div
      class="flex-1 md:border-l min-h-[180vh] md:ps-6"
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
        class="py-6 flex flex-nowrap overflow-x-auto gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible   [&::-webkit-scrollbar]:hidden"
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
        @prev="prev"
        @next="next"
      />
    </div>
  </section>
</template>
