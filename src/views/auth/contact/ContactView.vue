<script setup>
import HeroText from '@/components/shared/HeroText.vue';
import IntroText from '@/components/shared/IntroText.vue';
import {
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  MapPinIcon,
} from '@heroicons/vue/24/solid';

const contactInfo = [
  {
    title:
      'Global Headquarters',
    description:
      '742 Fifth Avenue, Suite 1200\nNew York, NY 10019\nUnited States',
    icon: MapPinIcon,
  },
  {
    title: 'Direct Inquiries',
    description:
      'concierge@luxecommerce.com\nsupport@luxecommerce.com',
    icon: EnvelopeIcon,
  },
  {
    title: 'Resources',
    description:
      'Visit Help Center\nShipping & Returns FAQ',
    icon: QuestionMarkCircleIcon,
  },
];
</script>

<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 h-fit border-b-2"
  >
    <div
      class="text-center sm:px-32 md:px-72 py-8"
    >
      <HeroText
        text="get in touch."
        hightlight-text="touch."
      />
      <IntroText
        text="Whether you have a question about our collections or need assistance with an order, our dedicated team is here to provide a sophisticated support experience."
        default-text-color="text-slate-700 dark:text-indigo-50"
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-3"
    >
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
      <div
        class="md:px-12 pt-8 md:pt-0 space-y-12"
      >
        <div
          v-for="(
            info, index
          ) in contactInfo"
          :key="index"
          class="text-slate-700 dark:text-indigo-50 flex-1 flex items-start justify-start space-x-2"
        >
          <span
            class="p-2 bg-indigo-100 dark:bg-indigo-200/90 rounded-md"
          >
            <component
              :is="info.icon"
              class="w-5 h-5 text-indigo-700"
            />
          </span>

          <div class="block">
            <h2
              class="capitalize text-sm font-bold tracking-wider"
            >
              {{ info.title }}
            </h2>
            <p
              class="text-xs whitespace-pre-wrap mt-0.5"
            >
              {{
                info.description
              }}
            </p>
          </div>
        </div>

        <div
          class="w-full h-[220px] border border-indigo-700 rounded-md overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7652231711286!2d104.88816677429801!3d11.568681244082642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1782759081552!5m2!1sen!2skh"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
