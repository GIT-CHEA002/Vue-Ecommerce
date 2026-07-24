<script setup>
import Switch from '@/components/shared/button/Switch.vue';
import IntroText from '@/components/shared/IntroText.vue';
import {
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/vue/24/outline';
</script>
<template>
  <main>
    <h1
      class="py-2 text-3xl font-semibold tracking-wide"
    >
      Profile
    </h1>
    <div
      class="block md:flex justify-between items-center"
    >
      <IntroText
        class="flex-1"
        default-text-color="text-slate-700 dark:text-indigo-50 opacity-75 "
        text="Manage Your account details, security, and communication preferences for an optimized LuxeCommerce experienced"
      />
      <div
        class="flex-1 flex items-center pb-4 justify-end gap-4"
      >
        <button
          class="px-4 py-2 text-xs md:text-sm font-medium tracking-wide text-slate-700 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
        >
          Discard Changes
        </button>

        <button
          class="px-4 py-2 text-xs md:text-sm font-medium tracking-wide text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-700 hover:border-indigo-700 transition-colors duration-200"
        >
          Save Changes
        </button>
      </div>
    </div>
    <!-- profile form  -->
    <div
      class="flex flex-col md:flex-row justify-between items-stretch gap-6"
    >
      <!-- Profile Form -->
      <div
        class="flex-1 w-full rounded-lg p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <form
          action=""
          class="space-y-6"
        >
          <h1
            class="flex items-center gap-2 text-slate-800 dark:text-slate-100"
          >
            <UserIcon
              class="w-5 h-5 text-indigo-600 dark:text-indigo-400"
            />
            <span
              class="font-semibold text-base md:text-lg"
              >Personal
              Information</span
            >
          </h1>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <!-- Full Name -->
            <div
              class="relative flex flex-col gap-1.5"
            >
              <label
                for="fullname"
                class="text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Full Name
              </label>
              <input
                disabled
                type="text"
                name="fullname"
                required
                id="fullname"
                value="Chhun Sokchea"
                placeholder="Your username"
                class="w-full block px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 placeholder:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-md cursor-not-allowed outline-none"
              />
            </div>

            <!-- Display Name -->
            <div
              class="relative flex flex-col gap-1.5"
            >
              <label
                for="display-name"
                class="text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Display Name
              </label>
              <input
                disabled
                type="text"
                name="display-name"
                required
                id="display-name"
                value="Sokchea Smos"
                placeholder="Your username"
                class="w-full block px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 placeholder:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-md cursor-not-allowed outline-none"
              />
            </div>

            <!-- Email Address -->
            <div
              class="relative flex flex-col gap-1.5"
            >
              <label
                for="email"
                class="text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Email Address
              </label>
              <input
                disabled
                type="email"
                name="email"
                required
                id="email"
                value="sokcheachhun317@gmail.com"
                placeholder="Your email"
                class="w-full block px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 placeholder:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-md cursor-not-allowed outline-none"
              />
            </div>

            <!-- Phone Number -->
            <div
              class="relative flex flex-col gap-1.5"
            >
              <label
                for="phone"
                class="text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Phone
              </label>
              <input
                disabled
                type="text"
                name="phone"
                required
                id="phone"
                value="+(855) 71 57 63 396"
                placeholder="Your phone number"
                class="w-full block px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 placeholder:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-md cursor-not-allowed outline-none"
              />
            </div>
          </div>
        </form>
      </div>

      <!-- Profile Card -->
      <div
        class="w-full md:w-64 shrink-0 rounded-lg p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center shadow-sm"
      >
        <div
          class="w-20 h-20 rounded-full overflow-hidden border-2 border-indigo-600 dark:border-indigo-500 ring-4 ring-indigo-50 dark:ring-indigo-950/30"
        >
          <img
            src="https://picsum.photos/id/64/200/200"
            alt="Profile Avatar"
            class="w-full h-full object-cover"
          />
        </div>

        <h1
          class="mt-4 text-base font-semibold text-slate-800 dark:text-slate-100"
        >
          Sokchea Chhun
        </h1>

        <span
          class="mt-2 inline-flex items-center px-3 py-0.5 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 transition-colors hover:bg-indigo-100 dark:hover:bg-indigo-900/40 cursor-pointer"
        >
          VIP Tier 3
        </span>

        <p
          class="mt-3 text-xs text-slate-500 dark:text-slate-400"
        >
          Member since 2023
        </p>
      </div>
    </div>

    <div
      class="px-8 py-10 bg-white dark:bg-slate-900 mt-8 rounded-md border border-slate-200 dark:border-slate-800"
    >
      <h1
        class="flex justify-start items-center gap-2"
      >
        <ShieldCheckIcon
          class="w-6 h-6 text-indigo-700 dark:text-indigo-500"
        />
        <span
          class="font-semibold text-ms md:text-lg"
          >Security &
          Access</span
        >
      </h1>
      <div
        class="block py-5 space-y-8"
      >
        <div
          class="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-800 bg-indigo-50 dark:bg-slate-800 rounded-md shadow-sm"
        >
          <div
            class="space-y-1"
          >
            <h1
              class="capitalize font-semibold tracking-wide text-sm sm:text-base text-slate-800 dark:text-slate-100"
            >
              two-factor
              authentication(2FA)
            </h1>
            <p
              class="text-xs text-slate-500 dark:text-slate-400"
            >
              Add an extra
              layer of
              security to your
              account
            </p>
          </div>
          <div>
            <Switch />
          </div>
        </div>
        <div
          class="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-800 bg-indigo-50 dark:bg-slate-800 rounded-md shadow-sm"
        >
          <div
            class="space-y-1"
          >
            <h1
              class="capitalize font-semibold tracking-wide text-sm sm:text-base text-slate-800 dark:text-slate-100"
            >
              Password Last
              Changed
            </h1>
            <p
              class="text-xs text-slate-500 dark:text-slate-400"
            >
              42 days ago
            </p>
          </div>
          <span
            class="text-xs font-medium text-indigo-700 dark:text-indigo-500 hover:underline underline-offset-2 cursor-pointer"
            >Change
            Passwords</span
          >
        </div>
        <div
          class="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-800 bg-indigo-50 dark:bg-slate-800 rounded-md shadow-sm"
        >
          <div
            class="space-y-1"
          >
            <h1
              class="capitalize font-semibold tracking-wide text-sm sm:text-base text-slate-800 dark:text-slate-100"
            >
              Active Session
            </h1>
            <p
              class="text-xs text-slate-500 dark:text-slate-400"
            >
              You are
              currently logged
              in on 3 devices
            </p>
          </div>
          <span
            class="text-xs font-medium text-indigo-700 dark:text-indigo-500 hover:underline underline-offset-2 cursor-pointer"
          >
            Manage devices
          </span>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 py-6 gap-6  "
    >
      <div
        class="bg-white dark:bg-slate-900 p-4 rounded-md border-slate-200 dark:border-slate-800 border"
      >
        <h1
          class="uppercase text-sm"
        >
          total orders
        </h1>
        <span
          class="text-sm md:text-base lg:text-lg font-bold"
          >142</span
        >
      </div>
      <div
        class="bg-white dark:bg-slate-900 p-4 rounded-md border-slate-200 dark:border-slate-800 border"
      >
        <h1
          class="uppercase text-sm"
        >
          wishlist items
        </h1>
        <span
          class="text-sm md:text-base lg:text-lg font-bold"
          >28</span
        >
      </div>
      <div
        class="bg-white dark:bg-slate-900 p-4 rounded-md border-slate-200 dark:border-slate-800 border"
      >
        <h1
          class="uppercase text-sm"
        >
         Account age
        </h1>
        <span
          class="text-sm md:text-base lg:text-lg font-bold"
          >1.4 years</span
        >
      </div>
      <div
        class="bg-white dark:bg-slate-900 p-4 rounded-md border-slate-200 dark:border-slate-800 border"
      >
        <h1
          class="uppercase text-sm"
        >
          VIP points
        </h1>
        <span
          class="text-sm md:text-base lg:text-lg font-bold"
          >12,450</span
        >
      </div>
    </div>
  </main>
</template>
