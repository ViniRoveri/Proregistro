'use client'
import '@/css/home/filtrosListaReunioes.css'
import { useEffect, useState } from "react";
import SelectListaReunioes from "./partials FiltrosListaReunioes/SelectListaReunioes";
import usuarios from "@/domain/componentsTexts/usuarios";
import statusTypes from '@/domain/componentsTexts/statusTypes';
import DataListaReunioes from './partials FiltrosListaReunioes/DataListaReunioes';
import PesquisaListaReunioes from './partials FiltrosListaReunioes/PesquisaListaReunioes';
import { useAtom } from 'jotai';
import listaReunioesFiltradasAtom from '@/domain/atoms/listaReunioesFiltradasAtom';
import reunioes from '@/domain/componentsTexts/reunioes';

export default function FiltrosListaReunioes(){
   const [participante, setParticipante] = useState('')
   const [status, setStatus] = useState('')
   const [data, setData] = useState<Date | null>(null)
   const [pesquisaListaReunioes, setPesquisaListaReunioes] = useState('')
   const [listaReunioesFiltradas, setListaReunioesFiltradas] = useAtom(listaReunioesFiltradasAtom)

   function atualizarReunioesFiltradas(){
      var reunioesFiltradas = reunioes

      if(participante){
         reunioesFiltradas = reunioesFiltradas.filter(r => r.nomesParticipantes.includes(participante))
      }
      if(status){
         reunioesFiltradas = reunioesFiltradas.filter(r => r.status == status)
      }
      if(data){
         reunioesFiltradas = reunioesFiltradas.filter(r => r.data.getTime() == data.getTime())
      }
      if(pesquisaListaReunioes){
         reunioesFiltradas = reunioesFiltradas.filter(r => 
            r.empresa1.toLowerCase().includes(pesquisaListaReunioes.toLowerCase())
            || r.empresa2.toLowerCase().includes(pesquisaListaReunioes.toLowerCase())
            || r.pauta.toLowerCase().includes(pesquisaListaReunioes.toLowerCase())
         )
      }

      setListaReunioesFiltradas(reunioesFiltradas)
   }

   useEffect(()=>{
      atualizarReunioesFiltradas()
   }, [participante, status, data, pesquisaListaReunioes])

   return (
      <div id='containerFiltrosReunioes'>
         <div id='filtrosListaReunioes'>
            <SelectListaReunioes label='PARTICIPANTE' options={usuarios.map(u => {return {text: u.nome, value: u.nome}})} setValue={setParticipante} value={participante}/>

            <SelectListaReunioes label='STATUS' options={statusTypes.map(s => {return {text: s, value: s}})} setValue={setStatus} value={status}/>

            <DataListaReunioes label='DATA' setValue={setData} value={data}/>

            <div style={{backgroundColor: 'var(--cinzaEscuro)', height: 'inherit', margin: '0 1rem', width: '1px'}}/>

            <button onClick={() => {
               setParticipante('')
               setStatus('')
               setData(null)
            }} style={{padding: '0 .75rem'}} type='button'>Limpar Filtros</button>
         </div>

         <PesquisaListaReunioes setValue={setPesquisaListaReunioes}/>
      </div>
   )
}