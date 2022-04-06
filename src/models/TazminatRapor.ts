import { RaporBilgileri } from "./RaporBilgileri";
import { EkBilgiler } from "./EkBilgiler";
import { TarihBilgileri } from "./TarihBilgileri";
import { UcretBilgileri } from "./UcretBilgileri";

export interface TazminatRapor {
  id?: string | number;
  raporBilgileri: RaporBilgileri;
  ekBilgiler?: EkBilgiler;
  tarihBilgileri: TarihBilgileri;
  ucretBilgileri?: UcretBilgileri;
}
