<script setup>
import IntroText from '@/components/shared/IntroText.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2"
    >
      <div class="space-y-3">
        <SectionHeader
          title="Collections"
        />
        <IntroText
          text="The entire application is structured to be compatible with Vue.js and the DummyJSON API, featuring responsive layouts and a consistent component library. Every screen is now live on your canvas for review."
          default-text-color=""
        />
      </div>
      <div
        class="flex justify-start md:justify-end items-center md:py-0 py-5"
      >
        <span
          class="text-sm mx-1"
          >Sort By :</span
        >
        <select
          class="px-2 mx-1 bg-indigo-700 text-white dark:text-indigo-50 rounded-md py-1 outline-none"
        >
          <option
            value="newest"
            selected
          >
            Newest
          </option>
          <option
            value="popular"
          >
            Popular
          </option>
          <option
            value="trending"
          >
            Trending
          </option>
        </select>
      </div>
    </div>
  </section>
</template>
