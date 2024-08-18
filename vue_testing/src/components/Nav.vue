<template>
    <nav>
        <a href="">Home</a>
        <a href="" v-if="isLogin" id="loged">About</a>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
        return {
            isLogin: false
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  