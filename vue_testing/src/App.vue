<template>
  <div>

    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <NavBar />
    <TodoApp /> -->
    
    <ModalData />
  </div>
</template>

<script>
// import TodoApp from './components/TodoApp.vue'
// import NavBar from './components/Nav.vue'
import ModalData from './components/ModalData.vue'
export default {
  name: 'App',
  components: {
    // TodoApp,
    // NavBar,
    ModalData
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
