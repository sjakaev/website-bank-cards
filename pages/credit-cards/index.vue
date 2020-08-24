<template>
    <div>
        <section class="filters">
            <div class="filters__wrapper page-container__content-wrapper">
                <h1>Кредитные карты</h1>
                <ul class="tag-list">
                    <li
                        v-for="(tag, index) in tags"
                        :key="tag.type"
                        class="tag-list__item"
                    >
                        <n-link
                            class="tag-list__item-link"
                            :to="`/credit-cards/${tag.slug}`"
                        >
                            {{ tag.name }}
                        </n-link>
                    </li>
                </ul>


                <div>
                    <label class="typo__label">Single select / dropdown</label>
                    <multiselect
                        v-model="selectBank"
                        placeholder="Банк"
                        :options="bankOptions"
                        :searchable="false"
                        :allow-empty="false"
                    />
                    <pre class="language-json"><code>{{ selectBank }}</code></pre>
                </div>

                <div>
                    <label class="typo__label">Single select / dropdown</label>
                    <multiselect
                        v-model="selectPeriod"
                        placeholder="Банк"
                        :options="periodOptions"
                        :searchable="false"
                        :allow-empty="false"
                    />
                    <pre class="language-json"><code>{{ selectPeriod }}</code></pre>
                </div>

                <div>
                    <label class="typo__label">Single select / dropdown</label>
                    <multiselect
                        v-model="selectLimit"
                        placeholder="Лимит"
                        :options="limitOptions"
                        :searchable="false"
                        :allow-empty="false"
                    />
                    <pre class="language-json"><code>{{ selectLimit }}</code></pre>
                </div>

                <div>
                    <label class="typo__label">Single select / dropdown</label>
                    <multiselect
                        v-model="selectPercent"
                        placeholder="Процент"
                        :options="percentOptions"
                        :searchable="false"
                        :allow-empty="false"
                    />
                </div>

            </div>
        </section>

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

export default {
    components: {
        Multiselect,
        CreditCardList,
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

.filters {
    background: url('~assets/images/credit/filter-background.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 395px;
}
    .tag-list {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__item-link {
            display: block;
            padding: 12px 18px;
            background-color: white;
            border: 1px solid #D44839;
            box-sizing: border-box;
            border-radius: 4px;
        }
    }
</style>
