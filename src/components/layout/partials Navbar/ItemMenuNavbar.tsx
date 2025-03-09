'use client'
import Circulo from "@/components/global/Circulo";
import ItemMenu from "@/domain/types/ItemMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
   item: ItemMenu
}

export default function ItemMenuNavbar(props: Props){
   const pathname = usePathname()

   return (
      <button className={`itemMenu ${pathname == props.item.url ? 'isMenuAtivo' : ''}`} type='button'>
         <Link href={props.item.url}>
            {props.item.texto}

            {props.item.texto == 'Assinatura' ?
               <Circulo cor="red" tamanho={15}/>
            : <></>}
         </Link>
      </button>
   )
}