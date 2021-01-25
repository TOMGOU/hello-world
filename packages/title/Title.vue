<template>
  <div class="title" @click="onClick">{{ label }}</div>
</template>

<script>
import './title.css';

export default {
  name: 'my-title',

  props: {
    label: {
      type: String,
      required: true,
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>