<script setup>
import Navbar from '@/components/navbar/Navbar.vue'
</script>
<template>
  <section>
    <!-- should be header -->
    <Navbar />
    <main class="max-w-7xl px-4 sm:px-8 md:px-12 py-4 md:py-6">
      <!-- should be content here -->
      <RouterView />
    </main>
    <!-- should be footer -->
  </section>
</template>
