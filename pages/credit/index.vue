<template>
    <div>
        <section class="filters">
            <div class="filters__wrapper page-container__content-wrapper">
                <h1>Кредитные карты</h1>
                <ul class="tag-list">
                    <li class="tag-list__item">
                        <n-link
                            class="tag-list__item-link"
                            to="/"
                        >
                            Тэг-1
                        </n-link>
                    </li>
                    <li class="tag-list__item">
                        <n-link
                            class="tag-list__item-link"
                            to="/"
                        >
                            Тэг-2
                        </n-link>
                    </li>
                    <li class="tag-list__item">
                        <n-link
                            class="tag-list__item-link"
                            to="/"
                        >
                            Тэг-3
                        </n-link>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
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
