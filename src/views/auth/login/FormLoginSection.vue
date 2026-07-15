<script setup>
import TertiaryButton from '@/components/shared/button/TertiaryButton.vue';
import {
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/vue/16/solid';
import { ref } from 'vue';

const prpos = defineProps({
  submitLogin: {
    type: Function,
  },
  formModel: {
    type: Object,
  },
});
const isPasswordShow =
  ref(false);
const toggleIsPasswordShow =
  () => {
    isPasswordShow.value =
      !isPasswordShow.value;
  };
</script>
<template>
  <form
    action=""
    @submit.prevent="
      submitLogin()
    "
    class="py-3 space-y-4"
  >
    <div
      class="flex-1 space-y-1"
    >
      <label
        for="username"
        class="text-sm"
      >
        Username
      </label>

      <input
        type="text"
        name="username"
        required
        id="username"
        v-model="
          prpos.formModel
            .username
        "
        placeholder="Your username"
        class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 placeholder:text-xs dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
      />
    </div>
    <div
      class="flex-1 space-y-1"
    >
      <div
        class="flex items-center justify-between"
      >
        <label
          for="password"
          class="text-sm"
        >
          Password
        </label>
        <span
          @click="
            () => {
              router.back();
            }
          "
          class="text-indigo-700 dark:text-indigo-500 font-medium text-xs hover:underline underline-offset-2 cursor-pointer"
          >forgot
          password</span
        >
      </div>

      <div
        class="w-full flex justify-between items-center px-4 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded outline-none focus-within:border-indigo-700 dark:focus-within:border-indigo-700 transition-colors duration-300"
      >
        <input
          :type="[
            isPasswordShow
              ? 'text'
              : 'password',
          ]"
          name="password"
          required
          id="password"
          v-model="
            prpos.formModel
              .password
          "
          placeholder="your passwords"
          class="flex-1 outline-none bg-transparent text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 placeholder:text-xs dark:placeholder:text-slate-500"
        />
        <button
          type="button"
          @click="
            toggleIsPasswordShow()
          "
        >
          <EyeIcon
            v-if="
              !isPasswordShow
            "
            class="w-4 h-4 text-slate-700 dark:text-indigo-50"
          />
          <EyeSlashIcon
            v-if="
              isPasswordShow
            "
            class="w-4 h-4 text-slate-700 dark:text-indigo-50"
          />
        </button>
      </div>
    </div>
    <button
      type="submit"
      class="w-full py-1 capitalize"
    >
      <TertiaryButton
        defaultPadding="p-2 text-xs font-normal shadow-none"
      >
        Sign in to account
      </TertiaryButton>
    </button>
  </form>
</template>
