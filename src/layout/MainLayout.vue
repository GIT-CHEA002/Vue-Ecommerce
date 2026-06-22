<script setup>
import Navbar from '@/components/navbar/Navbar.vue';
</script>
<template>
  <section>
    <!-- should be header -->
    <Navbar />
    <main>
      <!-- should be content here -->
      <RouterView />
    </main>
    <!-- should be footer -->
  </section>
</template>
