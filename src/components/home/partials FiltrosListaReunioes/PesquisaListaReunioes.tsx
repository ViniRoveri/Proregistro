import { Dispatch, SetStateAction, useRef, useState } from "react"

type Props = {
   setValue: Dispatch<SetStateAction<string>>
}

export default function PesquisaListaReunioes(props: Props){
   const inputRef = useRef<HTMLInputElement>(null)

   return (
      <div id='pesquisaListaReunioes'>
         <input maxLength={80} placeholder="Pesquisar..." ref={inputRef}/>
         <button onClick={() => props.setValue(inputRef.current?.value || '')} type="button"><i className="ri-search-line"></i></button>
      </div>
   )
}