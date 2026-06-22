<script setup>
import { useTheme } from '@/stores/theme';
import HomeHeroSection from './HomeHeroSection.vue';
import ShopCategorySection from './ShopCategorySection.vue';
import TrendingProductSection from './TrendingProductSection.vue';
import SearchFormSection from './SearchFormSection.vue';
</script>
<template>
  <div>
    <HomeHeroSection />
    <ShopCategorySection />
    <TrendingProductSection />
    <SearchFormSection />
  </div>
</template>
