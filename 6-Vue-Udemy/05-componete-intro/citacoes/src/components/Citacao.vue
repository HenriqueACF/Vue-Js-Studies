<template>
    <div class="citacao">
        <slot></slot>
    </div>
</template>

<script>
export default {
    created(){
        console.log('created')
    },
    destroyed(){
        console.log('destroyed')
    },
    activated(){
        console.log('activated')
    },
    deactived(){
        console.log('deactived')
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    
</style>
