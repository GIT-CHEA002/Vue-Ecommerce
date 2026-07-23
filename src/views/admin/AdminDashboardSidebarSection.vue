<script setup>
import {
  ArrowRightStartOnRectangleIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline';

const props = defineProps({
  navLinks: {
    type: Array,
    default: () => [],
  },
  activeLink: {
    type: String,
  },
});
const emit = defineEmits([
  'setActiveLink',
]);
</script>
<template>
  <aside
    class="hidden md:flex flex-col fixed top-0 left-0 bottom-0 z-30 w-64 py-4 md:py-6 px-4 border-r-2 border-indigo-700 dark:border-indigo-500 h-screen overflow-y-auto bg-inherit"
  >
    <div class="flex-1">
      <div
        class="tracking-wide w-fit flex items-center gap-1"
      >
        <SparklesIcon
          class="w-6 h-6 text-indigo-700 dark:text-indigo-500"
        />
        <RouterLink
          to="/administration/dashboard"
          class="capitalize tracking-widest text-indigo-700 dark:text-indigo-500 text-sm md:text-base lg:text-lg font-extrabold"
        >
          LuxeCommerce
        </RouterLink>
      </div>
      <div
        class="block py-8 space-y-8"
      >
        <div
          v-for="link in navLinks"
          :key="link.id"
          @click="
            $emit(
              'setActiveLink',
              link.id,
            )
          "
          :class="[
            'flex justify-start items-center cursor-pointer gap-2 p-1.5 px-3 rounded-md text-sm transition-all duration-300',
            activeLink ===
            link.id
              ? 'text-indigo-50 bg-indigo-700'
              : 'hover:bg-indigo-700 hover:text-indigo-50',
          ]"
        >
          <component
            :is="link.icon"
            class="w-5 h-5"
          />
          {{ link.id }}
        </div>
      </div>
    </div>
    <div
      class="py-2 flex justify-between items-center gap-3 border-t border-indigo-700 dark:border-indigo-500"
    >
      <div
        class="w-[40px] h-[40px] border border-indigo-700 rounded-full overflow-hidden cursor-pointer"
      >
        <img
          src="https://picsum.photos/600/400?random"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="flex-1 flex justify-between items-center"
      >
        <div
          class="block tracking-normal"
        >
          <h1
            class="text-xs sm:text-sm md:text-base lg:text-lg font-medium"
          >
            Sokchea
          </h1>
          <span
            class="text-xs"
            >Admin
            Member</span
          >
        </div>
        <button
          @click="() => {}"
        >
          <ArrowRightStartOnRectangleIcon
            class="w-5 h-5 text-red-500 dark:text-red-700"
          />
        </button>
      </div>
    </div>
  </aside>
</template>
