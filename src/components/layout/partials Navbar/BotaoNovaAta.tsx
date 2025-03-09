import Link from "next/link";

export default function BotaoNovaAta(){
   return (
      <button id="botaoNovaAta" type="button">
         <Link href='/novaAta'>
            <i className="ri-add-circle-fill"/> Nova Reunião Com Ata
         </Link>
      </button>
   )
}