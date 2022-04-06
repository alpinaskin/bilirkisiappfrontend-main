import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { RaporBilgileri } from 'src/models/RaporBilgileri'
import { TarihBilgileri } from 'src/models/TarihBilgileri'

// ** Service Imports
import MaddiTazminatService from 'src/services/MaddiTazminatService'
import { MaddiTazminat } from 'src/models/MaddiTazminat'
import { TazminatRapor } from './../../models/TazminatRapor'
import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const Archive = () => {
  const router = useRouter()

  const [maddiTazminat, setMaddiTazminat] = useState<Array<MaddiTazminat>>([
    {
      id: 0,
      tazminatRapor: {
        id: '',
        raporBilgileri: {
          davaciAdi: '',
          davaliAdi: '',
          davaciVekili: '',
          davaliVekili: '',
          bilirkisi: '',
          raporunDuzenlenecegiMakam: '',
          esasNo: ''
        },
        tarihBilgileri: {
          raporTarihi: '',
          davaTarihi: '',
          kazaliDogumTarihi: '',
          kazaTarihi: '',
          ucretTarihi: '',
          istirahatBitisTarihi: ''
        }
      }
    }
  ])

  const handleClick = (tazminatId:string|number) => {
    router.push(`/archive/${tazminatId}`)
  }

  useEffect(() => {
    if (!router.isReady) return

    MaddiTazminatService.getAllMaddiTazminat().then(response => {
      let maddiTazminatList = response.data._embedded.maddiTazminatList
      console.log(maddiTazminatList)
      setMaddiTazminat(maddiTazminatList)
      // setRaporBilgileri(response.data._embedded.maddiTazminatList.tazminatRapor.raporBilgileri)
      // setTarihBilgileri(response.data._embedded.maddiTazminatList.tazminatRapor.tarihBilgileri)
      console.log(maddiTazminat)
    })
  }, [router.isReady])

  return (
    <>
    <Grid container spacing={6}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Davacı İSMİ</TableCell>
              <TableCell>Davalı İSMİ</TableCell>
              <TableCell>Davacı Avukatı</TableCell>
              <TableCell>Davalı Avukatı</TableCell>
              <TableCell>Rapor TARİHİ</TableCell>
              <TableCell>Seçenekler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {maddiTazminat.map(tzm => (
                <TableRow>
                  <TableCell>{tzm.tazminatRapor.raporBilgileri.davaciAdi}</TableCell>
                  <TableCell>{tzm.tazminatRapor.raporBilgileri.davaliAdi}</TableCell>
                  <TableCell>{tzm.tazminatRapor.raporBilgileri.davaciVekili}</TableCell>
                  <TableCell>{tzm.tazminatRapor.raporBilgileri.davaliVekili}</TableCell>
                  <TableCell>{tzm.tazminatRapor.tarihBilgileri.raporTarihi}</TableCell>
                  <TableCell><Button onClick={() => handleClick(tzm.id) }>Ayrıntılı Gör</Button></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Grid>
    </>
  )
}

export default Archive
