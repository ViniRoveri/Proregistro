type Props = {
   status: 'ATA DEFINITIVA' | 'ATA PRELIMINAR' | 'PENDENTE ASSINATURA'
}

export default function StatusReuniao(props: Props){
   const corStatus = props.status == 'ATA DEFINITIVA' ? '#d7e8d1' : props.status == 'ATA PRELIMINAR' ? '#fcfad2' : '#fceeeb'

   return (
      <p className="statusReuniao" style={{backgroundColor: corStatus}}>
         {props.status}
      </p>
   )
}