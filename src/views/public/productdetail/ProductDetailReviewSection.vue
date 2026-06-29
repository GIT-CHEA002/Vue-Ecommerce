<script setup>
import InfoText from '@/components/shared/InfoText.vue';
import RatingStar from '@/components/shared/RatingStar.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';

</script>
<template>
  <section class="py-6">
    <div
      class="flex justify-between"
    >
      <SectionHeader
        title="Customer Service"
      />
      <button
        class="capitalize text-xs rounded-full border border-indigo-700 py-1 px-6 text-indigo-700 hover:text-indigo-50 hover:bg-indigo-700 transition-transform duration-300 hover:border-indigo-50"
      >
        write a review
      </button>
    </div>
    <div
      class="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
    >
      <!-- reviewer -->
      <div
      v-for="i in 2"
      :key="i"
        class="p-6 bg-white/90 dark:bg-slate-900 shadow-md rounded-md space-y-3"
      >
        <RatingStar />
        <InfoText
          default-text="text-xs"
          text="The craftsmanship is unparalleled. It's the perfect balance of weight and elegance. Truly a staple in my daily wardrobe."
        />
        <div
          class="flex gap-3"
        >
          <div
            class="h-10 w-10 rounded-full overflow-hidden"
          >
            <img
              src="https://picsum.photos/id/211/400/400"
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
              Marcus Throne
            </h1>
            <h1
              class="text-xs text-slate-700 dark:text-indigo-50 opacity-75"
            >
              Verify Buyer
            </h1>
          </div>
        </div>
      </div>
      <!-- rating star -->
      <div
        class="p-6 flex flex-col justify-center items-center bg-blue50/90 dark:bg-slate-900 shadow-md rounded-md space-y-3"
      >
        <span
          class="text-4xl font-semibold"
          >4.8</span
        >
        <RatingStar />
        <span
          class="text-xs sm:text-sm md:text-base"
          >Base on 124
          Reviews</span
        >
      </div>
    </div>
  </section>
</template>
