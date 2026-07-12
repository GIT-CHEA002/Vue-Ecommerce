<script setup>
import SectionHeader from '@/components/shared/SectionHeader.vue';
import CartProductSectionCard from './CartProductSectionCard.vue';

import {
  toRaw,
  watch,
} from 'vue';
const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});

</script>
<template>
  <section
    class="col-span-1 lg:col-span-2"
  >
    <SectionHeader
      title="your shopping bag"
      class="capitalize"
    />

    <div
      class="block pt-6 space-y-5"
    >
      <CartProductSectionCard
        v-for="product in props.products"
        :key="product.id"
        :product="product"
      />

      <div class="block">
        <h1
          class="uppercase text-xs font-semibold tracking-wider text-slate-700 dark:text-indigo-200"
        >
          Promotion
        </h1>

        <div
          class="flex items-center justify-between gap-3 pt-2"
        >
          <input
            type="text"
            placeholder="Enter Promo code"
            class="flex-1 px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors"
          />
          <button
            type="button"
            class="px-5 py-2 text-sm font-medium bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
