<script setup>
import ProfileSidebarSectionLink from './ProfileSidebarSectionLink.vue';
import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  activeProfileLinkTab: {
    type: String,
  },
  profileSidebarlinks: {
    type: Array,
    default: () => [],
  },
});
</script>
<template>
  <aside
    class="w-fit md:w-[30%] h-full hidden md:block"
  >
    <h1
      class="text-[0.8rem] sm:text-sm md:text-xl font-semibold tracking-wide"
    >
      Account
    </h1>

    <div
      class="pt-4 flex-1 flex items-start justify-between"
    >
      <ul
        class="flex-1 pe-2 md:pe-12 space-y-8"
      >
        <ProfileSidebarSectionLink
          v-for="tab in props.profileSidebarlinks"
          :key="tab.target"
          :tab="tab"
          :active-profile-link-tab="
            props.activeProfileLinkTab
          "
        />
        <!-- border at bottom -->
        <p
          class="border-b border-indigo-700 dark:border-indigo-500 mt-1"
        ></p>
        <div
          @click="() => {}"
          class="py-2 px-4 rounded-md flex text-sm gap-2 bg-red-200/75 dark:bg-red-950/30 items-center justify-start text-red-600 dark:text-red-400"
        >
          <ArrowRightOnRectangleIcon
            class="w-3 h-3 sm:w-4 sm:h-4 md:h-5 md:w-5"
          />
          <span>Log out</span>
        </div>
      </ul>
    </div>
  </aside>
</template>
