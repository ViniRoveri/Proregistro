import Link from "next/link";

export default function BotaoSuporte(){
   return (
      <button id="botaoSuporte" type="button">
         <Link href='/suporte'>
            <i className="ri-whatsapp-line"/> Suporte
         </Link>
      </button>
   )
}