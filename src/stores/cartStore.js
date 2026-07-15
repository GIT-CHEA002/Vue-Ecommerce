import { defineStore } from 'pinia';
import {
  computed,
  ref,
} from 'vue';
import { cartService } from '@/services/cartService';

// REMOVED: The duplicate 'data' import from 'autoprefixer' which causes a syntax error.

export const useCartStore =
  defineStore('cart', () => {
    const cartItem = ref([]);
    const allCart = ref([]);
    const totalProductQuantity =
      computed(() => {
        const cart =
          cartItem.value[0];
        if (
          !cart ||
          !cart.products
        )
          return 0;

        return cart.products.reduce(
          (sum, item) =>
            sum +
            (item.quantity ||
              0),
          0,
        );
      });

    const fetchAllCart =
      async () => {
        try {
          const data =
            await cartService.getAllCarts();
          allCart.value =
            data.carts;
        } catch (error) {
          console.error(
            error,
          );
        }
      };

    const fetchCartByUser =
      async (userId) => {
        try {
          const response =
            await cartService.getAllCartByUser(
              userId,
            );
          cartItem.value =
            response.data.carts;
        } catch (error) {
          console.error(
            error,
          );
        }
      };

    const deleteCart = async (
      id,
    ) => {
      try {
        const data =
          await cartService.deleteCart(
            id,
          );
        if (
          data.status === 200
        ) {
          cartItem.value = [];
        } else {
          console.log(
            'fails in deleting carts',
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    const updateCartByUser =
      async (
        userId,
        data,
      ) => {
        try {
          const response =
            await cartService.updateCart(
              userId,
              data,
            );
          return response;
        } catch (error) {
          console.error(
            error,
          );
        }
      };

    const addToCartByUserId =
      async (
        userId,
        product,
      ) => {
        try {
          const response =
            await cartService.addCartByUserId(
              userId,
              product,
            );
          return response;
        } catch (error) {
          console.log(
            'Error :',
            error,
          );
        }
      };

    // Note: Kept your exact return object, but remember to add fetchAllCart, deleteCart,
    // and updateCartByUser here if you plan to use them outside this store file!
    return {
      allCart,
      cartItem,
      totalProductQuantity,
      fetchAllCart, // Added
      fetchCartByUser,
      deleteCart, // Added
      updateCartByUser, // Added
      addToCartByUserId,
    };
  });
