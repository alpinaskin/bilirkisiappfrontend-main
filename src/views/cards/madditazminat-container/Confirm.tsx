import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { AppContext } from "./Context";
import axios from "axios";

// ** Util Imports
import { createDoc } from "src/utils/Docx"

// ** Service Imports
import UserService from "src/services/UserService";

// ** Model Imports
import { RaporBilgileri } from "src/models/RaporBilgileri";
import { MaddiTazminat } from './../../../models/MaddiTazminat';

export default function Confirm() {
  const [maddiTazminat, setMaddiTazminat] = useState("");
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
  } = formValues;

  function extract(object:any, keys:any) {
    return keys.reduce(function (o:any, k:any) {
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
      "kazalininEsiCalisiyor",
      "kazalininCocukSayisi"
    ]);
    let postData = {
      ucretBilgileri,
      raporBilgileri,
      tarihBilgileri,
      ekBilgiler
    };

    UserService.postMaddiTazminat(postData).then(response => {
      setMaddiTazminat(response.data); 
      createDoc(response.data)
    })
    // Show last component or success message
    // handleNext();
  };

  return (
    <>
      <List dense disablePadding>
        <ListItem>
          <ListItemText
            primary="Davalı Adı"
            secondary={davaliAdi.value || "Boş bırakılmış"}
          />
          </ListItem>
          <ListItem>
          <ListItemText
            primary="Davacı Adı"
            secondary={davaciAdi.value || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Davalı Vekili"
            secondary={davaliVekili.value || "Boş bırakılmış"}
          />
          </ListItem>
          <ListItem>
          <ListItemText
            primary="Davacı Vekili"
            secondary={davaciVekili.value || "Boş bırakılmış"}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Raporun Düzenleneceği Makam"
            secondary={raporunDuzenlenecegiMakam.value || "Boş bırakılmış"}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Bilirkişi Adı"
            secondary={bilirkisi.value || "Boş bırakılmış"}
          />
          </ListItem>
          <ListItem>
          <ListItemText
            primary="Esas Numarası"
            secondary={esasNo.value || "Boş bırakılmış"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Rapor Tarihi"
            secondary={raporTarihi.value || "Boş bırakılmış"}
          />
          </ListItem>
          <ListItem>
          <ListItemText
            primary="Dava Tarihi"
            secondary={davaTarihi.value || "Boş bırakılmış"}
          />
          </ListItem>
          <ListItem>
          <ListItemText
            primary="Doğum Tarihi"
            secondary={kazaliDogumTarihi.value || "Boş bırakılmış"}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Kaza Tarihi"
            secondary={kazaTarihi.value || "Boş bırakılmış"}
          />
          </ListItem>
          <ListItem>
          <ListItemText
            primary="Ücret Tarihi"
            secondary={ucretTarihi.value || "Boş bırakılmış"}
          />
          </ListItem>
          <ListItem>
          <ListItemText
            primary="İstirahat Bitiş Tarihi"
            secondary={istirahatBitisTarihi.value || "Boş bırakılmış"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Günlük Yevmiye"
            secondary={gunlukCiplakYevmiye.value || "Boş bırakılmış"}
          />
          </ListItem>

          <ListItem>
          <ListItemText
            primary="Günlük Ikramiye"
            secondary={gunlukIkramiye.value || "Boş bırakılmış"}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Günlük Servis"
            secondary={gunlukServis.value || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Günlük Yemek"
            secondary={gunlukYemek.value || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Günlük Yakacak"
            secondary={gunlukYakacak.value || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Günlük Diğer Haklar"
            secondary={gunlukDigerHaklar.value || "Boş bırakılmış"}
          />
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemText
            primary="Davalı Kusur Oranı"
            secondary={davaliKusurOrani.value || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Maluliyet Oranı"
            secondary={maluliyetOrani.value || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Sgk Aylığı Peşin Değeri"
            secondary={sgkAyligiPesinDegeri.value || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Davalı Kusur Oranı"
            secondary={geciciIsGoremezlikTutari.value || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Maddi Tazminat İsteği"
            secondary={maddiTazminatIstek.value || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Kazalının Cinsiyeti"
            secondary={kazaliCinsiyet.value == "true" ? 'Erkek' : 'Kadın' || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Medeni Hali"
            secondary={kazalininMedeniHali.value == "true" ? 'Evli' : 'Bekar' || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Kazalının Eşi Çalışıyor Mu?"
            secondary={kazalininEsiCalisiyor.value == "true" ? 'Çalışıyor' : 'Çalışmıyor' || "Boş bırakılmış"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Kazalının Çocuk Sayısı"
            secondary={kazalininCocukSayisi.value || "Boş bırakılmış"}
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
