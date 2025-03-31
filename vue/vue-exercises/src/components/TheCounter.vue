<script setup lang="ts">
import { computed, watch } from 'vue';
import TheTitle from './TheTitle.vue'
import { incrementCounter, decrementCounter, counter } from './composables/CounterComposable'

const MULTIPLIED_VALUE = 2;
const counterMultiplier = computed(() => {return counter.value * MULTIPLIED_VALUE});

const MINIMUM_VALUE = 0;
const MAXIMUM_VALUE = 10;
let message = "";
watch(counter, (newCounter) => {
  switch (newCounter) {
    case MINIMUM_VALUE:
      message = "Estas en el valor minimo"
      break;
    case MAXIMUM_VALUE:
      message = "Estas en el valor maximo"
      break;

    default:
      message = "Estas en los parámetros adecuados"
      break;
  }
});
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
