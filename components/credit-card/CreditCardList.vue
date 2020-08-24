<template>
    <ul class="credit-card-list">
        <credit-card
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
        />
    </ul>
</template>

<script>
    import CreditCard from '~/components/credit-card/CreditCard';

    export default {
        components : {
            CreditCard,
        },

        props : {
            cards: {
                type: Array,
                default: () => [],
            },
        }
    }
</script>

<style lang="scss" scoped>
.credit-card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

</style>
