import api from './apiService.js';

export const cartService = {
  async getAllCarts() {
    try {
      const response =
        await api.get(
          `carts`,
        );
      return response;
    } catch (error) {
      console.error(
        'Error fetching all carts',
        error,
      );
    }
  },
  async getAllCartByUser(
    userId,
  ) {
    try {
      const response =
        await api.get(
          `carts/user/${userId}`,
        );
      return response;
    } catch (error) {
      console.error(
        'Error fetching all carts of user with id = ',
        userId,
        ':',
        error,
      );
    }
  },
  async getCartById(id) {
    try {
      const response =
        await api.get(
          `carts/${id}`,
        );
      return response;
    } catch (error) {
      console.error(
        'Error in fetching cart with id = ',
        id,
        ':',
        error,
      );
      throw error;
    }
  },
  async addCartByUserId(
    userId,
    product,
  ) {
    // Changed 'data' variable name to 'product' for clarity
    try {
      const response =
        await api.post(
          '/carts/add',
          {
            userId: userId,
            products: [
              product,
            ],
          },
        );
      return response;
    } catch (error) {
      console.error(
        'Error adding new cart of users with id = ',
        userId,
        ':',
        error,
      );
      throw error;
    }
  },
  async deleteCart(id) {
    try {
      const response =
        await api.delete(
          `/carts/${id}`,
        );
      return response;
    } catch (error) {
      console.error(
        'Error deleting cart with id = ',
        id,
        ':',
        error,
      );
      throw error;
    }
  },
  async updateCart(id, data) {
    try {
      const response =
        await api.put(
          `/carts/${id}`,
          {
            merge: true,
            products: data,
          },
        );
      return response;
    } catch (error) {
      console.error(
        'Error updating carts : ',
        id,
        ':',
        error,
      );
      throw error;
    }
  },
};
const carts =
  await cartService.updateCart(
    1,
    [
      {
        id: 144,
        quantity: 4,
      },
      {
        id: 98,
        quantity: 1,
      },
    ],
  );
console.log(carts.data);
// 1,
// [
//   {
//     id: 144,
//     quantity: 4,
//   },
//   {
//     id: 98,
//     quantity: 1,
//   },
// ],
