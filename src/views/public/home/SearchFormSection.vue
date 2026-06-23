<script setup>
import IntroText from '@/components/shared/IntroText.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12"
  >
    <div
      class="bg-slate-900 text-white rounded-2xl p-12 flex flex-col md:flex-row justify-between items-center gap-6"
    >
      <div class="max-w-md">
        <SectionHeader
          title="Join the Journal"
        />
        <IntroText
          text="Receive early access
          to collections,
          design insights, and
          exclusive
          invitations to our
          studio events."
        />
      </div>
      <div
        class="flex gap-4 w-full md:w-auto"
      >
        <input
          type="email"
          placeholder="Email address"
          class="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full md:w-64"
        />
        <button
          class="bg-white dark:bg-indigo-600 text-slate-900 dark:text-white font-medium px-6 py-3 rounded-lg"
        >
          Subscribe
        </button>
      </div>
    </div>
  </section>
</template>
