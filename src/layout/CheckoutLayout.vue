<script setup>
import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';
</script>
<template>
  <Navbar />
  <!-- main content for the checkout layout -->
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
