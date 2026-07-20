<script setup>
import { HeartIcon } from '@heroicons/vue/24/solid';
import { ShoppingCartIcon } from '@heroicons/vue/16/solid';
</script>

<template>
  <section
    class="bg-white dark:bg-[#0b0f19] p-12 h-fit w-full rounded-lg shadow-sm"
  >
    <h1
      class="text-xl font-medium tracking-wide capitalize text-slate-900 dark:text-white"
    >
      My WishList
    </h1>
    <div
      class="block sm:flex items-center justify-between mt-1"
    >
      <p
        class="flex-1 text-xs tracking-wide opacity-75 text-wrap text-slate-500 dark:text-slate-400"
      >
        A curated collection
        of your most desired.
        Ready to make them
        yours?
      </p>
      <button
        class="text-xs flex justify-center items-center gap-1 bg-indigo-50 dark:bg-indigo-950/40 p-2 rounded-md font-medium text-indigo-700 dark:text-indigo-400 mt-3 sm:mt-0"
      >
        <HeartIcon
          class="w-3 h-3"
        />
        4 items
      </button>
    </div>

    <!-- Cleaned up scroll container behavior -->
    <div
      class="py-4 flex overflow-x-scroll [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6"
    >
      <!-- Item Card 1 -->
      <div
        class="relative min-w-[280px] sm:min-w-0 group z-40 block border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-[#111827] rounded-xl p-2.5 pb-4 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div
          class="rounded-lg overflow-hidden h-[200px] w-full bg-slate-100 dark:bg-slate-800"
        >
          <img
            src="https://picsum.photos/id/237/600/400"
            alt=""
            class="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <div
          class="flex justify-between items-center space-x-3 mt-1"
        >
          <h1
            class="flex-1 text-sm font-semibold py-2 text-slate-800 dark:text-slate-200"
          >
            Precision Runner
            X1
          </h1>
          <span
            class="text-sm font-bold text-slate-900 dark:text-white"
          >
            $180
          </span>
        </div>
        <!-- category -->
        <h1
          class="text-xs tracking-wide text-slate-400 dark:text-slate-500 font-medium"
        >
          Activewear /
          Performance
        </h1>
        <button
          class="rounded-lg mt-4 gap-1.5 w-full flex justify-center items-center p-2.5 bg-[#3538cd] hover:bg-[#2b24ca] dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <ShoppingCartIcon
            class="w-4 h-4 text-indigo-50"
          />
          <span
            class="capitalize text-xs font-semibold text-indigo-50"
            >Add To cart</span
          >
        </button>
        <div
          class="absolute z-30 top-5 right-5 bg-black/20 backdrop-blur-xs p-1.5 rounded-full hover:bg-black/40 transition-colors"
        >
          <HeartIcon
            class="w-4 h-4 text-white cursor-pointer transition-transform group-hover:scale-110"
          />
        </div>
      </div>

      <!-- Item Card 2 -->
      <div
        class="relative min-w-[280px] sm:min-w-0 group z-40 block border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-[#111827] rounded-xl p-2.5 pb-4 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div
          class="rounded-lg overflow-hidden h-[200px] w-full bg-slate-100 dark:bg-slate-800"
        >
          <img
            src="https://picsum.photos/id/237/600/400"
            alt=""
            class="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <div
          class="flex justify-between items-center space-x-3 mt-1"
        >
          <h1
            class="flex-1 text-sm font-semibold py-2 text-slate-800 dark:text-slate-200"
          >
            Precision Runner
            X1
          </h1>
          <span
            class="text-sm font-bold text-slate-900 dark:text-white"
          >
            $180
          </span>
        </div>
        <!-- category -->
        <h1
          class="text-xs tracking-wide text-slate-400 dark:text-slate-500 font-medium"
        >
          Activewear /
          Performance
        </h1>
        <button
          class="rounded-lg mt-4 gap-1.5 w-full flex justify-center items-center p-2.5 bg-[#3538cd] hover:bg-[#2b24ca] dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <ShoppingCartIcon
            class="w-4 h-4 text-indigo-50"
          />
          <span
            class="capitalize text-xs font-semibold text-indigo-50"
            >Add To cart</span
          >
        </button>
        <div
          class="absolute z-30 top-5 right-5 bg-black/20 backdrop-blur-xs p-1.5 rounded-full hover:bg-black/40 transition-colors"
        >
          <HeartIcon
            class="w-4 h-4 text-white cursor-pointer transition-transform group-hover:scale-110"
          />
        </div>
      </div>

      <!-- Item Card 3 -->
      <div
        class="relative min-w-[280px] sm:min-w-0 group z-40 block border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-[#111827] rounded-xl p-2.5 pb-4 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div
          class="rounded-lg overflow-hidden h-[200px] w-full bg-slate-100 dark:bg-slate-800"
        >
          <img
            src="https://picsum.photos/id/237/600/400"
            alt=""
            class="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <div
          class="flex justify-between items-center space-x-3 mt-1"
        >
          <h1
            class="flex-1 text-sm font-semibold py-2 text-slate-800 dark:text-slate-200"
          >
            Precision Runner
            X1
          </h1>
          <span
            class="text-sm font-bold text-slate-900 dark:text-white"
          >
            $180
          </span>
        </div>
        <!-- category -->
        <h1
          class="text-xs tracking-wide text-slate-400 dark:text-slate-500 font-medium"
        >
          Activewear /
          Performance
        </h1>
        <button
          class="rounded-lg mt-4 gap-1.5 w-full flex justify-center items-center p-2.5 bg-[#3538cd] hover:bg-[#2b24ca] dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <ShoppingCartIcon
            class="w-4 h-4 text-indigo-50"
          />
          <span
            class="capitalize text-xs font-semibold text-indigo-50"
            >Add To cart</span
          >
        </button>
        <div
          class="absolute z-30 top-5 right-5 bg-black/20 backdrop-blur-xs p-1.5 rounded-full hover:bg-black/40 transition-colors"
        >
          <HeartIcon
            class="w-4 h-4 text-white cursor-pointer transition-transform group-hover:scale-110"
          />
        </div>
      </div>

      <!-- Item Card 4 -->
      <div
        class="relative min-w-[280px] sm:min-w-0 group z-40 block border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-[#111827] rounded-xl p-2.5 pb-4 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div
          class="rounded-lg overflow-hidden h-[200px] w-full bg-slate-100 dark:bg-slate-800"
        >
          <img
            src="https://picsum.photos/id/237/600/400"
            alt=""
            class="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <div
          class="flex justify-between items-center space-x-3 mt-1"
        >
          <h1
            class="flex-1 text-sm font-semibold py-2 text-slate-800 dark:text-slate-200"
          >
            Precision Runner
            X1
          </h1>
          <span
            class="text-sm font-bold text-slate-900 dark:text-white"
          >
            $180
          </span>
        </div>
        <!-- category -->
        <h1
          class="text-xs tracking-wide text-slate-400 dark:text-slate-500 font-medium"
        >
          Activewear /
          Performance
        </h1>
        <button
          class="rounded-lg mt-4 gap-1.5 w-full flex justify-center items-center p-2.5 bg-[#3538cd] hover:bg-[#2b24ca] dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <ShoppingCartIcon
            class="w-4 h-4 text-indigo-50"
          />
          <span
            class="capitalize text-xs font-semibold text-indigo-50"
            >Add To cart</span
          >
        </button>
        <div
          class="absolute z-30 top-5 right-5 bg-black/20 backdrop-blur-xs p-1.5 rounded-full hover:bg-black/40 transition-colors"
        >
          <HeartIcon
            class="w-4 h-4 text-white cursor-pointer transition-transform group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  </section>
</template>
