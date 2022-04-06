import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import UserProfile from 'src/views/admin/user/UserProfile'
// ** Service Imports
import UserService from 'src/services/UserService'

const Users = () => {

  return <UserProfile />
}

export default Users
