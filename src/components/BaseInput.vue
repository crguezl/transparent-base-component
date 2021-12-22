<template>
  <div class="hello">
    <label>
      {{ label }}
      <input
        :type="type"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
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
    placeholder: String
  }
};
</script>

