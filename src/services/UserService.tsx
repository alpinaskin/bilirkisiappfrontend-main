import axios from "axios";
import authHeader from "src/services/AuthHeader";
const API_URL = "http://localhost:8080/api/v1/";

const getRaporlar = () => {
  return axios.get(API_URL + "raporlar", { headers: authHeader() });
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
const UserService = {
  getRaporlar,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard
};
export default UserService;
