<script setup>
import {
  BookOpenIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/vue/24/solid';
import ProfileSidebarSectionLink from './ProfileSidebarSectionLink.vue';
const props = defineProps({
  activeProfileLinkTab: {
    type: String,
  },
  profileSidebarlinks: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits([
  'setActiveProfileLinkTab',
]);
</script>
<template>
  <aside
    class="w-[30%] h-full"
  >
    <h1
      class="text-xl font-semibold tracking-wide"
    >
      Account
    </h1>
    <ul
      class="pt-4 pe-12 space-y-5"
    >
      <ProfileSidebarSectionLink
        v-for="(
          tab, index
        ) in props.profileSidebarlinks"
        :key="index"
        :active-profile-link-tab="
          props.activeProfileLinkTab
        "
        :tab="tab"
        @set-active-profile-link-tab="
          $emit(
            'setActiveProfileLinkTab',
            $event,
          )
        "
      />
    </ul>
  </aside>
</template>
