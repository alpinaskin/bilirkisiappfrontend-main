import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
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
    gunlukCiplakYevmiye,
    gunlukIkramiye,
    gunlukServis,
    gunlukYemek,
    gunlukYakacak,
    gunlukDigerHaklar
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        gunlukCiplakYevmiye,
        gunlukIkramiye,
        gunlukServis,
        gunlukYemek,
        gunlukYakacak,
        gunlukDigerHaklar
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      gunlukCiplakYevmiye,
      gunlukIkramiye,
      gunlukServis,
      gunlukYemek,
      gunlukYakacak,
      gunlukDigerHaklar
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
            label="Günlük Yevmiye"
            name="gunlukCiplakYevmiye"
            type="text"
            defaultValue={gunlukCiplakYevmiye.value}
            onChange={handleChange}
            error={!!gunlukCiplakYevmiye.error}
            helperText={gunlukCiplakYevmiye.error}
            required={gunlukCiplakYevmiye.required}
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
            label="Günlük İkramiye"
            name="gunlukIkramiye"
            type="text"
            defaultValue={gunlukIkramiye.value}
            onChange={handleChange}
            error={!!gunlukIkramiye.error}
            helperText={gunlukIkramiye.error}
            required={gunlukIkramiye.required}
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
            label="Günlük Servis"
            name="gunlukServis"
            type="text"
            defaultValue={gunlukServis.value}
            onChange={handleChange}
            error={!!gunlukServis.error}
            helperText={gunlukServis.error}
            required={gunlukServis.required}
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
            label="Günlük Yemek"
            name="gunlukYemek"
            type="text"
            defaultValue={gunlukYemek.value}
            onChange={handleChange}
            error={!!gunlukYemek.error}
            helperText={gunlukYemek.error}
            required={gunlukYemek.required}
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
            label="Günlük Yakacak"
            name="gunlukYakacak"
            type="text"
            defaultValue={gunlukYakacak.value}
            onChange={handleChange}
            error={!!gunlukYakacak.error}
            helperText={gunlukYakacak.error}
            required={gunlukYakacak.required}
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
            label="Günlük Diğer Haklar"
            name="gunlukDigerHaklar"
            type="text"
            defaultValue={gunlukDigerHaklar.value}
            onChange={handleChange}
            error={!!gunlukDigerHaklar.error}
            helperText={gunlukDigerHaklar.error}
            required={gunlukDigerHaklar.required}
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
