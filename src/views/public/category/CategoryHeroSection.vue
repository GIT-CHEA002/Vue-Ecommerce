<script setup>
import HeroText from '@/components/shared/HeroText.vue';
import IntroText from '@/components/shared/IntroText.vue';
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-8"
  >
    <div
      class="text-center py-8 px-0 sm:px-4 md:px-12 lg:px-48"
    >
      <HeroText
        text="Curated Collections."
        default-text="text-xl md:text-4xl lg:text-5xl capitalize"
      />
      <IntroText
      default-text-color="text-slate-700 dark:text-indigo-50"
        class="whitespace-pre-wrap"
        text="Explore our meticulously crafted categories, where sophisticated minimalism meets functional excellence."
      />
    </div>
  </section>
</template>
