import axios from "axios";
import authHeader from "src/services/AuthHeader";
const API_URL = "http://localhost:8080/api/v1/";

const getRaporlar = () => {
  return axios.get(API_URL + "raporlar", { headers: authHeader() });
};
const postMaddiTazminat = (data) => {
  return axios.post(API_URL + "madditazminat/", data, { headers: authHeader() });
};
const getUsers = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
const UserService = {
  getRaporlar,
  postMaddiTazminat,
  getUsers,
  getAdminBoard
};
export default UserService;
