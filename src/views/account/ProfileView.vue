<script setup>
import {
  computed,
} from 'vue';
import ProfileSidebarSection from './ProfileSidebarSection.vue';
import {
  BookOpenIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/vue/24/solid';
import ProfileContentSection from './ProfileContentSection.vue';
import { useRoute } from 'vue-router';
const profileSidebarlinks = [
  {
    target: 'profile',
    title: 'Personal Info',
    icon: UserCircleIcon,
  },
  {
    target: 'security',
    title: 'Security',
    icon: ShieldCheckIcon,
  },
  {
    target: 'orders',
    title: 'Order History',
    icon: BookOpenIcon,
  },
  {
    target: 'wishlist',
    title: 'Wish list',
    icon: HeartIcon,
  },
];
const route = useRoute();
const activeProfileLinkTab =
  computed(
    () =>
      route.query.tab ||
      'profile',
  );
const setActiveProfileLinkTab =
  (tab) => {
    activeProfileLinkTab.value =
      tab;
  };
</script>
<template>
  <div
    class="max-w-7xl px-4 sm:px-8 md:px-12 py-4 md:py-6 h-fit"
  >
    <div
      class="h-fit flex justify-between items-start gap-5"
    >
      <ProfileSidebarSection
        :active-profile-link-tab="
          activeProfileLinkTab
        "
        :profile-sidebarlinks="
          profileSidebarlinks
        "
      />
      <ProfileContentSection
        :active-profile-link-tab="
          activeProfileLinkTab
        "
      />
    </div>
  </div>
</template>
