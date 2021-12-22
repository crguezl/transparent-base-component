<template>
  <div id="app">
    <BaseInput label="Username" type="text" placeholder="Username" v-model="username"/>
    <BaseInput label="Password" type="password" placeholder="********" v-model="password"/>

    <hr>
    {{ username }} - {{ password }}
  </div>
</template>

<script>
import BaseInput from "./components/BaseInput";

export default {
  name: "App",
  components: {
    BaseInput
  },
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
