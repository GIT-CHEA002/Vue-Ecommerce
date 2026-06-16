<script setup>
import Navbar from '@/components/navbar/Navbar.vue';
import PrimaryButton from '@/components/shared/button/PrimaryButton.vue';
import SecondaryButton from '@/components/shared/button/SecondaryButton.vue';
import HeroText from '@/components/shared/HeroText.vue';
import IntroText from '@/components/shared/IntroText.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid';
</script>

<template>
  <Navbar />
  <div
    class="px-4 sm:px-8 md:px-12 py-8 md:py-12 lg:py-24 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center"
  >
    <div
      class="flex flex-col justify-center space-y-4 w-full"
    >
      <h1
        class="bg-indigo-50 dark:bg-white/10 w-fit text-indigo-700 dark:text-indigo-500 font-semibold rounded-full py-0.5 px-3 cursor-pointer text-sm tracking-wide"
      >
        404 Error
      </h1>
      <HeroText />
      <IntroText />
      <div
        class="flex space-x-6 py-8 border-b-2"
      >
        <PrimaryButton
          target="/"
          title="Back to Home"
        />
        <SecondaryButton
          target="/products"
          title="Explore Collections"
        />
      </div>
      <div class="mt-3">
        <p
          class="uppercase text-sm py-3 opacity-75"
        >
          Or Search Our
          Catalogue
        </p>
        <!-- search collection sections -->
        <form
          action=""
          @submit.prevent="
            () => {}
          "
        >
          <div
            class="flex items-center px-3 border-[1.3px] border-black/40 dark:border-indigo-50 rounded group focus-within:border-indigo-700 dark:focus-within:border-indigo-500 transition-all duration-300"
          >
            <MagnifyingGlassIcon
              class="w-4 h-4"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for product"
              class="flex-1 py-2 focus:outline-none bg-transparent px-2 placeholder:text-xs text-sm"
            />
          </div>
          <div class="mt-2">
            <button
              type="submit"
              class="py-2 px-4 inline-block tracking-wide text-xs sm:text-sm md:text-base rounded border bg-indigo-700 shadow-sm shadow-indigo-700 dark:shadow-indigo-300 text-white dark:bg-indigo-500 hover:bg-transparent hover:text-indigo-700 hover:border-indigo-700 dark:hover:bg-transparent dark:hover:text-white/90 dark:hover:border-white transition-colors duration-300"
            >
              Go
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="flex items-center justify-center p-4 md:p-12 w-full"
    >
      <div
        class="bg-white/90 dark:bg-white/5 backdrop-blur-md p-12 md:p-16 lg:p-24 rounded-3xl shadow-xl shadow-indigo-100/50 dark:shadow-black/20 border border-indigo-700/30 dark:border-indigo-300/20 text-center w-full max-w-sm md:max-w-none animate-bounce transition-transform duration-500 hover:scale-105"
      >
        <span
          class="text-indigo-700 dark:text-indigo-500 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter block"
        >
          404
        </span>
        <span
          class="text-red-500 text-xs sm:text-sm"
          >page not
          found</span
        >
      </div>
    </div>
  </div>
</template>
