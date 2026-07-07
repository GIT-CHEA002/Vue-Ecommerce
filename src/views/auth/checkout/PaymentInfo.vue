<script setup>
import { ArrowRightIcon } from '@heroicons/vue/16/solid';
import { RouterLink } from 'vue-router';
const props = defineProps({
  cartItems: {
    type: Array,
  },
});
const subtotal =
  props.cartItems.reduce(
    (acc, item) => {
      return (
        acc +
        item.price *
          item.quantity
      );
    },
    0,
  );
const shippingCost = 15;
const discount = 25;
const tax = 48;
const total =
  subtotal +
  shippingCost +
  tax -
  discount;
</script>
<template>
  <div
    class="col-span-1 p-8 bg-white dark:bg-slate-900 rounded-md"
  >
    <h1
      class="text-xs sm:text-sm md:text-base font-medium"
    >
      Order Summary
    </h1>
    <div
      class="block pt-4 space-y-3 border-b pb-2"
    >
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex justify-start items-center space-x-4 h-fit"
      >
        <div
          class="h-[70px] w-[60px] overflow-hidden rounded-sm bg-gray-100"
        >
          <img
            :src="item.image"
            :alt="`product items id = ${item.id}`"
            class="w-full h-full object-cover"
          />
        </div>

        <div
          class="space-y-3"
        >
          <div>
            <h1
              class="text-sm font-bold leading-tight"
            >
              {{ item.name }}
            </h1>
            <p
              class="text-xs font-medium mt-0.5"
            >
              {{ item.color }}
            </p>
          </div>

          <div
            class="flex items-center space-x-8"
          >
            <span
              class="text-xs brightness-95 font-medium"
              >Qty:
              {{
                item.quantity
              }}</span
            >
            <span
              class="text-xs font-bold"
              >${{
                item.quantity *
                item.price
              }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div
      class="py-6 space-y-5 border-b h-fit"
    >
      <div
        class="flex justify-between items-center text-sm"
      >
        <span>Subtotal</span>
        <span
          >${{
            subtotal
          }}</span
        >
      </div>
      <div
        class="flex justify-between items-center text-sm"
      >
        <span>Shipping</span>
        <span
          >${{
            shippingCost
          }}</span
        >
      </div>
      <div
        class="flex justify-between items-center text-sm"
      >
        <span
          >Estimated Tax</span
        >
        <span
          >${{ tax }}</span
        >
      </div>
      <div
        class="flex justify-between items-center text-sm"
      >
        <span>Discount</span>
        <span
          >${{
            discount
          }}</span
        >
      </div>
    </div>
    <div
      class="py-4 flex justify-between items-center"
    >
      <span
        class="text-base font-bold"
        >Total</span
      >
      <span
        class="text-indigo-700 font-extrabold tracking-wider brightness-125"
        >${{ total }}</span
      >
    </div>
    <RouterLink
      :to="{
        name: 'paymentmethod',
        query: {
          cartItems:
            JSON.stringify(
              props.cartItems,
            ),
        },
      }"
      type="button"
      class="w-full flex items-center justify-center px-2 py-3 rounded-md bg-indigo-700 text-indigo-50 hover:bg-indigo-700/95 hover:scale-[1.01] transition-all duration-300"
    >
      <span class="px-1"
        >Proceed to
        Checkout</span
      >
      <ArrowRightIcon
        class="w-4 h-4"
      />
    </RouterLink>
    <h1
      class="text-xs opacity-75 py-1"
    >
      Your purchase is
      protected by our Buyer
      Protection Program
    </h1>
  </div>
</template>
