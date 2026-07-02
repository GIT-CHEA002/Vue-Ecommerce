<script setup>
import QuaternaryButton from '@/components/shared/button/QuaternaryButton.vue';
import TertiaryButton from '@/components/shared/button/TertiaryButton.vue';
import InfoText from '@/components/shared/InfoText.vue';
import IntroText from '@/components/shared/IntroText.vue';
import {
  onMounted,
  ref,
} from 'vue';
import CategoryIntroSectionCard from './CategoryIntroSectionCard.vue';

const items = ref([
  {
    id: 1,
    title: 'Furniture',
    description:
      'Sculptural silhouettes and sustainable materials designed for modern living sanctuaries.',
    buttonText:
      'Explore Collection', // <-- Present
    image:
      'https://picsum.photos/id/1062/1200/800',
  },
  {
    id: 2,
    title: 'Electronics',
    description:
      'High-utility tools refined for peak performance and aesthetic clarity.',
    buttonText: 'Shop Tech', // <-- Present
    image:
      'https://picsum.photos/id/26/1200/800',
  },
  {
    id: 3,
    title: 'Apparel',
    description:
      "Timeless silhouettes tailored from the world's finest natural fibers.",
    buttonText: 'Apparel', // <-- ADD THIS
    image:
      'https://picsum.photos/id/824/1200/800',
  },
  {
    id: 4,
    title: 'Lifestyle',
    description:
      'The essential artifacts that define your daily rituals.',
    buttonText: 'Lifestyle', // <-- ADD THIS
    image:
      'https://picsum.photos/id/23/1200/800',
  },
  {
    id: 5,
    title: 'Lifestyle',
    description:
      'The essential artifacts that define your daily rituals.',
    buttonText: 'Lifestyle', // <-- ADD THIS
    image:
      'https://picsum.photos/id/23/1200/800',
  },
]);
onMounted(() => {
  let i = 0;
  const updatedItems = [
    ...items.value,
  ];

  while (
    i < updatedItems.length
  ) {
    const remainingItems =
      updatedItems.length - i;

    // Decide a row layout group of 2 or 3 items randomly
    const choice =
      remainingItems === 2
        ? 2
        : Math.random() > 0.5
          ? 3
          : 2;

    if (
      choice === 3 &&
      remainingItems >= 3
    ) {
      // --- GROUP OF 3 ITEMS ---
      // lg: Takes 2 cols out of 6 (3 items per row)
      // md: Takes 2 cols out of 4 (2 items per row, last item wraps to next row)
      // sm: Takes 1 col out of 2 (Stacked single or pairs)
      const layoutClasses =
        'sm:col-span-1 md:col-span-2 lg:col-span-2';

      updatedItems[
        i
      ].gridClass =
        layoutClasses;
      updatedItems[
        i + 1
      ].gridClass =
        layoutClasses;
      updatedItems[
        i + 2
      ].gridClass =
        layoutClasses;
      i += 3;
    } else {
      // --- GROUP OF 2 ITEMS ---
      // lg: Takes 3 cols out of 6 (2 items per row)
      // md: Takes 2 cols out of 4 (2 items per row)
      // sm: Takes 1 col out of 2 (2 items per row)
      const layoutClasses =
        'sm:col-span-1 md:col-span-2 lg:col-span-3';

      updatedItems[
        i
      ].gridClass =
        layoutClasses;

      if (
        updatedItems[i + 1]
      ) {
        updatedItems[
          i + 1
        ].gridClass =
          layoutClasses;
      } else {
        // If 1 single item is left stranded at the very end:
        // Fill full width cleanly on sm (2/2) and md (4/4) so it doesn't look empty
        updatedItems[
          i
        ].gridClass =
          'sm:col-span-2 md:col-span-4 lg:col-span-3';
      }
      i += 2;
    }
  }

  items.value = updatedItems;
});
</script>

<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-8 min-h-screen"
  >
    <h1
      class="text-2xl font-bold mb-6"
    >
      Category Intro Sections
    </h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[400px] gap-6"
    >
      <CategoryIntroSectionCard
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
  </section>
</template>
