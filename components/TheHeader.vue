<template>
    <header class="the-header">
        <nav class="the-header__navigation page-container__content-wrapper">
            <n-link to="/">
                <img src="/logo.svg" alt="logo">
            </n-link>

            <ul class="the-header__navigation-list">
                <li class="the-header__navigation-list">
                    <n-link
                        class="the-header__navigation-item"
                        to="/credit"
                    >
                        Кредитные карты
                    </n-link>
                </li>
                <li>
                    <n-link
                        class="the-header__navigation-item"
                        to="/debit"
                    >
                        Дебетовые карты
                    </n-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .the-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 36px;
        background-color: #fffffe;
        -webkit-box-shadow: 0px 4px 15px -2px rgba(0,0,0,0.34);
        -moz-box-shadow: 0px 4px 15px -2px rgba(0,0,0,0.34);
        box-shadow: 0 4px 15px -2px rgba(0,0,0,0.34);
        z-index: 10;

        &__navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__navigation-list {
            display: flex;
            justify-content: space-between;
            background-color: greenyellow;
        }
        &__navigation-item {
            background-color: green;
        }
    }
</style>
