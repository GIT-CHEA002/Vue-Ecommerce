<script setup>
import AdminContentNavbar from '@/components/adminsidebar/AdminContentNavbar.vue';
import Bage from '@/components/shared/Bage.vue';
import {
  HeartIcon,
  TruckIcon,
  WalletIcon,
} from '@heroicons/vue/24/outline';

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
</script>
<template>
  <div

  >
    <h1
      class="text-sm text-slate-700 dark:text-indigo-50 tracking-wide opacity-75"
    >
      Welcome Back,
    </h1>
    <h1
      class="py-2 text-3xl font-semibold tracking-wide"
    >
      Sokchea
    </h1>
    <!-- report section  -->
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8"
    >
      <div
        v-for="report in reports"
        :key="report.id"
        class="p-6 bg-indigo-100 dark:bg-slate-900 rounded-md border border-indigo-700 dark:border-indigo-500 shadow-[10px_10px_0px_0px_rgba(67,56,202,1)]"
      >
        <div
          class="pb-3 flex justify-between items-center"
        >
          <span
            class="bg-indigo-200 p-2 rounded-lg"
          >
            <component
              :is="
                report.icon
              "
              class="w-6 h-6 text-indigo-700"
            />
          </span>
          <Bage
            v-if="
              report.badge
            "
            :title="
              report.badge
            "
          />
        </div>
        <h1
          class="text-xs md:text-sm text-slate-700 dark:text-indigo-50 capitalize"
        >
          {{ report.id }}
        </h1>
        <h1
          class="text-sm md:text-base lg:text-lg xl:text-2xl py-3 font-bold"
        >
          ${{ report.total }}
        </h1>
      </div>
    </section>
    <!-- Recent orders  -->

    <section class="py-8">
      <div
        class="flex justify-between items-center"
      >
        <span
          class="text-xl font-medium"
          >Recent Orders
        </span>
        <span
          class="text-xs tracking-wide font-medium text-indigo-700 dark:text-indigo-500 cursor-pointer hover:underline underline-offset-2"
          >View All History
        </span>
      </div>
      <!-- table data of order history  -->
      <div
        class="w-full overflow-x-auto rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/50 mt-4"
      >
        <table
          class="table-auto w-full min-w-[600px] border-separate border-spacing-0 bg-white dark:bg-[#111827]"
        >
          <colgroup>
            <col
              class="w-[25%]"
            />
            <col
              class="w-[15%]"
            />
            <col
              class="w-[10%]"
            />
            <col
              class="w-[25%]"
            />
            <col
              class="w-[25%]"
            />
          </colgroup>
          <thead
            class="bg-[#f8faff] dark:bg-[#1f2937] border-b border-slate-100 dark:border-slate-800/50"
          >
            <tr>
              <th
                class="p-4 text-start text-sm font-semibold rounded-tl-lg"
              >
                Order
              </th>
              <th
                class="p-4 text-start text-sm font-semibold"
              >
                Date
              </th>
              <th
                class="p-4 text-start text-sm font-semibold"
              >
                Status
              </th>
              <th
                class="p-4 text-start text-sm font-semibold"
              >
                Total
              </th>
              <th
                class="p-4 text-start text-sm font-semibold rounded-tr-lg"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="i in 4"
              :key="i"
              class="even:bg-slate-50/40 dark:even:bg-slate-800/20 odd:bg-transparent hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
            >
              <td
                class="p-4 border-b border-slate-100 dark:border-slate-800/50"
              >
                <div
                  class="flex justify-start items-center gap-3"
                >
                  <img
                    src="https://picsum.photos/600/400"
                    alt=""
                    class="w-[44px] h-[44px] object-cover rounded-lg bg-black"
                  />
                  <span
                    class="text-xs font-semibold"
                    >#LC-94012</span
                  >
                </div>
              </td>
              <td
                class="p-4 text-xs text-start border-b border-slate-100 dark:border-slate-800/50"
              >
                Oct 24, 2024
              </td>
              <td
                class="p-4 text-xs text-start border-b border-slate-100 dark:border-slate-800/50"
              >
                <!-- Fixed Typo: Bage -> Badge -->
                <Bage
                  title="delivered"
                />
              </td>
              <td
                class="p-4 text-start text-xs font-bold text-[#101828] dark:text-slate-200 border-b border-slate-100 dark:border-slate-800/50"
              >
                122,55$
              </td>
              <td
                class="p-4 text-start text-sm font-semibold border-b border-slate-100 dark:border-slate-800/50"
              >
                <span
                  class="text-indigo-700 dark:text-indigo-400 text-xs cursor-pointer hover:underline underline-offset-2"
                >
                  View Details
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
