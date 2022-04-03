import React, { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { AppContext } from "./Context";
import axios from "axios";

export default function Confirm() {
  const { formValues, handleBack, handleNext } = useContext(AppContext);
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
    gunlukDigerHaklar
  } = formValues;

  function extract(object, keys) {
    return keys.reduce(function (o, k) {
      o[k] = object[k];
      delete object[k];
      return o;
    }, {});
  }

  const handleSubmit = () => {
    // Remove unwanted properties from formValue object
    let form = {};

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value
      };
      return form;
    });
    // Do whatever with the values
    let raporBilgileri: RaporBilgileri = extract(form, [
      "davaliAdi",
      "davaciAdi",
      "davaliVekili",
      "davaciVekili",
      "bilirkisi",
      "raporunDuzenlenecegiMakam",
      "esasNo"
    ]);
    let tarihBilgileri = extract(form, [
      "raporTarihi",
      "davaTarihi",
      "kazaliDogumTarihi",
      "kazaTarihi",
      "ucretTarihi",
      "istirahatBitisTarihi"
    ]);
    let ucretBilgileri = extract(form, [
      "gunlukCiplakYevmiye",
      "gunlukIkramiye",
      "gunlukServis",
      "gunlukYemek",
      "gunlukYakacak",
      "gunlukDigerHaklar"
    ]);
    let ekBilgiler = extract(form, [
      "davaliKusurOrani",
      "maluliyetOrani",
      "sgkAyligiPesinDegeri",
      "geciciIsGoremezlikTutari",
      "maddiTazminatIstek",
      "kazaliCinsiyet",
      "kazalininMedeniHali",
      "kazalininEsiCalisiyor"
    ]);
    let postData = {
      ucretBilgileri,
      raporBilgileri,
      tarihBilgileri,
      ekBilgiler
    };
    const json = JSON.stringify(postData, null, 2);
    console.log(json);
    axios
      .post(`http://localhost:8080/api/v1/madditazminat/`, json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log(response.data);
      });

    // Show last component or success message
    handleNext();
  };

  return (
    <>
      <List dense disablePadding>
        <ListItem>
          <ListItemText
            primary="Davalı Adı"
            secondary={davaliAdi.value || "Not Provided"}
          />
          <ListItemText
            primary="Davacı Adı"
            secondary={davaciAdi.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Davalı Vekili"
            secondary={davaliVekili.value || "Not Provided"}
          />
          <ListItemText
            primary="Davacı Vekili"
            secondary={davaciVekili.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Raporun Düzenleneceği Makam"
            secondary={raporunDuzenlenecegiMakam.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Bilirkişi Adı"
            secondary={bilirkisi.value || "Not Provided"}
          />

          <ListItemText
            primary="Esas Numarası"
            secondary={esasNo.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Rapor Tarihi"
            secondary={raporTarihi.value || "Not Provided"}
          />
          <ListItemText
            primary="Dava Tarihi"
            secondary={davaTarihi.value || "Not Provided"}
          />
          <ListItemText
            primary="Doğum Tarihi"
            secondary={kazaliDogumTarihi.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Kaza Tarihi"
            secondary={kazaTarihi.value || "Not Provided"}
          />
          <ListItemText
            primary="Ücret Tarihi"
            secondary={ucretTarihi.value || "Not Provided"}
          />
          <ListItemText
            primary="İstirahat Bitiş Tarihi"
            secondary={istirahatBitisTarihi.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Günlük Yevmiye"
            secondary={gunlukCiplakYevmiye.value || "Not Provided"}
          />
          <ListItemText
            primary="Günlük Ikramiye"
            secondary={gunlukIkramiye.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Günlük Servis"
            secondary={gunlukServis.value || "Not Provided"}
          />
          <ListItemText
            primary="Günlük Yemek"
            secondary={gunlukYemek.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Günlük Yakacak"
            secondary={gunlukYakacak.value || "Not Provided"}
          />
          <ListItemText
            primary="Günlük Diğer Haklar"
            secondary={gunlukDigerHaklar.value || "Not Provided"}
          />
        </ListItem>
      </List>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          GERİ
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          ONAYLA & DEVAM ET
        </Button>
      </Box>
    </>
  );
}
