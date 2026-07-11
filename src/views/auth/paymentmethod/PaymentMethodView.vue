<script setup>
import {
  CreditCardIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/vue/16/solid';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const methods = [
  {
    id: 'card',
    name: 'Credit Card',
    isIcon: true,
    iconName:
      'CreditCardIcon',
    content: {
      title:
        'Credit or Debit Card Details',
      fields: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        saveDetails: false,
      },
    },
  },
  {
    id: 'khqr',
    name: 'KHQR',
    isIcon: false,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0UrQkRQO8Xk7E4y9oYyRWzw68QZT3QzGa8XX9JOxbTukzIdxjvOBZZ2c&s=10',
    content: {
      title:
        'Scan with Any Mobile Banking App',
      qrUrl: '',
      instructions:
        'Scan this universal KHQR code using Bakong, ABA, ACLEDA, or any supported Cambodian mobile banking app to pay instantly.',
    },
  },
  {
    id: 'aba',
    name: 'ABA Bank',
    isIcon: false,
    image:
      'https://viphoujob.com/wp-content/uploads/wp-job-board-uploads/_employer_featured_image/2021/12/ABA-NBC-Primary-3D-latest.png',
    content: {
      title:
        'ABA Pay QR Code',
      qrUrl: '',
      instructions:
        'Scan this QR code using your ABA Mobile app to complete the payment safely.',
    },
  },
  {
    id: 'acleda',
    name: 'ACLEDA Bank',
    isIcon: false,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxm1m6XToGECAMxZh3MPr0PS9HeaZn9A2cuTgiPlQ-g&s=10',
    content: {
      title:
        'ACLEDA X-Pay / KHQR',
      qrUrl: '',
      instructions:
        'Scan the KHQR merchant code with your ACLEDA Mobile app to instantly authorize your transaction.',
    },
  },
];
const selectedMethod =
  ref('card');
