<script setup lang="ts">
import { computed } from 'vue';
import TheTitle from './TheTitle.vue'
import { incrementCounter, decrementCounter, counter } from './composables/CounterComposable'

const MULTIPLIED_VALUE = 2;
const counterMultiplier = computed(() => {return counter.value * MULTIPLIED_VALUE});
</script>

<template>
  <div>
    <TheTitle><slot name="propTitle"></slot></TheTitle>
    <h2>{{ counterMultiplier }}</h2>
    <span :class="counter < 5 ? 'red' : 'green'">{{ counter }}</span>
    <button @click="incrementCounter" v-if="counter < 10">Increment</button>
    <button @click="decrementCounter" v-if="counter > 0">Decrement</button>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-size: 1.1em;
}
button {
  margin: 1em;
}
.green{
  color: green
}
.red{
  color: red
}
</style>
