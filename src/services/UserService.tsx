import axios from 'axios'
import { User } from 'src/models/User'
import authHeader from 'src/services/AuthHeader'
const API_URL = 'http://localhost:8080/api/v1/'

const getRaporlar = () => {
  return axios.get(API_URL + 'raporlar', { headers: authHeader() })
}
const postMaddiTazminat = (data: any) => {
  return axios.post(API_URL + 'madditazminat/', data, { headers: authHeader() })
}
const getUsers = () => {
  return axios.get(API_URL + 'user', { headers: authHeader() })
}
const getUserById = (id: any) => {
  return axios.get(API_URL + `user/${id}`, { headers: authHeader() })
}
const updateUser = (user: User, userId: number | string) => {
  return axios.put(API_URL + `user/${userId}`, user, { headers: authHeader() })
}
const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() })
}

const UserService = {
  getRaporlar,
  postMaddiTazminat,
  getUsers,
  getUserById,
  updateUser,
  getAdminBoard
}
export default UserService
