<script setup>
import { ref } from 'vue';
import ProductDetailInfoSection from './ProductDetailInfoSection.vue';
import ProductDetailReviewSection from './ProductDetailReviewSection.vue';
import ProductDetailSuggestSection from './ProductDetailSuggestSection.vue';
// done extracting the component
const prodcutImages = ref([
  'https://picsum.photos/id/211/400/400',
  'https://picsum.photos/id/22/400/400',
  'https://picsum.photos/id/26/400/400',
]);

const activeImage = ref(
  prodcutImages.value[0],
);
const quantity = ref(1);
</script>
<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 h-fit border-b-2"
  >
    <!-- detail section  -->
    <ProductDetailInfoSection
      :prodcut-images="
        prodcutImages
      "
      :active-image="
        activeImage
      "
      v-model:quantity="
        quantity
      "
      v-model:active-image="
        activeImage
      "
    />
    <!-- review sections -->
    <ProductDetailReviewSection />
    <!-- suggestion section  -->
    <ProductDetailSuggestSection />
  </div>
</template>
