<template>
    <div>
        <the-category
            :slug="$route.params.id"
        />
   </div>
</template>

<script>
import TheCategory from '@/components/TheCategory'
export default {
    components: {
        TheCategory
    },
    validate({params}) {
        return Boolean(params.id);
    },
    async fetch() {
        const slug = this.$route.params.id;
    },

}
</script>
