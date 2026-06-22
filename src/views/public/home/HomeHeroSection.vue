<script setup>
import homeheroimage from '@/assets/image/homeimage/homehero.png';
import PrimaryButton from '@/components/shared/button/PrimaryButton.vue';
import SecondaryButton from '@/components/shared/button/SecondaryButton.vue';
import EyebrowText from '@/components/shared/EyebrowText.vue';
import HeroText from '@/components/shared/HeroText.vue';
import IntroText from '@/components/shared/IntroText.vue';
</script>
<template>
  <!--  class="max-w-7xl px-4 sm:px-8 md:px-12 py-4 md:py-6 h-screen" -->
  <section
    class="relative max-w-7xl h-[90vh]"
  >
    <div
      class="w-full h-full"
    >
      <img
        :src="homeheroimage"
        alt="home hero image sections"
        class="w-full h-full object-cover bg-[1.1]"
      />
      <div
        class="flex items-center w-full h-full top-0 absolute left-0 px-4 sm:px-8 md:px-12 py-4 md:py-6"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-2"
        >
          <div class="block">
            <EyebrowText />
            <HeroText
              text="Refined Living
                Redefined."
              hightlight-text="Redefined."
              default-text-color="text-indigo-50"
            />
            <IntroText
              default-text-color="opcacity-100 text-white"
              text="Experience the intersection of technical precision and timeless comfort. Our curated collection brings quiet luxury to your most intimate spaces."
            />
            <div
              class="flex space-x-8 mt-4"
            >
              <PrimaryButton />
              <SecondaryButton
                title="explore collection"
                class="bg-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
