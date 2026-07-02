<script setup></script>
<!-- card of category pages -->
<template>
  <div
    class="flex flex-col cursor-pointer dark:bg-slate-900 rounded border border-indigo-700 dark:border-indigo-50"
  >
    <div
      class="h-[260px] overflow-hidden"
    >
      <img
        src="https://picsum.photos/id/211/400/400"
        alt=""
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div
      class="flex-1 px-2 py-6"
    >
      <!-- title and prices  -->
      <div
        class="flex justify-between items-center"
      >
        <span
          class="flex-1 text-sm font-semibold line-clamp-1"
        >
          The Executive
          Backpack
        </span>
        <span
          class="flex-grow-1 text-xs text-indigo-700 brightness-125"
          >$450.00</span
        >
      </div>
      <!-- slug sections -->
      <span
        class="capitalize text-[0.65rem] opacity-75"
        >Natural oak &
        leather</span
      >
    </div>
  </div>
</template>
