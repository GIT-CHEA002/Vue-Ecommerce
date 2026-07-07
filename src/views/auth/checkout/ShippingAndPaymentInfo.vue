<script setup>
import {
  CurrencyDollarIcon,
  TruckIcon,
} from '@heroicons/vue/16/solid';
import { ArrowRightIcon } from '@heroicons/vue/24/solid';
const props = defineProps({
  cartItems: {
    type: Array,
  },
});
const subtotal =
  props.cartItems.reduce(
    (acc, item) => {
      return (
        acc +
        item.price *
          item.quantity
      );
    },
    0,
  );
const shippingCost = 15;
const discount = 25;
const tax = 48;
const total =
  subtotal +
  shippingCost +
  tax -
  discount;
</script>
<template>
  <section
    class="px-4 sm:px-8 md:px-12 py-4 md:py-12 border-b-2 h-fit"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto space-y-6 md:space-y-0 md:gap-8"
    >
      <div
        class="col-span-2 space-y-6"
      >
        <div
          class="p-8 bg-white dark:bg-slate-900 rounded-md shadow"
        >
          <div
            class="flex justify-start items-center"
          >
            <TruckIcon
              class="w-4 h-4 text-indigo-700"
            />
            <span
              class="tex-xs sm:text-sm md:text-base px-1 font-medium text-slate-700 dark:text-indigo-50"
              >Shipping
              Infomation</span
            >
          </div>
          <div class="mt-4">
            <form
              action=""
              class="space-y-4"
            >
              <div
                class="flex items-center justify-between space-x-8"
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
                    placeholder="John"
                    class="w-full block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
                  />
                </div>
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
                  placeholder="371 Solar Street..."
                  class="w-full tracking-wide block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
                />
              </div>
              <div
                class="flex justify-between items-center space-x-8"
              >
                <div
                  class="flex-1 space-y-1"
                >
                  <label
                    for="city"
                    class="text-sm"
                  >
                    City</label
                  >
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Phnom Penh"
                    class="w-full tracking-wide block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
                  />
                </div>
                <div
                  class="flex-1 space-y-1"
                >
                  <label
                    for="state"
                    class="text-sm"
                    >State
                  </label>
                  <select
                    name="name"
                    id="name"
                    class="w-full tracking-wide block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
                  >
                    <option
                      value="phnom-penh"
                    >
                      Phnom
                      Penh
                    </option>
                    <option
                      value="kandal"
                    >
                      Kandal
                    </option>
                    <option
                      value="ta-kmau"
                    >
                      Ta Kmau
                    </option>
                  </select>
                </div>
                <div
                  class="flex-1 space-y-1"
                >
                  <label
                    for="zipcode"
                    class="text-sm"
                  >
                    Zipcode</label
                  >
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="10001"
                    class="w-full tracking-wide block px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-indigo-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 rounded outline-none focus:border-indigo-700 dark:focus:border-indigo-700 transition-colors duration-300"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          class="p-8 bg-white/95 dark:bg-slate-900 rounded-md"
        >
          <div
            class="flex justify-start items-center"
          >
            <CurrencyDollarIcon
              class="w-4 h-4 text-indigo-700"
            />
            <span
              class="tex-xs sm:text-sm md:text-base px-1 font-medium text-slate-700 dark:text-indigo-50"
              >Payment
              Methods</span
            >
          </div>
          <div
            class="mt-4 text-xs tracking-wide rounded-md p-6 border border-dotted text-center"
          >
            Payment Details
            will be done in
            the next step.
          </div>
        </div>
      </div>
      <div
        class="col-span-1 p-8 bg-white dark:bg-slate-900 rounded-md"
      >
        <h1
          class="text-xs sm:text-sm md:text-base font-medium"
        >
          Order Summary
        </h1>
        <div
          class="block pt-4 space-y-3 border-b pb-2"
        >
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="flex justify-start items-center space-x-4 h-fit"
          >
            <div
              class="h-[70px] w-[60px] overflow-hidden rounded-sm bg-gray-100"
            >
              <img
                :src="
                  item.image
                "
                :alt="`product items id = ${item.id}`"
                class="w-full h-full object-cover"
              />
            </div>

            <div
              class="space-y-3"
            >
              <div>
                <h1
                  class="text-sm font-bold leading-tight"
                >
                  {{
                    item.name
                  }}
                </h1>
                <p
                  class="text-xs font-medium mt-0.5"
                >
                  {{
                    item.color
                  }}
                </p>
              </div>

              <div
                class="flex items-center space-x-8"
              >
                <span
                  class="text-xs brightness-95 font-medium"
                  >Qty:
                  {{
                    item.quantity
                  }}</span
                >
                <span
                  class="text-xs font-bold"
                  >${{
                    item.quantity *
                    item.price
                  }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="py-6 space-y-5 border-b h-fit"
        >
          <div
            class="flex justify-between items-center text-sm"
          >
            <span
              >Subtotal</span
            >
            <span
              >${{
                subtotal
              }}</span
            >
          </div>
          <div
            class="flex justify-between items-center text-sm"
          >
            <span
              >Shipping</span
            >
            <span
              >${{
                shippingCost
              }}</span
            >
          </div>
          <div
            class="flex justify-between items-center text-sm"
          >
            <span
              >Estimated
              Tax</span
            >
            <span
              >${{
                tax
              }}</span
            >
          </div>
          <div
            class="flex justify-between items-center text-sm"
          >
            <span
              >Discount</span
            >
            <span
              >${{
                discount
              }}</span
            >
          </div>
        </div>
        <div
          class="py-4 flex justify-between items-center"
        >
          <span
            class="text-base font-bold"
            >Total</span
          >
          <span
            class="text-indigo-700 font-extrabold tracking-wider brightness-125"
            >${{
              total
            }}</span
          >
        </div>
        <RouterLink
          :to="{
            name: 'paymentmethod',
            query: {
              cartItems:
                JSON.stringify(
                  props.cartItems,
                ),
            },
          }"
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
        </RouterLink>
        <h1
          class="text-xs opacity-75 py-1"
        >
          Your purchase is
          protected by our
          Buyer Protection
          Program
        </h1>
      </div>
    </div>
  </section>
</template>
