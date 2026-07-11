<script setup>
import InfoText from '@/components/shared/InfoText.vue';
import RatingStar from '@/components/shared/RatingStar.vue';

const props = defineProps({
  review: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <div
    class="p-6 hover:scale-105 transition-transform duration-300 bg-white/90 dark:bg-slate-900 shadow-md rounded-md space-y-3"
  >
    <div
      class="flex items-center justify-between"
    >
      <RatingStar />
      <span class="text-xs">
        {{
          props.review.rating
        }}
        Rating star</span
      >
    </div>
    <InfoText
      default-text="text-xs"
      :text="
        props.review.comment
      "
    />
    <div class="flex gap-3">
      <div
        class="h-10 w-10 rounded-full overflow-hidden"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1qmyAQWiULIEIIE2lRszNSKrbLUkVpYk2CVGVYfdfA&s=10"
          alt="preview comment"
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="inline-block tracking-wide"
      >
        <h1
          class="text-sm font-semibold"
        >
          {{
            props.review
              .reviewerName
          }}
        </h1>
        <h1
          class="text-xs text-slate-700 dark:text-indigo-50 opacity-75"
        >
          {{
            props.review
              .reviewerEmail
          }}
        </h1>
        <h1
          class="text-xs animate-pulse text-slate-700 dark:text-indigo-50 opacity-75"
        >
          Verify Buyer
        </h1>
      </div>
    </div>
  </div>
</template>
