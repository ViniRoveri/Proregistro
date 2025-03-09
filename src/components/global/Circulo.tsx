type Props = {
   cor: string
   tamanho: number
}

export default function Circulo(props: Props){
   return (
      <div className="circulo" style={{backgroundColor: props.cor, height: props.tamanho, width: props.tamanho}}/>
   )
}