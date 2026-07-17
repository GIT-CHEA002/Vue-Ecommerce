<script setup>
import ProfileContentSectionOrders from './ProfileContentSectionOrders.vue';
import ProfileContentSectionProfile from './ProfileContentSectionProfile.vue';
import ProfileContentSectionSecurity from './ProfileContentSectionSecurity.vue';

const props = defineProps({
  activeProfileLinkTab: {
    type: String,
  },
});
</script>
<template>
  <main
    class="flex-1 h-full "
  >
    <!-- profiles -->
    <ProfileContentSectionProfile
      v-if="
        props.activeProfileLinkTab ===
        'profile'
      "
    />
    <!-- orders -->
    <ProfileContentSectionOrders
      v-if="
        props.activeProfileLinkTab ===
        'orders'
      "
    />
    <!-- wishlist -->
    <ProfileContentSectionWishlist
      v-if="
        props.activeProfileLinkTab ===
        'wishlist'
      "
    />
    <!-- security -->
    <ProfileContentSectionSecurity
      v-if="
        props.activeProfileLinkTab ===
        'security'
      "
    />
  </main>
</template>
