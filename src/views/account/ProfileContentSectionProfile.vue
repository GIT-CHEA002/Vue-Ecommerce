<script setup>
import TertiaryButton from '@/components/shared/button/TertiaryButton.vue';
import { UserCircleIcon } from '@heroicons/vue/24/solid';
</script>
<template>
  <div
    class="block space-y-3"
  >
    <section
      class="bg-white dark:bg-slate-900 p-12 rounded-md"
    >
      <h1
        class="text-xl font-medium tracking-wide capitalize"
      >
        Personal Infomation
      </h1>
      <p
        class="text-sm opacity-75"
      >
        Update your photo and
        personal details here.
      </p>
      <div
        class="py-8 flex justify-start items-center"
      >
        <!-- image sections -->
        <div
          class="relative w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-blue-700 rounded-full cursor-pointer overflow-hidden"
        >
          <img
            src="https://picsum.photos/id/91/200/200"
            alt="Profile"
            class="w-full h-full object-cover"
          />
          <!-- Centered horizontally and lifted up by bottom-2 to avoid circle clipping -->
          <UserCircleIcon
            class="z-30 absolute w-5 h-5 text-indigo-700 dark:text-indigo-500 right-2 bottom-2"
          />
        </div>
        <div
          class="flex-1 px-8 space-y-1"
        >
          <h1
            class="text-sm font-medium tracking-wide"
          >
            Profile Picture
          </h1>
          <p
            class="opacity-75 text-xs"
          >
            JPG or PNG. Max
            size of 800K.
          </p>
          <div
            class="flex gap-6 py-3 tracking-wide"
          >
            <button
              class="text-xs rounded border px-2 py-1 bg-indigo-100/90 dark:bg-slate-900 dark:border-indigo-50 border-indigo-700 text-indigo-700 dark:text-indigo-50"
            >
              Replace
            </button>
            <button
              class="text-xs text-red-500 dark:text-red-700 hover:underline underline-offset-2"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div class="pt-12">
        <form
          action=""
          class="space-y-4"
        >
          <div
            class="space-y-5 md:space-y-0 md:flex justify-between gap-6 items-center"
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
                disabled
                type="text"
                name="firstname"
                required
                id="firstname"
                value="Sokchea"
                placeholder="Your username"
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
                for="lastname"
                class="text-sm"
              >
                Lastname
              </label>

              <input
                disabled
                type="text"
                name="lastname"
                required
                id="lastname"
                value="Chhun"
                placeholder="Your username"
                class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 placeholder:text-xs dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
              />
              <p
                class="hidden absolute -bottom-4 animate-pulse text-red-700 dark:text-red-500 text-[0.6rem] font-medium tracking-wide"
              ></p>
            </div>
          </div>
          <div
            class="flex-1 relative space-y-1"
          >
            <label
              for="Email"
              class="text-sm"
            >
              Email Address
            </label>

            <input
              disabled
              type="text"
              name="email"
              required
              id="email"
              value="sokcheachhun@gmail.com"
              placeholder="Your username"
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
              for="location"
              class="text-sm"
            >
              Email Address
            </label>
            <input
              disabled
              type="text"
              name="location"
              required
              id="location"
              value="371 Solar Street, Sensok, Phnom Penh"
              placeholder="Your username"
              class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 placeholder:text-xs dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
            />
            <p
              class="hidden absolute -bottom-4 animate-pulse text-red-700 dark:text-red-500 text-[0.6rem] font-medium tracking-wide"
            ></p>
          </div>
        </form>
      </div>
      <div
        class="pt-12 text-end"
      >
        <TertiaryButton
          width="w-fit"
          default-padding="px-8 py-1 text-sm font-normal"
        >
          Edit
        </TertiaryButton>
      </div>
    </section>
  </div>
</template>
