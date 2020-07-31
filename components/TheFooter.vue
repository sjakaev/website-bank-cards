<template>
    <footer class="the-footer">
        <div class="page-container__content-wrapper">
            <article class="the-footer__copyright">
                © 2020, <n-link class="the-footer__copyright-link" to="/">выгодная-карта.рф. </n-link>
                Копирование материалов
                допускается только при наличии активной ссылки. <br>
                Информация, представленная на сайте
                <n-link to="/">выгодная-карта.рф</n-link>, не является офертой
                и носит исключительно ознакомительный характер.
            </article>
        </div>
    </footer>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .the-footer {
        height: auto;
        min-height: 60px;
        padding: 32px 0;
        margin-top: 60px;
        background: linear-gradient(180deg, rgba(51, 73, 93, 0.87) 0%, #33495D 100%);

        &__copyright {
            color: #ffffff;
            font-size: 16px;
            line-height: 20px;
        }

        &__copyright-link {
            text-decoration: underline;

            &:hover {
                text-decoration: none;
            }
        }
    }
</style>
