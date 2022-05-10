<template>
    <div class="tittle-block">
        <h2 class="tittle">{{tittle}}</h2>
    </div>
</template>

<script>
export default {
    name: 'AppTittle',
    props: {
        tittle: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
    .tittle-block {
        margin: 10px 5px 10px 5px;
    }
    .tittle {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 24px;
        font-weight: bold;
    }
</style>
