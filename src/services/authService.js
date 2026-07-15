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
  async registerUser(data) {
    try {
      const response =
        await api.post(
          '/users/add',
          data,
        );
      return response;
    } catch (error) {
      console.error(
        'Error : ' + error,
      );
    }
  },
  async deleteUserFromList() {},
};

// const response =
//   await authService.registerUser(
//     {
//       firstname: 'John',
//       lastname: 'Doe',
//       email:
//         'john.doe@example.com',
//       password:
//         'SecurePass123!',
//       phone: '+855123456789', // Cambodia example number
//     },
//   );
// console.log(response.data);
