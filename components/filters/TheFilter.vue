<template>
    <section class="the-filter">
        <div>
            <label class="typo__label">Single select / dropdown</label>
            <multiselect
                v-model="selectBank"
                placeholder="Банк"
                :options="bankOptions"
                :searchable="false"
                :allow-empty="false"
            />
        </div>

        <div>
            <label class="typo__label">Single bank</label>
            <multiselect
                v-model="selectPeriod"
                placeholder="Банк"
                :options="periodOptions"
                :searchable="false"
                :allow-empty="false"
            />
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

        {{ filteredCards }}

        <section class="page-container__content-wrapper">
            <button
                @click="resetFilter"
            >
                сбросить фильтры
            </button>
        </section>
    </section>
</template>

<script>
    import Multiselect from 'vue-multiselect';

    export default {
        components: {
            Multiselect,
        },

        model: {
            prop: 'filteredCards',
            event: 'changeFilteredCards'
        },

        props : {
            cards: {
                type    : Array,
                default : () => [],
            },
            filteredCards: {
                type    : Array,
                default : () => [],
            },
        },

        watch : {
            selectBank( newVal ) {
                $emit('changeFilteredCards', this.changeFilteredCards);
            },
        },

        data : () => ( {
            bankOptions : [ 'sberbank', 'tinkoff', 'vtb' ],
            periodOptions : [ '0-100', '100-200', 'more-than-200-days' ],
            limitOptions : [ '100000', '300000', '500000', '700000', '1000000' ],
            percentOptions : [ '3', '5', '7' ],
            selectBank     : null,
            selectPeriod   : null,
            selectLimit    : null,
            selectPercent  : null,
        } ),

        computed : {
            changeFilteredCards() {
                return this.cards
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
            // changedFilteredCards() {
            //     this.filteredCards = this.cards
            //         .filter(item => {
            //             return this.selectBank == null || item.bank === this.selectBank;
            //         } )
            //
            //         .filter(item => {
            //             return (this.selectPeriod == null) || ((this.selectPeriod === '0-100')
            //                 ? (+item.period < 100) : (this.selectPeriod === '100-200')
            //                     ? (+item.period > 100 && +item.period < 200) : (+item.period > 200));
            //         } )
            //
            //         .filter(item => {
            //             return this.selectLimit == null || item.maxLimit <= this.selectLimit;
            //         } )
            //
            //         .filter(item => {
            //             return this.selectPercent == null || item.minInterestRate <= this.selectPercent;
            //         } )
            // },
            resetFilter() {
                this.selectBank    = null,
                this.selectPeriod  = null,
                this.selectLimit   = null,
                this.selectPercent = null
            },

            testf() {
                this.$emit('closeSubmenu');
            },
        }

    }
</script>

<style lang="scss" scoped>
</style>
