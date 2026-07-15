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
  isError: false, // ✅ added here
  carts: computed(
    () => cartItem.value[0],
  ),
});

onMounted(async () => {
  state.isLoading = true;
  state.isError = false;
  try {
    await fetchCartByUser(1);
  } catch (error) {
    console.error(
      'An Error occur when fetching carts data',
      error,
    );
    state.isError = true; // ✅ mark error
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 h-fit border-b-2"
  >
    <!-- Loader -->
    <div
      v-if="state.isLoading"
      class="text-center"
    >
      <PulseLoader />
    </div>

    <!-- Main layout always stays -->
    <div
      v-else
      class="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto space-y-8 md:space-y-0 lg:gap-8 h-fit"
    >
      <!-- Product section -->
      <CartProductSection
        v-if="!state.isError"
        :products="
          state.carts
            ?.products || []
        "
      />
      <div
        v-else
        class="text-center text-red-600 font-medium col-span-2"
      >
        ⚠️ Unable to load
        products. Please check
        your internet
        connection.
      </div>

      <!-- Payment section -->
      <CartPaymentSection
        v-if="!state.isError"
        :carts="state.carts"
      />
      <div
        v-else
        class="text-center text-gray-500"
      >
        Payment section
        unavailable offline.
      </div>
    </div>
  </div>
</template>
