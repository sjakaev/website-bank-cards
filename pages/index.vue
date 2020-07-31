<template>
      <div class="container">
          <section class="main-slider">
              <div class="main-slider__background"></div>
              <client-only>
                  <app-slider
                      name="top"
                      is-slot
                      :slides="mainSliderSlides"
                      :height="400"
                      class="main-slider__content"
                  >
                      <n-link
                          v-for="(slide,i) in mainSliderSlides"
                          :key="`${slide.title}${i}`"
                          class="main-slider__item"
                          to="/"
                      >
    <!--                      <b class="main-slider__item-title">{{ slide.title }}</b>-->
    <!--                      <p class="main-slider__item-text">-->
    <!--                          {{ slide.text }}-->
    <!--                      </p>-->
                      </n-link>
                  </app-slider>
              </client-only>
          </section>

          <section
              class="main-buttons page-container__content-wrapper"
          >
              <n-link
                  to="/credit"
                  class="main-buttons__left-button"
              >
                  Кредитные карты
              </n-link>
              <n-link
                  to="/debit"
                  class="main-buttons__right-button"
              >
                  Дебетовые карты
              </n-link>
          </section>

          <section class="top-cards page-container__content-wrapper">
              <h2> Лучшие кредитные карты </h2>
              <credit-card-list
                :cards="topCards"
              />
          </section>
    </div>
</template>

<script>
import AppSlider from '~/components/slider/AppSlider';
import CreditCardList from '~/components/credit-card/CreditCardList';
import { topCards } from '~/data/creditCards';

export default {
    components : {
        AppSlider,
        CreditCardList,
    },
    data() {
        return {
            mainSliderSlides: [
                {
                    href  : '#',
                    title : `Решения для профи
            и для новичков`,
                    text : `Подбор по параметрам, назначению, рейтингу, цене
            скорости передачи оборудования и множеству других критериев`,
                },
                {
                    href  : '#',
                    title : `Решения для профи
            и для новичков`,
                    text : `Подбор по параметрам, назначению, рейтингу, цене
            скорости передачи оборудования и множеству других критериев`,
                },
                {
                    href  : '#',
                    title : `Решения для профи
            и для новичков`,
                    text : `Подбор по параметрам, назначению, рейтингу, цене
            скорости передачи оборудования и множеству других критериев`,
                },
            ],

            topCards : topCards,
        }
    }
}
</script>

<style lang="scss" scoped>
.main-slider {
    position: relative;

    &__background {
        position: absolute;
        top: 60px;
        width: 100%;
        height: 340px;
        background: linear-gradient(180deg, rgba(67, 51, 93, 0.9) 0%, rgba(212, 72, 57, 0.9) 100%);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    }

    &__item {
        width: 100%;
        height: 450px;
        background: transparent url("~assets/images/main-slider/slide-1.png")
        center center no-repeat;

        &:nth-child(1) {
            background: transparent url("~assets/images/main-slider/slide-2.png")
            center center no-repeat;
        }
        &:nth-child(2) {
            background: transparent url("~assets/images/main-slider/slide-3.png")
            center center no-repeat;
        }
    }
}

    .main-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 36px;
        margin-bottom: 36px;
        font-size: 60px;
        line-height: 72px;
        letter-spacing: 0.05em;
        color: #ffffff;

        &__left-button {
            display: block;
            width: 575px;
            height: 190px;
            margin-right: 20px;
            background: linear-gradient(180deg, rgba(212, 72, 57, 0.9) 0%,
                rgba(193, 58, 44, 0.9) 51.04%, rgba(255, 25, 0, 0.9) 100%);
            opacity: 1;
            box-shadow: 0 2px 4px #D3A2A2;
            border-radius: 20px 0 0 20px;

            &:hover {
                opacity: .9;
            }
        }

        &__right-button {
            display: block;
            width: 575px;
            height: 190px;
            background: linear-gradient(180deg, rgba(51, 73, 93, 0.9) 0%,
                rgba(59, 86, 111, 0.9) 51.56%, rgba(61, 130, 193, 0.9) 100%);
            opacity: 1;
            box-shadow: 0px 2px 4px #D3A2A2;
            border-radius: 0px 20px 20px 0px;

            &:hover {
                opacity: .9;
            }
        }
    }

</style>
