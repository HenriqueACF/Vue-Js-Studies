<template>
    <section class="quote-list"> 
        <div class="quote" v-for="(quote, i) in quotes.slice().reverse()" :key={i}>
            <div class="quote-content">
                {{quote.content}}
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:['quotes']
}
</script>

<style lang="scss" scoped>
    .quote-list{
        padding: 32px;
        max-width: 720px;
        margin:0 auto;
    }

    .quote{
        background-color: var(--light);
        padding: 16px;
        border-radius: 16px;
        margin-bottom: 16px;

        &-content{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 18px;
            max-height: 18px;
        }

        &:hover{
            .quote-content{
                white-space: unset;
                max-height: unset;
            }
        }
    }
</style>