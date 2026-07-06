<script setup>
import CartProductPaymentSection from './CartProductPaymentSection.vue';
import ShoppingCartProductCartSection from './ShoppingCartProductCartSection.vue';
const cartItems = [
  {
    id: 1,
    name: 'LuxeCommerce Sneaker',
    image:
      'https://picsum.photos/200/200?random=1',
    color: 'Cloud White',
    size: 42,
    price: 420,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Nike Air Max 270',
    image:
      'https://picsum.photos/200/200?random=2',
    color: 'Black',
    size: 41,
    price: 180,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Adidas Ultraboost 22',
    image:
      'https://picsum.photos/200/200?random=3',
    color: 'Core Black',
    size: 43,
    price: 220,
    quantity: 3,
  },
  {
    id: 4,
    name: 'Converse Chuck Taylor',
    image:
      'https://picsum.photos/200/200?random=4',
    color: 'Red',
    size: 40,
    price: 95,
    quantity: 2,
  },
];
</script>
<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 h-fit border-b-2"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto space-y-8 md:space-y-0 lg:gap-8 h-fit"
    >
      <ShoppingCartProductCartSection
        :cart-items="
          cartItems
        "
      />
      <CartProductPaymentSection
        :cart-items="
          cartItems
        "
      />
    </div>
  </div>
</template>
