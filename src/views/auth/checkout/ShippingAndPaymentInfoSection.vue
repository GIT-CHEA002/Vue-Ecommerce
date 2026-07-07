<script setup>
import ShippingForm from './ShippingForm.vue';
import PaymentInfo from './PaymentInfo.vue';
const props = defineProps({
  cartItems: {
    type: Array,
  },
});
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 border-b-2 h-fit"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto space-y-6 md:space-y-0 md:gap-8"
    >
      <ShippingForm />
      <PaymentInfo
        :cart-items="
          props.cartItems
        "
      />
    </div>
  </section>
</template>
