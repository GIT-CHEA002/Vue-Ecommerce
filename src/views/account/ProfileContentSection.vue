<script setup>
import ProfileContentSectionOrders from './ProfileContentSectionOrders.vue';
import ProfileContentSectionProfile from './ProfileContentSectionProfile.vue';
import ProfileContentSectionSecurity from './ProfileContentSectionSecurity.vue';
import ProfileContentSectionWishlist from './ProfileContentSectionWishlist.vue';

const props = defineProps({
  activeProfileLinkTab: {
    type: String,
  },
});
const tabComponent = {
  profile:
    ProfileContentSectionProfile,
  orders:
    ProfileContentSectionOrders,
  wishlist:
    ProfileContentSectionWishlist,
  security:
    ProfileContentSectionSecurity,
};
</script>
<template>
  <main class="flex-1 h-full">
    <component :is="tabComponent[activeProfileLinkTab]" />
  </main>
</template>
