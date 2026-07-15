<script setup>
import TertiaryButton from '@/components/shared/button/TertiaryButton.vue';
import {
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/vue/16/solid';
import {
  reactive,
  ref,
} from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { useToast } from 'vue-toastification';
import FormSection from './FormSection.vue';
const userStore =
  useUserStore();
const { registerUser } =
  userStore;
const router = useRouter();
const toast = useToast();

const state = reactive({
  form: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
  error: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
  errorReportMessage: '',
});
const validateForm = () => {
  // reset errors
  state.error.firstname = '';
  state.error.lastname = '';
  state.error.email = '';
  state.error.password = '';

  // firstname
  if (
    state.form.firstname.trim()
      .length < 5
  ) {
    state.error.firstname =
      'Firstname must be at least 5 characters';
  }

  // lastname
  if (
    state.form.lastname.trim()
      .length < 5
  ) {
    state.error.lastname =
      'Lastname must be at least 5 characters';
  }

  // email
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !emailRegex.test(
      state.form.email.trim(),
    )
  ) {
    state.error.email =
      'Please enter a valid email address';
  }

  // password
  if (
    state.form.password.trim()
      .length < 8
  ) {
    state.error.password =
      'Password must be at least 8 characters';
  } else {
    // check strength
    const strongRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/;
    if (
      !strongRegex.test(
        state.form.password,
      )
    ) {
      state.error.password =
        'Password is weak (add uppercase, number, symbol)';
    }
  }

  // return true if no errors
  return (
    !state.error.firstname &&
    !state.error.lastname &&
    !state.error.email &&
    !state.error.password
  );
};
const submitRegister =
  async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const response =
        await registerUser(
          state.form,
        );
      if (response) {
        toast.success(
          'Register was successful',
        );
        router.push('/');
      }
    } catch (error) {
      console.error(
        'Error : ' + error,
      );
      state.errorReportMessage =
        'Register Error please try again.';
    }
  };
</script>
<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-6"
  >
    <div
      class="flex justify-center items-center"
    >
      <div
        class="rounded-md border dark:border-0 shadow-md w-auto sm:w-[350px] h-fit bg-white dark:bg-slate-900 px-4 py-4 md:py-8"
      >
        <h1
          class="text-center text-xl font-medium py-1"
        >
          Register Form
        </h1>
        <h2
          class="text-sm text-center tracking-wide"
        >
          Please enter your
          details to sign in
        </h2>

        <FormSection
          :form="state.form"
          :error="state.error"
          :submit-register="
            submitRegister
          "
        />
        <p
          class="text-xs text-center capitalize"
        >
          Have An Account?
          <span
            @click="
              () => {
                router.push(
                  '/auth/login',
                );
              }
            "
            class="text-indigo-700 dark:text-indigo-500 font-medium hover:underline underline-offset-2 cursor-pointer"
            >Back To
            login</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
