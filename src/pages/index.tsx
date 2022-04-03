import { useState } from "react";
// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** HTTP Request Imports
//import UserService from "src/services/UserService";

// ** Icons Imports
import Poll from "mdi-material-ui/Poll";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Demo Components Imports
import Table from "src/views/dashboard/Table";
import MaddiTazminat from "src/views/dashboard/MaddiTazminat";
import SalesByCountries from "src/views/dashboard/SalesByCountries";

// { raporlar }
const Dashboard = () => {
  const [raporlar, setRaporlar] = useState("");
  //const json = UserService.getRaporlar();
  //setRaporlar(json);

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <h1>Tazminat Rapor Listesi</h1>
          <p>{JSON.stringify(raporlar, null, 2)}</p>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <MaddiTazminat />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <SalesByCountries />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

// export async function getStaticProps() {
//   const json = UserService.getRaporlar();
//   //const json = JSON.stringify();
//   console.log(json);
//   return {
//     props: {
//       raporlar: json._embedded.tazminatRaporList
//     }
//   };
// }

export default Dashboard;
