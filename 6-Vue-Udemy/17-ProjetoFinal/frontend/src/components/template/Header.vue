<template>
  <header class="header">
    <a class="toggle" @click="toggleMenu">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <h1 class="title">
      {{title}}
    </h1>
  </header>
</template>

<script>
export default {
  name:'Header',
  props:{
    title:String,
    hideToggle:Boolean
  },
  computed:{
    icon(){
      return "fa-angle-left"
    }
  },
  methods:{
    toggleMenu(){
      
    }
  }
}
</script>

<style>
  .header{
    grid-area: header;
    background: linear-gradient(to right, #1E469A, #49A7C1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title{
    font-size: 1.2rem;
    color: #FFF;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
  }

  .title a{
    color: #FFF;
    text-decoration: none;
  }

  header.header > a.toggle{
    width: 60px;
    height: 100%;
    color: #FFF;
    justify-self: flex-start;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header.header > a.toggle:hover{
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>