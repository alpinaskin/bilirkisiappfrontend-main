// ** Icon imports
import AccountCogOutline from "mdi-material-ui/AccountCogOutline";
import AccountTie from "mdi-material-ui/AccountTie";
import AccountGroup from "mdi-material-ui/AccountGroup";
import FileDocumentMultipleOutline from "mdi-material-ui/FileDocumentMultipleOutline";
import InformationVariant from "mdi-material-ui/InformationVariant";
import ArchiveSearchOutline from "mdi-material-ui/ArchiveSearchOutline";

// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types";

const navigation = (): VerticalNavItemsType => {
  return [
    // {
    //   title: "Ana Ekran",
    //   icon: HomeOutline,
    //   path: "/"
    // },
    {
      title: "Bilirkişi Rapor Oluştur",
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
      title: "Arşiv",
      icon: ArchiveSearchOutline,
      path: "/archive"
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
    }
  ];
};

export default navigation;
