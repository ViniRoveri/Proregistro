import '@/css/reuniao/opcoesReuniao.css'
import Link from "next/link";

type Props = {
   id: string
}

export default function OpcoesReuniao(props: Props){
   return (
      <div id='opcoesReuniao'>
         <button style={{backgroundColor: '#005f82'}} type='button'>
            <Link href={`/ata/${props.id}`}>
               Visualizar Ata
            </Link>
         </button>

         <div>
            <p>Opções</p>

            <button type='button'>
               <Link href={`/assinatura/${props.id}`}>
                  Assinatura
               </Link>
            </button>

            <button type='button'>
               <Link href={`/editar/${props.id}`}>
                  Editar
               </Link>
            </button>
            
            <button type='button'>
               Deletar
            </button>

            <button type='button'>
               Exportar PDF
            </button>
         </div>

         <div>
            <p>Anotações</p>
            
            <button type='button'>
               <Link href={`/anotacoes/${props.id}`}>
                  Anotações
               </Link>
            </button>
         </div>
      </div>
   )
}