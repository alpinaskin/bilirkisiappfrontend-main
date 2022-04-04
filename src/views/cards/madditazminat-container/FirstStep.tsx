import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "./Context";

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(
    AppContext
  );
  const {
    davaliAdi,
    davaciAdi,
    davaliVekili,
    davaciVekili,
    bilirkisi,
    raporunDuzenlenecegiMakam,
    esasNo
  } = formValues;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({
        davaliAdi,
        davaciAdi,
        davaliVekili,
        davaciVekili,
        bilirkisi,
        raporunDuzenlenecegiMakam,
        esasNo
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      davaliAdi,
      davaciAdi,
      davaliVekili,
      davaciVekili,
      bilirkisi,
      raporunDuzenlenecegiMakam,
      esasNo
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
            label="Davalı Adı"
            name="davaliAdi"
            placeholder=""
            value={davaliAdi.value}
            onChange={handleChange}
            error={!!davaliAdi.error}
            helperText={davaliAdi.error}
            required={davaliAdi.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Davacı Adı"
            name="davaciAdi"
            placeholder="Your last name"
            value={davaciAdi.value}
            onChange={handleChange}
            error={!!davaciAdi.error}
            helperText={davaciAdi.error}
            required={davaciAdi.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Davalı Vekili"
            name="davaliVekili"
            placeholder="Your davaliVekili address"
            value={davaliVekili.value}
            onChange={handleChange}
            error={!!davaliVekili.error}
            helperText={davaliVekili.error}
            required={davaliVekili.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Davacı Vekili"
            name="davaciVekili"
            value={davaciVekili.value}
            onChange={handleChange}
            error={!!davaciVekili.error}
            helperText={davaciVekili.error}
            required={davaciVekili.required}
          ></TextField>
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Raporun Düzenleneceği Makam"
            name="raporunDuzenlenecegiMakam"
            placeholder="Your davaliVekili address"
            value={raporunDuzenlenecegiMakam.value}
            onChange={handleChange}
            error={!!raporunDuzenlenecegiMakam.error}
            helperText={raporunDuzenlenecegiMakam.error}
            required={raporunDuzenlenecegiMakam.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Bilirkişi"
            name="bilirkisi"
            placeholder="Your bilirkisi address"
            value={bilirkisi.value}
            onChange={handleChange}
            error={!!bilirkisi.error}
            helperText={bilirkisi.error}
            required={bilirkisi.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Esas No"
            name="esasNo"
            placeholder="Your esasNo address"
            value={esasNo.value}
            onChange={handleChange}
            error={!!esasNo.error}
            helperText={esasNo.error}
            required={esasNo.required}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
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
