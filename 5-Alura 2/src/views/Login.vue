<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email"/>
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" class="form-control" v-model="usuario.password"/>
      </div>
      <p class="alert alert-danger" v-if="mensagemErro">{{mensagemErro}}</p>
      <button type="submit" class="btn btn-primary brn-block">Logar</button>
      <router-link :to="{name: 'novo.usuario'}">
        não possui um cadastro, cadastre-se aqui!
      </router-link>
    </form>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        usuario:{},
        mensagemErro:''
      }
    },

    methods:{
      efetuarLogin() {
        this.$store.dispatch('efetuarLogin', this.usuario)
          .then(()=>{
            this.$router.push({name:'gerentes'})
            this.mensagemErro = ''
          })
          .catch(erro =>{
            if(erro.request.status === 4001){
              this.mensagemErro = 'Login ou Senha invalidos'
            }
          })
          //.$http
          // .post("auth/login", this.usuario)
          // .then(response => {
          //   console.log(response);
          //   //localStorage.setItem("token", response.data.access_token);
          //   //this.$store.state.token = response.data.access_token
          //   //this.$store.state.usuario = response.data.user
          //   this.$store.commit('DEFINIR_USUARIO_LOGADO',{
          //     token: response.data.access_token,
          //     usuario: response.data.user
          //   })
          //   this.$router.push({ name: "gerentes" });
          // })
          // .catch(erro => console.log(erro));
      }
    }
  }
</script>

<style scoped>

</style>
