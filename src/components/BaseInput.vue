<template>
  <div>
    <label>
      {{ label }}
      <input
        :type="type"
        :placeholder="placeholder"
        @input="replicate($event)"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: String,
    type: String,
    placeholder: { type: String, default: '' }
  },
  methods: {
    replicate(event) {
      console.log(this.value);
      console.log(this.pvalue);

      console.log(event.target.value);

      this.$emit('input', event.target.value)
    }
  }
};
</script>
