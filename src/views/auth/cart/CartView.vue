<script setup>
import {
  computed,
  onMounted,
  reactive,
} from 'vue';
import CartPaymentSection from './CartPaymentSection.vue';
import CartProductSection from './CartProductSection.vue';
import { useCartStore } from '@/stores/cartStore.js';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { storeToRefs } from 'pinia';
const cartStore =
  useCartStore();
const { cartItem } =
  storeToRefs(cartStore);
const { fetchCartByUser } =
  cartStore;

const state = reactive({
  isLoading: false,
  carts: computed(
    () => cartItem.value[0],
  ),
});
onMounted(async () => {
  state.isLoading = true;
  try {
    await fetchCartByUser(1);
  } catch (error) {
    console.error(
      'An Error occur when fetching carts data',
    );
  } finally {
    state.isLoading = false;
  }
});
</script>
<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 h-fit border-b-2"
  >
    <div
      v-if="state.isLoading"
      class="text-center"
    >
      <PulseLoader />
    </div>
    <div
      v-else
      class="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto space-y-8 md:space-y-0 lg:gap-8 h-fit"
    >
      <CartProductSection
        :products="
          state.carts
            ?.products || []
        "
      />
      <CartPaymentSection
        :carts="state.carts"
      />
    </div>
  </div>
</template>
