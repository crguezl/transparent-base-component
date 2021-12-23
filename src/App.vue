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

    <vue-markdown>The time of **NOW** is :</vue-markdown>
    <vue-markdown :source="source"></vue-markdown>
    <vue-markdown :anchor-attributes="anchorAttrs">[A link to a website](https://google.com)</vue-markdown>


    <vue-markdown>**Inline Math**: $\sqrt{3x-1}+(1+x)^2$</vue-markdown>

    <vue-markdown>**Block Math**</vue-markdown>
    <vue-markdown>$$\begin{array}{c}

      \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
      = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

      \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

      \nabla \cdot \vec{\mathbf{B}} & = 0

      \end{array}$$
    </vue-markdown>

    <vue-markdown lang-prefix="javascript">
```javascript

    if (false) z = 4; else z = 8;
    let f = () => 4;
```
    </vue-markdown>

  </div>
</template>

<script>
import BaseInput from "./components/BaseInput";
// import VueMarkdown from '../../../src/VueMarkdown' // development
import VueMarkdown from 'vue-markdown' // production


export default {
  name: "App",
  components: {
    BaseInput,
    VueMarkdown
  },
  data() {
    return {
      username: "",
      password: "",
      checkbox: "",
      radio: "",
      /////////
      searchText: "Input your text here",

      /// markdown
      source: new Date().toLocaleTimeString(),
      anchorAttrs: {
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      },
      html:true

    };
  },
  mounted () {
    setInterval(() => {
      this.source = new Date().toLocaleTimeString();
    }, 1000);
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
