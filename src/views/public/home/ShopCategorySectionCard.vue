<script setup>
const props = defineProps({
  category: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div
    class="relative cursor-pointer bg-indigo-200 rounded overflow-hidden"
  >
    <img
      :src="
        props.category.image
      "
      :alt="`category product of ${props.category.category}`"
      class="h-full w-full object-cove blur-[0.5px] hover:blur-0"
    />
    <div
      class="absolute bottom-3 p-3 text-slate-900 md:p-6"
    >
      <h1
        class="capitalize md:text-lg lg:text-xl font-semibold"
      >
        {{
          props.category
            .category
        }}
      </h1>
      <span
        class="text-xs font-medium tracking-wide brightness-110"
      >
        {{
          props.category
            .description
        }}
      </span>
    </div>
  </div>
</template>
