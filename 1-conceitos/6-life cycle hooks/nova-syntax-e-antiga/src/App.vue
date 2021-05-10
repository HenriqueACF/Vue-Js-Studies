<template>
  <h1>Life cycle hooks</h1>
</template>

<script>
import {onMounted} from 'vue'

    export default{
        setup(){
            onMounted(()=>{
                console.log('Foi Montado composition API')
            })
        }
    }
// export default {
//     mounted(){
//         console.log('Foi montado!')
//     }
// }
</script>

<style>

</style>