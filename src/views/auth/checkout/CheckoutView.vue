<script setup>
import { useRoute } from 'vue-router';
import CheckoutProcessSection from './CheckoutProcessSection.vue';
import ShippingAndPaymentInfo from './ShippingAndPaymentInfo.vue';

const route = useRoute();
const cartItems = JSON.parse(route.query.cartItems)
</script>
<template>
  <CheckoutProcessSection />
  <ShippingAndPaymentInfo  :cart-items="cartItems" />
</template>
