import { defineStore } from 'pinia';
import { ref } from 'vue';
import { cartService } from '@/services/cartService';
import { data } from 'autoprefixer';
export const useCartStore =
  defineStore('cart', () => {
    const cartItem =
      ref(null);
    const allCart = ref(null);
    const isLoading =
      ref(false);
    const fetchAllCart =
      async () => {
        isLoading = true;
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
        isLoading = true;
        try {
          const data =
            await cartService.updateCart(
              userId,
              data,
            );
          if (
            data.status ===
            200
          ) {
            console.log(
              'success',
            );
          } else {
            console.log(
              'fails in updating carts',
            );
          }
        } catch (error) {
          console.error(
            error,
          );
        } finally {
          isLoading.value = false;
        }
      };
    const addCartByUserId =
      async () => {};
    return {
      allCart,
      cartItem,
      isLoading,
      fetchCartByUser,
    };
  });
