import api from '@/services/apiService';
import { authService } from '@/services/authService';
import { defineStore } from 'pinia';
import {
  computed,
  ref,
} from 'vue';

export const useUserStore =
  defineStore('user', () => {
    const currentUser = ref(
      {},
    );
    const allUser = ref([]);
    const isLoggedIn =
      computed(() => {
        return (
          currentUser.value &&
          Object.keys(
            currentUser.value,
          ).length > 0
        );
      });
    const loginUser = async (
      username,
      password,
    ) => {
      try {
        const response =
          await authService.loginUser(
            username,
            password,
          );
        if (
          response &&
          (response.status ===
            200 ||
            response.status ===
              201)
        ) {
          currentUser.value =
            response.data;

          if (
            currentUser.value &&
            currentUser.value
              .username
          ) {
            localStorage.setItem(
              'username',
              currentUser
                .value
                .username,
            );
            // ⚠️ Do not store password in localStorage
          }
          return true;
        }
        return false;
      } catch (error) {
        console.error(
          'Error during login:',
          error,
        );
        return false;
      }
    };

    const getAllUser =
      async () => {
        try {
          const response =
            await authService.getAllUser();
          if (
            response &&
            response.status ===
              200
          ) {
            allUser.value =
              response.data.users;
            return true;
          }
          return false;
        } catch (error) {
          console.error(
            'Error fetching users:',
            error,
          );
          return false;
        }
      };
    const registerUser =
      async (data) => {
        try {
          const response =
            await authService.registerUser(
              data,
            );
          if (
            (response &&
              response.status ===
                201) ||
            response.status ===
              200
          ) {
            return true;
          }
          return false;
        } catch (error) {
          console.error(
            'Error : ' +
              error,
          );
        }
      };

    return {
      currentUser,
      allUser,
      isLoggedIn,
      loginUser,
      getAllUser,
      registerUser,
    };
  });
