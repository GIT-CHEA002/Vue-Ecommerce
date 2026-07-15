<script setup>
import { useCartStore } from '@/stores/cartStore';
import { useToast } from 'vue-toastification';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter();
const { addToCartByUserId } =
  useCartStore();
const toast = useToast();
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});

const userStore =
  useUserStore();
const { isLoggedIn } =
  storeToRefs(userStore);
const addToCart = async (
  userId,
  product,
) => {
  if (!isLoggedIn.value) {
    toast.info(
      'Please login or register first ',
    );
    if (
      confirm(
        'You need to login first. Go to the login page?',
      )
    ) {
      router.push(
        '/auth/login',
      );
    }
    return;
  }
  try {
    const response =
      await addToCartByUserId(
        userId,
        product,
      );
    if (
      (response &&
        response.status ===
          201) ||
      response.status === 200
    ) {
      toast.success(
        'Success adding product title = ' +
          props.product.title,
      );
    }
  } catch (errro) {
    toast.error(
      'An Error occur while adding product to cart with title =  ' +
        props.product.title,
    );
    console.error(
      'Error occur while adding product to carts',
    );
    throw error;
  }
};
</script>
<template>
  <div
    class="min-w-72 sm:min-w-0 bg-white/80 dark:bg-slate-900/85 rounded shadow-sm flex flex-col border-[1.4px] border-indigo-700 overflow-hidden"
  >
    <!-- image preview -->
    <div class="p-2">
      <img
        :src="
          props.product
            .thumbnail
        "
        :alt="`product image : ${props.product.title}`"
        class="h-[220px] w-full object-cover rounded hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
      />
    </div>
    <!-- description -->
    <div
      class="p-2 flex-1 space-y-1"
    >
      <span
        class="uppercase text-sm text-black dark:text-white"
        >{{
          props.product
            .category
        }}</span
      >
      <h1
        class="uppercase line-clamp-1 text-sm font-semibold py-0.5 text-black dark:text-white brightness-90"
      >
        {{
          props.product.title
        }}
      </h1>
      <span
        class="text-sm text-indigo-700 dark:text-indigo-300"
        >${{
          props.product.price
        }}</span
      >
    </div>
    <div
      class="px-2 py-2 text-white font-medium bg-indigo-700/95 hover:bg-indigo-700 transition-colors duration-300 text-center cursor-pointer text-sm"
    >
      <button
        @click="
          addToCart(1, {
            id: props.product
              .id,
            quantity: 1,
          })
        "
        class="w-full"
      >
        Add To Cart
      </button>
    </div>
  </div>
</template>
