<script setup>
import {
  CameraIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/vue/16/solid';
</script>
<template>
  <footer
    class="max-w-7xl px-4 sm:px-8 md:px-12 py-6 md:py-8 bg-white dark:bg-slate-900"
  >
    <div
      class="grid text-start md:text-center lg:text-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <div class="block">
        <RouterLink
          to="/"
          class="w-fit capitalize tracking-widest text-indigo-700 dark:text-indigo-500 md:text-base lg:text-lg font-extrabold"
        >
          LuxeCommerce
        </RouterLink>
        <div
          class="pt-2 block"
        >
          <p
            class="text-sm py-0.5"
          >
            &copy; 2024
            LuxeCommerce.
          </p>
          <p
            class="text-sm py-0.5"
          >
            Sophisticated
            Minimalism defined
          </p>
        </div>
      </div>
      <div
        class="flex flex-col"
      >
        <h1 class="font-bold">
          The Shop
        </h1>
        <div
          class="space-y-3 flex flex-col mt-2"
        >
          <span
            class="text-sm font-medium text-slate-700/90 dark:text-indigo-50"
            >New Arrivals
          </span>
          <span
            class="text-sm font-medium text-slate-700/90 dark:text-indigo-50"
          >
            Best Sellers
          </span>
          <span
            class="text-sm font-medium text-slate-700/90 dark:text-indigo-50"
          >
            Collections
          </span>
        </div>
      </div>
      <div
        class="flex flex-col"
      >
        <h1 class="font-bold">
          Support
        </h1>
        <div
          class="space-y-3 flex flex-col mt-2"
        >
          <span
            class="text-sm font-medium text-slate-700/90 dark:text-indigo-50"
            >Contact Us
          </span>
          <span
            class="text-sm font-medium text-slate-700/90 dark:text-indigo-50"
          >
            Privacy Policy
          </span>
          <span
            class="text-sm font-medium text-slate-700/90 dark:text-indigo-50"
          >
            FAQs
          </span>
        </div>
      </div>
      <div
        class="flex flex-col"
      >
        <h1 class="font-bold">
          Contact
        </h1>
        <div
          class="space-x-5 flex mt-2 justify-start md:justify-center lg:justify-start"
        >
          <span
            class="p-1.5 border w-fit rounded-full cursor-pointer"
          >
            <GlobeAltIcon
              class="w-4 h-4 text-slate-700/90 dark:text-indigo-50"
            />
          </span>
          <span
            class="p-1.5 border w-fit rounded-full cursor-pointer"
          >
            <CameraIcon
              class="w-4 h-4 text-slate-700/90 dark:text-indigo-50"
            />
          </span>
          <span
            class="p-1.5 border w-fit rounded-full cursor-pointer"
          >
            <EnvelopeIcon
              class="w-4 h-4 text-slate-700/90 dark:text-indigo-50"
            />
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
