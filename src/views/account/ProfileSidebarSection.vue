<script setup>
import { ArrowRightStartOnRectangleIcon } from '@heroicons/vue/24/solid';
import ProfileSidebarSectionLink from './ProfileSidebarSectionLink.vue';
import {
  onMounted,
  ref,
} from 'vue';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/24/solid';
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
const isShowFullMobileSidebar =
  ref(false);
const isMobile = ref(false);
const toggleIsShowFullMobileSidebar =
  () => {
    if (isMobile.value) {
      isShowFullMobileSidebar.value =
        !isShowFullMobileSidebar.value;
    }
  };
// handle size when window change
const handleResize = () => {
  // tailwinds md breakpoint = 768px
  isMobile.value =
    window.innerWidth < 768;
  if (!isMobile.value) {
    isShowFullMobileSidebar.value = false;
  }
};
// add event listener to window for setting the state of is mobile and mobilesidebars
onMounted(() => {
  handleResize();
  window.addEventListener(
    'resize',
    handleResize,
  );
});
onMounted(() => {
  window.removeEventListener(
    'resize',
    handleResize,
  );
});
</script>
<template>
  <aside
    class="w-fit md:w-[30%] h-full"
  >
    <h1
      class="text-[0.8rem] sm:text-sm md:text-xl font-semibold tracking-wide"
    >
      Account
    </h1>

    <div
      class="pt-4 flex items-start justify-between"
    >
      <ul
        class="flex-1 pe-2 md:pe-12 border-r md:border-none border-indigo-700 dark:border-indigo-500 space-y-6"
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
          :is-show-full-mobile-sidebar="
            isShowFullMobileSidebar
          "
          @set-active-profile-link-tab="
            $emit(
              'setActiveProfileLinkTab',
              $event,
            )
          "
        />
        <!-- border at bottom -->
        <p
          class="border-b border-indigo-700 dark:border-indigo-500 mt-1"
        ></p>
      </ul>
      <button
        v-if="isMobile"
        @click="
          toggleIsShowFullMobileSidebar()
        "
        class="flex md:hidden items-center py-2 text-indigo-700 dark:text-indigo-500 ms-0.5"
      >
        <ArrowLeftEndOnRectangleIcon
          v-if="
            isShowFullMobileSidebar
          "
          class="w-4 h-4"
        />
        <ArrowRightStartOnRectangleIcon
          v-else
          class="w-4 h-4"
        />
      </button>
    </div>
  </aside>
</template>
