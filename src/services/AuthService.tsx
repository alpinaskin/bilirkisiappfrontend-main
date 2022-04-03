import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";
const register = (name, lastName, email, password) => {
  console.log(name + lastName);

  return axios
    .post(API_URL + "signup", {
      name,
      lastName,
      email,
      password
    })
    .then(
      (response) => console.log(response.data),
      (error) => console.log(error)
    );
};
const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
};
export default AuthService;
