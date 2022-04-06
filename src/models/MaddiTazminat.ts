import { RaporBilgileri } from 'src/models/RaporBilgileri';
import { TarihBilgileri } from './TarihBilgileri'; 
import { UcretBilgileri } from './UcretBilgileri';
import { EkBilgiler } from './EkBilgiler';
import { TazminatRapor } from './TazminatRapor';

export interface MaddiTazminat {
    id: string | number;
    tazminatRapor: TazminatRapor
}