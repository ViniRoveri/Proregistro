import CardInfosReuniao from "@/components/reuniao/CardInfosReuniao"
import OpcoesReuniao from "@/components/reuniao/OpcoesReuniao"
import reunioes from "@/domain/componentsTexts/reunioes"

type Props = {
   params: Promise<{ 
      id: string
   }>
}

export default async function page(props: Props){
   const idReuniao = (await props.params).id
   const reuniao = reunioes.find(r => r.id.toString() == idReuniao)
   if(!reuniao) return <></>

   return (
      <div style={{display: 'flex', gap: '2rem', height: '100%'}}>
         <CardInfosReuniao reuniao={reuniao}/>

         <OpcoesReuniao id={idReuniao}/>
      </div>
   )
}