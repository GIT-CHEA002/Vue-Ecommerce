<script setup></script>
<template>
  <div
    class="bg-white/95 shadow dark:bg-slate-900 p-10 rounded-md"
  >
    <form
      action=""
      class="space-y-3"
    >
      <div
        class="md:flex md:space-x-4"
      >
        <div
          class="flex-1 space-y-1"
        >
          <label
            for="firstname"
            class="text-sm"
            >First Name</label
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
            >Last Name</label
          >
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Doe"
            class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
          />
        </div>
      </div>

      <div
        class="flex-1 space-y-1"
      >
        <label
          for="email"
          class="text-sm"
          >Email
          Address</label
        >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@gmail.com"
          class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
        />
      </div>

      <div
        class="flex-1 space-y-1"
      >
        <label
          for="subject"
          class="text-sm"
          >Subject</label
        >
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="How can we help?"
          class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
        />
      </div>

      <div
        class="flex-1 space-y-1"
      >
        <label
          for="message"
          class="text-sm"
          >Message</label
        >
        <textarea
          name="message"
          id="message"
          placeholder="How can we assist you today?"
          class="w-full h-24 resize-none block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
        ></textarea>
      </div>

      <button
        type="button"
        class="py-3 px-6 text-sm bg-indigo-700 hover:bg-indigo-700/95 rounded-full text-indigo-50"
      >
        Send Message
      </button>
    </form>
  </div>
</template>
