<script setup>
import SectionHeader from '@/components/shared/SectionHeader.vue';
import {
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  ShieldCheckIcon,
  TrashIcon,
  TruckIcon,
} from '@heroicons/vue/16/solid';
</script>
<template>
  <div
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 h-fit border-b-2"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto space-y-8 md:space-y-0 lg:gap-8 h-fit"
    >
      <div
        class="col-span-1 lg:col-span-2"
      >
        <SectionHeader
          title="your shopping bag"
          class="capitalize"
        />
        <!-- card -->
        <div
          class="block pt-6 space-y-5"
        >
          <div
            v-for="i in 3"
            :key="i"
            class="block md:flex items-center border px-0.5 py-1 border-indigo-700 bg-indigo-50 dark:bg-slate-900 rounded-md"
          >
            <div
              class="flex items-center w-fit justify-start space-x-4"
            >
              <div
                class="w-[100px] h-[120px] rounded-md overflow-hidden"
              >
                <img
                  src="https://picsum.photos/id/211/400/400"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>

              <div
                class="block space-y-1"
              >
                <h1
                  class="font-semibold tracking-wide"
                >
                  LuxeCommerce
                  Sneaker
                </h1>
                <h1
                  class="text-sm text-slate-700 dark:text-indigo-50"
                >
                  cloud white
                  / size 42
                </h1>
                <button
                  class="text-[0.7rem] text-red-500 flex justify-center items-center gap-0.5 hover:underline transition-transform duration-300"
                >
                  <TrashIcon
                    class="w-3 h-3"
                  />
                  <span
                    >Remove</span
                  >
                </button>
              </div>
            </div>
            <div
              class="flex items-center justify-between flex-1 pt-2 md:pt-0"
            >
              <div
                class="md:ps-6 w-fit"
              >
                <div
                  class="bg-white flex items-center gap-5 p-1 rounded text-slate-700"
                >
                  <button
                    @click="
                      () => {}
                    "
                    class="px-1"
                  >
                    <MinusIcon
                      class="w-4 h-4"
                    />
                  </button>
                  <span
                    class="text-xs sm:text-sm md:text-base font-medium"
                    >2</span
                  >
                  <button
                    @click="
                      () => {}
                    "
                    class="px-1"
                  >
                    <PlusIcon
                      class="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
              <div
                class="flex-1 flex justify-end space-x-8 items-center pe-6"
              >
                <div
                  class="text-slate-700 dark:text-indigo-50 text-xs sm:text-sm md:text-base space-y-2"
                >
                  <h1>
                    Price
                  </h1>
                  <h1>
                    $420.00
                  </h1>
                </div>
                <div
                  class="text-slate-700 dark:text-indigo-50 text-xs sm:text-sm md:text-base space-y-2"
                >
                  <h1>
                    Total
                  </h1>
                  <h1>
                    $840.00
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <!-- promote code -->
          <div class="block">
            <h1
              class="uppercase text-xs font-semibold tracking-wider text-slate-700 dark:text-indigo-200"
            >
              Promotion
            </h1>

            <div
              class="flex items-center justify-between gap-3 pt-2"
            >
              <input
                type="text"
                placeholder="Enter Promo code"
                class="flex-1 px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors"
              />
              <button
                type="button"
                class="px-5 py-2 text-sm font-medium bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-span-1 p-4 rounded-lg border border-indigo-700 bg-indigo-50 dark:bg-slate-900 h-fit"
      >
        <SectionHeader
          title="Order Summary"
          default-text="text-sm md:text-base lg:text-lg font-medium text-slate-700 dark:text-indigo-50"
        />

        <div
          class="py-6 space-y-5 border-b-2 border-indigo-700 h-fit"
        >
          <div
            class="flex justify-between items-center text-sm"
          >
            <span
              >Subtotal</span
            >
            <span
              >$610.00</span
            >
          </div>
          <div
            class="flex justify-between items-center text-sm"
          >
            <span
              >Shipping</span
            >
            <span
              >$15.00</span
            >
          </div>
          <div
            class="flex justify-between items-center text-sm"
          >
            <span>Tax</span>
            <span
              >$48.00</span
            >
          </div>
          <div
            class="flex justify-between items-center text-sm"
          >
            <span
              >Discount</span
            >
            <span
              >$25.00</span
            >
          </div>
        </div>

        <div
          class="flex justify-between items-center py-4"
        >
          <span
            class="font-bold tracking-wide text-xl"
            >Total</span
          >
          <span
            class="font-bold tracking-wide text-lg"
            >$25.00</span
          >
        </div>

        <button
          type="button"
          class="w-full flex items-center justify-center px-2 py-3 rounded-md bg-indigo-700 text-indigo-50 hover:bg-indigo-700/95 hover:scale-[1.01] transition-all duration-300"
        >
          <span class="px-1"
            >Proceed to
            Checkout</span
          >
          <ArrowRightIcon
            class="w-4 h-4"
          />
        </button>

        <div
          class="py-6 space-y-2"
        >
          <div
            class="text-slate-700 dark:text-indigo-50 flex-1 flex items-start justify-start space-x-2"
          >
            <TruckIcon
              class="w-5 h-5 text-indigo-700"
            />
            <div
              class="block"
            >
              <h1
                class="capitalize text-sm font-medium tracking-wider"
              >
                Fast Global
                Shipping
              </h1>
              <h1
                class="text-xs"
              >
                Estimated
                delivery in
                3-5 business
                days.
              </h1>
            </div>
          </div>

          <div
            class="text-slate-700 dark:text-indigo-50 flex-1 flex items-start justify-start space-x-2"
          >
            <ShieldCheckIcon
              class="w-5 h-5 text-indigo-700"
            />
            <div
              class="block"
            >
              <h1
                class="capitalize text-sm font-medium tracking-wider"
              >
                Secure
                Checkout
              </h1>
              <h1
                class="text-xs capitalize"
              >
                Encrypt
                Transaction
                via SSL for
                your security
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
