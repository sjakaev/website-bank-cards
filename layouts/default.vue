<template>
    <div class="main-container">
        <the-header />
        <nuxt
            class="main-container__content"
        />
        <the-footer />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
    components: {
        TheHeader,
    }
}
</script>

<style lang="scss" scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        width: 100%;
        min-width: 320px;
        height: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        background-color: #eff0f3;
    }
</style>
