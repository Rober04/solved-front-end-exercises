<script setup lang="ts">
import { provide, ref } from 'vue';
import ChildComponent from './ChildComponent.vue';
const messageChild = ref("")
const messageParent = ref("Hello from the parent component")

provide("messageParent", messageParent);
</script>

<template>
  <div class="parent">
    <h1>Parent Component</h1>
    <p>{{ messageChild }}</p>
    <ChildComponent class="parent__child" @componentEvent="(text : string)=>{messageChild = text}"></ChildComponent>
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
