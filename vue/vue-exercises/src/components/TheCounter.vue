<script setup lang="ts">
import TheTitle from './TheTitle.vue'
import { incrementCounter, decrementCounter, counter } from './composables/CounterComposable'
</script>

<template>
  <div>
    <h2>
      <TheTitle><slot name="propTitle"></slot></TheTitle>
    </h2>
    <span>{{ counter }}</span>
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
</style>
