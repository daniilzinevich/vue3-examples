<template>
  <div>
    <input type="checkbox" v-model="toggles.toggleA">
    Toggle A
  </div>
  <div>
    <input type="checkbox" v-model="toggles.toggleB">
    Toggle B
  </div>
  <input :value="bothToggled">
</template>

<script setup>
import { reactive, computed } from '@vue/reactivity';

export const toggles = reactive({
  toggleA: false,
  toggleB: true
});

export const bothToggled = computed(() => toggles.toggleA && toggles.toggleB);

</script>
