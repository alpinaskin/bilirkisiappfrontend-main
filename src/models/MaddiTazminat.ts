import { RaporBilgileri } from 'src/models/RaporBilgileri';
import { TarihBilgileri } from './TarihBilgileri'; 
import { UcretBilgileri } from './UcretBilgileri';
import { EkBilgiler } from './EkBilgiler';

export interface MaddiTazminat {
    raporBilgileri: RaporBilgileri;
    tarihBilgileri: TarihBilgileri;
    ucretBilgileri: UcretBilgileri;
    ekBilgiler: EkBilgiler;
}