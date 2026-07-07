<script setup>
import {
  CurrencyDollarIcon,
  TruckIcon,
} from '@heroicons/vue/16/solid';
</script>
<template>
  <div
    class="col-span-2 space-y-6"
  >
    <div
      class="p-8 bg-white dark:bg-slate-900 rounded-md shadow"
    >
      <div
        class="flex justify-start items-center"
      >
        <TruckIcon
          class="w-4 h-4 text-indigo-700"
        />
        <span
          class="tex-xs sm:text-sm md:text-base px-1 font-medium text-slate-700 dark:text-indigo-50"
          >Shipping
          Infomation</span
        >
      </div>
      <div class="mt-4">
        <form
          action=""
          class="space-y-4"
        >
          <div
            class="flex items-center justify-between space-x-8"
          >
            <div
              class="flex-1 space-y-1"
            >
              <label
                for="firstname"
                class="text-sm"
                >First
                Name</label
              >
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="John"
                class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
              />
            </div>
            <div
              class="flex-1 space-y-1"
            >
              <label
                for="lastname"
                class="text-sm"
                >Last
                Name</label
              >
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="John"
                class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
              />
            </div>
          </div>
          <div
            class="flex-1 space-y-1"
          >
            <label
              for="lastname"
              class="text-sm"
              >Last
              Name</label
            >
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="371 Solar Street..."
              class="w-full tracking-wide block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
            />
          </div>
          <div
            class="flex justify-between items-center space-x-8"
          >
            <div
              class="flex-1 space-y-1"
            >
              <label
                for="city"
                class="text-sm"
              >
                City</label
              >
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Phnom Penh"
                class="w-full tracking-wide block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
              />
            </div>
            <div
              class="flex-1 space-y-1"
            >
              <label
                for="state"
                class="text-sm"
                >State
              </label>
              <select
                name="name"
                id="name"
                class="w-full tracking-wide block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
              >
                <option
                  value="phnom-penh"
                >
                  Phnom Penh
                </option>
                <option
                  value="kandal"
                >
                  Kandal
                </option>
                <option
                  value="ta-kmau"
                >
                  Ta Kmau
                </option>
              </select>
            </div>
            <div
              class="flex-1 space-y-1"
            >
              <label
                for="zipcode"
                class="text-sm"
              >
                Zipcode</label
              >
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="10001"
                class="w-full tracking-wide block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div
      class="p-8 bg-white/95 dark:bg-slate-900 rounded-md"
    >
      <div
        class="flex justify-start items-center"
      >
        <CurrencyDollarIcon
          class="w-4 h-4 text-indigo-700"
        />
        <span
          class="tex-xs sm:text-sm md:text-base px-1 font-medium text-slate-700 dark:text-indigo-50"
          >Payment
          Methods</span
        >
      </div>
      <div
        class="mt-4 text-xs tracking-wide rounded-md p-6 border border-dotted text-center"
      >
        Payment Details will
        be done in the next
        step.
      </div>
    </div>
  </div>
</template>
