import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import RaporTable from "src/views/dashboard/RaporTable";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import { Typography } from "@mui/material";
import RolTable from "src/views/admin/RolTable";

const Admin = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" >
                Roller
              </Typography>
              <RolTable />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <RaporTable />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default Admin;
