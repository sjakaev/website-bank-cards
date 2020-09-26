<template>
    <ul class="tag-list">
        <li
            v-for="(tag, index) in tags"
            :key="tag.type"
            class="tag-list__item"
        >
            <n-link
                class="tag-list__item-link"
                :to="`/credit-cards/${tag.slug}`"
            >
                {{ tag.name }}
            </n-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array,
            default: () => [],
        },
    }
}
</script>

<style lang="scss" scoped>

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
