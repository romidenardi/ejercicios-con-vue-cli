<template>
    <div class="description-block">
        <p class="description">{{description}}</p>
    </div>
</template>

<script>
export default {
    name: 'AppDescription',
    props: {
        description: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
    .description-block {
        margin: 10px 5px 10px 5px;
    }
    .description {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 16px;
    }
</style>
