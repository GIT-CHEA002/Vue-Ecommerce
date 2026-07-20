<script setup>
import Bage from '@/components/shared/Bage.vue';
</script>

<template>
  <section
    class="p-12 bg-white dark:bg-slate-900 h-fit rounded-md"
  >
    <h1
      class="text-xl font-medium tracking-wide capitalize"
    >
      Order History
    </h1>
    <p
      class="text-xs tracking-wide opacity-75"
    >
      Manage and track your
      recent sohisticated
      purchases
    </p>
    <table
      class="table w-full border-separate border-spacing-0 border border-slate-100 dark:border-slate-800/50 rounded-xl mt-4 bg-white dark:bg-[#111827] shadow-sm overflow-hidden"
    >
      <caption
        class="caption-top text-sm py-2 opacity-75 tracking-wide text-center pl-4"
      >
        Hello Sokchea, Here is
        your order history
      </caption>
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
        <tr
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
              title="pending"
              default-text-color="text-red-700 dark:text-red-500"
              default-wrapper-color="bg-red-100"
              default-bg-color="bg-red-600"
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
        <tr
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
              title="pending"
              default-text-color="text-amber-700 dark:text-amber-500"
              default-wrapper-color="bg-amber-100"
              default-bg-color="bg-amber-600"
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
      <!-- pagination -->
      <tfoot
        class="bg-white dark:bg-[#111827]"
      >
        <tr>
          <td
            colspan="3"
            class="p-4 text-start text-xs"
          >
            showing 4 or 24
            orders
          </td>
          <td
            colspan="2"
            class="text-end p-4 space-x-4"
          >
            <button
              class="text-xs font-medium py-2 px-4 bg-[#3538cd] dark:bg-indigo-600 text-indigo-50 hover:bg-[#2b24ca] dark:hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
            >
              Previes
            </button>
            <button
              class="text-xs font-medium py-2 px-4 bg-[#3538cd] dark:bg-indigo-600 text-indigo-50 hover:bg-[#2b24ca] dark:hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
            >
              Next
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </section>
</template>
