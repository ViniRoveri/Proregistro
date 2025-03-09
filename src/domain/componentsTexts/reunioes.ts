import Reuniao from "../types/Reuniao";

const reunioes: Reuniao[] = [
   {
      id: 1,
      empresa1: 'COMCAP',
      empresa2: 'Pref. Novo Hamburgo',
      pauta: 'DISCUSSÃO DE REAJUSTE ANUAL DE TAXA DE COLETA',
      data: new Date(2025, 0, 6),
      hora: 17,
      status: 'PENDENTE ASSINATURA',
      plataforma: 'GOOGLE MEET',
      linkChamada: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duração: '55 min.',
      nomesParticipantes: ['Alexandre Jacob', 'Davi Reis']
   },
   {
      id: 2,
      empresa1: 'SINASTREM',
      empresa2: 'Pref. Novo Hamburgo',
      pauta: 'DISCUSSÃO DE REAJUSTE ANUAL DE TAXA',
      data: new Date(2025, 1, 7),
      hora: 16,
      status: 'PENDENTE ASSINATURA',
      plataforma: 'MICROSOFT TEAMS',
      linkChamada: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duração: '45 min.',
      nomesParticipantes: ['Alexandre Jacob', 'Davi Reis']
   },
   {
      id: 3,
      empresa1: 'COMCAP',
      empresa2: 'Pref. Novo Hamburgo',
      pauta: 'DISCUSSÃO DE REAJUSTE ANUAL',
      data: new Date(2025, 2, 8),
      hora: 15,
      status: 'ATA PRELIMINAR',
      plataforma: 'ZOOM',
      linkChamada: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duração: '35 min.',
      nomesParticipantes: ['Alexandre Jacob']
   },
   {
      id: 4,
      empresa1: 'COMCAP',
      empresa2: 'Pref. Novo Hamburgo',
      pauta: 'DISCUSSÃO DE REAJUSTE',
      data: new Date(2025, 3, 9),
      hora: 14,
      status: 'ATA DEFINITIVA',
      plataforma: 'GOOGLE MEET',
      linkChamada: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duração: '25 min.',
      nomesParticipantes: ['Davi Reis']
   },
   {
      id: 5,
      empresa1: 'COMCAP',
      empresa2: 'Pref. Novo Hamburgo',
      pauta: 'DISCUSSÃO',
      data: new Date(2025, 3, 10),
      hora: 13,
      status: 'PENDENTE ASSINATURA',
      plataforma: 'GOOGLE MEET',
      linkChamada: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duração: '15 min.',
      nomesParticipantes: ['Alexandre Jacob']
   }
]

export default reunioes