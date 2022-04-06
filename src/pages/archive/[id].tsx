import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import { useRouter } from 'next/router'
import CardContent from '@mui/material/CardContent'

// ** Service Imports
import MaddiTazminatService from 'src/services/MaddiTazminatService'
import { RaporBilgileri } from 'src/models/RaporBilgileri'
import Grid from '@mui/material/Grid'
import { TarihBilgileri } from './../../models/TarihBilgileri'
import RaporList from 'src/views/lists/RaporList'
import { UcretBilgileri } from './../../models/UcretBilgileri'
import { EkBilgiler } from './../../models/EkBilgiler'

const Archive = () => {
  const router = useRouter()
  const { id } = router.query
  const [raporBilgileri, setRaporBilgileri] = useState<RaporBilgileri>({
    davaciAdi: '',
    davaliAdi: '',
    davaciVekili: '',
    davaliVekili: '',
    bilirkisi: '',
    raporunDuzenlenecegiMakam: '',
    esasNo: ''
  })
  const [tarihBilgileri, setTarihBilgileri] = useState<TarihBilgileri>({
    raporTarihi: '',
    davaTarihi: '',
    kazaliDogumTarihi: '',
    kazaTarihi: '',
    ucretTarihi: '',
    istirahatBitisTarihi: ''
  })
  const [ucretBilgileri, setUcretBilgileri] = useState<UcretBilgileri>({
    gunlukCiplakYevmiye: 0,
    gunlukIkramiye: 0,
    gunlukServis: 0,
    gunlukYemek: 0,
    gunlukYakacak: 0,
    gunlukDigerHaklar: 0
  })
  const [ekBilgiler, setEkbilgiler] = useState<EkBilgiler>({
    davaliKusurOrani: 0,
    maluliyetOrani: 0,
    sgkAyligiMiktari: 0,
    geciciIsGoremezlikMiktari: 0,
    maddiTazminatIstek: 0,
    kazaliCinsiyet: true,
    kazalininCocukSayisi: 0,
    kazalininMedeniHali: true,
    kazalininEsiCalisiyor: true
  })

  useEffect(() => {
    if (!router.isReady) return

    MaddiTazminatService.getMaddiTazminatById(id).then(response => {
      console.log(response.data)
      setRaporBilgileri(response.data.tazminatRapor.raporBilgileri)
      setTarihBilgileri(response.data.tazminatRapor.tarihBilgileri)
      setUcretBilgileri(response.data.tazminatRapor.ucretBilgileri)
      setEkbilgiler(response.data.tazminatRapor.ekBilgiler)
    })
  }, [id, router.isReady])

  return (
    <>
      <Grid item xs={12} spacing={0}>
        <Card>
          <CardContent>
            <RaporList
              raporBilgileri={raporBilgileri}
              tarihBilgileri={tarihBilgileri}
              ucretBilgileri={ucretBilgileri}
              ekBilgiler={ekBilgiler}
            />
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default Archive
