import Circulo from "@/components/global/Circulo"
import Reuniao from "@/domain/types/Reuniao"
import StatusReuniao from "../../global/StatusReuniao"
import Link from "next/link"
import conversoes from "@/domain/utility/conversoes"

type Props = {
   reuniao: Reuniao
}

export default function CardReuniao(props: Props){
   return (
      <Link className="cardReuniao" href={`/reuniao/${props.reuniao.id}`}>
         <div style={{marginTop: '4px'}}>
            <Circulo cor="green" tamanho={16}/> 
         </div>

         <div>
            <p>[Reunião {props.reuniao.empresa1} e {props.reuniao.empresa2}]</p>
            <p style={{color: 'var(--cinza)'}}>{props.reuniao.pauta}</p>
            <p style={{color: 'var(--cinza)'}}>{conversoes.dataParaStringSimplificada(props.reuniao.data)} | {props.reuniao.hora}h</p>
         </div>

         <div style={{marginTop: '4px'}}>
            <StatusReuniao status={props.reuniao.status}/>
         </div>
      </Link>
   )
}