import '@/css/layout/navbar.css'
import BotaoNovaAta from './partials Navbar/BotaoNovaAta'
import ListaItensMenu from './partials Navbar/ListaItensMenu'
import ItemMenuNavbar from './partials Navbar/ItemMenuNavbar'

export default function Navbar(){
   return (
      <nav>
         <div>
            <img alt='Proregistro' src="/img/logo.jpg"/>

            <BotaoNovaAta/>

            <ListaItensMenu/>
         </div>

         <ItemMenuNavbar item={{texto: 'Configurações', url: '/configuracoes'}}/>
      </nav>
   )
}