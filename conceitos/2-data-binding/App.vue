<template>
  <div>
    <h1>Hello {{name}}!</h1>
    <input type="text" v-model="name" placeholder="Digite seu nome">
  </div>
</template>

<script>
    export default {
        data:()=>({
            name:''
        })
    }
</script>

<style>

</style>