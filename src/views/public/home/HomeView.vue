<script setup>
import HomeHeroSection from './HomeHeroSection.vue';
import ShopCategorySection from './ShopCategorySection.vue';
import TrendingProductSection from './TrendingProductSection.vue';
import SearchFormSection from './SearchFormSection.vue';
import { productService } from '@/services/productService.js';
import {
  onMounted,
  reactive,
} from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
const state = reactive({
  isLoading: false,
  products: [],
});
onMounted(async () => {
  state.isLoading = true;
  try {
    const response =
      await productService.getAllProducts();
    state.products =
      response.data.products;
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
    <ShopCategorySection />
    <TrendingProductSection
      :produts="
        state.products || []
      "
    />
  </div>

  <SearchFormSection />
</template>
