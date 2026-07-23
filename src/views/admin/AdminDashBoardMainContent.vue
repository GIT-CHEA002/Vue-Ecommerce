<script setup>
import Bage from '@/components/shared/Bage.vue';
import { useTheme } from '@/stores/theme';
import { MoonIcon, SunIcon } from '@heroicons/vue/16/solid';
import { BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
const theme = useTheme();

const props = defineProps({
  report: {
    type: Array,
  },
});
</script>
<template>
  <main
    class="flex-1 md:ml-64 min-w-0"
  >
    <nav
      class="py-4 md:py-6 px-12 flex justify-between items-center border-b border-indigo-700 dark:border-indigo-500 shadow-sm"
    >
      <span
        class="text-sm md:text-lg lg:text-xl font-bold tracking-wide"
        >User Overview</span
      >

      <div
        class="flex-1 flex justify-end items-center gap-3"
      >
        <button
          @click="
            theme.toggleTheme
          "
        >
          <MoonIcon
            v-if="
              theme.theme ===
              'light'
            "
            class="w-6 h-6"
          />
          <SunIcon
            v-else
            class="w-6 h-6"
          />
        </button>
        <BellAlertIcon
          class="w-6 h-6"
        />
        <form action="">
          <div
            class="flex justify-between items-center ps-2 bg-white  dark:bg-slate-900 rounded border border-slate-300 focus-within:border-indigo-700 dark:focus-within:border-indigo-500"
          >
            <MagnifyingGlassIcon
              class="w-4 h-4 text-indigo-700 dark:text-indigo-500"
            />
            <input
              type="text"
              placeholder="search orders"
              class="flex-1 outline-none px-3 py-1 bg-transparent placeholder:capitalize placeholder:text-xs text-sm "
            />
          </div>
        </form>
      </div>
    </nav>
    <!-- content section  -->
    <div
      class="py-8 md:py-6 px-12 h-full"
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
        class="grid grid-cols-3 gap-8 py-8"
      >
        <div
          v-for="report in props.report"
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
            ${{
              report.total
            }}
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
        <table
          class="table w-full border-separate border-spacing-0 border border-slate-100 dark:border-slate-800/50 rounded-xl mt-4 bg-white dark:bg-[#111827] shadow-sm overflow-hidden"
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
      </section>
    </div>
  </main>
</template>
