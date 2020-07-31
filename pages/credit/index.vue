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
                            :to="`${tag.type}`"
                        >
                            {{ tag.name }}
                        </n-link>
                    </li>
                </ul>


                <div>
                    <label class="typo__label">Single select / dropdown</label>
                    <multiselect
                        v-model="bank"
                        track-by="name"
                        label="name"
                        placeholder="Банк"
                        :options="bankOptions"
                        :searchable="false"
                        :allow-empty="false"
                    >
                        <template
                            slot="singleLabel"
                            slot-scope="{ option }"
                        >
                            <strong>{{ option.name }}</strong>
                        </template>
                    </multiselect>
                    <pre class="language-json"><code>{{ bank }}</code></pre>
                </div>

                <div>
                    <label class="typo__label">Single select / dropdown</label>
                    <multiselect
                        v-model="period"
                        track-by="name"
                        label="name"
                        placeholder="Банк"
                        :options="periodOptions"
                        :searchable="false"
                        :allow-empty="false"
                    >
                        <template
                            slot="singleLabel"
                            slot-scope="{ option }"
                        >
                            <strong>{{ option.name }}</strong>
                        </template>
                    </multiselect>
                    <pre class="language-json"><code>{{ period }}</code></pre>
                </div>


            </div>
        </section>


        <section class="page-container__content-wrapper">
            <button
                @click="filter1"
            >
                11111
            </button>

            <button
                @click="filter2"
            >
                22222
            </button>

        </section>

        <section class="card-list">
            <ul>
                <li
                    v-for="card in cards"
                    :key="card.id"
                >
                    {{ card.id }}
                </li>
            </ul>
            <p> {{ cards }} </p>
        </section>
{{ test }}
    </div>
</template>

<script>
import { cards, tags } from '~/data/creditCards';
import Multiselect from 'vue-multiselect'

export default {
    components: {
        Multiselect
    },

    data : () => ( {
        bank: null,
        bankOptions: [
            { name: 'Сбербанк', type: 'sber' },
            { name: 'Тинькофф', type: 'tinkoff' },
            { name: 'ВТБ', type: 'vtb' },
        ],
        period: null,
        periodOptions: [
            { name: 'до 100 дней', type: 'up-to-100-days' },
            { name: 'до 200 дней', type: 'up-to-200-day' },
            { name: 'более 200 дней', type: 'more-than-100-days' },
        ],
        cards : cards,
        tags  : tags,
        test  : '1',
    } ),

    watch : {
        value() {
            console.log('newVal');
        },
    },

    methods : {
        filter1() {
            this.cards = 0;
        },
        filter2() {
            this.cards = cards;
        }
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
