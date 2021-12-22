<template>
  <div id="app">
    <BaseInput label="Username" type="text" placeholder="Username" v-model="username"/>
    <BaseInput label="Password" type="password" placeholder="********" v-model="password"/>
    <BaseInput label="Checkbox" type="checkbox" v-model="checkbox"/>
    <BaseInput label="radio" type="radio"  v-model="radio" />
    <br/>
    {{ username }} - {{ password }} - {{ checkbox }} - {{ radio }}
    <br/>
    <hr/>
    <br/>
    <input
      v-bind:value="searchText"
      v-on:input="searchText = $event.target.value"
    >
    <h1>{{searchText}}</h1>
  </div>
</template>

<script>
import BaseInput from "./components/BaseInput";

export default {
  name: "App",
  components: {
    BaseInput,
  },
  data() {
    return {
      username: "",
      password: "",
      checkbox: "",
      radio: "",
      /////////
      searchText: "Input your text here"
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
