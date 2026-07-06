<script setup>
import HeroText from '@/components/shared/HeroText.vue';
import IntroText from '@/components/shared/IntroText.vue';
import ContactForm from './ContactForm.vue';
import ContactAddress from './ContactAddress.vue';


</script>

<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 h-fit border-b-2"
  >
    <div
      class="text-center sm:px-32 md:px-72 py-8"
    >
      <HeroText
        text="get in touch."
        hightlight-text="touch."
      />
      <IntroText
        text="Whether you have a question about our collections or need assistance with an order, our dedicated team is here to provide a sophisticated support experience."
        default-text-color="text-slate-700 dark:text-indigo-50"
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-3"
    >
      <ContactForm />
      <ContactAddress />
    </div>
  </div>
</template>
