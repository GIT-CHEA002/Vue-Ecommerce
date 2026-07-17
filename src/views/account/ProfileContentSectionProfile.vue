<script setup></script>
<template>
  <section class="">
    <h1
      class="text-xl font-medium tracking-wide capitalize"
    >
      Personal Infomation (Profile tabs)
    </h1>
    <p
      class="text-sm opacity-75"
    >
      Update your photo and
      personal details here.
    </p>
    <div
      class="py-4 flex justify-start items-center"
    >
      <!-- image sections -->
      <div
        class="w-[100px] h-[100px] bg-blue-700 rounded-full cursor-pointer overflow-hidden"
      >
        <img
          src="https://picsum.photos/id/91/200/200"
          alt=""
          class="w-full h-full object-cover"
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
          JPG or PNG. Max size
          of 800K.
        </p>
        <div
          class="flex py-2"
        >
          <button
            class="text-xs rounded border px-2 py-1 bg-indigo-100/90 dark:bg-slate-900 dark:border-indigo-50 border-indigo-700 text-indigo-700 dark:text-indigo-50"
          >
            Replace
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
