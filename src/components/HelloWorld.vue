<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2> ¡Hola, mundo! </h2>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<style scoped>
    div {
        margin: 10px 5px 10px 5px;
    }
    h1 {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 32px;
        font-weight: bold;
        color: #34495E;
    }
    h2 {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 30px;
        font-weight: bold;
        color: #41B883;
    }
</style>
