<template>
      <div class="container">
          <section class="main-slider page-container__content-wrapper">
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
                      <b class="main-slider__item-title">{{ slide.title }}</b>
                      <p class="main-slider__item-text">
                          {{ slide.text }}
                      </p>
                  </n-link>
              </app-slider>
          </section>

          <section class="page-container__content-wrapper">
              <n-link to="/credit">Кредитные карты</n-link>
              <n-link to="/debit">Дебетовые карты</n-link>
          </section>

          <section class="top-cards page-container__content-wrapper">
              <h2> Лучшие дебетовые карты </h2>
              <ul class="top-cards__list">
                  <li class="top-cards__item">
                      <n-link to="/" class="top-cards__item-link">

                      </n-link>
                  </li>
                  <li class="top-cards__item">
                      <n-link to="/" class="top-cards__item-link">

                      </n-link>
                  </li>
                  <li class="top-cards__item">
                      <n-link to="/" class="top-cards__item-link">

                      </n-link>
                  </li>
              </ul>
          </section>

          <section class="top-cards page-container__content-wrapper">
              <h2> Лучшие кредитные карты </h2>
              <ul class="top-cards__list">
                  <li class="top-cards__item">
                      <n-link to="/" class="top-cards__item-link">

                      </n-link>
                  </li>
                  <li class="top-cards__item">
                      <n-link to="/" class="top-cards__item-link">

                      </n-link>
                  </li>
                  <li class="top-cards__item">
                      <n-link to="/" class="top-cards__item-link">

                      </n-link>
                  </li>
              </ul>
          </section>
    </div>
</template>

<script>
import AppSlider from '~/components/slider/AppSlider';

export default {
    components : {
        AppSlider,
    },
    data() {
        return {
            mainSliderSlides: [
                {
                    href  : '#',
                    title : `Серверы и инфраструктура
            для бизнеса и любых IT-проектов`,
                    text : `Более 3000 готовых конфигураций серверов в наличии. Размещение вашего
            сервера и аренда стоек и ещё более 200 услуг`,
                    src : 'url(~assets/images/main-slider/slide-1.jpg)',
                },
                {
                    href  : '#',
                    title : `Решения для профи
            и для новичков`,
                    text : `Подбор по параметрам, назначению, рейтингу, цене
            скорости передачи оборудования и множеству других критериев`,
                    src : 'url(~assets/images/main-slider/slide-1.jpg)',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.main-slider__item {
    background-color: #00C084;
}
    .top-cards {

        &__list {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__item {
        }

        &__item-link {
            display: block;
            width: 370px;
            height: 400px;
            background-color: red;
        }
    }
</style>
