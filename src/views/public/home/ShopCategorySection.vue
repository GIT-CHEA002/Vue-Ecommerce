<script setup>
import OverLine from '@/components/shared/OverLine.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import { ArrowRightIcon } from '@heroicons/vue/16/solid';
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12"
  >
    <div class="">
      <OverLine
        title="Explore"
      />
      <div
        class="flex items-center justify-between"
      >
        <SectionHeader />
        <RouterLink
          to="/products"
          class="flex items-center text-xs text-indigo-700 dark:text-indigo-300 cursor-pointer"
          >View All
          <ArrowRightIcon
            class="w-3 h-3 ms-1"
          />
        </RouterLink>
      </div>
      <div
        class="grid grid-cols-1 mt-7 md:grid-cols-3 gap-12 auto-rows-[350px]"
      >
        <div
          class="relative bg-indigo-100 rounded overflow-hidden"
        >
          <img
            src="https://picsum.photos/1200/450"
            alt=""
            class="h-full w-full object-cover"
          />
          <div
            class="absolute bottom-3 p-2"
          >
            <h1
              class="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
            >
              Funiture
            </h1>
            <span
              class="text-xs text-white brightness-110"
              >Timeless
              Sillhouettes</span
            >
          </div>
        </div>
        <div
          class="relative bg-indigo-100 rounded overflow-hidden"
        >
          <img
            src="https://picsum.photos/1200/450"
            alt=""
            class="h-full w-full object-cover"
          />
          <div
            class="absolute bottom-3 p-2"
          >
            <h1
              class="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
            >
              Funiture
            </h1>
            <span
              class="text-xs text-white brightness-110"
              >Timeless
              Sillhouettes</span
            >
          </div>
        </div>
        <div
          class="relative bg-indigo-100 rounded overflow-hidden"
        >
          <img
            src="https://picsum.photos/1200/450"
            alt=""
            class="h-full w-full object-cover"
          />
          <div
            class="absolute bottom-3 p-2"
          >
            <h1
              class="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
            >
              Funiture
            </h1>
            <span
              class="text-xs text-white brightness-110"
              >Timeless
              Sillhouettes</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
