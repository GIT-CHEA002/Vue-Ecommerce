<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: false,
  },
});
// add to cart process
onMounted(() => {});
</script>
<template>
  <div
    class="flex-none w-60 md:w-auto p-2 border border-indigo-700 rounded-t overflow-hidden flex flex-col"
  >
    <div
      class="h-[190px] rounded overflow-hidden"
    >
      <img
        :src="
          product.images[0]
        "
        alt=""
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-2 flex-1">
      <!-- name -->
      <h1
        class="text-sm line-clamp-1 font-semibold text-slate-700 dark:text-indigo-50"
      >
        {{ product.title }}
      </h1>
      <h1
        class="capitalize flex gap-2 text-xs text-opacity-75 text-slate-700 dark:text-indigo-50"
      >
        <!-- slug -->
        <span
          >{{
            product.tags[0]
          }},</span
        >
        <span
          class="font-semibold"
          >{{
            product.tags[1]
          }}</span
        >
      </h1>
      <!-- price -->
      <h1
        class="text-indigo-700 brightness-150 font-medium"
      >
        ${{ product.price }}
      </h1>
      <div
        class="flex justify-between items-center mt-3 gap-4"
      >
        <button
          type="button"
          class="flex-1 text-[8px] sm:text-xs uppercase font-medium tracking-wider bg-indigo-100 text-indigo-700/90 hover:bg-indigo-200 py-2 px-1 rounded-lg transition-colors"
        >
          Add to Cart
        </button>
        <RouterLink
          :to="`/product/${product.id}`"
          class="flex-1 text-center text-[8px] sm:text-xs uppercase font-medium tracking-wider bg-indigo-100 text-indigo-700/90 hover:bg-indigo-200 py-2 px-1 rounded-lg transition-colors"
        >
          Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>
