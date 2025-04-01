<script setup lang="ts">
import { provide, ref } from 'vue';
import ChildComponent from './ChildComponent.vue';
const messageChild = ref("")
const messageParent = ref("Hello from the parent component")

provide("messageParent", messageParent);
</script>

<template>
  <div class="home__parent parent">
    <h2 class="parent__title">Parent Component</h2>
    <p class="parent__message--child">{{ messageChild }}</p>
    <ChildComponent @componentEvent="(text : string)=>{messageChild = text}"></ChildComponent>
  </div>
</template>

<style lang="scss" scoped>
  .home__parent{
    border: 0.1em solid;
    padding: 1em;
  }
</style>
