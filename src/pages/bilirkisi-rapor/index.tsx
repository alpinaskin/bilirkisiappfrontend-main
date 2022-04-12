import Grid from '@mui/material/Grid'
import MaddiTazminat from 'src/views/dashboard/MaddiTazminat'
import AuthService from 'src/services/AuthService'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const BilirkisiRapor = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    authCheck()
  }, [authCheck])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function authCheck() {
    // redirect to login page if accessing a private page and not logged in
    if (!AuthService.getCurrentUser()) {
      router.push({
        pathname: '/pages/login',
        query: { returnUrl: router.asPath }
      })
    }

    setIsLoading(false)
  }

  return (
    <>
      <Grid item xs={12} md={12} lg={12}>
        {isLoading ? 'Yükleniyor...' : <MaddiTazminat />}
      </Grid>
    </>
  )
}

export default BilirkisiRapor
