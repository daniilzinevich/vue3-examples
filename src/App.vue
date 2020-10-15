<template>
  <div>
    <input type="checkbox" v-model="toggleA">
    Toggle A
  </div>
  <div>
    <input type="checkbox" v-model="toggleB">
    Toggle B
  </div>
  <input :value="bothToggled">
</template>

<script>
export default {
  data() {
    return {
      toggleA: false,
      toggleB: true
    };
  },
  computed: {
    bothToggled() {
      return this.toggleA && this.toggleB;
    }
  }
};
</script>
