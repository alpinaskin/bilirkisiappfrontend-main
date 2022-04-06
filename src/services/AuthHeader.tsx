export default function authHeader(): string | any {
  const userTemp:any = localStorage.getItem('user')
  const user = JSON.parse(userTemp)
  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken }
  } else {
    return {}
  }
}
