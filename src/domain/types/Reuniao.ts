type Reuniao = {
   id: number
   empresa1: string
   empresa2: string
   pauta: string
   data: Date
   hora: number
   status: 'ATA DEFINITIVA' | 'ATA PRELIMINAR' | 'PENDENTE ASSINATURA'
   plataforma: 'GOOGLE MEET' | 'MICROSOFT TEAMS' | 'ZOOM'
   linkChamada: string
   duração: string
   nomesParticipantes: string[] 
}

export default Reuniao