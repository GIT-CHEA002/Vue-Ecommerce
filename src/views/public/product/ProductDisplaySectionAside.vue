<script setup>
import RatingStar from '@/components/shared/RatingStar.vue';
import {
  ChevronUpIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/vue/16/solid';
import {
  reactive,
  ref,
} from 'vue';
defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: false,
  },
  toggleSidebarOpen: {
    type: Function,
  },
});
const categories = reactive([
  {
    name: 'lifestyle',
    checked: false,
  },
  {
    name: 'accessories',
    checked: true,
  },
  {
    name: 'fashion',
    checked: false,
  },
]);
const priceRange = ref(100);
const isCategoryOpen =
  ref(true);
const toggleIsCategoryOpen =
  () => {
    isCategoryOpen.value =
      !isCategoryOpen.value;
  };
</script>
<template>
  <aside
    :class="[
      isSidebarOpen
        ? 'translate-x-0'
        : '-translate-x-full',
      'bg-white dark:bg-slate-950 border-r md:bg-transparent md:block md:w-[200px] lg:w-[300px] absolute left-0 ps-8 md:ps-0 md:sticky -top-[14rem] md:top-24 z-40 md:z-30 pe-6 h-screen transition-transform duration-300 md:translate-x-0',
    ]"
  >
    <div
      class="py-4 border-b"
    >
      <!-- collapse category -->
      <div
        class="flex justify-between items-center"
      >
        <span
          class="uppercase text-sm font-semibold tracking-wider text-slate-700 dark:text-indigo-50"
          >Category</span
        >
        <div
          class="space-x-3 flex"
        >
          <button
            type="button"
            @click="
              toggleIsCategoryOpen()
            "
            class="p-1"
          >
            <ChevronUpIcon
              v-if="
                isCategoryOpen
              "
              class="w-5 h-5"
            />
            <ChevronRightIcon
              v-else
              class="w-5 h-5"
            />
          </button>
          <button
            v-if="
              isSidebarOpen
            "
            type="button"
            @click="
              toggleSidebarOpen()
            "
            class="py-1 px-2 block md:hidden"
          >
            <XMarkIcon
              class="w-4 h-4"
            />
          </button>
        </div>
      </div>
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2 max-h-0"
        enter-to-class="opacity-100 translate-y-0 max-h-40"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0 max-h-40"
        leave-to-class="opacity-0 -translate-y-2 max-h-0"
      >
        <div
          v-if="
            isCategoryOpen
          "
          class="px-1 mt-3 space-y-2 overflow-hidden"
        >
          <div
            v-for="categorie in categories"
            :key="
              categorie.name
            "
            class="flex justify-start items-center gap-3 py-1"
          >
            <input
              type="checkbox"
              :name="
                categorie.name
              "
              :id="
                categorie.name
              "
              v-model="
                categorie.checked
              "
              :checked="
                categorie.checked
              "
              class="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label
              :for="
                categorie.name
              "
              class="capitalize text-sm text-slate-700 dark:text-indigo-50 cursor-pointer select-none"
            >
              {{
                categorie.name
              }}
            </label>
          </div>
        </div>
      </Transition>
    </div>

    <div
      class="py-6 border-b"
    >
      <div
        class="flex justify-between items-center py-3"
      >
        <span
          class="uppercase text-sm font-medium tracking-wider text-slate-700 dark:text-indigo-50"
          >Price range</span
        >
      </div>
      <div class="block">
        <input
          type="range"
          min="0"
          max="1000"
          v-model="priceRange"
          class="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-600 [&::-webkit-slider-thumb]:ring-4 [&::-webkit-slider-thumb]:transition-all [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-indigo-600 [&::-moz-range-thumb]:ring-4 [&::-moz-range-thumb]:transition-all"
        />
        <div
          class="text-sm flex items-center justify-between"
        >
          <span>$0</span>
          <span
            >${{
              priceRange
            }}</span
          >
          <span>$1000+</span>
        </div>
      </div>
    </div>
    <div
      class="py-6 border-b"
    >
      <h1
        class="py-3 uppercase text-sm font-medium tracking-wider text-slate-700 dark:text-indigo-50"
      >
        Rating
      </h1>
      <RatingStar
        default-color="text-amber-400"
        rating="4.5 Ratings"
      />
    </div>
    <div class="py-6">
      <button
        type="btn"
        @click="() => {}"
        class="px-2 py-1 text-sm uppercase tracking-wide border border-indigo-700 dark:border-indigo-50 text-indigo-700 dark:text-indigo-50 w-full rounded-md hover:bg-indigo-700 hover:text-indigo-50 hover:border-indigo-50 transition-colors duration-300"
      >
        Clear Filter
      </button>
    </div>
  </aside>
</template>
