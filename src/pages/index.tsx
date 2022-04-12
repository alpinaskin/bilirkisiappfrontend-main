// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** HTTP Request Imports
//import UserService from "src/services/UserService";

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <h1>Tazminat Rapor Listesi</h1>
          <p>{/**JSON.stringify(raporlar, null, 2)**/}</p>
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/pages/login'
    }
  }
}

export default Dashboard
