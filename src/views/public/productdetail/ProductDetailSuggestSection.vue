<script setup>
import SectionHeader from '@/components/shared/SectionHeader.vue';
import ProductDetailSuggestSectionCard from './ProductDetailSuggestSectionCard.vue';
import {
  computed,
  ref,
  watch,
} from 'vue';
import { productService } from '@/services/productService.js';
const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },  
});
const suggestionProduct = ref(
  [],
);
const category = computed(
  () =>
    props.product?.category,
);
watch(
  category,
  async (newCategory) => {
    if (!newCategory) return;
    try {
      const repsonse =
        await productService.getAllCategoryProduct(
          category.value,
        );
      suggestionProduct.value =
        repsonse.products ||
        [];
    } catch (error) {
      console.log(
        'Failed to fetch suggestions:',
        error,
      );
    }
  },
  { immediate: true },
);
const emit = defineEmits([
  'reset:quantity',
]);
// done
</script>
<template>
  <section class="py-6">
    <SectionHeader
      title="You May Also Like This"
      class="py-2"
    />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-8"
    >
      <ProductDetailSuggestSectionCard
        v-for="product in suggestionProduct"
        :key="product.id"
        :product="product"
        @reset:quantity="
          emit(
            'reset:quantity',
          )
        "
      />
    </div>
  </section>
</template>
