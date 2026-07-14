<script setup>
import HomeHeroSection from './HomeHeroSection.vue';
import ShopCategorySection from './ShopCategorySection.vue';
import TrendingProductSection from './TrendingProductSection.vue';
import SearchFormSection from './SearchFormSection.vue';
import { productService } from '@/services/productService.js';
import {
  computed,
  onMounted,
  reactive,
} from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
const state = reactive({
  isLoading: false,
  products: [],
});

const categoryProduct =
  computed(() => {
    const map = new Map();

    state.products.forEach(
      (product) => {
        if (
          !map.has(
            product.category,
          )
        ) {
          map.set(
            product.category,
            {
              category:
                product.category,
              image:
                product.thumbnail, // or product.images[0]
              description:
                product.description,
            },
          );
        }
      },
    );

    return [...map.values()];
  });
onMounted(async () => {
  state.isLoading = true;
  try {
    const response =
      await productService.getLimitAndSkipProduct(
        8,
        8,
      );
    state.products =
      response.products || [];
  } catch (error) {
    console.error(
      'Error in fetching product on home page : ' +
        error,
    );
  } finally {
    state.isLoading = false;
  }
});
</script>
<template>
  <HomeHeroSection />
  <div
    v-if="state.isLoading"
    class="text-center"
  >
    <span
      class="text-xs tracking-wide py-2 font-medium"
      >Loading product
      fetching...</span
    >
    <PulseLoader />
  </div>
  <div v-else>
    <ShopCategorySection
      :category-product="
        categoryProduct
      "
    />
    <TrendingProductSection
      :produts="
        state.products || []
      "
    />
  </div>
  <SearchFormSection />
</template>
