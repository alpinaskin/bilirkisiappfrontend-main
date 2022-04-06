import axios from 'axios'
import authHeader from 'src/services/AuthHeader'

const API_URL = 'https://springbilirkisiapp.herokuapp.com/api/auth/'

const register = (name: string, lastName: string, email: string, password: string) => {
  console.log(name + lastName)

  return axios
    .post(API_URL + 'signup', {
      name,
      lastName,
      email,
      password
    })
    .then(
      response => console.log(response.data),
      error => console.log(error)
    )
}
const login = (email: string, password: string) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}
const logout = () => {
  localStorage.removeItem('user')
}
const getCurrentUser = () => {

  const item = localStorage.getItem('user')

  if (item) return JSON.parse(item)
  else return null
}

const changePassword = (email: string, oldPassword: string, newPassword: string) => {
  return axios
    .post(
      API_URL + 'changepassword',
      {
        email,
        oldPassword,
        newPassword
      },
      { headers: authHeader() }
    )
    .then(response => {
      console.log(response)
    })
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  changePassword,
}
export default AuthService
