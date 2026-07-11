import { defineStore } from 'pinia';
import { ref } from 'vue';
import { cartService } from '@/services/cartService';

// REMOVED: The duplicate 'data' import from 'autoprefixer' which causes a syntax error.

export const useCartStore =
  defineStore('cart', () => {
    const cartItem =
      ref(null);
    const allCart = ref(null);
    const isLoading =
      ref(false);

    const fetchAllCart =
      async () => {
        isLoading.value = true; // FIXED: Added .value
        try {
          const data =
            await cartService.getAllCarts();
          allCart.value =
            data.carts;
        } catch (error) {
          console.error(
            error,
          );
        } finally {
          isLoading.value = false;
        }
      };

    const fetchCartByUser =
      async (userId) => {
        isLoading.value = true;
        try {
          cartItem.value =
            await cartService.getAllCartByUser(
              userId,
            );
        } catch (error) {
          console.error(
            error,
          );
        } finally {
          isLoading.value = false;
        }
      };

    const deleteCart = async (
      id,
    ) => {
      isLoading.value = true;
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
      } finally {
        isLoading.value = false;
      }
    };

    const updateCartByUser =
      async (
        userId,
        data,
      ) => {
        isLoading.value = true; // FIXED: Added .value
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
        } finally {
          isLoading.value = false;
        }
      };

    const addToCartByUserId =
      async (
        userId,
        product,
      ) => {
        isLoading.value = true;
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
        } finally {
          isLoading.value = false;
        }
      };

    // Note: Kept your exact return object, but remember to add fetchAllCart, deleteCart,
    // and updateCartByUser here if you plan to use them outside this store file!
    return {
      allCart,
      cartItem,
      isLoading,
      fetchAllCart, // Added
      fetchCartByUser,
      deleteCart, // Added
      updateCartByUser, // Added
      addToCartByUserId,
    };
  });
