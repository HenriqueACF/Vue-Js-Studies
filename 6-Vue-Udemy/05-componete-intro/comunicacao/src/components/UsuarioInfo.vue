<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{inverterNome()}}</strong></p>
        <p>Idade do usuario: <strong>{{idade}}</strong> </p>
        <button @click="reiniciarNome">Reinicar Nome</button>
    </div>
</template>

<script>
export default {
    props:{
        nome:{
            type:String,
            required: true
        },
        idade: Number
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        }, reiniciarNome(){
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
