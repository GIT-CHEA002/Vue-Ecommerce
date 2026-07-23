<script setup>
import Switch from '@/components/shared/button/Switch.vue';
import { ShieldCheckIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
const isTwoFactor =
  ref(false);
</script>
<template>
  <section
    class="p-12 bg-white dark:bg-slate-900 h-fit rounded-md"
  >
    <h1
      class="text-xl font-medium tracking-wide capitalize text-slate-900 dark:text-white"
    >
      Secure your account here
    </h1>
    <p
      class="flex-1 text-xs tracking-wide opacity-75 text-wrap text-slate-500 dark:text-slate-400"
    >
      Manage Your password and
      account security
      preferences
    </p>
    <div class="">
      <form
        action=""
        class="space-y-5"
      >
        <div
          class="flex-1 relative space-y-1"
        >
          <label
            for="password"
            class="text-sm"
          >
            Current Password
          </label>

          <input
            disabled
            type="password"
            name="password"
            required
            id="password"
            value="Sokchea"
            placeholder="Your username"
            class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 placeholder:text-xs dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
          />
          <p
            class="hidden absolute -bottom-4 animate-pulse text-red-700 dark:text-red-500 text-[0.6rem] font-medium tracking-wide"
          ></p>
        </div>
        <div
          class="flex justify-between items-center gap-5"
        >
          <div
            class="flex-1 relative space-y-1"
          >
            <label
              for="new_password"
              class="text-sm"
            >
              New Password
            </label>

            <input
              type="password"
              name="new_password"
              required
              id="new_password"
              value=""
              placeholder="New password"
              class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 placeholder:text-xs dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
            />
            <p
              class="hidden absolute -bottom-4 animate-pulse text-red-700 dark:text-red-500 text-[0.6rem] font-medium tracking-wide"
            ></p>
          </div>
          <div
            class="flex-1 relative space-y-1"
          >
            <label
              for="password"
              class="text-sm"
            >
              Confirm New
              Password
            </label>

            <input
              type="password"
              name="confirm_new_password"
              required
              id="confirm_new_password"
              value=""
              placeholder="Retype New password"
              class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 placeholder:text-xs dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
            />
            <p
              class="hidden absolute -bottom-4 animate-pulse text-red-700 dark:text-red-500 text-[0.6rem] font-medium tracking-wide"
            ></p>
          </div>
        </div>
        <!-- two factor authentication -->
        <div
          class="flex justify-between items-center bg-indigo-100 p-5 rounded-md"
        >
          <div
            class="flex-1 flex justify-start items-center space-x-2"
          >
            <ShieldCheckIcon
              class="w-5 h-5"
            />

            <div
              class="block"
            >
              <h1
                class="text-sm md:text-base capitalize px-1 font-medium tracking-wide"
              >
                two-factor
                authentication
              </h1>
              <h1
                class="text-xs capitalize tracking-wide opacity-75"
              >
                add an extra
                layer of
                securiy to
                your account
              </h1>
            </div>
          </div>
          <Switch
            v-model="
              isTwoFactor
            "
          />
        </div>
        <div
          class="flex justify-end gap-4 py-10"
        >
          <button
            @click="() => {}"
            class="px-4 md:px-8 py-2 text-xs font-medium border border-slate-300 dark:border-white/20 rounded text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95 transition-all duration-300"
          >
            Cancel Changes
          </button>
          <button
            @click="() => {}"
            class="px-4 md:px-8 py-2 text-xs font-medium rounded bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-800 text-indigo-50 shadow-sm active:scale-95 transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
