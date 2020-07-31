<template>
    <li class="credit-card">
        <div class="credit-card__bank">
            <img
                class="credit-card__bank-img"
                width="31"
                height="31"
                src="~/assets/icons/bank/test-bank.jpg"
                alt="card.bank"
            />
            <span class="credit-card__bank-title"> {{ bank }} </span>
        </div>

        <h4 class="credit-card__title"> {{ card.name }} </h4>

        <img
            class="credit-card__card-img"
            width="265"
            height="167"
            src="~/assets/images/cards/test-card.jpg"
            alt="карта"
        >
        <article>
            рейтинг
        </article>
        <ul class="credit-card__params">
            <li class="credit-card__params-item">
                <span>Кредитный лимит</span>
                <span> {{ card.maxLimit }} ₽</span>
            </li>
            <li class="credit-card__params-item">
                <span>Льготный период</span>
                <span> {{ card.period }} дней</span>
            </li>
            <li class="credit-card__params-item">
                <span>Процентная ставка</span>
                <span> от {{ card.minInterestRate }} % </span>
            </li>
            <li class="credit-card__params-item">
                <span>Стоимость открытия</span>
                <span> {{ openingCost }}  </span>
            </li>
            <li class="credit-card__params-item">
                <span>Обслуживание</span>
                <span> {{ maintenanceCost }} </span>
            </li>
            <li class="credit-card__params-item">
                <span>Процент одобрения</span>
                <span> {{ card.percentageOfApproval }} % </span>
            </li>
        </ul>

        <n-nink
            to="/"
            class="credit-card__button"
        >
            Подробнее
        </n-nink>
    </li>
</template>

<script>
    export default {
        props : {
            card: {
                type: Object,
                default: () => ( {} ),
            },
        },

        computed : {
            openingCost() {
                return +this.card.openingCost ? this.card.openingCost : 'бесплатно' ;
            },

            maintenanceCost() {
                return +this.card.maintenanceCost ? this.card.maintenanceCost : 'бесплатно';
            },

            bank() {
                if ( this.card.bank === 'sberbank' ) {
                    return 'Сбербанк';
                }
                else if ( this.card.bank === 'tinkoff' ) {
                    return 'Тинькофф банк';
                }
                else if ( this.card.bank === 'vtb' ) {
                    return 'ВТБ банк';
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
.credit-card {
    text-align: center;
    width: 370px;
    height: 680px;
    padding: 12px;
    /*border: 1px solid #e8e8e8;*/
    border: 1px solid rgba(223,225,229,0);
    border-radius: 18px;
    background-color: #ffffff;
    transition: 0.15s;
    cursor: pointer;

    &__bank {
        display: flex;
        align-items: center;
    }

    &__bank-img {
        margin-right: 8px;
    }

    &__title {
        display: block;
        padding: 0 20px;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
    }

    &__card-img {
        text-align: center;
    }

    &__params {
        display: flex;
        flex-direction: column;
    }

    &__params-item {
        display: flex;
        justify-content: space-between;
    }

    &__button {
        display: inline-block;
        padding: 12px 24px;
        color: #ffffff;
        background: #33495D;
        box-shadow: 0 14px 30px rgba(69, 158, 255, 0.2);
        border-radius: 25px;
    }

    &:hover {
        /*box-shadow: 0 8px 4px rgba(0, 0, 0, 0.25);*/
        box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    }
}
</style>
