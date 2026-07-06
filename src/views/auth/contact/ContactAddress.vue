<script setup>
import {
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  MapPinIcon,
} from '@heroicons/vue/24/solid';
const contactInfo = [
  {
    title:
      'Global Headquarters',
    description:
      '742 Fifth Avenue, Suite 1200\nNew York, NY 10019\nUnited States',
    icon: MapPinIcon,
  },
  {
    title: 'Direct Inquiries',
    description:
      'concierge@luxecommerce.com\nsupport@luxecommerce.com',
    icon: EnvelopeIcon,
  },
  {
    title: 'Resources',
    description:
      'Visit Help Center\nShipping & Returns FAQ',
    icon: QuestionMarkCircleIcon,
  },
];
</script>
<template>
  <div
    class="md:px-12 pt-8 md:pt-0 space-y-12"
  >
    <div
      v-for="(
        info, index
      ) in contactInfo"
      :key="index"
      class="text-slate-700 dark:text-indigo-50 flex-1 flex items-start justify-start space-x-2"
    >
      <span
        class="p-2 bg-indigo-100 dark:bg-indigo-200/90 rounded-md"
      >
        <component
          :is="info.icon"
          class="w-5 h-5 text-indigo-700"
        />
      </span>

      <div class="block">
        <h2
          class="capitalize text-sm font-bold tracking-wider"
        >
          {{ info.title }}
        </h2>
        <p
          class="text-xs whitespace-pre-wrap mt-0.5"
        >
          {{
            info.description
          }}
        </p>
      </div>
    </div>

    <div
      class="w-full h-[220px] border border-indigo-700 rounded-md overflow-hidden"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7652231711286!2d104.88816677429801!3d11.568681244082642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1782759081552!5m2!1sen!2skh"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        class="w-full h-full"
      ></iframe>
    </div>
  </div>
</template>
