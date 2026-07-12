<script setup>
import {
  computed,
  reactive,
  ref,
  watch,
} from 'vue';
import ProductDetailInfoSection from './ProductDetailInfoSection.vue';
import ProductDetailReviewSection from './ProductDetailReviewSection.vue';
import ProductDetailSuggestSection from './ProductDetailSuggestSection.vue';
import { useRouter } from 'vue-router';
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import { productService } from '@/services/productService.js';
import { useRoute } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
const router = useRouter();
const route = useRoute();
const productId = computed(
  () => {
    return (
      route.params.id || 1
    );
  },
);

const state = reactive({
  product: {},
  isLoading: true,
  error: null,
});
// compute and save in local memory
const productImages =
  computed(() => {
    return (
      state.product?.images ??
      []
    );
  });
const activeImage = ref('');
watch(
  productId,
  async (newProductId) => {
    if (!newProductId) return;
    state.isLoading = true;
    state.error = null;
    try {
      const repsonse =
        await productService.getProductById(
          newProductId,
        );
      state.product =
        repsonse.data;
      activeImage.value =
        state.product
          .images?.[0] ?? '';
    } catch (error) {
      console.log(
        'Error in fetching product with id = ',
        productId,
        ':',
        error,
      );
    } finally {
      state.isLoading = false;
    }
  },
  { immediate: true },
);
const quantity = ref(1);
</script>
<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 h-fit border-b-2"
  >
    <!-- go back to product pages  -->
    <button
      @click="
        router.push(
          '/products',
        )
      "
      class="flex hover:underline underline-offset-2 transition-transform duration-300 overflow-hidden items-center gap-2 text-sm font-medium text-indigo-700 dark:text-indigo-50"
    >
      <ArrowLeftIcon
        class="w-3 h-3"
      />
      <span
        >Back To Product
        page</span
      >
    </button>
    <div
      v-if="state.isLoading"
      class="text-center"
    >
      <span class="text-xs"
        >Loading...</span
      >
      <PulseLoader />
    </div>
    <div v-else>
      <!-- detail section  -->
      <ProductDetailInfoSection
        :prodcut-images="
          productImages
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
        :product="
          state.product
        "
      />
      <!-- review sections -->
      <ProductDetailReviewSection
        :product="
          state.product
        "
      />
      <!-- suggestion section  -->
      <ProductDetailSuggestSection
        :product="
          state.product
        "
      />
    </div>
  </div>
</template>
