<script setup>
import Bage from '@/components/shared/Bage.vue';
import QuaternaryButton from '@/components/shared/button/QuaternaryButton.vue';
import TertiaryButton from '@/components/shared/button/TertiaryButton.vue';
import InfoText from '@/components/shared/InfoText.vue';
import OverLine from '@/components/shared/OverLine.vue';
import PrimaryTitle from '@/components/shared/PrimaryTitle.vue';
import RatingStar from '@/components/shared/RatingStar.vue';
import { useCartStore } from '@/stores/cartStore';
import { useToast } from 'vue-toastification';
import {
  MinusIcon,
  PlusIcon,
} from '@heroicons/vue/16/solid';
import {
  CheckBadgeIcon,
  ClockIcon,
} from '@heroicons/vue/24/outline';
const props = defineProps({
  quantity: {
    type: Number,
  },
  product: {
    type: Object,
  },
});
const emit = defineEmits([
  'update:quantity',
]);
const toast = useToast();
const { addToCartByUserId } =
  useCartStore();
const addToCart = async (
  userId,
  product,
) => {
  try {
    const repsonse =
      await addToCartByUserId(
        userId,
        product,
      );
    if (
      (repsonse &&
        repsonse.status ===
          200) ||
      repsonse.status ==
        201 ||
      repsonse.id
    ) {
      toast.success(
        'Add cart success with product id ',
      );
    } else {
      toast.error(
        'Add to cart fails with product id = ',
      );
    }
  } catch (error) {
    console.log(
      'Error adding to cart:',
      error,
    );
    toast.error(
      'Add error occur while adding to cart',
    );
  }
};
</script>
<template>
  <div class="block">
    <div
      class="flex justify-between items-center"
    >
      <OverLine
        title="limited edition"
      />
      <Bage
        :title="
          props.product
            ?.availabilityStatus
        "
        :default-text-color="
          props.product
            ?.availabilityStatus ===
          'Low Stock'
            ? 'text-amber-700'
            : 'text-green-700'
        "
        :default-bg-color="
          props.product
            ?.availabilityStatus ===
          'Low Stock'
            ? 'bg-amber-600'
            : 'bg-green-600'
        "
        :default-wrapper-color="
          props.product
            ?.availabilityStatus ===
          'Low Stock'
            ? 'bg-amber-100'
            : 'bg-green-100'
        "
      />
    </div>
    <div class="block">
      <PrimaryTitle
        :title="
          props.product?.title
        "
      />
      <h1
        class="text-base md:text-lg lg:text-2xl font-bold"
      >
        ${{
          props.product?.price
        }}
      </h1>
      <span
        class="inline-block py-3"
      >
        <RatingStar
          :rating="
            props.product?.rating?.toString() ??
            '0'
          "
          :rating-count="
            String(
              props.product
                ?.reviews
                ?.length ?? 0,
            )
          "
        />
      </span>
    </div>
    <InfoText
      :text="
        props.product
          ?.description
      "
    />
    <!-- add to card -->
    <div
      class="space-y-5 py-6 border-b-2"
    >
      <div
        class="flex justify-between items-center gap-5 rounded-lg"
      >
        <div
          class="flex-1 flex items-center justify-between px-6 py-3 border border-slate-200 rounded-xl"
        >
          <button
            type="button"
            @click="
              emit(
                'update:quantity',
                props.quantity -
                  1,
              )
            "
            :disabled="
              props.quantity <=
              1
            "
            class="text-slate-700"
          >
            <MinusIcon
              class="h-5 w-5 text-slate-700 dark:text-indigo-50"
            />
          </button>

          <span
            class="text-base font-semibold text-slate-700 dark:text-indigo-50"
            >{{
              quantity
            }}</span
          >

          <button
            type="button"
            @click="
              emit(
                'update:quantity',
                props.quantity +
                  1,
              )
            "
            :disabled="
              props.quantity >=
              10
            "
            class="text-slaate-700 hover:text-slate-700 dark:text-indigo-50 transition-colors"
          >
            <PlusIcon
              class="h-5 w-5 text-slate-700 dark:text-indigo-50"
            />
          </button>
        </div>
        <TertiaryButton
          class="flex-1"
        >
          <span @click="">
            add to cart</span
          >
        </TertiaryButton>
      </div>
      <QuaternaryButton>
        free express delivery
      </QuaternaryButton>
    </div>
    <div class="flex py-6">
      <div
        class="text-slate-700 dark:text-indigo-50 flex-1 flex items-start justify-start space-x-3"
      >
        <CheckBadgeIcon
          class="w-5 h-5"
        />
        <div class="block">
          <h1
            class="capitalize text-sm font-medium tracking-wider"
          >
            {{
              props.product
                ?.warrantyInformation
            }}
          </h1>
          <h1 class="text-xs">
            Global converage
          </h1>
        </div>
      </div>
      <div
        class="text-slate-700 dark:text-indigo-50 flex-1 flex items-start justify-start space-x-3"
      >
        <ClockIcon
          class="w-5 h-5"
        />
        <div class="block">
          <h1
            class="capitalize text-sm font-medium tracking-wider"
          >
            {{
              props.product
                ?.returnPolicy
            }}
          </h1>
          <h1 class="text-xs">
            No question asks
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
