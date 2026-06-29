<script setup>
import QuaternaryButton from '@/components/shared/button/QuaternaryButton.vue';
import TertiaryButton from '@/components/shared/button/TertiaryButton.vue';
import InfoText from '@/components/shared/InfoText.vue';
import PrimaryTitle from '@/components/shared/PrimaryTitle.vue';
import RatingStar from '@/components/shared/RatingStar.vue';
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
});
const emit = defineEmits([
  'update:quantity',
]);
</script>
<template>
  <div class="block">
    <div
      class="flex justify-between items-center"
    >
      <OverLine
        title="limited edition"
      />
      <Bage />
    </div>
    <div class="block">
      <PrimaryTitle
        title="The Architecture's Chronograph"
      />
      <h1
        class="text-base md:text-lg lg:text-2xl font-bold"
      >
        $1,249.00
      </h1>
      <span
        class="inline-block py-3"
      >
        <RatingStar
          rating="4.8"
          rating-count="128"
        />
      </span>
    </div>
    <InfoText
      text="Designed for precision and styled for the modern professional. Featuring a hand-polished stainless steel case, a sapphire crystal lens, and a bespoke Italian indigo leather strap. A masterpiece of horology that bridges the gap between classic craftsmanship and contemporary minimalist design."
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
          add to cart
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
            2 Year warranty
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
            30 day returns
          </h1>
          <h1 class="text-xs">
            No question asks
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
