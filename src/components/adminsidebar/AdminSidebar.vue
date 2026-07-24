<script setup>
import {
  Squares2X2Icon,
  UserIcon,
  ShoppingBagIcon,
  HeartIcon,
  Cog6ToothIcon,
  SparklesIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/vue/24/outline';
import { useRoute } from 'vue-router';

const route = useRoute();

const navLinks = [
  {
    target: '/administration/dashboard', // Fixed to match your path layout
    name: 'admin-dashboard',
    label: 'Dashboard',
    icon: Squares2X2Icon,
  },
  {
    target: '/administration/profile',
    name: 'profile',
    label: 'Profile',
    icon: UserIcon,
  },
  {
    target: '/administration/orders',
    name: 'admin-orders',
    label: 'Orders',
    icon: ShoppingBagIcon,
  },
  {
    target: '/administration/wishlist',
    name: 'wishlist',
    label: 'Wishlist',
    icon: HeartIcon,
  },
  {
    target: '/administration/settings',
    name: 'settings',
    label: 'Settings',
    icon: Cog6ToothIcon,
  },
];

const isActiveLink = (
  routePath,
) => {
  return (
    route.path ===
      routePath ||
    route.fullPath ===
      routePath
  );
};
</script>

<template>
  <aside
    class="hidden md:flex flex-col fixed top-0 left-0 bottom-0 z-30 w-64 py-4 md:py-6 px-4 border-r-2 border-indigo-700 dark:border-indigo-500 h-screen overflow-y-auto bg-inherit"
  >
    <div class="flex-1">
      <!-- brand identifier -->
      <div
        class="tracking-wide w-fit flex items-center gap-1"
      >
        <SparklesIcon
          class="w-6 h-6 text-indigo-700 dark:text-indigo-500"
        />
        <RouterLink
          to="/administration/dashboard"
          class="capitalize tracking-widest text-indigo-700 dark:text-indigo-500 text-sm md:text-base lg:text-lg font-extrabold"
        >
          LuxeCommerce
        </RouterLink>
      </div>

      <!-- navigation items -->
      <div
        class="block py-8 space-y-8"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="
            link.target.trim()
          "
          :class="[
            'flex justify-start items-center cursor-pointer gap-2 p-1.5 px-3 rounded-md text-sm transition-all duration-300',
            isActiveLink(
              link.target,
            )
              ? 'text-indigo-50 bg-indigo-700'
              : 'hover:bg-indigo-700 hover:text-indigo-50',
          ]"
        >
          <component
            :is="link.icon"
            class="w-5 h-5"
          />
          {{ link.label }}
        </RouterLink>
      </div>
    </div>

    <!-- profile/logout section -->
    <div
      class="py-2 flex justify-between items-center gap-3 border-t border-indigo-700 dark:border-indigo-500"
    >
      <div
        class="w-[40px] h-[40px] border border-indigo-700 rounded-full overflow-hidden cursor-pointer"
      >
        <img
          src="https://picsum.photos/600/400?random"
          alt="User Profile"
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="flex-1 flex justify-between items-center"
      >
        <div
          class="block tracking-normal"
        >
          <h1
            class="text-xs sm:text-sm md:text-base lg:text-lg font-medium"
          >
            Sokchea
          </h1>
          <span
            class="text-xs text-slate-500 dark:text-slate-400 block"
          >
            Admin Member
          </span>
        </div>
        <button
          @click="() => {}"
          class="bg-transparent border-none p-1 cursor-pointer"
        >
          <ArrowRightStartOnRectangleIcon
            class="w-5 h-5 text-red-500 dark:text-red-700"
          />
        </button>
      </div>
    </div>
  </aside>
</template>
