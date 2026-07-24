<script setup>
import AdminContentNavbar from '@/components/adminsidebar/AdminContentNavbar.vue';
import AdminSidebar from '@/components/adminsidebar/AdminSidebar.vue';
import { useTheme } from '@/stores/theme';
import { RouterView } from 'vue-router';

const theme = useTheme();
</script>
<template>
  <AdminSidebar />

  <main
    class="flex-1 md:ml-64 min-w-0"
  >
    <AdminContentNavbar />
    <div
      class="py-8 md:py-6 px-6 sm:px-8 md:px-12 h-full"
    >
      <RouterView />
    </div>
  </main>
</template>
