import IconButton from "@mui/material/IconButton"
import TrashCanOutline from 'mdi-material-ui/TrashCanOutline'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

const RolTable = () => {
    return (<>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Rol</TableCell>
                    <TableCell>Durum</TableCell>
                    <TableCell>Seçenekler</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell>admin</TableCell>
                <TableCell>Aktif</TableCell>
                <TableCell><IconButton aria-label="aa" color="secondary" ><PencilOutline /></IconButton> <IconButton aria-label="trashcanoutline" color="error" ><TrashCanOutline /></IconButton></TableCell>
                </TableRow>
            </TableBody>     
        </Table>
    </TableContainer>
    
        </>
    )
}

export default RolTable