<script setup>
import { ref } from 'vue';
import ProfileSidebarSection from './ProfileSidebarSection.vue';
import {
  BookOpenIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/vue/24/solid';
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
const activeProfileLinkTab =
  ref(
    profileSidebarlinks[0]
      .target,
  );
const setActiveProfileLinkTab =
  (tab) => {
    activeProfileLinkTab.value =
      tab;
  };
</script>
<template>
  <div
    class="max-w-7xl px-4 sm:px-8 md:px-12 py-4 md:py-6 h-screen"
  >
    <h1>Profile page</h1>
    <div
      class="h-[400px] flex justify-between items-start"
    >
      <ProfileSidebarSection
        :active-profile-link-tab="
          activeProfileLinkTab
        "
        :profile-sidebarlinks="
          profileSidebarlinks
        "
        @set-active-profile-link-tab="
          setActiveProfileLinkTab
        "
      />
      <main
        class="flex-1 h-full bg-blue-400"
      ></main>
    </div>
  </div>
</template>
