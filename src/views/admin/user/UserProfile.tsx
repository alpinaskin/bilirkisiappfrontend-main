import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import { ChangeEvent, useEffect, useState } from 'react'
import { User } from 'src/models/User'
import { useRouter } from 'next/router'

// ** Service Imports
import UserService from 'src/services/UserService'

const UserProfile = () => {
    const router = useRouter()
    const { id } = router.query
    const [user, setUser] = useState({
      id: "",
      name: "",
      email:"",
      lastName: "",
      roles: [{id: "2", name:"ROLE_USER",}]
    })
  
    useEffect(() => {
      if (!router.isReady) return
      UserService.getUserById(id).then(response => {
        setUser(response.data)
      });
    },[id, router.isReady])

    const handleChange = (prop: keyof User) => (
        event: ChangeEvent<HTMLInputElement>
      ) => {
        console.log(prop)
        setUser({ ...user, [prop]: event.target.value });
      };

      const handleUpdate = () =>{
        UserService.updateUser(user, user.id).then(response => console.log(response.data))
      }

    return <> 
        <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Üye bilgilerinizi buradan değiştirebilirsiniz
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='İsim' placeholder='' value={user.name} onChange={handleChange("name")}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Soyisim' placeholder='' value={user.lastName} onChange={handleChange("lastName")} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Eposta'
              placeholder=''
              value={user.email}
              onChange={handleChange("email")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth onChange={handleChange("roles")}>
              <InputLabel>Kullanıcı Rolü</InputLabel>
              <Select label='Role' defaultValue={user.roles[0].name}>
                <MenuItem value='ROLE_ADMIN'>Admin</MenuItem>
                <MenuItem value='ROLE_USER'>Üye</MenuItem>
                <MenuItem value='editor'>Özel Üye</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Durum</InputLabel>
              <Select label='Status' defaultValue='active'>
                <MenuItem value='active'>Aktif</MenuItem>
                <MenuItem value='inactive'>İnaktif</MenuItem>
                <MenuItem value='pending'>Bekliyor</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Meslek' placeholder='' defaultValue='Bilirkişi' />
          </Grid>

          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={() => handleUpdate()}>
              DEĞİŞİKLİKLERİ KAYDET
            </Button>
            <Button type='reset' variant='outlined' color='secondary' >
              SIFIRLA
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
    </>
}

export default UserProfile