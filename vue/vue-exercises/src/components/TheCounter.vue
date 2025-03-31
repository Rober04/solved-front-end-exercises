<script setup lang="ts">
import { storeToRefs } from 'pinia';
import TheTitle from './TheTitle.vue'
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore();
const { counter, counterMultiplier, message } = storeToRefs(counterStore);
const { incrementCounter, decrementCounter } = counterStore;

const MINIMUM_VALUE = 0;
const MAXIMUM_VALUE = 10;
</script>

<template>
  <div>
    <TheTitle><slot name="propTitle"></slot></TheTitle>
    <h2>{{ counterMultiplier }}</h2>
    <span :class="counter === MAXIMUM_VALUE ? 'red' : 'green'">{{ counter }}, {{ message }}</span>
    <button @click="incrementCounter" v-if="counter < MAXIMUM_VALUE">Increment</button>
    <button @click="decrementCounter" v-if="counter > MINIMUM_VALUE">Decrement</button>
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
