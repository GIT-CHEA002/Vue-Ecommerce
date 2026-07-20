<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'update:modelValue',
]);

// Handled explicitly to ensure the browser event target updates perfectly
const handleChange = (
  event,
) => {
  emit(
    'update:modelValue',
    event.target.checked,
  );
};
</script>

<template>
  <label
    class="relative inline-flex items-center cursor-pointer select-none"
  >
    <!-- Hidden Checkbox -->
    <input
      type="checkbox"
      class="peer sr-only"
      :checked="modelValue"
      @change="handleChange"
    />

    <!-- Track -->
    <div
      class="w-14 h-6 rounded-full bg-[#232C41] transition-all duration-300 ease-in-out peer-checked:bg-[#26274D] peer-focus:ring-2 peer-focus:ring-indigo-400/40"
    ></div>
    <!-- Knob -->
    <div
      class="absolute left-1 top-1 h-4 w-4 rounded-full bg-[#A7B6FF] shadow-md transition-all duration-300 ease-in-out peer-checked:translate-x-6 peer-active:scale-95"
    ></div>
  </label>
</template>
