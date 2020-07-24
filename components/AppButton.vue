<template>
    <button
        class="app-button"
        :type="buttonType"
        :class="buttonClass"
        :disabled="disabled"
        @click.stop="$emit('click')"
    >
        <span
            v-if="text"
            class="app-button__text"
        >
            {{ text }}
        </span>
        <slot></slot>
    </button>
</template>

<script>
export default {
    props : {
        text : {
            type    : String,
            default : null,
        },

        disabled : {
            type    : Boolean,
            default : false,
        },

        stopPropagation : {
            type    : Boolean,
            default : true,
        },

        isWide : {
            type    : Boolean,
            default : false,
        },

        type : {
            type    : String,
            default : 'primary',
        },

        pad : {
            type    : String,
            default : 'md',
        },

        size : {
            type    : String,
            default : 'md',
        },

        isSubmit : {
            type    : Boolean,
            default : false,
        },
    },

    computed : {
        buttonClass() {
            let klass = `
                app-button_${this.type}
                app-button_size_${this.size}
                app-button_pad_${this.pad}
            `;

            klass += this.isWide ? ' app-button_wide' : '';

            return klass;
        },

        buttonType() {
            return this.isSubmit ? 'submit' : 'button';
        },
    },
};
</script>

<style lang="scss">

.app-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    line-height: 24px;
    border: none;
    border-radius: 6px;
    outline: none;
    cursor: pointer;

    &[disabled] {
        cursor: not-allowed;
        pointer-events: none;
    }

    &_size_xs {
        font-size: 14px;
    }

    &_size_sm {
        font-size: 16px;
    }

    &_size_x_sm {
        font-size: 18px;
    }

    &_size_md {
        font-size: 20px;
    }

    &_pad_none {
        padding: 0;
    }

    &_pad_sm {
        padding: 4px 16px;
    }

    &_pad_md {
        padding: 12px 24px;
    }

    &_pad_lg {
        padding: 14px 36px;
    }

    &_wide {
        padding-right: 36px;
        padding-left: 36px;

        &.app-button_pad_sm {
            padding-right: 26px;
            padding-left: 26px;
        }
    }

    &_link {
        padding: 0;
        color: #1D9EF9;
    }

    &_dark-link {
        padding: 0;
        text-decoration-line: underline;
        color: #667695;

        &:hover {
            text-decoration-line: none;
        }
    }

    &_primary {
        color: white;
        font-weight: bold;
        background-color: #00C084;
    }

    &_secondary {
        color: #364364;
        background-color: #DFE4EC;
    }

    &_dark-primary {
        color: white;
        background-color: #667695;
    }

    &_light {
        color: black;
        font-weight: bold;
        background-color: white;
        opacity: 0.9;

        &:hover {
            background-color: #FFEDB0;
        }

        &[disabled] {
            color: gray;
            background-color: white;
            opacity: 0.8;
        }
    }

    &_light-blue {
        color: #2E58FF;
        font-weight: bold;
        background-color: white;
        border: 1px solid #2E58FF;
        transition: 0.05s;

        &:hover {
            color: white;
            background-color: #2E58FF;
        }
    }

    &_light-gray {
        color: #94A0B6;
        background-color: white;
        border: 1px solid #94A0B6;
        transition: 0.05s;

        &:hover {
            color: white;
            background-color: #94A0B6;
        }
    }

    &_blue {
        color: white;
        font-weight: bold;
        background-color: #2E58FF;
    }

    &_none {
        padding: 0;
        color: inherit;
        font-size: inherit;
        line-height: inherit;
        background-color: inherit;
    }
}
</style>
