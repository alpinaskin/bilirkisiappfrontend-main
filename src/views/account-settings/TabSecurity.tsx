// ** React Imports
import { ChangeEvent, MouseEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** Service Imports
import AuthService from 'src/services/AuthService'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Close from 'mdi-material-ui/Close'
import { LoadingButton } from '@mui/lab'
import Snackbar from '@mui/material/Snackbar'

interface State {
  newPassword: string
  currentPassword: string
  showNewPassword: boolean
  confirmNewPassword: string
  showCurrentPassword: boolean
  showConfirmNewPassword: boolean
}

type Color = 'warning' | 'error' | 'success' | 'info' | undefined

const TabSecurity = () => {
  // ** States
  const [loading, setLoading] = useState<boolean>(false)
  const [alertColor, setColor] = useState<Color>('warning')
  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('Bir hata oluştu!')
  const [values, setValues] = useState<State>({
    newPassword: '',
    currentPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showCurrentPassword: false,
    showConfirmNewPassword: false
  })

  // Handle Current Password
  const handleCurrentPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })
  }
  const handleMouseDownCurrentPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle New Password
  const handleNewPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }
  const handleMouseDownNewPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Confirm New Password
  const handleConfirmNewPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }
  const handleMouseDownConfirmNewPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleSubmit = () => {
    setLoading(true)
    let user

    if (values.newPassword == values.confirmNewPassword) {
      user = AuthService.getCurrentUser()
      AuthService.changePassword(user.email, values.currentPassword, values.confirmNewPassword)
        .then(response => {
          if (response.status < 300) {
            setMessage('Şifreniz başarıyla değiştirildi!')
            setColor('success')
            setIsError(true)
            setValues({ ...values, currentPassword: '', newPassword: '', confirmNewPassword: '' })
          }
        })
        .catch(error => {
          if (error.response) {
            setColor('error')
            error.response.status == 401 ? setMessage('Yanlış şifre girdiniz!') : setColor('warning')
            setIsError(true)
            setValues({ ...values, currentPassword: '', newPassword: '', confirmNewPassword: '' })
          }
        })
    } else {
      setColor('warning')
      setMessage('Yeni şifrenizin aynı olduğundan emin olun!')
      setIsError(true)
    }
    setLoading(false)
  }

  return (
    <form>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={5}>
              <Grid item xs={12} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Eski Şifreniz</InputLabel>
                  <OutlinedInput
                    label='Şifre'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          aria-label='toggle password visibility'
                          onClick={handleClickShowCurrentPassword}
                          onMouseDown={handleMouseDownCurrentPassword}
                        >
                          {values.showCurrentPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sx={{ marginTop: 6 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-new-password'>Yeni Şifre</InputLabel>
                  <OutlinedInput
                    label='Yeni Şifre'
                    value={values.newPassword}
                    id='account-settings-new-password'
                    onChange={handleNewPasswordChange('newPassword')}
                    type={values.showNewPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          onClick={handleClickShowNewPassword}
                          aria-label='toggle password visibility'
                          onMouseDown={handleMouseDownNewPassword}
                        >
                          {values.showNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-confirm-new-password'>Yeni Şifrenizi Onaylayın</InputLabel>
                  <OutlinedInput
                    label='Yeni Şifre Onay'
                    value={values.confirmNewPassword}
                    id='account-settings-confirm-new-password'
                    type={values.showConfirmNewPassword ? 'text' : 'password'}
                    onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          aria-label='toggle password visibility'
                          onClick={handleClickShowConfirmNewPassword}
                          onMouseDown={handleMouseDownConfirmNewPassword}
                        >
                          {values.showConfirmNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
            <img width={183} alt='avatar' height={256} src='/images/pages/pose-m-1.png' />
          </Grid>

          <Snackbar
            open={isError}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            onClose={() => setIsError(false)}
          >
            <Alert
              color={alertColor}
              severity='warning'
              sx={{ '& a': { fontWeight: 400 } }}
              action={
                <IconButton size='small' color='inherit' aria-label='close' onClick={() => setIsError(false)}>
                  <Close fontSize='inherit' />
                </IconButton>
              }
            >
              <AlertTitle>{message}</AlertTitle>
            </Alert>
          </Snackbar>
        </Grid>
      </CardContent>

      <Divider sx={{ margin: 0 }} />

      <CardContent>
        <Box sx={{ mt: 11 }}>
          <LoadingButton variant='contained' sx={{ marginRight: 3.5 }} onClick={handleSubmit} loading={loading}>
            DEĞİŞİKLİKLERİ KAYDET
          </LoadingButton>
          <LoadingButton
            type='reset'
            variant='outlined'
            color='secondary'
            loading={loading}
            onClick={() => setValues({ ...values, currentPassword: '', newPassword: '', confirmNewPassword: '' })}
          >
            Sıfırla
          </LoadingButton>
        </Box>
      </CardContent>
    </form>
  )
}
export default TabSecurity
