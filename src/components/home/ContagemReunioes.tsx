'use client'
import listaReunioesFiltradasAtom from "@/domain/atoms/listaReunioesFiltradasAtom";
import { useAtom } from "jotai";

export default function ContagemReunioes(){
   const [listaReunioesFiltradas, setListaReunioesFiltradas] = useAtom(listaReunioesFiltradasAtom)

   var resultadosNoPlural = listaReunioesFiltradas.length > 1

   return (
      <p style={{borderBottom: '1px solid var(--cinzaEscuro)', fontWeight: 'bold', marginBottom: '.5rem'}}>
         {listaReunioesFiltradas.length} RESULTADO{resultadosNoPlural ? 'S' : ''} ENCONTRADO{resultadosNoPlural ? 'S' : ''}
      </p>
   )
}