<script setup>
import { useRoute } from 'vue-router';
import CheckoutProcessSection from './CheckoutProcessSection.vue';
import ShippingAndPaymentInfoSection from './ShippingAndPaymentInfoSection.vue';
const route = useRoute();
const cartItems = JSON.parse(
  route.query.cartItems,
);
</script>
<template>
  <CheckoutProcessSection />
  <ShippingAndPaymentInfoSection
    :cart-items="cartItems"
  />
</template>
