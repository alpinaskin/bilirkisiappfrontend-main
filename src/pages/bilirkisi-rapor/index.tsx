import Grid from "@mui/material/Grid";
import MaddiTazminat from "src/views/dashboard/MaddiTazminat";
import AuthService from "src/services/AuthService"
import { useRouter } from 'next/router';
import { useEffect } from "react";

const BilirkisiRapor = () => {
  const router = useRouter()

  useEffect(() =>{
    authCheck()
  }, [authCheck])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function authCheck() {
    // redirect to login page if accessing a private page and not logged in 
    console.log(AuthService.getCurrentUser())
    if (!AuthService.getCurrentUser()) {
      router.push({
            pathname: '/pages/login',
            query: { returnUrl: router.asPath }
        });
    }
}

  return <>
    <Grid item xs={12} md={12} lg={12}>
      <MaddiTazminat />
    </Grid> 
  </>;
};

export default BilirkisiRapor;
