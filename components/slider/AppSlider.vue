<template>
    <div class="app-slider">
        <client-only>
            <vue-tiny-slider
                v-bind="slederOptions()"
            >
                <slot
                    v-if="isSlot"
                >
                </slot>

                <div
                    :is="wrapperTag(slide)"
                    v-for="(slide,i) in slides"
                    v-else
                    :key="`${slide.title}${i}`"
                    :href="slide.href"
                    class="app-slider__item"
                >
                    <img
                        :data-src="slide.src"
                        :src="getSrc(slide.src)"
                        :style="customImageStyle()"
                        class="app-slider__image"
                        :class="{ 'tns-lazy-img' : isLazyLoad }"
                        :alt="slide.alt"
                        :width="width"
                        :height="height"
                    />
                </div>
            </vue-tiny-slider>

            <app-button
                :class="`app-slider__prev_${name}`"
                class="app-slider__prev-button"
            />

            <app-button
                :class="`app-slider__next_${name}`"
                class="app-slider__next-button"
            />

            <ul
                :class="`slider-nav-list-${name}`"
                class="slider-nav-list"
            >
                <li
                    v-for="(slide,i) in slides"
                    :key="`${slide.title}${i}`"
                    class="slider-nav-list__item"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            class="slider-nav-list__circle"
                            cx="50%"
                            cy="50%"
                            fill="white"
                        />
                    </svg>
                </li>
            </ul>
        </client-only>
    </div>
</template>

<script>
import AppButton from '~/components/AppButton';

const DEFAULT_WIDTH = '100%';
const DEFAULT_HEIGHT = '100%';
const DEFAULT_SPEED = 300;
const DEFAULT_AUTOPLAY_TIMEOUT = 5000;
const DEFAULT_BORDER_RADIUS = 0;

export default {
    components : {
        AppButton,
    },

    props : {
        slides : {
            type    : Array,
            default : () => [],
        },

        name : {
            type    : String,
            default : 'default',
        },

        sliderOptions : {
            type    : Object,
            default : () => ( {} ),
        },

        itemStyle : {
            type    : String,
            default : '',
        },
        isLazyLoad : {
            type    : Boolean,
            default : false,
        },

        width : {
            type    : [ Number, String ],
            default : DEFAULT_WIDTH,
        },

        height : {
            type    : [ Number, String ],
            default : DEFAULT_HEIGHT,
        },

        borderRadius : {
            type    : Number,
            default : DEFAULT_BORDER_RADIUS,
        },

        imageStyle : {
            type    : String,
            default : '',
        },
        isSlot : {
            type    : Boolean,
            default : false,
        },
    },

    data() {
        return {
            defaultSliderOptions : {
                nav                  : true,
                navAsThumbnails      : true,
                mouseDrag            : false,
                loop                 : true,
                items                : 1,
                prevButton           : `.app-slider__prev_${this.name}`,
                nextButton           : `.app-slider__next_${this.name}`,
                navContainer         : `.slider-nav-list-${this.name}`,
                speed                : DEFAULT_SPEED,
                autoplay             : true,
                autoplayHoverPause   : true,
                autoplayTimeout      : DEFAULT_AUTOPLAY_TIMEOUT,
                autoplayButtonOutput : false,
            },
        };
    },

    methods : {
        slederOptions() {
            if ( this.isLazyLoad ) {
                this.defaultSliderOptions.lazyload = true;
            }

            return this.defaultSliderOptions;
        },

        customImageStyle() {

            if ( this.borderRadius ) {
                const imageBorderRadius = `border-radius: ${this.borderRadius}px;`;

                return `${this.imageStyle} ${imageBorderRadius}`;
            }

            return `${this.imageStyle}`;
        },

        getSrc( src ) {
            return this.isLazyLoad ? '' : src;
        },

        wrapperTag( slide ) {
            if ( slide.href ) {
                return 'a';
            }

            return 'div';
        },
    },
};
</script>

<style lang="scss">
@import 'tiny-slider/src/tiny-slider';

.app-slider {
    position: relative;
    height: auto;

    &__prev-button {
        left: 2%;
        transform: scale(-1, -1);
    }

    &__next-button {
        right: 2%;
    }

    &__prev-button,
    &__next-button {
        position: absolute;
        top: 50%;
        display: none;
        width: 48px;
        height: 48px;
        margin-top: -24px;
        background-color: transparent;
        background-image: url("~assets/icons/__slider/arrow.svg");
        opacity: 0.5;

        &:hover {
            opacity: 0.9;
        }

        @media (min-width: $sm) {
            display: block;
        }
    }

    &__item {
        position: relative;
        max-height: 480px;
        color: $white;
        font-size: 0 !important;
        text-decoration: none;
    }


    &__image {
        object-fit: cover;

        @media (max-width: $md) {
            border-radius: 0 !important;
        }
    }

}

.slider-nav-list {
    position: absolute;
    bottom: 4%;
    left: 50%;
    display: flex;
    justify-content: center;
    min-width: 180px;
    margin-left: -90px;
    padding-left: 0 !important;
    list-style: none;

    @media (min-width: $sm) {
        min-width: 280px;
        margin-left: -140px;
    }

    &__circle {
        opacity: 0.4;
        r: 4;

        @media (min-width: $sm) {
            r: 6;
        }
    }

    .tns-nav-active {
        .slider-nav-list__circle {
            opacity: 1;
        }
    }

    &__item {

        margin: 0 6px;

        @media (min-width: $sm) {
            margin: 0 10px;
        }

        &:hover {
            .slider-nav-list__circle {
                opacity: 1;
            }
        }
    }
}

</style>
