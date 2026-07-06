<script setup>
import EyebrowText from '@/components/shared/EyebrowText.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import FeaturedCategoryCard from './FeaturedCategoryCard.vue';
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-8 h-fit"
  >
    <SectionHeader
      title="Featured in Furniture"
    />
    <EyebrowText />
    <div
      class="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-auto"
    >
      <FeaturedCategoryCard
        v-for="i in 4"
        :key="i"
      />
    </div>
  </section>
</template>
