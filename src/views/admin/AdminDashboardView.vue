<script setup>
import {
  Squares2X2Icon,
  UserIcon,
  ShoppingBagIcon,
  HeartIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  WalletIcon,
  TruckIcon,
} from '@heroicons/vue/24/outline';
import {
  BellAlertIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import { useTheme } from '@/stores/theme';
import {
  MoonIcon,
  SunIcon,
} from '@heroicons/vue/24/solid';
import Bage from '@/components/shared/Bage.vue';
import AdminDashboardSidebarSection from './AdminDashboardSidebarSection.vue';
import AdminDashBoardMainContent from './AdminDashBoardMainContent.vue';
const theme = useTheme();

const navLinks = [
  {
    id: 'dashboard',
    to: 'admin-dashboard', // Matches your administration route name
    icon: Squares2X2Icon,
  },
  {
    id: 'profile',
    to: 'profile', // Matches your customer profile route name
    icon: UserIcon,
  },
  {
    id: 'orders',
    to: 'admin-orders', // Matches your administration orders route name
    icon: ShoppingBagIcon,
  },
  {
    id: 'wishlist',
    to: 'wishlist',
    icon: HeartIcon,
  },
  // {
  //   id: 'account Balance',
  //   to: 'admin-cart', // Reusing your configuration/checkout route context
  //   icon: BanknotesIcon,
  // },
  {
    id: 'settings',
    to: 'settings',
    icon: Cog6ToothIcon,
  },
];
const reports = [
  {
    id: 'account balance',
    icon: WalletIcon,
    badge: '+12.4%',
    total: 12450.0,
  },
  {
    id: 'ongoing shipments',
    icon: TruckIcon,
    badge: 'Active',
    total: '3 Orders',
  },
  {
    id: 'wishlist total',
    icon: HeartIcon,
    total: '18 Items',
  },
];
const activeLink = ref(
  navLinks[0].id,
);
</script>
<template>
  <div
    class="relative z-40 flex min-h-screen"
  >
    <AdminDashboardSidebarSection
      :nav-links="navLinks"
      :active-link="
        activeLink
      "
      @set-active-link="
        activeLink = $event
      "
    />
    <AdminDashBoardMainContent
      :report="reports"
    />
  </div>
</template>
