const conversoes = {
   dataParaString(data: Date){
      var dia = data.getDate().toString()
      var mes = (data.getMonth() + 1).toString()
      var ano = data.getFullYear().toString()

      return `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${ano}`
   },

   dataParaStringSimplificada(data: Date){
      const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

      var dia = data.getDate().toString()
      var indexMes = data.getMonth()

      return `${dia.padStart(2, '0')} de ${meses[indexMes]}`
   }
}

export default conversoes