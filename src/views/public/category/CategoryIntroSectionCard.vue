<script setup>
defineProps({
  item: {
    type: Object,
  },
});
</script>
<template>
  <div
    :class="` relative border border-indigo-700 rounded-lg overflow-hidden ${item.gridClass || ''}`"
  >
    <div
      class="h-full overflow-hidden"
    >
      <img
        :src="item.image"
        alt=""
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div
      class="h-full flex items-end w-full absolute top-0 p-6"
    >
      <div
        class="block w-full space-y-3"
      >
        <h1
          class="text-indigo-50 text-sm md:text-lg lg:text-2xl xl:text-3xl font-medium"
        >
          {{ item.title }}
        </h1>
        <InfoText
          :text="
            item.description
          "
          defualt-color="text-indigo-50/90 brightness-125"
        />
        <button
          @click="() => {}"
          class="w-fit capitalize flex items-center justify-center space-x-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-700 dark:text-indigo-50 font-medium py-2 px-6 rounded shadow-sm cursor-pointer transition-all duration-200 hover:bg-indigo-700 hover:text-white hover:border-indigo-700 hover:shadow-md dark:hover:bg-indigo-700 dark:hover:border-indigo-700"
        >
          {{
            item.buttonText
          }}
        </button>
      </div>
    </div>
  </div>
</template>
