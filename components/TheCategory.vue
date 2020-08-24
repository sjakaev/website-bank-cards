<template>
    <div>
        <h1>{{ selectedAdditional.title }}</h1>
        <p>{{ selectedAdditional.text }}</p>
        <credit-card-list
            :cards="selectedCards"
        />
    </div>
</template>

<script>
import { additionalText } from '~/data/seoText';
import { cards } from '~/data/creditCards';
import CreditCardList from '~/components/credit-card/CreditCardList';

export default {
    components: {
        CreditCardList,
    },

    props : {
        slug: {
            type: String,
            default: null,
        },
    },
    data : () => ({
        additionalText : additionalText,
        cards          : cards,
    } ),
    computed : {
        selectedAdditional() {
            return additionalText.find(item => item.slug == this.slug);
        },
        selectedCards() {
            let cardsArr = [];

            for (let cardId of this.selectedAdditional.cardsId) {
                cardsArr.push(cards.find(item => item.id == cardId));
            }

            return cardsArr;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
