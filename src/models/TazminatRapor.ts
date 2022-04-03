import RaporBilgileri from "src/models/RaporBilgileri";

export interface TazminatRapor {
  raporBilgileri: RaporBilgileri;
  ekBilgiler: EkBilgiler;
  tarihBilgileri: TarihBilgileri;
  ucretBilgileri: UcretBilgileriS;
}
