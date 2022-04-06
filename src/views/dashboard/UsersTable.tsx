// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import { Button } from '@mui/material'
import router from 'next/router'

const UsersTable = ({users}:any) => {

  const handleEdit = (userId:string | number) => {
    router.push(`/admin/users/${userId}`)
  }

  return (
    <>
      <Card>
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
            <TableHead>
              <TableRow>
                <TableCell>İsim</TableCell>
                <TableCell>Soyisim</TableCell>
                <TableCell>Eposta</TableCell>
                <TableCell>Durum</TableCell>
                <TableCell>Seçenekler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
             {users.map((user:any) => (
              <TableRow hover key={user.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{user.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip
                    label='Aktif'
                    color='success'
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="warning" onClick={() => handleEdit(user.id)}>Düzenle</Button>
                </TableCell>
              </TableRow>
             ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  )
}

export default UsersTable
