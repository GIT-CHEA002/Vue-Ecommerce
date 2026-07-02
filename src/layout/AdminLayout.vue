<script setup>
import { useTheme } from '@/stores/theme';
import { RouterView } from 'vue-router';

const theme = useTheme();
</script>
<template>
  <!-- main content for the admin layout -->
  <main>
    <RouterView/>
  </main>
</template>
