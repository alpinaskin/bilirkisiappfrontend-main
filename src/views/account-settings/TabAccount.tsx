// ** React Imports
import { useState, ChangeEvent } from 'react'

// next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Service Imports
import AuthService from 'src/services/AuthService'
import UserService from 'src/services/UserService'

// ** Icons Imports
import { useEffect } from 'react'
import { User } from './../../models/User'

// const ImgStyled = styled('img')(({ theme }) => ({
//   width: 120,
//   height: 120,
//   marginRight: theme.spacing(6.25),
//   borderRadius: theme.shape.borderRadius
// }))

// const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     textAlign: 'center'
//   }
// }))

// const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
//   marginLeft: theme.spacing(4.5),
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     marginLeft: 0,
//     textAlign: 'center',
//     marginTop: theme.spacing(4)
//   }
// }))

const TabAccount = () => {
  // ** State
  const [openAlert] = useState<boolean>(true)

  // const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    lastName: '',
    roles: []
  })

  const router = useRouter()

  // const onChange = (file: ChangeEvent) => {
  //   const reader = new FileReader()
  //   const { files } = file.target as HTMLInputElement
  //   if (files && files.length !== 0) {
  //     reader.onload = () => setImgSrc(reader.result as string)

  //     reader.readAsDataURL(files[0])
  //   }
  // }

  useEffect(() => {
    setUser(AuthService.getCurrentUser())
    console.log(user)
    if (user == null) {
      router.push('/pages/login')
    }
  }, [router, user])

  const handleChange = (prop: keyof User) => (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [prop]: event.target.value })
  }

  const reset = () => {
    setUser(AuthService.getCurrentUser())
  }

  const sendChanges = (user: any) => {
    console.log(user)
    UserService.updateUser(user, user.id)
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* <ImgStyled src={imgSrc} alt='Profile Pic' /> */}
              <Box>
                {/* <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled> */}
                {/* <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled> */}
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  ??ye bilgilerinizi buradan de??i??tirebilirsiniz
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='??sim' placeholder='' value={user.name} onChange={handleChange('name')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Soyisim'
              placeholder=''
              value={user.lastName}
              onChange={handleChange('lastName')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Eposta'
              placeholder=''
              value={user.email}
              onChange={handleChange('email')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Kullan??c?? Rol??</InputLabel>
              <Select label='Role' defaultValue='admin'>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='author'>??ye</MenuItem>
                <MenuItem value='editor'>??zel ??ye</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Durum</InputLabel>
              <Select label='Status' defaultValue='active'>
                <MenuItem value='active'>Aktif</MenuItem>
                <MenuItem value='inactive'>??naktif</MenuItem>
                <MenuItem value='pending'>Bekliyor</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Meslek' placeholder='' defaultValue='Bilirki??i' />
          </Grid>

          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              {/* <Alert
                severity='warning'
                sx={{ '& a': { fontWeight: 400 } }}
                action={
                  <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
                <Link href='/' onClick={(e: SyntheticEvent) => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert> */}
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={() => sendChanges(user)}>
              DE????????KL??KLER?? KAYDET
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={reset}>
              SIFIRLA
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
