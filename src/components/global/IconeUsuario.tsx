type Props = {
   nome: string
}

export default function IconeUsuario(props: Props){
   return (
      <img alt={props.nome} className='iconeUsuario' src={`/img/usuarios/${props.nome}.jpg`} title={props.nome}/>
   )
}