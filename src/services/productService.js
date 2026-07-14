import api from './apiService.js';
export const productService =
  {
    // all product by defaults
    async getAllProducts() {
      // Renamed slightly to match standard naming pluralization
      try {
        const response =
          await api.get(
            '/products',
          );
        return response;
      } catch (error) {
        console.error(
          'Error fetching all products:',
          error,
        );
        throw error; // Throwing lets the calling component handle the error state too
      }
    },
    // all product by sorted (asec and desc)
    async getAllProductSorted(
      sortBy,
      orderBy = 'asc',
    ) {
      try {
        const response =
          await api.get(
            `/products?sortBy=${sortBy.trim()}&order=${orderBy.trim()}`,
          );
        return response;
      } catch (error) {
        console.error(
          'Error fetching all products:',
          error,
        );
        throw error; // Throwing lets the calling component handle the error state too
      }
    },
    async getProductCategoryList() {
      try {
        const response =
          await api.get(
            `/products/category-list`,
          );
        return response;
      } catch (error) {
        console.error(
          'Error fetching all products:',
          error,
        );
        throw error; // Throwing lets the calling component handle the error state too
      }
    },
    async getProductById(id) {
      try {
        const response =
          await api.get(
            `/products/${id}`,
          );
        return response;
      } catch (error) {
        console.error(
          'Error fetching product with id = ',
          id,
          error,
        );
        throw error;
      }
    },
    async addProduct(data) {
      try {
        const response =
          await api.post(
            '/products/add',
            data,
          );
        return response;
      } catch (error) {
        console.error(
          'Error adding new product',
          id,
          error,
        );
        throw error;
      }
    },
    async updateProduct(
      id,
      newData,
    ) {
      try {
        const response =
          await api.put(
            `/product/${id}`,
            newData,
          );
        return response;
      } catch (error) {
        console.error(
          'Error updating new product',
          id,
          error,
        );
        throw error;
      }
    },
    async deleteProduct(id) {
      try {
        const response =
          await api.delete(
            `/product/${id}`,
          );
        return response;
      } catch (error) {
        console.error(
          'Error deletings new product',
          id,
          error,
        );
        throw error;
      }
    },
    async getAllCategoryProduct(
      category,
    ) {
      if (!category) {
        console.warn(
          'getAllCategoryProduct aborted: Category parameter is missing or undefined.',
        );
        return null;
      }

      try {
        const response =
          await api.get(
            `/products/category/${category}`,
          );
        return response.data;
      } catch (error) {
        console.error(
          'Error fetching products by category:',
          error,
        );
        throw error;
      }
    },
    async getLimitAndSkipProduct(
      limit,
      skip,
    ) {
      try {
        if (!limit && !skip) {
          console.error(
            'Missing parameter for limit and skips',
          );
          throw error;
        }
        const response =
          await api.get(
            `/products?limit=${limit}&skip=${skip}`,
          );
        return response.data;
      } catch (error) {
        console.error(
          'Error occur when fetching products ' +
            error,
        );
        throw error;
      }
    },
  };

// test
// const products =
//   await productService.getLimitAndSkipProduct(8,8);
// console.log(products);

// {
//       title: 'BMW Poster',
//       description:
//         'High-quality matte finish poster for car enthusiasts.',
//       price: 14.99,
//       discountPercentage: 5.0,
//       stock: 50,
//       brand: 'AutoArt',
//       category:
//         'home-decoration',
//       thumbnail:
//         'https://picsum.photos/200',
//     },
