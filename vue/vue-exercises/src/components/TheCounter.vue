<script setup lang="ts">
import TheTitle from './TheTitle.vue'
import { ref } from 'vue'

const counter = ref(0)

function increment() {
  counter.value++
}
function decrement() {
  counter.value--
}
</script>

<template>
  <div>
    <h2>
      <TheTitle><slot name="propTitle"></slot></TheTitle>
    </h2>
    <span>{{ counter }}</span>
    <button @click="increment" v-if="counter < 10">Increment</button>
    <button @click="decrement" v-if="counter > 0">Decrement</button>
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
