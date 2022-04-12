import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AppContext } from './Context'

export default function FourthStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  const {
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

  const isError = useCallback(
    () =>
      Object.keys({
        davaliKusurOrani,
        maluliyetOrani,
        sgkAyligiPesinDegeri,
        geciciIsGoremezlikTutari,
        maddiTazminatIstek,
        kazaliCinsiyet,
        kazalininMedeniHali,
        kazalininEsiCalisiyor,
        kazalininCocukSayisi
      }).some(name => (formValues[name].required && !formValues[name].value) || formValues[name].error),
    [
      formValues,
      davaliKusurOrani,
      maluliyetOrani,
      sgkAyligiPesinDegeri,
      geciciIsGoremezlikTutari,
      maddiTazminatIstek,
      kazaliCinsiyet,
      kazalininMedeniHali,
      kazalininEsiCalisiyor,
      kazalininCocukSayisi
    ]
  )

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Davalı Kusur Oranı'
            name='davaliKusurOrani'
            type='text'
            defaultValue={davaliKusurOrani.value}
            onChange={handleChange}
            error={!!davaliKusurOrani.error}
            helperText={davaliKusurOrani.error}
            required={davaliKusurOrani.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Maluliyet Oranı'
            name='maluliyetOrani'
            type='text'
            defaultValue={maluliyetOrani.value}
            onChange={handleChange}
            error={!!maluliyetOrani.error}
            helperText={maluliyetOrani.error}
            required={maluliyetOrani.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='SGK Aylığı Peşin Değeri'
            name='sgkAyligiPesinDegeri'
            type='text'
            defaultValue={sgkAyligiPesinDegeri.value}
            onChange={handleChange}
            error={!!sgkAyligiPesinDegeri.error}
            helperText={sgkAyligiPesinDegeri.error}
            required={sgkAyligiPesinDegeri.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Geçici İş Göremezlik TutarI'
            name='geciciIsGoremezlikTutari'
            type='text'
            defaultValue={geciciIsGoremezlikTutari.value}
            onChange={handleChange}
            error={!!geciciIsGoremezlikTutari.error}
            helperText={geciciIsGoremezlikTutari.error}
            required={geciciIsGoremezlikTutari.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Maddi Tazminat İstek'
            name='maddiTazminatIstek'
            type='text'
            defaultValue={maddiTazminatIstek.value}
            onChange={handleChange}
            error={!!maddiTazminatIstek.error}
            helperText={maddiTazminatIstek.error}
            required={maddiTazminatIstek.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            label='Kazalının Cinsiyeti'
            name='kazaliCinsiyet'
            value={kazaliCinsiyet.value}
            onChange={handleChange}
            error={!!kazaliCinsiyet.error}
            helperText={kazaliCinsiyet.error}
            required={kazaliCinsiyet.required}
          >
            <option value=''></option>
            <option value={'true'}>Erkek</option>
            <option value={'false'}>Kadın</option>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            label='Kazalının Medeni Hali'
            name='kazalininMedeniHali'
            value={kazalininMedeniHali.value}
            onChange={handleChange}
            error={!!kazalininMedeniHali.error}
            helperText={kazalininMedeniHali.error}
            required={kazalininMedeniHali.required}
          >
            <option value=''> </option>
            <option value={'false'}>Bekar</option>
            <option value={'true'}>Evli</option>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            label='Kazalının Eşi Çalışıyor Mu?'
            name='kazalininEsiCalisiyor'
            value={kazalininEsiCalisiyor.value}
            onChange={handleChange}
            error={!!kazalininEsiCalisiyor.error}
            helperText={kazalininEsiCalisiyor.error}
            required={kazalininEsiCalisiyor.required}
          >
            <option value=''> </option>
            <option value={'false'}>Çalışmıyor</option>
            <option value={'true'}>Çalışıyor</option>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Kazalının Çocuk Sayısı'
            name='kazalininCocukSayisi'
            type='text'
            value={kazalininCocukSayisi.value}
            onChange={handleChange}
            error={!!kazalininCocukSayisi.error}
            helperText={kazalininCocukSayisi.error}
            required={kazalininCocukSayisi.required}
          ></TextField>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          GERİ
        </Button>
        <Button variant='contained' disabled={isError()} color='primary' onClick={!isError() ? handleNext : () => null}>
          İLERİ
        </Button>
      </Box>
    </>
  )
}
