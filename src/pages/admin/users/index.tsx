import { useEffect, useState } from 'react'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import UsersTable from 'src/views/dashboard/UsersTable'

// ** Service Imports
import UserService from 'src/services/UserService'
import { User } from './../../../models/User'
import { useRouter } from 'next/router'

const Users = () => {
  const [users, setUsers] = useState<Array<User>>([
    {
      name: '',
      lastName: '',
      email: ''
    }
  ])

  const router = useRouter()

  useEffect(() => {
    UserService.getUsers()
      .then(response => {
        setUsers(response.data._embedded.userList)
      })
      .catch(err => {
        if (401 === err.response.status) router.push('/pages/login')
      })
    console.log(users)
  }, [setUsers])

  return (
    <>
      <UsersTable users={users} />
    </>
  )
}

export default Users
