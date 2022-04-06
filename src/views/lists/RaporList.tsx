import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

const RaporList = ({ raporBilgileri, tarihBilgileri, ucretBilgileri, ekBilgiler }: any) => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6} md={3}>
          <Typography variant='h5' sx={{ marginBottom: 3, color: 'common.white' }}>
            Rapor Bilgileri
          </Typography>
          <List dense disablePadding>
            <ListItem>
              <ListItemText primary='Davacı Adı' secondary={raporBilgileri.davaciAdi} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Davalı Adı' secondary={raporBilgileri.davaliAdi} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Davacı Vekili' secondary={raporBilgileri.davaciVekili} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Davalı Vekili' secondary={raporBilgileri.davaliVekili} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Bilirkişi' secondary={raporBilgileri.bilirkisi} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Raporun Düzenleneceği Makam'
                secondary={raporBilgileri.raporunDuzenlenecegiMakam}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary='Esas No' secondary={raporBilgileri.esasNo} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant='h5' sx={{ marginBottom: 3, color: 'common.white' }}>
            Tarih Bilgileri
          </Typography>
          <List dense disablePadding>
            <ListItem>
              <ListItemText primary='Rapor Tarihi' secondary={tarihBilgileri.raporTarihi} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Dava Tarihi' secondary={tarihBilgileri.davaTarihi} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Doğum Tarihi' secondary={tarihBilgileri.kazaliDogumTarihi} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Kaza Tarihi' secondary={tarihBilgileri.kazaTarihi} />
            </ListItem>
            <ListItem>
              <ListItemText primary='İstirahat Bitiş Tarihi' secondary={tarihBilgileri.istirahatBitisTarihi} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Ücret Tarihi' secondary={tarihBilgileri.ucretTarihi} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant='h5' sx={{ marginBottom: 3, color: 'common.white' }}>
            Ücret Bilgileri
          </Typography>
          <List dense disablePadding>
            <ListItem>
              <ListItemText primary='Günlük Yevmiye' secondary={ucretBilgileri.gunlukCiplakYevmiye} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Günlük İkramiye' secondary={ucretBilgileri.gunlukIkramiye} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Günlük Servis' secondary={ucretBilgileri.gunlukServis} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Günlük Yakacak' secondary={ucretBilgileri.gunlukYakacak} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Günlük Yemek' secondary={ucretBilgileri.gunlukYemek} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Günlük İkramiye' secondary={ucretBilgileri.gunlukIkramiye} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant='h5' sx={{ marginBottom: 3, color: 'common.white' }}>
            Ek Bilgiler
          </Typography>
          <List dense disablePadding>
            <ListItem>
              <ListItemText primary='Davalı Kusur Oranı' secondary={ekBilgiler.davaliKusurOrani} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Maluliyet Oranı' secondary={ekBilgiler.maluliyetOrani} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Geçici İş Göremezlik' secondary={ekBilgiler.geciciIsGoremezlikMiktari} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Maddi Tazminat İstek' secondary={ekBilgiler.maddiTazminatIstek} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Sgk Aylık' secondary={ekBilgiler.sgkAyligiMiktari} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Kazalı Cinsiyet' secondary={ekBilgiler.kazaliCinsiyet ? 'Erkek' : 'Kadın'} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Kazalının Medeni Hali'
                secondary={ekBilgiler.kazalininMedeniHali ? 'Evli' : 'Bekar'}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Kazalının Eşi Çalışıyor mu?'
                secondary={ekBilgiler.kazalininEsiCalisiyor ? 'Evet' : 'Hayır'}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary='Kazalının Çocuk Sayısı' secondary={ekBilgiler.kazalininCocukSayisi} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  )
}

export default RaporList
