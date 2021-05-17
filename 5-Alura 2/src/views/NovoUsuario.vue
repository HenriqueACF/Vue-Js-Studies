<template>
  <div class="container">
    <h1>Novo Usuario </h1>
    <form @submit.prevent="enviarFormulario">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" class="form-control" v-model="usuario.name"/>
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email"/>
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha"/>
      </div>
      <button class="btn btn-primary">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

  export default{
    data(){
      return{
        usuario:{
          name:'',
          password:'',
          email:''
        }
      }
    },

    methods:{
      enviarFormulario(){
        axios.post('http://localhost:8000/auth/register', this.usuario)
          .then(resposta => {
            console.log(resposta)
            this.$router.push({name:'login'})
          })
          .catch(erro => console.log(erro))
      }
    }
  }
</script>

<style scoped>

</style>
