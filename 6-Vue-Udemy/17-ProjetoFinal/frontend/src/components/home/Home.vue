<template>
  <div class="home">
    <PageTitle 
      icon="fa fa-home" 
      main="Dashboard"
      sub="Base de Conhecimento"
    />
    <div class="stats">
      <Stat 
        title="Categorias" 
        :value="stat.categories"
        icon="fa fa-folder"
        color="#D54D50"
      />
      <Stat 
        title="Artigos" 
        :value="stat.articles"
        icon="fa fa-file"
        color="#3BC480"
      />  
      <Stat 
        title="Usuários" 
        :value="stat.users"
        icon="fa fa-user"
        color="#3282CD"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import Stat from './Stat.vue'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
  name:'Home',
  components:{
    PageTitle,
    Stat
  },
  data: function(){
    return {
      stat:{}
    }
  },
  methods:{
    getStats(){
      axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
    }
  },
  mounted(){
    this.getStats()
  }
}
</script>

<style>
  .stats{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>