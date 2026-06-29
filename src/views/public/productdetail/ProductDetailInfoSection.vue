<script setup>
import Bage from '@/components/shared/Bage.vue';
import QuaternaryButton from '@/components/shared/button/QuaternaryButton.vue';
import TertiaryButton from '@/components/shared/button/TertiaryButton.vue';
import OverLine from '@/components/shared/OverLine.vue';
import PrimaryTitle from '@/components/shared/PrimaryTitle.vue';
import RatingStar from '@/components/shared/RatingStar.vue';
import {
  CheckBadgeIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/vue/16/solid';
import ProductDetailInfoSectionImage from './ProductDetailInfoSectionImage.vue';
import ProductDetailInfoSectionText from './ProductDetailInfoSectionText.vue';

const props = defineProps({
  prodcutImages: {
    type: Array,
  },
  activeImage: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});
const emit = defineEmits([
  'update:quantity',
  'update:activeImage',
]);
</script>
<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 gap-8 py-5 border-b-2"
  >
    <!-- image sections through as emit event to child and get back to parent node -->

    <ProductDetailInfoSectionImage
      :prodcut-images="
        prodcutImages
      "
      :active-image="
        activeImage
      "
      @update:active-image="
        emit(
          'update:activeImage',
          $event,
        )
      "
    />
    <!-- text -->
    <ProductDetailInfoSectionText
      :quantity="quantity"
      @update:quantity="
        emit(
          'update:quantity',
          $event,
        )
      "
    />
  </section>
</template>
