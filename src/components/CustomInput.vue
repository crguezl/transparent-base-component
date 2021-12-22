<template>
  <div>
    <input
      v-bind:value="searchText"
      v-on:input="searchText = $event.target.value"
    >
    <h1>{{searchText}}</h1>
  </div>
</template>

<script>
export default {
  name: 'custom-input',
  props: ['value']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
