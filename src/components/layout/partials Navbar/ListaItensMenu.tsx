import menu from "@/domain/componentsTexts/menu";
import ItemMenuNavbar from "./ItemMenuNavbar";

export default function ListaItensMenu(){
   return (
      <div id="listaItensMenu">
         {menu.map(i =>
            <ItemMenuNavbar item={i} key={i.texto}/>
         )}
      </div>
   )
}