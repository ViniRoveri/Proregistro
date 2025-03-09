'use client'
import { useRouter } from "next/navigation"

export default function notFound(){
   const router = useRouter()

   return (
      <div id="notFound">
         <p>Página Não Encontrada.</p>
         
         <button onClick={() => router.back()} type="button">
            <i className="ri-arrow-left-long-line"/> voltar
         </button>
      </div>
   )
}