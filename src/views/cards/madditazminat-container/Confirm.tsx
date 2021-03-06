import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { AppContext } from './Context'

// ** Util Imports
import { createDoc } from 'src/utils/Docx'

// ** Service Imports
import UserService from 'src/services/UserService'

// ** Model Imports
import { RaporBilgileri } from 'src/models/RaporBilgileri'

export default function Confirm() {
  const { formValues, handleBack, handleBeginning } = useContext(AppContext)
  const {
    davaliAdi,
    davaciAdi,
    davaliVekili,
    davaciVekili,
    bilirkisi,
    raporunDuzenlenecegiMakam,
    esasNo,
    raporTarihi,
    davaTarihi,
    kazaliDogumTarihi,
    kazaTarihi,
    ucretTarihi,
    istirahatBitisTarihi,
    gunlukCiplakYevmiye,
    gunlukIkramiye,
    gunlukServis,
    gunlukYemek,
    gunlukYakacak,
    gunlukDigerHaklar,
    davaliKusurOrani,
    maluliyetOrani,
    sgkAyligiPesinDegeri,
    geciciIsGoremezlikTutari,
    maddiTazminatIstek,
    kazaliCinsiyet,
    kazalininMedeniHali,
    kazalininEsiCalisiyor,
    kazalininCocukSayisi
  } = formValues

  function extract(object: any, keys: any) {
    return keys.reduce(function (o: any, k: any) {
      o[k] = object[k]
      delete object[k]

      return o
    }, {})
  }

  const handleSubmit = () => {
    // Remove unwanted properties from formValue object
    let form = {}

    Object.keys(formValues).map(name => {
      form = {
        ...form,
        [name]: formValues[name].value
      }

      return form
    })

    // Do whatever with the values
    const raporBilgileri: RaporBilgileri = extract(form, [
      'davaliAdi',
      'davaciAdi',
      'davaliVekili',
      'davaciVekili',
      'bilirkisi',
      'raporunDuzenlenecegiMakam',
      'esasNo'
    ])
    const tarihBilgileri = extract(form, [
      'raporTarihi',
      'davaTarihi',
      'kazaliDogumTarihi',
      'kazaTarihi',
      'ucretTarihi',
      'istirahatBitisTarihi'
    ])
    const ucretBilgileri = extract(form, [
      'gunlukCiplakYevmiye',
      'gunlukIkramiye',
      'gunlukServis',
      'gunlukYemek',
      'gunlukYakacak',
      'gunlukDigerHaklar'
    ])
    const ekBilgiler = extract(form, [
      'davaliKusurOrani',
      'maluliyetOrani',
      'sgkAyligiPesinDegeri',
      'geciciIsGoremezlikTutari',
      'maddiTazminatIstek',
      'kazaliCinsiyet',
      'kazalininMedeniHali',
      'kazalininEsiCalisiyor',
      'kazalininCocukSayisi'
    ])
    const postData = {
      ucretBilgileri,
      raporBilgileri,
      tarihBilgileri,
      ekBilgiler
    }

    UserService.postMaddiTazminat(postData).then(response => {
      createDoc(response.data)
    })

    // Show last component or success message
    handleBeginning()
  }

  return (
    <>
      <List dense disablePadding>
        <ListItem>
          <ListItemText primary='Daval?? Ad??' secondary={davaliAdi.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Davac?? Ad??' secondary={davaciAdi.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Daval?? Vekili' secondary={davaliVekili.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Davac?? Vekili' secondary={davaciVekili.value || 'Bo?? b??rak??lm????'} />
        </ListItem>

        <ListItem>
          <ListItemText
            primary='Raporun D??zenlenece??i Makam'
            secondary={raporunDuzenlenecegiMakam.value || 'Bo?? b??rak??lm????'}
          />
        </ListItem>

        <ListItem>
          <ListItemText primary='Bilirki??i Ad??' secondary={bilirkisi.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Esas Numaras??' secondary={esasNo.value || 'Bo?? b??rak??lm????'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Rapor Tarihi' secondary={raporTarihi.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Dava Tarihi' secondary={davaTarihi.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Do??um Tarihi' secondary={kazaliDogumTarihi.value || 'Bo?? b??rak??lm????'} />
        </ListItem>

        <ListItem>
          <ListItemText primary='Kaza Tarihi' secondary={kazaTarihi.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='??cret Tarihi' secondary={ucretTarihi.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='??stirahat Biti?? Tarihi' secondary={istirahatBitisTarihi.value || 'Bo?? b??rak??lm????'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='G??nl??k Yevmiye' secondary={gunlukCiplakYevmiye.value || 'Bo?? b??rak??lm????'} />
        </ListItem>

        <ListItem>
          <ListItemText primary='G??nl??k Ikramiye' secondary={gunlukIkramiye.value || 'Bo?? b??rak??lm????'} />
        </ListItem>

        <ListItem>
          <ListItemText primary='G??nl??k Servis' secondary={gunlukServis.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='G??nl??k Yemek' secondary={gunlukYemek.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='G??nl??k Yakacak' secondary={gunlukYakacak.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='G??nl??k Di??er Haklar' secondary={gunlukDigerHaklar.value || 'Bo?? b??rak??lm????'} />
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemText primary='Daval?? Kusur Oran??' secondary={davaliKusurOrani.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Maluliyet Oran??' secondary={maluliyetOrani.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Sgk Ayl?????? Pe??in De??eri' secondary={sgkAyligiPesinDegeri.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Daval?? Kusur Oran??' secondary={geciciIsGoremezlikTutari.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Maddi Tazminat ??ste??i' secondary={maddiTazminatIstek.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Kazal??n??n Cinsiyeti'
            secondary={kazaliCinsiyet.value == 'true' ? 'Erkek' : 'Kad??n' || 'Bo?? b??rak??lm????'}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Medeni Hali'
            secondary={kazalininMedeniHali.value == 'true' ? 'Evli' : 'Bekar' || 'Bo?? b??rak??lm????'}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Kazal??n??n E??i ??al??????yor Mu?'
            secondary={kazalininEsiCalisiyor.value == 'true' ? '??al??????yor' : '??al????m??yor' || 'Bo?? b??rak??lm????'}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary='Kazal??n??n ??ocuk Say??s??' secondary={kazalininCocukSayisi.value || 'Bo?? b??rak??lm????'} />
        </ListItem>
      </List>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          GER??
        </Button>
        <Button variant='contained' color='success' onClick={handleSubmit}>
          ONAYLA & DEVAM ET
        </Button>
      </Box>
    </>
  )
}
