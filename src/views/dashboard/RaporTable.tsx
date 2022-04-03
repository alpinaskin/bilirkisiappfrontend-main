// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";

// ** Model imports
import RaporBilgileri from "src/models/RaporBilgileri";

const rows: RaporBilgileri[] = [
  {
    davaliAdi: "Ahmet Yılmaz",
    davaciAdi: "Mehmet Yalkın",
    davaciVekili: "Av. Mahmut Er",
    davaliVekili: "Av. Ediz Akın",
    bilirkisi: "Sally Quinn",
    raporunDuzenlenecegiMakam: "Ankara 1. İş Mahkemesi",
    esasNo: "2020/13"
  }
];

const RaporTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
          <TableHead>
            <TableRow>
              <TableCell>Davalı Adı</TableCell>
              <TableCell>Davacı Adı</TableCell>
              <TableCell>Davalı Vekili</TableCell>
              <TableCell>Davaci Vekili</TableCell>
              <TableCell>Bilirkişi</TableCell>
              <TableCell>Raporun Düzenleneceği Makam</TableCell>
              <TableCell>Esas No</TableCell>
              <TableCell>Durum</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row: UcretBilgileri) => (
              <TableRow
                hover
                key={row.davaliAdi}
                sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
              >
                <TableCell>{row.davaliAdi}</TableCell>
                <TableCell>{row.davaciAdi}</TableCell>
                <TableCell>{row.davaliVekili}</TableCell>
                <TableCell>{row.davaciVekili}</TableCell>
                <TableCell>{row.bilirkisi}</TableCell>
                <TableCell>{row.raporunDuzenlenecegiMakam}</TableCell>
                <TableCell>{row.esasNo}</TableCell>
                <TableCell>
                  <Chip
                    label="current"
                    color="info"
                    sx={{
                      height: 24,
                      fontSize: "0.75rem",
                      textTransform: "capitalize",
                      "& .MuiChip-label": { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default RaporTable;
