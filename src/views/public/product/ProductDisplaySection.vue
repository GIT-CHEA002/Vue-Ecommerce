<script setup>
import ProductDisplaySectionCardsGrid from './ProductDisplaySectionCardsGrid.vue';
import ProductDisplaySectionAside from './ProductDisplaySectionAside.vue';
import { ListBulletIcon } from '@heroicons/vue/16/solid';
import { ref } from 'vue';
const isSidebarOpen =
  ref(false);
const toggleSidebarOpen =
  () => {
    isSidebarOpen.value =
      !isSidebarOpen.value;
  };
</script>

<template>
  <section
    class="relative z-40 px-4 sm:px-8 md:px-12 py-4 md:py-8"
  >
    <div
      class="flex items-start"
    >
      <!-- aside -->
      <span
        class="fixed left-0 top-1/2 z-50 block md:hidden"
      >
        <button
          v-if="!isSidebarOpen"
          type="button"
          @click="
            toggleSidebarOpen()
          "
          class="border py-1 px-2 bg-white text-black rounded"
        >
          <ListBulletIcon
            class="w-4 h-4"
          />
        </button>
      </span>
      <ProductDisplaySectionAside
        :is-sidebar-open="
          isSidebarOpen
        "
        :toggle-sidebar-open="
          toggleSidebarOpen
        "
      />
      <ProductDisplaySectionCardsGrid />
    </div>
  </section>
</template>
