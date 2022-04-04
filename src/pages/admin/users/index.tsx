import { useEffect, useState } from "react";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import UsersTable from "src/views/dashboard/UsersTable";

// ** Service Imports
import UserService from "src/services/UserService";
import { User } from './../../../models/User';

const Users = () => {
  const [users, setUsers] = useState<Array<User>>([{
    name: "",
    lastName: "",
    email: ""
  }])

  useEffect(() => {
    UserService.getUsers().then(response => {
      setUsers(response.data._embedded.userList);
    })
    console.log(users)
  }, [])

  return <>
      <UsersTable users={users}/>  
    </>;
};

export default Users;
