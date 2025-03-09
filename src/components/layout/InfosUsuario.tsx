import '@/css/layout/infosUsuario.css'
import usuarioLogado from "@/domain/componentsTexts/usuarioLogado";
import IconeUsuario from '../global/IconeUsuario';

export default function InfosUsuario(){
   return (
      <div id='infosUsuario'>
         <IconeUsuario nome={usuarioLogado.nome}/>

         <div id='nomesUsuario'>
            <p>{usuarioLogado.nome}</p>
            <p>{usuarioLogado.empresa}</p>
         </div>
      </div>
   )
}