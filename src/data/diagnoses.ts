import type { Diagnosis } from '../types/common';

export const spineProblems: Diagnosis[] = [
  {
    id: 'skolioza',
    title: 'Skolióza',
    subtitle: 'Zakrivenie chrbtice, ktoré ovplyvňuje držanie tela',
    description: 'Skolióza predstavuje bočné zakrivenie chrbtice, ktoré sa môže vyskytnúť v akomkoľvek veku. Tento stav výrazne ovplyvňuje držanie tela a môže spôsobovať bolesti alebo obmedzenia pohybu. Včasná diagnostika a správne zvolená terapia sú kľúčové pre úspešnú liečbu.',
    symptoms: [
      { id: 'asymmetria', text: 'Asymetria ramien alebo bokov' },
      { id: 'nerovne-lopatky', text: 'Nerovnaké výšky lopatiek' },
      { id: 'bolest-chrbta', text: 'Bolesť chrbta pri dlhšom státí' },
      { id: 'unavnost', text: 'Rýchla únava pri fyzickej aktivite' }
    ],
    treatments: [
      {
        title: 'Špirálna stabilizácia',
        description: 'Cielené cvičenia na korekciu svalových dysbalancií a zlepšenie držania tela'
      },
      {
        title: 'Individuálny tréning',
        description: 'Personalizovaný program cvičení prispôsobený stupňu skoliózy'
      }
    ]
  },
  {
    id: 'hernia',
    title: 'Hernia disku',
    subtitle: 'Poškodenie medzistavcovej platničky s tlakom na nervy',
    description: 'Hernia disku vzniká, keď sa medzistavcová platnička posunie zo svojej prirodzenej polohy a tlačí na okolité nervy. Tento stav môže spôsobovať intenzívnu bolesť a obmedzenia pohybu. Správne zvolená rehabilitácia dokáže výrazne zmierniť príznaky a často predísť potrebe operácie.',
    symptoms: [
      { id: 'ostra-bolest', text: 'Ostrá bolesť v chrbte' },
      { id: 'vyžarovanie', text: 'Vyžarovanie bolesti do nôh' },
      { id: 'brnenie', text: 'Brnenie alebo necitlivosť' },
      { id: 'slabost', text: 'Svalová slabosť v nohách' }
    ],
    treatments: [
      {
        title: 'Dekompresné cvičenia',
        description: 'Cvičenia na uvoľnenie tlaku na nervové korene'
      },
      {
        title: 'Stabilizačný tréning',
        description: 'Posilnenie hlbokých stabilizačných svalov chrbtice'
      }
    ]
  },
  {
    id: 'stenoza',
    title: 'Spinálna stenóza',
    subtitle: 'Zúženie miechového kanála s tlakom na nervy',
    description: 'Spinálna stenóza predstavuje zúženie priestoru v chrbtici, kde prechádzajú nervy. Tento stav môže výrazne ovplyvniť kvalitu života, spôsobovať bolesti a obmedzovať pohyblivosť. Včasná intervencia a správne cvičenia dokážu výrazne zmierniť príznaky a spomaliť progresiu ochorenia.',
    symptoms: [
      { id: 'bolest-pri-chodzi', text: 'Bolesť pri chôdzi' },
      { id: 'klaudikacia', text: 'Neurogenická klaudikácia' },
      { id: 'slabost-noh', text: 'Slabosť v nohách' },
      { id: 'problemy-rovnováha', text: 'Problémy s rovnováhou' }
    ],
    treatments: [
      {
        title: 'Mobilizačné techniky',
        description: 'Jemné techniky na zlepšenie pohyblivosti chrbtice'
      },
      {
        title: 'Posilňovacie cvičenia',
        description: 'Cielené posilnenie podporných svalov chrbtice'
      }
    ]
  },
  {
    id: 'hyperlordoza',
    title: 'Hyperlordóza / Hyperkyfóza',
    subtitle: 'Nadmerné zakrivenie chrbtice v predozadnom smere',
    description: 'Hyperlordóza a hyperkyfóza sú stavy, pri ktorých dochádza k nadmernému zakriveniu chrbtice v predozadnom smere. Hyperlordóza sa prejavuje ako nadmerné prehnutie v bedrových partiách, zatiaľ čo hyperkyfóza spôsobuje výrazné vyklenutie v hrudnej časti.',
    symptoms: [
      { id: 'vyklenuty-chrbat', text: 'Výrazne vyklenutý chrbát' },
      { id: 'bolest-bedier', text: 'Bolesť v bedrových partiách' },
      { id: 'tuhosť', text: 'Tuhosť chrbtice' },
      { id: 'zlé-držanie', text: 'Zlé držanie tela' }
    ],
    treatments: [
      {
        title: 'Korekčné cvičenia',
        description: 'Cvičenia na korekciu nadmerného zakrivenia'
      },
      {
        title: 'Posilnenie jadra',
        description: 'Posilnenie svalov trupu pre lepšiu podporu chrbtice'
      }
    ]
  },
  {
    id: 'spondylolisteza',
    title: 'Spondylolistéza',
    subtitle: 'Posun stavca voči susednému stavcu',
    description: 'Spondylolistéza je stav, pri ktorom dochádza k posunu jedného stavca voči druhému. Tento posun môže spôsobovať tlak na okolité nervy a viesť k bolestiam alebo obmedzeniam pohyblivosti.',
    symptoms: [
      { id: 'bolest-kríža', text: 'Bolesť v krížovej oblasti' },
      { id: 'vyžarovanie-nôh', text: 'Vyžarovanie do nôh' },
      { id: 'stuhnutosť', text: 'Stuhnutosť chrbtice' },
      { id: 'slabosť-svalov', text: 'Svalová slabosť' }
    ],
    treatments: [
      {
        title: 'Stabilizačné cvičenia',
        description: 'Cvičenia na stabilizáciu postihnutého segmentu'
      },
      {
        title: 'Mobilizácia',
        description: 'Jemná mobilizácia na zlepšenie pohyblivosti'
      }
    ]
  },
  {
    id: 'scheuermann',
    title: 'Scheuermannova choroba',
    subtitle: 'Juvenilná kyfóza spôsobujúca hrbatenie',
    description: 'Scheuermannova choroba je vývojová porucha chrbtice, ktorá sa prejavuje hlavne počas rastového obdobia. Spôsobuje nadmerné vyklenutie (kyfózu) v hrudnej oblasti chrbtice, čo vedie k typickému hrbateniu.',
    symptoms: [
      { id: 'hrbatenie', text: 'Výrazné hrbatenie' },
      { id: 'bolest-hrudník', text: 'Bolesť v hrudníkovej oblasti' },
      { id: 'únava-chrbta', text: 'Rýchla únava chrbta' },
      { id: 'obmedzený-pohyb', text: 'Obmedzený rozsah pohybu' }
    ],
    treatments: [
      {
        title: 'Korekčná gymnastika',
        description: 'Špecializované cvičenia na korekciu kyfózy'
      },
      {
        title: 'Dychové cvičenia',
        description: 'Cvičenia na zlepšenie dychovej funkcie'
      }
    ]
  }
];