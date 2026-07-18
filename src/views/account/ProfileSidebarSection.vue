<script setup>
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
        class="flex-1 pe-2 md:pe-12 space-y-6"
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
      </ul>
    </div>
  </aside>
</template>
