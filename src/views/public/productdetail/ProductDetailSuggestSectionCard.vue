<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits([
  ['reset:quantity'],
]);
</script>
<template>
  <RouterLink
    :to="`/product/${product.id}`"
    @click="
      emit('reset:quantity')
    "
  >
    <div
      class="flex flex-col cursor-pointer dark:bg-slate-900 rounded border border-indigo-700 dark:border-indigo-50"
    >
      <div
        class="h-[260px] overflow-hidden"
      >
        <img
          :src="
            product?.thumbnail
          "
          alt=""
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div
        class="flex-1 px-2 py-6"
      >
        <h1
          class="font-semibold line-clamp-1"
        >
          {{ product?.title }}
        </h1>
        <span
          class="text-xs text-slate-700 dark:text-indigo-50"
          >${{
            product?.price
          }}</span
        >
      </div>
    </div>
  </RouterLink>
</template>
