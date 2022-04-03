import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "./Context";

export default function SecondStep() {
  const {
    formValues,
    handleChange,
    handleBack,
    handleNext,
    variant,
    margin
  } = useContext(AppContext);
  const {
    raporTarihi,
    davaTarihi,
    kazaliDogumTarihi,
    kazaTarihi,
    ucretTarihi,
    istirahatBitisTarihi
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        raporTarihi,
        davaTarihi,
        kazaliDogumTarihi,
        kazaTarihi,
        ucretTarihi,
        istirahatBitisTarihi
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      raporTarihi,
      davaTarihi,
      kazaliDogumTarihi,
      kazaTarihi,
      ucretTarihi,
      istirahatBitisTarihi
    ]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Rapor Tarihi"
            name="raporTarihi"
            type="date"
            defaultValue={raporTarihi.value}
            onChange={handleChange}
            required={raporTarihi.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Dava Tarihi Tarihi"
            name="davaTarihi"
            type="date"
            defaultValue={davaTarihi.value}
            onChange={handleChange}
            required={davaTarihi.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Davacı Doğum Tarihi"
            name="kazaliDogumTarihi"
            type="date"
            defaultValue={kazaliDogumTarihi.value}
            onChange={handleChange}
            required={kazaliDogumTarihi.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Kaza Tarihi"
            name="kazaTarihi"
            type="date"
            defaultValue={kazaTarihi.value}
            onChange={handleChange}
            required={kazaTarihi.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Ücret Tarihi"
            name="ucretTarihi"
            type="date"
            defaultValue={ucretTarihi.value}
            onChange={handleChange}
            required={ucretTarihi.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="İstirahat Bitiş Tarihi"
            name="istirahatBitisTarihi"
            type="date"
            defaultValue={istirahatBitisTarihi.value}
            onChange={handleChange}
            required={istirahatBitisTarihi.required}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          GERİ
        </Button>
        <Button
          variant="contained"
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          İLERİ
        </Button>
      </Box>
    </>
  );
}
