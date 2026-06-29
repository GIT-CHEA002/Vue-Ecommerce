<script setup>
import SectionHeader from '@/components/shared/SectionHeader.vue';
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  TruckIcon,
} from '@heroicons/vue/16/solid';
</script>
<template>
  <section
    class="col-span-1 p-4 rounded-lg border border-indigo-700 bg-indigo-50 dark:bg-slate-900 h-fit"
  >
    <SectionHeader
      title="Order Summary"
      default-text="text-sm md:text-base lg:text-lg font-medium text-slate-700 dark:text-indigo-50"
    />

    <div
      class="py-6 space-y-5 border-b-2 border-indigo-700 h-fit"
    >
      <div
        class="flex justify-between items-center text-sm"
      >
        <span>Subtotal</span>
        <span>$610.00</span>
      </div>
      <div
        class="flex justify-between items-center text-sm"
      >
        <span>Shipping</span>
        <span>$15.00</span>
      </div>
      <div
        class="flex justify-between items-center text-sm"
      >
        <span>Tax</span>
        <span>$48.00</span>
      </div>
      <div
        class="flex justify-between items-center text-sm"
      >
        <span>Discount</span>
        <span>$25.00</span>
      </div>
    </div>

    <div
      class="flex justify-between items-center py-4"
    >
      <span
        class="font-bold tracking-wide text-xl"
        >Total</span
      >
      <span
        class="font-bold tracking-wide text-lg"
        >$25.00</span
      >
    </div>

    <button
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
    </button>
    <div
      class="py-6 space-y-2"
    >
      <div
        class="text-slate-700 dark:text-indigo-50 flex-1 flex items-start justify-start space-x-2"
      >
        <TruckIcon
          class="w-5 h-5 text-indigo-700"
        />
        <div class="block">
          <h1
            class="capitalize text-sm font-medium tracking-wider"
          >
            Fast Global
            Shipping
          </h1>
          <h1 class="text-xs">
            Estimated delivery
            in 3-5 business
            days.
          </h1>
        </div>
      </div>

      <div
        class="text-slate-700 dark:text-indigo-50 flex-1 flex items-start justify-start space-x-2"
      >
        <ShieldCheckIcon
          class="w-5 h-5 text-indigo-700"
        />
        <div class="block">
          <h1
            class="capitalize text-sm font-medium tracking-wider"
          >
            Secure Checkout
          </h1>
          <h1
            class="text-xs capitalize"
          >
            Encrypt
            Transaction via
            SSL for your
            security
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>
