new Vue({
  el:'#desafio',
  data:{
    nome:'Henrique',
    idade:24,
    imagem:'http://files.cod3r.com.br/curso-vue/vue.jpg',
  },
  methods:{
    newIdade(){
      return this.idade * 3
    }
  }
})
