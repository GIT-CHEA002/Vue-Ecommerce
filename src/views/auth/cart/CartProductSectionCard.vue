<script setup>
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/vue/16/solid';
import { ref } from 'vue';
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});
const productQuantity = ref(
  props.product?.quantity ||
    0,
);
</script>
<template>
  <div
    class="block md:flex items-center border px-0.5 py-1 border-indigo-700 bg-indigo-50 dark:bg-slate-900 rounded-md"
  >
    <div
      class="flex flex-1 items-center w-fit justify-start space-x-4"
    >
      <div
        class="w-[100px] h-[120px] rounded-md overflow-hidden"
      >
        <img
          :src="
            product.thumbnail
          "
          alt=""
          class="w-full h-full object-cover"
        />
      </div>

      <div
        class="block space-y-1"
      >
        <h1
          class="font-semibold tracking-wide"
        >
          {{ product.title }}
        </h1>
        <!-- <h1
          class="text-sm text-slate-700 dark:text-indigo-50"
        >
          {{ product.color }}
          / size
          {{ product.size }}
        </h1> -->
        <button
          class="text-[0.7rem] text-red-500 flex justify-center items-center gap-0.5 hover:underline transition-transform duration-300"
        >
          <TrashIcon
            class="w-3 h-3"
          />
          <span>Remove</span>
        </button>
      </div>
    </div>
    <div
      class="flex items-center justify-between flex-1 pt-2 md:pt-0"
    >
      <div
        class="md:ps-6 w-fit"
      >
        <div
          class="bg-white flex items-center gap-5 p-1 rounded text-slate-700"
        >
          <button
            @click="() => {}"
            class="px-1"
          >
            <MinusIcon
              class="w-4 h-4"
            />
          </button>
          <span
            class="text-xs sm:text-sm md:text-base font-medium"
            >{{
              productQuantity
            }}</span
          >
          <button
            @click="() => {}"
            class="px-1"
          >
            <PlusIcon
              class="w-4 h-4"
            />
          </button>
        </div>
      </div>
      <div
        class="flex-1 flex justify-end space-x-8 items-center pe-6"
      >
        <div
          class="text-slate-700 dark:text-indigo-50 text-xs sm:text-sm md:text-base space-y-2"
        >
          <h1>Price</h1>
          <h1>
            ${{
              product.price
            }}
          </h1>
        </div>
        <div
          class="text-slate-700 dark:text-indigo-50 text-xs sm:text-sm md:text-base space-y-2"
        >
          <h1>Total</h1>
          <h1>
            ${{
              product.total
            }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
