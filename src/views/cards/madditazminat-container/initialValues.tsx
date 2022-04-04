import { ValidationSchema } from "./Context";

export const initialValues: ValidationSchema = {
  davaliAdi: {
    value: "Ahmet Yılmaz",
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  davaciAdi: {
    value: "Mehmet Çakır",
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  davaliVekili: {
    value: "Av. Deniz Yalçın",
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 30
  },
  davaciVekili: {
    value: "Av. Murat Koşar",
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 30
  },
  bilirkisi: {
    value: "Murat Koçak",
    error: "",
    maxLength: 30
  },
  raporunDuzenlenecegiMakam: {
    value: "Ankara 1. İş Mahkemesi",
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 50
  },
  esasNo: {
    value: "2020/17",
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 10
  },
  raporTarihi: {
    value: "2018-05-28",
    error: "",
    required: true
  },
  davaTarihi: {
    value: "2017-10-21",
    error: "",
    required: true
  },
  kazaliDogumTarihi: {
    value: "1976-05-07",
    error: "",
    required: true
  },
  kazaTarihi: {
    value: "2016-01-04",
    error: "",
    required: true
  },
  ucretTarihi: {
    value: "2016-01-04",
    error: "",
    required: true
  },
  istirahatBitisTarihi: {
    value: "2016-01-15",
    error: "",
    required: true
  },
  gunlukCiplakYevmiye: {
    value: 63.45,
    error: "",
    required: true,
    validate: "decimal"
  },
  gunlukIkramiye: {
    value: 0.06,
    error: "",
    required: true,
    validate: "decimal"
  },
  gunlukServis: {
    value: 6.89,
    error: "",
    required: true,
    validate: "decimal"
  },
  gunlukYemek: {
    value: 7.03,
    error: "",
    required: true,
    validate: "decimal"
  },
  gunlukYakacak: {
    value: 0.08,
    error: "",
    required: true,
    validate: "decimal"
  },
  gunlukDigerHaklar: {
    value: 0.05,
    error: "",
    required: true,
    validate: "decimal"
  },
  davaliKusurOrani: {
    value: 0.24,
    error: "",
    required: true,
    validate: "decimal"
  },
  maluliyetOrani: {
    value: 0.96,
    error: "",
    required: true,
    validate: "decimal"
  },
  sgkAyligiPesinDegeri: {
    value: 1500,
    error: "",
    required: true,
    validate: "decimal"
  },
  geciciIsGoremezlikTutari: {
    value: 10,
    error: "",
    required: true,
    validate: "decimal"
  },
  maddiTazminatIstek: {
    value: 15000,
    error: "",
    required: true,
    validate: "decimal"
  },
  kazaliCinsiyet: {
    value: "true",
    error: "",
    required: true
  },
  kazalininMedeniHali: {
    value: "true",
    error: "",
    required: true
  },
  kazalininEsiCalisiyor: {
    value: "false",
    error: "",
    required: true
  },
  kazalininCocukSayisi: {
    value: 3,
    error: "",
    required: true
  }
};
