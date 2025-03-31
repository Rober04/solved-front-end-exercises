<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';
const message = ref("")
</script>

<template>
  <div class="parent">
    <h1>Parent Component</h1>
    <p>{{message}}</p>
    <ChildComponent class="parent__child" @componentEvent="(text : string)=>{message = text}"></ChildComponent>
  </div>
</template>

<style lang="scss" scoped>
  .parent{
    border: 0.1em solid;
    padding: 1em;

    &__child{
      border: 0.1em solid;
      margin: 1em;
      padding: 1em;
    }  
  }
</style>
