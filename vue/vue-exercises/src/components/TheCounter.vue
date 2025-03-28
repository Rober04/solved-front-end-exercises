<script setup lang="ts">
import TheTitle from './TheTitle.vue'
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
function decrement() {
  count.value--
}
</script>

<template>
  <div>
    <h2>
      <TheTitle><slot name="propTitle"></slot></TheTitle>
    </h2>
    <span>{{ count }}</span>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
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
