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
  <div class="home__counter counter">
    <TheTitle><slot name="propTitle"></slot></TheTitle>
    <h2 class="counter__title">{{ counterMultiplier }}</h2>
    <span :class="'counter__' + (counter === MAXIMUM_VALUE ? 'red' : 'green')">{{ counter }}, {{ message }}</span>
    <button @click="incrementCounter" v-if="counter < MAXIMUM_VALUE" class="counter__button">Increment</button>
    <button @click="decrementCounter" v-if="counter > MINIMUM_VALUE" class="counter__button">Decrement</button>
  </div>
</template>

<style lang="scss" scoped>
.counter{
  &__title{
    color: rgb(21, 122, 89);
  }
  &__green{
    color: green;
  }
  &__red{
    color: red;
  }
  &__button{
    margin: 1em;
  }
}
</style>
