<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
    <AppTittle :tittle="tittle"/>
    <AppDescription :description="description"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppTittle from './components/AppTittle.vue';
import AppDescription from './components/AppDescription.vue';

export default {
  name: 'App',
  components: {
    HelloWorld, AppTittle, AppDescription,
  },
  data() {
    return {
      msg:"Esta es mi primera app con Vue CLI",
      tittle:"Bienvenidos",
      description:"Estamos trabajando con componentes."
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
