'use client'
import '@/css/home/listaReunioes.css'
import listaReunioesFiltradasAtom from "@/domain/atoms/listaReunioesFiltradasAtom"
import { useAtom } from "jotai"
import CardReuniao from "./partials ListaReunioes/CardReuniao"

export default function ListaReunioes(){
   const [listaReunioesFiltradas, setListaReunioesFiltradas] = useAtom(listaReunioesFiltradasAtom)

   return (
      <div id="listaReunioes">
         {listaReunioesFiltradas.map(r =>
            <CardReuniao key={r.id} reuniao={r}/>
         )}
      </div>
   )
}