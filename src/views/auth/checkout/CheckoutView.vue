<script setup>
import CheckoutProductCartSection from './CheckoutProductCartSection.vue';
import CheckoutProductPaymentSection from './CheckoutProductPaymentSection.vue';
</script>
<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 h-fit border-b-2"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto space-y-8 md:space-y-0 lg:gap-8 h-fit"
    >
      <CheckoutProductCartSection />
      <CheckoutProductPaymentSection />
    </div>
  </div>
</template>
