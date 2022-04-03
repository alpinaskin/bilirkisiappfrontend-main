// ** Icon imports
import Login from "mdi-material-ui/Login";
import Table from "mdi-material-ui/Table";
import CubeOutline from "mdi-material-ui/CubeOutline";
import HomeOutline from "mdi-material-ui/HomeOutline";
import FormatLetterCase from "mdi-material-ui/FormatLetterCase";
import AccountCogOutline from "mdi-material-ui/AccountCogOutline";
import CreditCardOutline from "mdi-material-ui/CreditCardOutline";
import AccountPlusOutline from "mdi-material-ui/AccountPlusOutline";
import AlertCircleOutline from "mdi-material-ui/AlertCircleOutline";
import GoogleCirclesExtended from "mdi-material-ui/GoogleCirclesExtended";
import AccountTie from "mdi-material-ui/AccountTie";
import AccountGroup from "mdi-material-ui/AccountGroup";
import FileDocumentMultipleOutline from "mdi-material-ui/FileDocumentMultipleOutline";
import InformationVariant from "mdi-material-ui/InformationVariant";
import AccountStarOutline from "mdi-material-ui/AccountStarOutline";

// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Ana Ekran",
      icon: HomeOutline,
      path: "/"
    },
    {
      title: "Bilirkişi Rapor",
      icon: FileDocumentMultipleOutline,
      path: "/bilirkisi-rapor"
    },
    {
      title: "İletişim",
      icon: InformationVariant,
      path: "/contact"
    },
    {
      title: "Hesap Ayarları",
      icon: AccountCogOutline,
      path: "/account-settings"
    },
    {
      title: "Özel Üyelik",
      icon: AccountStarOutline,
      path: "/membership"
    },
    { sectionTitle: "YÖNETİCİ" },
    {
      title: "Panel",
      icon: AccountTie,
      path: "/admin"
    },
    {
      title: "Üyeler",
      icon: AccountGroup,
      path: "/admin/users"
    },
    {
      sectionTitle: "Sayfalar"
    },
    {
      title: "Giriş",
      icon: Login,
      path: "/pages/login",
      openInNewTab: true
    },
    {
      title: "Kayıt Ol",
      icon: AccountPlusOutline,
      path: "/pages/register",
      openInNewTab: true
    },
    {
      title: "Error",
      icon: AlertCircleOutline,
      path: "/pages/error",
      openInNewTab: true
    },
    {
      sectionTitle: "Kullanıcı Arayüzü"
    },
    {
      title: "Typography",
      icon: FormatLetterCase,
      path: "/typography"
    },
    {
      title: "Icons",
      path: "/icons",
      icon: GoogleCirclesExtended
    },
    {
      title: "Cards",
      icon: CreditCardOutline,
      path: "/cards"
    },
    {
      title: "Tables",
      icon: Table,
      path: "/tables"
    },
    {
      icon: CubeOutline,
      title: "Form Layouts",
      path: "/form-layouts"
    }
  ];
};

export default navigation;
