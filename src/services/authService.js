import api from './apiService.js';
export const authService = {
  // for admin dashboards
  async getAllUser() {
    const response =
      await api.get('/users');
    return response;
  },
  async loginUser(
    username,
    password,
  ) {
    try {
      if (
        !username &&
        !password
      ) {
        console.error(
          'Error : There is no enough infomation to logins',
        );
        return;
      }
      const response =
        await api.post(
          `/user/login`,
          {
            username:
              username,
            password:
              password,
          },
        );
      return response;
    } catch (error) {
      console.error(
        'Error in login user to server : ' +
          error,
      );
      throw error;
    }
  },
  async logoutUser() {
    try {
      const response =
        await api.post();
    } catch (error) {
      console.error(
        'Error while log out user ',
      );
    }
  },
  async authUser() {},
  async registerUser() {},
  async deleteUserFromList() {},
};

// const response =
//   await authService.loginUser(
//     'addisonw',
//     'addisonwpass',
//   );
// console.log(
//   response.data.accessToken,
// );
