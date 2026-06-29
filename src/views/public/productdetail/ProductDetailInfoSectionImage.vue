<script setup>
defineProps({
  prodcutImages: {
    type: Array,
  },
  activeImage: {
    type: String,
  },
});
const emit = defineEmits([
  'update:activeImage',
]);
</script>
<template>
  <div
    class="flex flex-col-reverse md:flex-row justify-center md:space-x-6"
  >
    <div
      class="flex justify-start space-x-6 md:space-x-0 md:block md:space-y-4 pt-5 md:pt-0"
    >
      <img
        v-for="(
          img, index
        ) in prodcutImages"
        :src="img"
        :alt="`Thumbnail ${index}`"
        @click="
          emit(
            'update:activeImage',
            img,
          )
        "
        :class="[
          'w-16 h-16 border rounded cursor-pointer shadow-sm transition-transform duration-300 hover:scale-105',
          activeImage === img
            ? 'border-indigo-700 dark:border-indigo-50 shadow-indigo-700 dark:shadow-indigo-50'
            : 'border-transparent',
        ]"
      />
    </div>
    <div
      class="flex-1 min-h-[420px] md:pe-12"
    >
      <div
        class="overflow-hidden border border-indigo-700 dark:border-indigo-50 rounded cursor-pointer shadow-sm shadow-indigo-700 dark:shadow-indigo-50"
      >
        <img
          :src="activeImage"
          :alt="`Preview Image`"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</template>
