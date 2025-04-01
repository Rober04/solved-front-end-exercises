<script setup lang="ts">
import { inject } from 'vue';

const emit = defineEmits(["componentEvent"]);

const messageParent = inject("messageParent");
function componentEvent() {
  emit("componentEvent", "Hello from Child Component");
}
</script>

<template>
  <div class="parent__child child">
    <h3 class="child__title">Child Component</h3>
    <p class="child__message--parent">{{ messageParent }}</p>
    <button class="child__button" @click="componentEvent">Send Event</button>
  </div>
</template>

<style lang="scss" scoped>
  .parent__child{
    border: 0.1em solid;
    margin: 1em;
    padding: 1em;
  }
</style>
