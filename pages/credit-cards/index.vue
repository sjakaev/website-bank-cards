<template>
    <div class="credit-cards">
        <div class="credit-cards__filter-background">
            <div class="page-container__content-wrapper">
                <h1>Кредитные карты</h1>
                <tag-list
                    :tags="tags"
                />

                <section class="credit-cards__filters">
                    <div class="credit-cards__filter">
                        <label class="typo__label">Банк</label>
                        <multiselect
                            v-model="selectBank"
                            placeholder="Банк"
                            :options="bankOptions"
                            selectLabel=""
                            deselectLabel=""
                            selectedLabel=""
                        />
                    </div>

                    <div class="credit-cards__filter">
                        <label class="typo__label">Льготный период</label>
                        <multiselect
                            v-model="selectPeriod"
                            placeholder="Банк"
                            :options="periodOptions"
                            selectLabel=""
                            deselectLabel=""
                            selectedLabel=""
                        />
                    </div>

                    <div class="credit-cards__filter">
                        <label class="typo__label">Кредитный лимит</label>
                        <multiselect
                            v-model="selectLimit"
                            placeholder="Лимит"
                            :options="limitOptions"
                            selectLabel=""
                            deselectLabel=""
                            selectedLabel=""
                        />
                    </div>

                    <div class="credit-cards__filter">
                        <label class="typo__label">Процентная ставка</label>
                        <multiselect
                            v-model="selectPercent"
                            placeholder="Процент"
                            :options="percentOptions"
                            selectLabel=""
                            deselectLabel=""
                            selectedLabel=""
                        />
                    </div>
                </section>
            </div>
        </div>

        <section class="page-container__content-wrapper">
            <button
                @click="resetFilter"
            >
                сбросить фильтры
            </button>
        </section>

        <section class="page-container__content-wrapper">
            <h2> Все кредитные карты </h2>
            <credit-card-list
                :cards="filteredCards"
            />
        </section>
{{ test }}
    </div>
</template>

<script>
import { cards, tags } from '~/data/creditCards';
import Multiselect from 'vue-multiselect';
import CreditCardList from '~/components/credit-card/CreditCardList';
import TagList from '~/components/TagList';

export default {
    components: {
        Multiselect,
        CreditCardList,
        TagList,
    },

    data : () => ( {
        bankOptions : [ 'sberbank', 'tinkoff', 'vtb' ],
        periodOptions : [ '0-100', '100-200', 'more-than-200-days' ],
        limitOptions : [ '100000', '300000', '500000', '700000', '1000000' ],
        percentOptions : [ '3', '5', '7' ],
        cards          : cards,
        selectCards    : null,
        tags           : tags,
        test           : '1',
        selectBank     : null,
        selectPeriod   : null,
        selectLimit    : null,
        selectPercent  : null,
    } ),

    // watch : {
    //     bank( newVal ) {
    //         this.bankFilter( newVal.type );
    //     },
    //     period( newVal ) {
    //         this.periodFilter( newVal.type );
    //     },
    // },

    computed : {
        filteredCards() {
            return cards
                .filter(item => {
                return this.selectBank == null || item.bank === this.selectBank;
                } )

                .filter(item => {
                return (this.selectPeriod == null) || ((this.selectPeriod === '0-100')
                    ? (+item.period < 100) : (this.selectPeriod === '100-200')
                        ? (+item.period > 100 && +item.period < 200) : (+item.period > 200));
                } )

                .filter(item => {
                    return this.selectLimit == null || item.maxLimit <= this.selectLimit;
                } )

                .filter(item => {
                    return this.selectPercent == null || item.minInterestRate <= this.selectPercent;
                } )
        },
    },

    methods : {
        resetFilter() {
            this.selectBank    = null,
            this.selectPeriod  = null,
            this.selectLimit   = null,
            this.selectPercent = null
        },
        bankFilter( bank ) {
            this.cards = cards.filter(item => item.bank === bank);
        },
        periodFilter( period ) {
            this.cards = cards.filter(item => (period === '0-100')
                ? (+item.period < 100) : (period === '100-200')
                ? (+item.period > 100 && +item.period < 200) : (+item.period > 200));
        },
        limitFilter( bank ) {
            this.cards = cards.filter(item => item.limit < this.selectLimit);
        },
    }

}
</script>

<style lang="scss" scoped>
.credit-cards {
    &__filter-background {
        background: url('~assets/images/credit/filter-background.jpg') no-repeat;
        background-size: cover;
        width: 100%;
        height: 395px;
    }
    &__filters {
        display: flex;
    }

    &__filter {
        width: 215px;
    }
}
</style>
