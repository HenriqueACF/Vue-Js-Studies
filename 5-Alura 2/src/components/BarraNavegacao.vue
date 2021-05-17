<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <BarraNavegacaoQuandoLogado v-if="usuarioestaLogado"/>
      <BarraNavegacaoQuandoDeslogadoLogado v-else/>
    </div>
  </nav>
</template>

<script>
import BarraNavegacaoQuandoLogado from './BarraNavegacaoQuandoLogado'
import BarraNavegacaoQuandoDeslogadoLogado from 'BarraNavegacaoQuandoDeslogadoLogado'

export default{
  components:{
    BarraNavegacaoQuandoLogado,
    BarraNavegacaoQuandoDeslogadoLogado
  },

  computed:{
    usuarioestaLogado(){
      return Boolean(localStorage.getItem('token'))
    }
  }
}
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>
