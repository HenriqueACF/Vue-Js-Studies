export default{
  computed:{
		fraseComVirgulas(){
			return this.frase.replace(/\s/g, ',')
		},
		frasesComTamanhos(){
			return this.frase.split(' ').map(p=> `${p} (${p.length})`).join(' ')
		}
	}
}