</script>
<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 border-b-2 h-fit"
  >
    <div
      class="md:w-full lg:w-[70%]"
    >
      <div
        class="inline-block"
      >
        <h1
          class="text-base md:text-lg font-bold tracking-wide"
        >
          Payment Methods
        </h1>
        <span
          class="opacity-75 text-xs tracking-wide"
        >
          Choose your
          preferred payment
          methods and complete
          your secure
          transaction
        </span>
      </div>

      <div class="pt-2">
        <span
          class="uppercase text-xs font-medium"
        >
          Select payment
          methods
        </span>
        <div
          class="block md:flex justify-between items-center space-y-4 md:space-y-0 md:space-x-5 pt-2"
        >
          <button
            v-for="method in methods"
            :key="method.id"
            @click="
              selectedMethod =
                method.id
            "
            type="button"
            :class="[
              'flex-1 w-full md:w-auto h-[80px] flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 transition-all duration-300',
              selectedMethod ==
              method.id
                ? 'hover:scale-105 hover:brightness-125 border-2 border-indigo-700 dark:border-indigo-50'
                : 'hover:scale-105 hover:brightness-150',
            ]"
          >
            <div
              class="flex flex-col items-center"
            >
              <component
                v-if="
                  method.isIcon &&
                  method.iconName ===
                    'CreditCardIcon'
                "
                :is="
                  CreditCardIcon
                "
                class="w-6 h-6 text-indigo-700"
              />
              <img
                v-else
                :src="
                  method.image
                "
                :alt="
                  method.name
                "
                class="w-6 h-6 object-contain"
              />
              <span
                class="text-sm mt-0.5 capitalize"
              >
                {{
                  method.name
                }}
              </span>
            </div>
          </button>
        </div>
      </div>

      <!-- credit card contents -->
      <div
        v-if="
          selectedMethod ===
          'card'
        "
        class="mt-6 bg-white dark:bg-slate-900 p-2 md:p-10 space-y-8 rounded-md border dark:border-indigo-50 shadow-sm"
      >
        <div
          class="flex justify-start items-center"
        >
          <CurrencyDollarIcon
            class="w-6 h-6 text-indigo-700"
          />
          <span
            class="px-1 tracking-wide font-medium"
            >Credit or Debit
            Card</span
          >
        </div>

        <!-- form sections -->
        <form
          action=""
          class="space-y-4"
        >
          <div class="block">
            <label
              for="card-number"
              class="capitalize text-sm py-0.5"
              >Card
              Number</label
            >
            <div
              class="w-full tracking-wide flex items-center p-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus-within:border-indigo-700 dark:focus-within:border-indigo-700 transition-colors duration-300"
            >
              <input
                type="text"
                name="card-number"
                id="card-number"
                placeholder="0000 0000 0000 0000"
                class="flex-1 bg-transparent outline-none px-3 text-sm placeholder:text-slate-400"
              />
              <component
                :is="
                  CreditCardIcon
                "
                class="w-4 h-4 bg-transparent text-slate-400"
              />
            </div>
          </div>

          <div
            class="flex justify-between items-center gap-4"
          >
            <div
              class="flex-1"
            >
              <label
                for="expiry-date"
                class="capitalize text-sm py-0.5"
                >Expiry
                Date</label
              >
              <div
                class="w-full tracking-wide flex items-center p-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus-within:border-indigo-700 dark:focus-within:border-indigo-700 transition-colors duration-300"
              >
                <input
                  type="text"
                  name="expiry-date"
                  id="expiry-date"
                  placeholder="MM/YY"
                  class="flex-1 bg-transparent outline-none px-3 text-sm placeholder:text-slate-400"
                />
              </div>
            </div>

            <div
              class="flex-1"
            >
              <label
                for="cvv"
                class="capitalize text-sm py-0.5"
                >CVV</label
              >
              <div
                class="w-full tracking-wide flex items-center p-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus-within:border-indigo-700 dark:focus-within:border-indigo-700 transition-colors duration-300"
              >
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="123"
                  class="flex-1 bg-transparent outline-none px-3 text-sm placeholder:text-slate-400"
                />
                <component
                  :is="
                    QuestionMarkCircleIcon
                  "
                  class="w-4 h-4 bg-transparent text-slate-400"
                />
              </div>
            </div>
          </div>

          <div
            class="flex items-center space-x-2"
          >
            <input
              type="checkbox"
              id="save-details"
            />
            <label
              for="save-details"
              class="text-xs opacity-75 select-none"
            >
              Save Card
              details for
              future purchase
            </label>
          </div>
        </form>
      </div>

      <!-- KHQR contents -->
      <div
        v-if="
          selectedMethod ===
          'khqr'
        "
        class="mt-6 bg-white dark:bg-slate-900 p-2 md:p-10 space-y-8 rounded-md border dark:border-indigo-50 shadow-sm"
      >
        <h1>KHQR</h1>
        <p
          class="text-sm opacity-75"
        >
          {{
            methods[1].content
              .instructions
          }}
        </p>
        <p
          class="text-sm opacity-75 animate-bounce text-indigo-700 dark:text-indigo-50 font-bold"
        >
          The payment will be
          done in next step in
          final review
        </p>
      </div>

      <!-- bank contents -->
      <div
        v-if="
          selectedMethod ===
          'aba'
        "
        class="mt-6 bg-white dark:bg-slate-900 p-2 md:p-10 space-y-8 rounded-md border dark:border-indigo-50 shadow-sm"
      >
        <h1>ABA bank</h1>
        <p
          class="text-sm opacity-75"
        >
          {{
            methods[2].content
              .instructions
          }}
        </p>
        <p
          class="text-sm opacity-75 animate-bounce text-indigo-700 dark:text-indigo-50 font-bold"
        >
          The payment will be
          done in next step in
          final review
        </p>
      </div>

      <div
        v-if="
          selectedMethod ===
          'acleda'
        "
        class="mt-6 bg-white dark:bg-slate-900 p-2 md:p-10 space-y-8 rounded-md border dark:border-indigo-50 shadow-sm"
      >
        <h1>ACLEDA bank</h1>
        <p
          class="text-sm opacity-75"
        >
          {{
            methods[3].content
              .instructions
          }}
        </p>
        <p
          class="text-sm opacity-75 animate-bounce text-indigo-700 dark:text-indigo-50 font-bold"
        >
          The payment will be
          done in next step in
          final review
        </p>
      </div>
    </div>

    <button
      @click="
        () => {
          router.push(
            '/payment/finalreview',
          );
        }
      "
      class="w-fit animate-pulse mt-2 px-4 flex items-center justify-center py-3 rounded-md bg-indigo-700 text-indigo-50 hover:bg-indigo-700/95 hover:scale-[1.01] transition-all duration-300"
    >
      Final Review
    </button>
  </div>
</template>
