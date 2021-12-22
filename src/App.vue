<template>
  <div id="app">
    <BaseInput label="Username" type="text" placeholder="Username" v-model="username"/>
    <BaseInput label="Password" type="password" placeholder="********" v-model="password"/>
    <BaseInput label="Checkbox" type="checkbox" pvalue="X" v-model="checkbox"/>
    <BaseInput label="radio" type="radio" pvalue="HTML" v-model="radio" />
    <br/>
    {{ username }} - {{ password }} - {{ checkbox }} - {{ radio }}
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
      password: "",
      checkbox: "",
      radio: ""
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
