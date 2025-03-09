import '@/css/reuniao/cardInfosReuniao.css'
import Circulo from "../global/Circulo";
import Reuniao from '@/domain/types/Reuniao';
import StatusReuniao from '../global/StatusReuniao';
import Link from 'next/link';
import conversoes from '@/domain/utility/conversoes';
import IconeUsuario from '../global/IconeUsuario';

type Props = {
   reuniao: Reuniao
}

export default function CardInfosReuniao(props: Props){
   return (
      <div id='cardInfosReuniao'>
         <div id='tituloReuniao'>
            <Circulo cor='green' tamanho={18}/>
            <p>[Reunião {props.reuniao.empresa1} e {props.reuniao.empresa2}]</p>
         </div>

         <div id='infosReuniao'>
            <div>
               <p>Status</p>
               <StatusReuniao status={props.reuniao.status}/>
            </div>
            
            <div>
               <p>Plataforma</p>
               <p>{props.reuniao.plataforma}</p>
            </div>

            <div>
               <p>Videochamada</p>
               <Link href={props.reuniao.linkChamada} style={{color: 'var(--corPrincipal)'}} target='_blank'>
                  <i className="ri-link" style={{color: 'var(--corPrincipal)', fontSize: '18px'}}/> {props.reuniao.linkChamada}
               </Link>
            </div>

            <div>
               <p>Data</p>
               <p>{conversoes.dataParaStringSimplificada(props.reuniao.data)}</p>
            </div>
            
            <div>
               <p>Duracao</p>
               <p>{props.reuniao.duração}</p>
            </div>
         </div>

         <div id='infosPauta'>
            <p>Pauta</p>
            <p>{props.reuniao.pauta}</p>
         </div>

         <div id='infosParticipantes'>
            <p>Participantes</p>
            <div id='iconesParticipantes'>
               {props.reuniao.nomesParticipantes.map(nome =>
                  <IconeUsuario key={nome} nome={nome}/>
               )}
            </div>
         </div>
      </div>
   )
}