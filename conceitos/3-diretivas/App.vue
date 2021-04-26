<template>
  <div>
    <h1>Minha lista de tarefas</h1>

    <button @click="()=> showList = !showList">
        Ver lista
    </button>
    <br>
    <input type="text" v-focus>

    <ul v-if="showList">
        <li
            v-for="(task, index) in tasks" 
            :key="`${task}-${index}`"
        >
            {{task.name}}
        </li>
    </ul>
    <p v-else>Lista de tarefas escondidas</p>
  </div>
</template>

<script>
    const focus = {
        inserted: (e) =>{
            e.focus()
        }
    }
    export default {
        directives:{
            focus
        },
        data:()=>({
            showList:false,
            tasks:[
                {name:'Fazer o curso de Vue.js', isDone:false}
            ]
        })
    }
</script>
