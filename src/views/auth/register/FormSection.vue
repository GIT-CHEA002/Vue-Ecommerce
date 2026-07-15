<script setup>
import TertiaryButton from '@/components/shared/button/TertiaryButton.vue';
import {
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/vue/16/solid';
import { ref } from 'vue';

const props = defineProps({
  submitRegister: {
    type: Function,
  },
  form: {
    type: Object,
  },
  error: {
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
      submitRegister()
    "
    class="py-3 space-y-6"
  >
    <div
      class="flex-1 relative space-y-1"
    >
      <label
        for="firstname"
        class="text-sm"
      >
        Firstname
      </label>

      <input
        type="text"
        name="firstname"
        required
        id="firstname"
        v-model="
          props.form.firstname
        "
        placeholder="Your username"
        class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 placeholder:text-xs dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
      />
      <p
        v-if="
          props.error
            .firstname
        "
        class="absolute -bottom-4 animate-pulse text-red-700 dark:text-red-500 text-[0.6rem] font-medium tracking-wide"
      >
        {{
          props.error
            .firstname
        }}
      </p>
    </div>
    <div
      class="flex-1 relative space-y-1"
    >
      <label
        for="lastname"
        class="text-sm"
      >
        Lastname
      </label>
      <input
        type="text"
        name="lastname"
        required
        id="lastname"
        v-model="
          props.form.lastname
        "
        placeholder="Your username"
        class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 placeholder:text-xs dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
      />
      <p
        v-if="
          props.error.lastname
        "
        class="absolute -bottom-4 animate-pulse text-red-700 dark:text-red-500 text-[0.6rem] font-medium tracking-wide"
      >
        {{
          props.error.lastname
        }}
      </p>
    </div>
    <div
      class="flex-1 relative space-y-1"
    >
      <label
        for="email"
        class="text-sm"
      >
        Email
      </label>

      <input
        type="email"
        name="email"
        required
        id="email"
        v-model="
          props.form.email
        "
        placeholder="Your Email address"
        class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 placeholder:text-xs dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
      />
      <p
        v-if="
          props.error.email
        "
        class="absolute -bottom-4 animate-pulse text-red-700 dark:text-red-500 text-[0.6rem] font-medium tracking-wide"
      >
        {{
          props.error.email
        }}
      </p>
    </div>

    <div
      class="flex-1 relative space-y-1"
    >
      <label
        for="password"
        class="text-sm"
      >
        Password
      </label>
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
            props.form
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
      <p
        v-if="
          props.error.password
        "
        class="absolute -bottom-4 animate-pulse text-red-700 dark:text-red-500 text-[0.6rem] font-medium tracking-wide"
      >
        {{
          props.error.password
        }}
      </p>
    </div>
    <TertiaryButton
      default-padding=" p-1.5 font-normal shadow-none text-sm tracking-wide"
    >
      <button type="submit">
        Register
      </button>
    </TertiaryButton>
  </form>
</template>
